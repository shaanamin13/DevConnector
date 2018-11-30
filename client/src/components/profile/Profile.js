import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ProfileHeader from "./ProfileHeader";
import ProfileCreds from "./ProfileCreds";
import ProfileGithub from "./ProfileGithub";
import ProfileAbout from "./ProfileAbout";
import Spinner from "../common/Spinner";
class Profile extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <div>
        <h1>TODO: Profile </h1>
      </div>
    );
  }
}

Profile.propTypes = {
  profile: PropTypes.object.isRequired
};
const mapStateToProps = state => {
  Profile = state.profile;
};
export default connect(mapStateToProps)(Profile);
