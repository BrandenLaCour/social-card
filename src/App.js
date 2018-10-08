import React, { Component } from "react";
import SocialCard from "./components/socialCard";
import NewCard from "./components/newCard";
import "./App.css";

class App extends Component {
  state = {
    user: {
      name: "",
      job: "",
      bio: "",
      pic: "",
      backG: "",
      insta: "",
      display: false
    },
    errors: {}
  };

  handleChange = e => {
    const user = { ...this.state.user };
    const index = e.target.id;
    user[index] = e.target.value;
    this.setState({ user });
  };

  handleSubmit = () => {
    let newUser = { ...this.state.user };
    newUser.display = true;
    this.setState({ user: newUser });
  };

  handleInsta = () => {
    const insta = this.state.user.insta;
    window.location.assign(insta.trim());
  };

  validate = () => {
    const { bio, name, job, pic, backG, insta } = this.state.user;
    if (!name || !bio || !job || !pic || !backG || !insta) return true;
    else return false;
  };

  // Add Joi Here!!
  // grey out fields that are not filled out
  // grey out submit until all fields are filled
  render() {
    const { name, job, bio, pic, backG } = this.state.user;

    return (
      <React.Fragment>
        {!this.state.user.display && (
          <NewCard
            change={this.handleChange}
            submit={this.handleSubmit}
            errors={this.validate()}
          />
        )}

        {this.state.user.display && (
          <SocialCard
            name={name}
            onclick={""}
            job={job}
            bio={bio}
            instaG={this.handleInsta}
            // instagram={insta} change to a button
            prof={pic}
            backG={backG}
          />
        )}
      </React.Fragment>
    );
  }
}

export default App;
