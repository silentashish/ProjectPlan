import React, { useState } from "react";
import { connect } from "react-redux";
import { createProject } from "../../store/actions/projectActions";
import { Redirect } from "react-router-dom";

const CreateProject = (props) => {
  const { createProject, auth } = props;
  const [state, setState] = useState({
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    setState({ ...state, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("state", state);
    createProject(state);
  };

  if (!auth.uid) return <Redirect to="/signin" />;

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Create New Project</h5>

        <div className="input-field">
          <label htmlFor="title">title</label>
          <input type="text" id="title" onChange={handleChange} />
        </div>

        <div className="input-field">
          <label htmlFor="content">Project Content</label>
          <textarea
            id="content"
            cols="30"
            rows="10"
            className="materialize-textarea"
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Create</button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
