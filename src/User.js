import React from "react";

const User = ({ user }) => (
    <div className="col-md-5 d-flex">
        <div className="col-2 pr-0">
            <img className="w-100" src={ user != null ? user.avatar_url : '#' } alt={ user != null ? user.name : ''}/>
        </div>
        <div className="col-md-6">
            <div className="name">{ user != null ? user.name : '' }</div>
            <a className="text-info" href={ user != null ? user.html_url : '#'} target="_blank">
                { user != null ? `@${user.login}` : '' }
            </a>
        </div>
    </div>
);

export default User;