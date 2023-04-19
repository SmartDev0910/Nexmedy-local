/* eslint-disable jsx-a11y/no-distracting-elements */
import React, { useState } from "react";
import { useRouter } from "next/router";
import { HeaderIcons } from "../../assets/icons/_icons";
// import Buttons from "../../components/Button";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import Link from "next/link";
// for menu
// for menu
import Image from "next/image";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { menus } from "@/data-sets/data-sets";
import Contact from "./Contact";
import SideNav from "./SideNav";
import AI_IMG from "../../assets/icons/ai.svg";

export default function Header({ opened, toggleDrawer }) {
  const router = useRouter();
  const path = router.pathname.slice(1);
  const courseActive = path.includes("courses-offered");

  return (
    <>
      <Marquee />
      <HeaderContent
        opened={opened}
        courseActive={courseActive}
        toggleDrawer={toggleDrawer}
      />
    </>
  );
}

function Marquee() {
  return (
    <div className="headerMarquee flex items-center">
      <marquee scrollamount="5">
        To Reach US Call now - Mobile: <span>+91-9566577707 </span>; LandLine:{" "}
        <span> 044 48591798</span>
      </marquee>
    </div>
  );
}

function HeaderContent({ opened, toggleDrawer, courseActive }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [sideNavOpened, setSideNavOpened] = useState(false);

  const toggleSideNavDrawer = (open) => (event) => {
    setSideNavOpened(open);
  };

  return (
    <section>
      <div className="cw headerCont flex justify-between items-center w-full">
        <div className="headerLogo">
          <Link href={"/"}>
            <Image src={HeaderIcons.NexdemyLogo} alt="logo" />
          </Link>
        </div>
        <div className="headerMenus ">
          <div
            style={{ marginRight: 0 }}
            className="menuWrap lg:flex items-center xs:hidden sm:hidden "
          >
            {/* for menus  */}

            {menus.map((t) => {
              return t.type === "link" ? (
                <Link key={t.name} href={t.url}>
                  <div>{t.name}</div>
                </Link>
              ) : (
                <div key={t.name}>
                  <div
                    className={
                      t.name === "Courses Offered" && courseActive
                        ? "activeParentMenu"
                        : ""
                    }
                    onClick={handleClick}
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    style={{ marginRight: "0" }}
                  >
                    {t.name}
                  </div>
                  <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    className="menuOverLay"
                    PaperProps={{
                      elevation: 0,
                    }}
                    transformOrigin={{ horizontal: "left", vertical: "top" }}
                    anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
                  >
                    {t.subMenu.map((sm) => (
                      <Link
                        key={sm.url ? sm.url.split("/")[1] : sm.url}
                        href={courseActive ? sm.url.split("/")[1] : sm.url}
                      >
                        <MenuItem onClick={handleClose}>{sm.name}</MenuItem>
                      </Link>
                    ))}
                  </Menu>
                </div>
              );
            })}

            {/* for menus  */}

            {/* for contact drawer  */}

            <div
            // onClick={toggleDrawer(true)}
            >
              Contact
            </div>
            <Contact opened={opened} toggleDrawer={toggleDrawer} />

            {/* for contact drawer  */}

            {/* <Buttons value={{ val: "Student Portal", type: 1 }} /> */}
          </div>
          <div
            style={{ marginRight: 0 }}
            className="menuIcon rips flex lg:hidden"
            onClick={toggleSideNavDrawer(true)}
          >
            <MenuIcon />
          </div>
          <SideNav
            sideNavOpened={sideNavOpened}
            toggleSideNavDrawer={toggleSideNavDrawer}
            data={menus}
            toggleDrawer={toggleDrawer}
          />
        </div>
      </div>
    </section>
  );
}
