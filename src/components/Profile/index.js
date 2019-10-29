import React, { Component } from "react";
import Header from '../Header';
import ProfileHeader from './ProfileHeader'
import "./Profile.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, } from 'react-bootstrap';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { ApolloProvider } from "react-apollo"
import ApolloClient from 'apollo-boost';
import Posts from '../Posts';
import PostData from "./ProfilePosts/PostData";
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

class Profile extends Component {
  render() {
    const nickname = this.props.nickname;
    const avatar = this.props.avatar;
    const image = this.props.image;
    const caption = this.props.caption;
    return (

      <div>
      <Header/>
      <div>
      <div className="Page">
      <Container>
        <ApolloProvider client={client}>
      <ProfileHeader />

        <Row>
        <Tabs className="Tabs-list">
          <TabList>
            <Tab>POSTS</Tab>
            <Tab>IGTV</Tab>
            <Tab>TAGGED</Tab>
          </TabList>

          <TabPanel>

            <Row className="Posts_pictures">

            <Col><PostData /></Col>

            </Row>
        
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
        </Row>
  </ApolloProvider>
      </Container>
      </div>
      </div>


      </div>
    )
  }
}
export default Profile
