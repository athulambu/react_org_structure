import React from 'react';
import "./sidebar.css";
// import { User } from "../../../assets/user.js"
// import { Calender } from '../../../assets/calender.js';
// import { Menu } from '../../../assets/menu';
// import { Products } from '../../../assets/products';
// import { Star } from '../../../assets/star';
// import { Building } from '../../../assets/building';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import GridViewIcon from '@mui/icons-material/GridView';
import DomainVerificationIcon from '@mui/icons-material/DomainVerification';
import AssistantIcon from '@mui/icons-material/Assistant';
import GroupsIcon from '@mui/icons-material/Groups';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Action from '../Action/Action';


const Sidebar = (props) => {
  const {setActiveSideTab, activeSideTab} = props
  const [userAction, setUserAction] = React.useState(false);
  // const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setUserAction(true);
  };

  const handleClose = () => {
    setUserAction(false);
  };

  return (
    <div>
      <div className="left-corner">
        <div className="inn-circle"></div>
      </div>
      <nav className="sidebar-container">
        <ul className="sidebar-icons">
          <li className={activeSideTab === "home" ? "active" : "inactive"}>
            <div onClick={() => setActiveSideTab("home")}>
              <GridViewIcon className={activeSideTab === "home" ? "logo" : "inactive-logo"} />
            </div>
          </li>
          <li className={activeSideTab === "products" ? "active" : "inactive"}>
            <div onClick={() => setActiveSideTab("products")}>
              <DomainVerificationIcon className={activeSideTab === "products" ? "logo" : "inactive-logo"} />
            </div>
          </li>
          <li className={activeSideTab === "events" ? "active" : "inactive"}>
            <div onClick={() => setActiveSideTab("events")}>
              {/* <Calender /> */}
              <CalendarTodayIcon className={activeSideTab === "events" ? "logo" : "inactive-logo"} />
            </div>
          </li>
          <li className={activeSideTab === "news" ? "active" : "inactive"}>
            <div onClick={() => setActiveSideTab("news")}>
              <AssistantIcon className={activeSideTab === "news" ? "logo" : "inactive-logo"} />
            </div>
          </li>
          <li className={activeSideTab === "org-chart" ? "active" : "inactive"}>
            <div onClick={() => setActiveSideTab("org-chart")}>
              <GroupsIcon className={activeSideTab === "org-chart" ? "logo" : "inactive-logo"} />

            </div>
          </li>
          <li className={activeSideTab === "about" ? "active" : "inactive"}>
            <div onClick={() => setActiveSideTab("about")}>
              <CorporateFareIcon className={activeSideTab === "about" ? "logo" : "inactive-logo"} />
            </div>
          </li>
        </ul>
        <ul className="sidebar-acnt">
          <li>
            <NotificationsNoneIcon />
          </li>
          <li>
            <AccountCircleIcon onClick={()=>setUserAction(true)}/>
          </li>
        </ul>
        <Action
        setLogin={props?.setLogin}
        open={userAction}
        onClose={handleClose}
      />
      </nav>
    </div>
  )
}

export default Sidebar