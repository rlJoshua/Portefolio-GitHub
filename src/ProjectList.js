import React from "react";
import Project from "./Project";

const ProjectList = ({ repositories }) => (

    <div className="col-12 d-flex flex-wrap">
        
        {repositories.map((repository, i) => (
            <div key={i} className="p-4 mb-4 col-4">
                <Project
                    project={repository}
                />
            </div>
        ))}
    </div>
);

export default ProjectList