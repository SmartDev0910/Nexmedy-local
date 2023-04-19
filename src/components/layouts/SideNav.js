import { Drawer } from "@mui/material";
import React from "react";
import Image from "next/image";
import { CommonIcons } from "../../assets/icons/_icons";
import Buttons from "../Button";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { NavLink } from "react-router-dom";

export default function SideNav({
  sideNavOpened,
  toggleSideNavDrawer,
  data,
  toggleDrawer,
}) {
  return (
    <Drawer
      className="sideNavDrawer"
      anchor={"left"}
      open={sideNavOpened}
      onClose={toggleSideNavDrawer(false)}
    >
      <div
        onClick={toggleSideNavDrawer(false)}
        className="iconWrap  flex justify-end"
      >
        <Image src={CommonIcons.Cross} alt="" />
      </div>
      <div className="contentWrap flex w-full sideMenuWrap">
        {data.map((i) => {
          return i.type === "link" ? (
            <NavLink
              key={i.name}
              to={i.url}
              onClick={toggleSideNavDrawer(false)}
            >
              <div className="sideMenu">
                <p className="t-3">{i.name}</p>
              </div>
            </NavLink>
          ) : (
            <div key={i.name} className="sideMenu">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <p className="t-3 parentMenu">{i.name}</p>
                </AccordionSummary>
                <AccordionDetails>
                  {i.subMenu.map((t) => (
                    <NavLink
                      key={t.name}
                      to={t.url}
                      onClick={toggleSideNavDrawer(false)}
                    >
                      <div className="sideMenu">
                        <p className="t-3">{t.name}</p>
                      </div>
                    </NavLink>
                  ))}
                </AccordionDetails>
              </Accordion>
            </div>
          );
        })}
        {/* onClick={toggleDrawer(true)} */}
        <div
          // onClick={toggleDrawer(true)}
          className="sideMenu"
        >
          <p className="t-3">Contact</p>
        </div>
        <div className="sideMenu">
          <Buttons value={{ val: "Student Portal", type: 1 }} />
        </div>
      </div>
    </Drawer>
  );
}
