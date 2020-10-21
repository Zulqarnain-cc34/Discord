import React, { useState } from "react";
import "../Css/sidebar.css";
import AddIcon from "@material-ui/icons/Add";
import ExploreIcon from "@material-ui/icons/Explore";
import GetAppIcon from "@material-ui/icons/GetApp";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import SideBarChat from "./SideBarChat";
import { Avatar, Button, Icon } from "@material-ui/core";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import Friends from "./Friends";
import CloseIcon from "@material-ui/icons/Close";
import MicOffIcon from "@material-ui/icons/MicOff";
import SettingsIcon from "@material-ui/icons/Settings";
import HeadsetIcon from "@material-ui/icons/Headset";
function Sidebar() {
  const [clicked, setclicked] = useState(false);
  const handleSearch = () => {
    clicked ? setclicked(false) : setclicked(true);
  };
  return (
    <div className="sidebar">
      <div className="sidebar__left">
        <div className="sidebar__left__top">
          <img
            src="https://img.icons8.com/color/96/000000/discord-logo.png"
            alt=""
          />
          <img
            className="free__image"
            src="https://cdn.discordapp.com/icons/330856666931265539/a_6a850883f0816f5ec45f240c6760054f.png?size=128"
            alt=""
          />
          <div className="sidebar__left__icons">
            <span></span>
            <span class="tooltiptext">Add a server</span>
            <AddIcon className="material__icons" />
          </div>
          <div className="sidebar__left__icons">
            <span class="tooltiptext">Explore Public Servers</span>
            <ExploreIcon className="material__icons" />
          </div>
          <hr />
          <div className="sidebar__left__icons">
            <span class="tooltiptext">Download Apps</span>
            <GetAppIcon className="material__icons" />
          </div>
        </div>
      </div>
      <div className="sidebar__right">
        <div className="sidebar__top">
          <Button onClick={handleSearch}>
            <span>
              <p>Find or start a conversation</p>
            </span>
          </Button>
        </div>
        <div className="sidebar__middle">
          <SideBarChat Icon={EmojiPeopleIcon} title="Friends" />
          <SideBarChat Icon={WhatshotIcon} title="Nitro" />
          <SideBarChat Icon={AddIcon} title="Direct Messages" direct />
        </div>
        <div className="sidebar__bottom">
          <div className="sidebar__bottom__friends">
            <Friends
              image={
                "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80"
              }
              name={"Alpha__0234"}
              Icon={CloseIcon}
            />
          </div>

          <div className="sidebar___bottom__user">
            <Avatar
              className="sidebar___bottom__user__avatar"
              src={
                "https://discord.com/assets/dd4dbc0016779df1378e7812eabaa04d.png"
              }
            />
            <div className="sidebar___bottom__user__info">
              <h3>{"Powerranger"}</h3>
              <p>{"#2456"}</p>
            </div>

            <div className="sidebar___bottom__user__icon">
              <MicOffIcon />
            </div>
            <div className="sidebar___bottom__user__icon">
              <HeadsetIcon />
            </div>
            <div className="sidebar___bottom__user__icon">
              <SettingsIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
