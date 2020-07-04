import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";

const ProjectDetail = (props) => {
  const { authorFirstName, authorLastName, content, title } = props.project
    ? props.project
    : {};

  const { auth } = props;

  if (!auth.uid) return <Redirect to="/signin" />;

  if (!props.project) return <div className="container center">Loading...</div>;

  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title={title}</span>
          <p style={{ maxWidth: "80%" }}>{content}</p>
        </div>
        <div className="card-action grey lignten-4 text">
          <div>
            postted by {authorFirstName} {authorLastName}
          </div>
          <div>2nd September 2020</div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project: project,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }])
)(ProjectDetail);
