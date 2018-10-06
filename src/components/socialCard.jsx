import React from "react";
import "../App.css";

const SocialCard = ({ name, backG, instagram, job, bio, prof, onclick }) => {
  const divStyle = {
    width: "30rem",
    display: "block",
    top: "30px"
  };

  const profile = {
    width: "120px",
    height: "120px",
    position: "absolute",
    right: "10px",
    bottom: "10px",
    float: "right"
  };

  const insta = {
    width: "30px",
    height: "30px",
    position: "absolute",
    right: "10px",
    top: "295px"
  };

  return (
    <div className="card mx-auto" style={divStyle} onClick={onclick}>
      <img className="card-img-top" src={backG} alt="" />

      <div className="card-body">
        <h4 className="card-title">{name} </h4>

        <div className="marg">
          <img src="https://bit.ly/2pCVwCP" style={insta} alt="" />
          <p className="card-text">{job}</p>
          <p id="bio">{bio}</p>
        </div>
        <img src={prof} className="rounded-circle" style={profile} alt="" />
      </div>
    </div>
  );
};

export default SocialCard;
