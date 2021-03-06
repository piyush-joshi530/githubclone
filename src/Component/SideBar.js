import React from "react";
import Avatar from "@mui/material/Avatar";
import "./SideBar.css";
import Button from "@mui/material/Button";
import GroupIcon from "@mui/icons-material/Group";

const SideBar = () => {
  return (
    <>
      <div className="bootom_border"></div>
      <div className="sidebar1 ">
        <Avatar
          id="avater"
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          sx={{ width: 225, height: 225 }}
        />
        <div className="name">
          <h2>Piyush Joshi</h2>
          <p>piyush-joshi530</p>
        </div>
        {/* <Button variant="outlined">EditProfile</Button> */}
        <Button variant="outlined">EditProfile</Button>
        <div className="follower">
          <GroupIcon />
          <p>Follower</p> <p>Following</p>
        </div>
      </div>
    </>
  );
};

export default SideBar;
