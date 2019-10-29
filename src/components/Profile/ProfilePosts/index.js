import React, { Component } from "react";




class ProfilePosts extends Component {
  render() {
const image = this.props.image;
return(


            <img className="PostData" src={image}/>


)

  }
}
export default ProfilePosts;
