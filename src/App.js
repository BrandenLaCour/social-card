import React, { Component } from "react";
import { users } from "./components/users";
import "./App.css";
import SocialCard from "./components/socialCard";

class App extends Component {
  state = {
    user: { name: "", job: "", bio: "", pic: "", backG: "", insta: "" }
  };

  init = () => {
    let user = { ...this.state.user };
    const pick = Math.floor(Math.random() * 3);
    user = users[pick];
    this.setState({ user });
  };

  handleClick = () => {
    this.init();
  };

  componentWillMount() {
    this.init();
  }

  render() {
    const { name, job, bio, pic, backG, insta } = this.state.user;

    return (
      <SocialCard
        onclick={this.handleClick}
        name={name}
        job={job}
        bio={bio}
        instagram={insta}
        // instagram={insta} change to a button
        prof={pic}
        backG={backG}
      />
    );
  }
}

export default App;
