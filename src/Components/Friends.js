import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "../Css/friend.css";
function Friends({ image, Icon, name }) {
  return (
    <div className="friend">
      <Avatar src={image} className="friend__image" />
      <h3>{name}</h3>

      {Icon && <Icon className="friend__icon" />}
    </div>
  );
}

export default Friends;
