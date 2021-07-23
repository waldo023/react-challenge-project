import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { logoutUser } from '../../redux/actions/authActions'
import "./nav.css";


const mapActionsToProps = dispatch => ({
  commenceLogout() {
    dispatch(logoutUser())
  }
})

const Nav = (props) => {

    return (
        <div className="nav-strip">

            <Link to={"/order"} className="nav-link">
                <div className="nav-link-style">
                    <label className="nav-label">Order Form</label>
                </div>
            </Link>
            <Link to={"/view-orders"} className="nav-link" id="middle-link">
                <div className="nav-link-style">
                    <label className="nav-label">View Orders</label>
                </div>
            </Link>
            <Link onClick={() => props.commenceLogout()} to={"/"} className="nav-link" >
                <div className="nav-link-style">
                    <label className="nav-label">Log Out</label>
                </div>
            </Link>
        </div>
    );
}

export default connect(null,mapActionsToProps)(Nav);
