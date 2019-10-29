import React, { Component } from "react";

import "../Profile.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, } from 'react-bootstrap';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import { Query } from "react-apollo";

import gql from "graphql-tag";


const ProfileHeader = () => {
     return (
       <Query
         query={gql`
           {
             post(user_id: "a", post_id: "a") {
               image
               caption
               user {
                 nickname
                 avatar
               }
             }
           }
         `}>

       {({ loading, error, data }) => {
               if (loading) return <p>Loading Post...</p>;
               if (error) return <p>Error loading Post:(</p>;
               let image = data.post.image;
               let caption = data.post.caption;
               let user = data.post.user;

               return (
               <Row className="row1">
                 <Col className="displayPicture">
                 <img src = {user.avatar}/>
                 </Col>


                 <Col xs={7} className="profileStats">
                 <span className="User-Name">{user.nickname}</span>
                 <Button className="Follow">Follow</Button>
                 <Button >Unfollow</Button>
                 <Row className="profileData">
                 <ul className="list">
                 <li><span><b>10</b> posts</span></li>
                 <li><span><b>10</b> followers</span></li>
                 <li><span><b>10</b> following</span></li>
                 </ul>
                 </Row>

                 <div>
                 <span><b>Hussain Bhinderwala</b></span>
                 <div>
                 Bio
                 </div>
                 </div>
                 </Col>
               </Row>

                     );
                   }}
                 </Query>
               );
             };






















export default ProfileHeader;
