import React from "react";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import "../Css/header.css";
import ChatIcon from "@material-ui/icons/Chat";
import InboxIcon from "@material-ui/icons/Inbox";
import HelpIcon from "@material-ui/icons/Help";
import { Link } from "@material-ui/core";
function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <div className="header__left__friends">
          <EmojiPeopleIcon className="header__left__friendsicon" />
          <h3>{"Friends"}</h3>
        </div>
        <div className="header__middle">
          <div className="header__middle__button">
            <h3>{"Online"}</h3>
          </div>

          <div className="header__middle__button">
            <h3>{"All"}</h3>
          </div>
          <div className="header__middle__button">
            <h3>{"Pending"}</h3>
          </div>
          <div className="header__middle__button">
            <h3>{"Blocked"}</h3>
          </div>
        </div>

        <div className="header__addfriend">
          <h3>Add Friend</h3>
        </div>
      </div>
      <div className="header__right">
        <div className="header__right__left">
          <span class="tooltiptext">New Group Dm</span>
          <ChatIcon className="header__right__chat" />
        </div>
        <div className="header__right__right">
          <div className="header__right__right__div">
            <span class="tooltiptext">Inbox</span>
            <InboxIcon className="header__right__icon" />
          </div>
          <div className="header__right__right__div">
            <span class="tooltiptext">Help</span>
            <HelpIcon className="header__right__icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
