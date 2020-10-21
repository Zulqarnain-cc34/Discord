import { Link } from "@material-ui/core";
import React, { useState } from "react";
import "../Css/sidebarchat.css";
function SideBarChat({ Icon, title, direct }) {
  const [selected, setselected] = useState(false);
  //const handleSelect = () => {
  //  if (selected) {
  //    setselected(false);
  //  } else {
  //    setselected(true);
  //  }
  //};

  return (
    <Link to="/friends">
      <div className={direct ? "directclass" : "sidebarchat"}>
        {Icon && (
          <Icon
            className={
              selected
                ? "active__icon"
                : direct
                ? "directbaroption__icon"
                : "sidebaroption__icon"
            }
          />
        )}
        <h3>{title}</h3>
      </div>
    </Link>
  );
}

export default SideBarChat;
