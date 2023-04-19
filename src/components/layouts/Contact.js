import { Drawer } from "@mui/material";
import React from "react";
import {
  CommonIcons,
  ContactFormIcon,
  FooterIcons,
  HeaderIcons,
} from "../../assets/icons/_icons";
import Image from "next/image";
import ContactForm from "../ContactForm";

export default function Contact({ opened, toggleDrawer }) {
  return (
    <Drawer
      className="contactDrawer"
      anchor={"right"}
      open={opened}
      // onClose={toggleDrawer(false)}
    >
      <div className="contactWrapContent flex justify-center w-full">
        <div className="left flex lg:w-[50%] justify-center lg:justify-end order-2 lg:order-1">
          <div className="contentWrap flex w-[90%] sm:w-[80%] lg:w-[500px] mr-20 lg:mr-[8%]">
            <div className="headerLogo">
              <Image src={HeaderIcons.NexdemyLogo} alt="" />
            </div>
            <ContactForm />
          </div>
        </div>
        <div className="right flex lg:w-[50%] items-start order-1 lg:order-2">
          <div className="contentWrap flex w-full ml-[8%] justify-end">
            <div
              // onClick={toggleDrawer(false)}
              className="iconWrap cross lg:mr-80 mr-20"
            >
              <Image src={CommonIcons.Cross} alt="" />
            </div>
            <div className="contentWrap flex w-full mt-30 lg:mt-70">
              <div className="contactDet">
                <h1>Contact</h1>
                <div className="pointsWrap">
                  <div className="contactPoint ">
                    <div className="iconWrap">
                      <Image src={ContactFormIcon.ContactPhone} alt="" />
                    </div>
                    <h3 className="t-2">+91-44 4859 1798</h3>
                  </div>
                  <div className="contactPoint ">
                    <div className="iconWrap">
                      <Image src={ContactFormIcon.ContactSmartPhone} alt="" />
                    </div>
                    <h3 className="t-2">+91-95665 77707</h3>
                  </div>
                  <div className="contactPoint ">
                    <div className="iconWrap">
                      <Image src={ContactFormIcon.ContactEmail} alt="" />
                    </div>
                    <h3 className="t-2">join@nexdemy</h3>
                  </div>
                  <div className="contactPoint ">
                    <div className="iconWrap">
                      <Image src={ContactFormIcon.ContactEmail} alt="" />
                    </div>
                    <h3 className="t-2">placement@nexdemy</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="contentWrap flex w-full mt-40">
              <div className="contactDet">
                <h1>Location</h1>
                <div className="pointsWrap">
                  <div className="contactPoint ">
                    <div className="iconWrap">
                      <Image src={ContactFormIcon.ContactLocation} alt="" />
                    </div>
                    <h3 className="t-2">Chennai</h3>
                  </div>
                  <div className="addressWrap ">
                    <h3 className="t-2  ">
                      No. 272, 2nd Street, Maxworth Nagar,
                      <br /> S Kolathur, Kovilambakkam,
                      <br /> Chennai - 600129.
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="contentWrap flex w-full mt-40">
              <div className="contactDet">
                <h1>Connect</h1>
                <div className="socialIcon flex gap-y-10">
                  <div className="footIcon">
                    <Image src={FooterIcons.LinkedinFooter} alt="" />
                  </div>
                  <div className="footIcon">
                    <Image src={FooterIcons.FacebookFooter} alt="" />
                  </div>
                  <div className="footIcon">
                    <Image src={FooterIcons.InstaFooter} alt="" />
                  </div>
                  <div className="footIcon">
                    <Image src={FooterIcons.WhatsappFooter} alt="" />
                  </div>
                  <div className="footIcon">
                    <Image src={FooterIcons.YoutubeFooter} alt="" />
                  </div>
                  <div className="footIcon">
                    <Image src={FooterIcons.TwitterFooter} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Drawer>
  );
}
