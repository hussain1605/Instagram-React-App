import React from "react";
//import "./Posts.css";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import ProfilePosts from "../../ProfilePosts";

    const PostData = () => {
      return (
        <Query
          query={gql`
            {
              posts(user_id: "a"){

                image
                caption
              }
            }
          `}
        >

        {({loading, error, data}) => {
            if (loading) return <p>Loading Posts...</p>;
            if (error) return <p>Error Fetching Posts...</p>;
            let postdata = data.posts;

            return (
            <div className="PostData">
              {postdata.map(profileposts => <ProfilePosts image={profileposts.image}/>)}


            </div>


)
            ;
          }}
        </Query>
      );
    }
export default PostData;
