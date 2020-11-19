import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faStar, faCodeBranch } from "@fortawesome/free-solid-svg-icons";

const Project = ({ key, project }) => (

    <a className="repository col-md-12 d-block p-4" href={ project.html_url } target="_blank">
        <div className="title mb-5">{ project.name }</div>
        <div className="description px-3 mb-5">{ project.description }</div>
        <div className="info d-flex">
            <span className="mx-4">
                <FontAwesomeIcon className="mr-2" icon={faCode} />
                { project.language }
            </span>
            <span className="mx-4">
                <FontAwesomeIcon className="mr-2" icon={faStar} />
                { project.stargazers_count }
            </span>
            <span className="mx-4">
                <FontAwesomeIcon className="mr-2" icon={faCodeBranch} />
                { project.forks_count }
            </span>
        </div>
    </a>
);

export default Project