import React, { useState } from "react";
import { CourseCard, HeadWrap } from "../components/_index";

// tabs

import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { CourseCards } from "../data-sets/data-sets";

export default function Courses() {
  const cardClass = "courseCard md:w-[31%] sm:w-[45%] xs:w-[70%]";
  const cardDatas = CourseCards;

  const [value, setValue] = useState("1");

  const [cardData, setCardData] = useState(() => {
    return cardDatas;
  });

  const handleChange = (event, newValue) => {
    var type = event.nativeEvent.target.innerText.toLocaleLowerCase();
    setCardData((prev) => {
      return cardDatas.filter((i) => {
        return i.type.includes(type);
      });
    });
    setValue(newValue);
  };

  return (
    <section className="co-1">
      <div className="cw flex w-full justify-center">
        <HeadWrap
          value={{
            title: "Nexdemy Courses",
            desc: "Enroll your name in any course you’re passionate about. Registrations are now open.",
          }}
        />

        <div className="tabCont flex w-full mt-35">
          <TabContext value={value}>
            <TabList className="mb-80 xs:mb-40" onChange={handleChange}>
              {/* [ "All", "Design", "Frontend Development", "Backend Development", "3D & Animation", "Game Development", "Mobile Apps", "Digital Marketing", ] */}
              {[
                "All",
                "Design",
                "Frontend Development",
                "Backend Development",
                "3D & Animation",
                "Game Development",
                "Mobile Apps",
                "Digital Marketing",
              ].map((item, i) => (
                <Tab key={i} label={item} value={`${i + 1}`} />
              ))}
            </TabList>
            <div className="tableBody">
              <TabPanel value={value}>
                <div className="contentWrap flex w-full justify-center">
                  <div className="cardWrap flex w-full gap-y-40 xs:gap-y-20 justify-evenly xs:justify-around">
                    <CourseCard value={cardData} cls={cardClass} />
                  </div>
                </div>
              </TabPanel>
            </div>
          </TabContext>
        </div>
      </div>
    </section>
  );
}
