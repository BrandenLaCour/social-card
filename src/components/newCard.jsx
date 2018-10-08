import React from "react";
import Input from "./utility/input";
// import Joi from "joi-browser";

const NewCard = ({ change, submit, errors }) => {
  //need to work on responsiveness of app

  return (
    <div>
      <img src="https://bit.ly/2E55XsO" id="home" alt="" />

      <div id="form" onChange={change}>
        <Input label={"Name"} desc={"Name"} index={"name"} />
        <Input label={"Career"} desc={" Job Title"} index={"job"} />
        <Input label={"Instagram"} desc={"Instagram Url"} index={"insta"} />
        <Input
          label={"Profile Picture"}
          desc={"Profile Picture Url"}
          index={"pic"}
        />
        <Input
          label={"Background Picture"}
          desc={"Background Picture Url"}
          index={"backG"}
        />
        <div className="form-group">
          <label>Bio</label>
          <textarea
            type="text"
            className="form-control"
            placeholder="Summary Of Interests"
            rows="3"
            id="bio"
          />
        </div>
        <button onClick={submit} disabled={errors} className="btn btn-primary">
          Submit
        </button>
      </div>
    </div>
  );
};

export default NewCard;
