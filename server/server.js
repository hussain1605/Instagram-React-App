    let express = require("express");
    let graphqlHTTP = require("express-graphql");
    let { buildSchema } = require("graphql");
    let cors = require("cors");


    let schema = buildSchema(`
      type User {
        id : String!
        nickname : String!
        avatar : String!
      }
      type Post {
          id: String!
          user: User!
          caption : String!
          image : String!
      }
      type Query{
        user(id: String) : User!
        post(user_id: String, post_id: String) : Post!
        posts(user_id: String) : [Post]
      }
    `);


 	let userslist = {
      a: {
        id: "a",
        nickname: "hussain1605",
        avatar: "https://instagram.fbom20-1.fna.fbcdn.net/vp/8bca75011d1c175dca52bc809e881413/5E192A26/t51.2885-19/s150x150/60332260_461432177937891_8627890265966772224_n.jpg?_nc_ht=instagram.fbom20-1.fna.fbcdn.net"
      },

    };

    let postslist = {
      a: {
        a: {
          id: "a",
          user: userslist["a"],
          caption: "Moving the community!",
          image: "https://instagram.fbom20-1.fna.fbcdn.net/vp/786ec3e96ef6f0341074a91cda8294c0/5E18E1EF/t51.2885-15/e35/c0.108.864.864a/s320x320/69770563_2484540601622402_386013657450907433_n.jpg?_nc_ht=instagram.fbom20-1.fna.fbcdn.net&_nc_cat=102"
        },
        b: {
          id: "b",
          user: userslist["a"],
          caption: "Angular Book :)",
          image:
            "https://instagram.fbom20-1.fna.fbcdn.net/vp/cb869445d924cf80ef5ff47a15e94590/5E21348C/t51.2885-15/sh0.08/e35/s640x640/67149464_2074717566155437_3500360013548982016_n.jpg?_nc_ht=instagram.fbom20-1.fna.fbcdn.net&_nc_cat=101"
        },
        c: {
          id: "c",
          user: userslist["a"],
          caption: "Me at Frontstack.io",
          image: "https://instagram.fbom20-1.fna.fbcdn.net/vp/aaf3eddc30b22e90a8e22769952952fe/5E34CCFE/t51.2885-15/e35/s320x320/60271863_298199571082986_6636266633860817002_n.jpg?_nc_ht=instagram.fbom20-1.fna.fbcdn.net&_nc_cat=106"
        },
        d: {
          id: "d",
          user: userslist["a"],
          caption: "Moving the community!",
          image: "https://instagram.fbom20-1.fna.fbcdn.net/vp/786ec3e96ef6f0341074a91cda8294c0/5E18E1EF/t51.2885-15/e35/c0.108.864.864a/s320x320/69770563_2484540601622402_386013657450907433_n.jpg?_nc_ht=instagram.fbom20-1.fna.fbcdn.net&_nc_cat=102"
        }
      }
    };

 	let root = {
      user: function({ id }) {
        return userslist[id];
      },
      post: function({ user_id , post_id }) {
        return postslist[user_id][post_id];
      },
      posts: function({ user_id }){
        return Object.values(postslist[user_id]);
      }
    };

    let app = express();
    app.use(cors());
    app.use(
      "/graphql",
      graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true
      })
    );
    // set application port
    app.listen(4000);
    console.log("Running a GraphQL API server at localhost:4000/graphql");
