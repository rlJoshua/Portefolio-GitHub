import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const Search = ({ handleSubmit, message, toggleFork, fork }) => (
    <form className="col-md-7" onSubmit={handleSubmit}>
        <div className="col-md-12 px-5 pt-5 pb-2 ">
            <div className="d-flex">
                <div className="form-group w-100 mr-3">
                    <input
                        type="text" className="form-control col-md-12" id="search"
                        placeholder='Pseudo GitHub' name="pseudo"
                    />
                </div>
                <div className="form-group">
                    <button className="btn btn-info" id="button" type="submit" children="Search" />
                </div>
            </div>
            <div className="col-md-12 mb-5 pb-5 d-flex">
                <button className="btn btn-info" id="fork" name="fork" type="button" onClick={toggleFork}>
                    { fork ? 'active' : 'disable'}
                </button>
                <label className="ml-3 m-1" htmlFor="fork">Show only owned repositories</label>
            </div>
            <div className="text-info col-md-12">
                { message ? <FontAwesomeIcon icon={faInfoCircle} className="mr-2"/> : ''}
                { message }
            </div>
        </div>
    </form>
);

export default Search