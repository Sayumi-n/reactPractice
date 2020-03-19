import React from "react";

const ProjectDetail = props => {
  const id = props.match.params.id;
  return (
    <div>
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            tempora similique, quos a mollitia quo eveniet modi deserunt ipsum
            quasi, soluta obcaecati quod. Minima deserunt quibusdam cumque
            inventore nam minus.
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by the Net Ninja</div>
          <div>23rd March, 2am</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
