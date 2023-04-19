import { HomeImages } from "@/assets/images/_Images";
import Image from "next/image";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState } from "react";
import {
  CourseCards,
  FaqData,
  HomeSwiperData,
  HomeTrainCards,
} from "@/data-sets/data-sets";

import {
  Buttons,
  CourseCard,
  HeadWrap,
  TrainCard,
  SwiperSlides,
  ContactForm,
  Faq,
} from "@/components/_index";

export default function Home() {
  return (
    <>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <SectionEight />
    </>
  );
}

function SectionOne() {
  return (
    <section>
      <div className="cw flex sm:justify-center md:justify-between items-center pb-20">
        <div className="left xs:py-20 flex md:w-[47%]  sm:w-[90%]">
          <h1 className="mb-20 xs:mb-10">
            Propel your professional career ahead with practical skills and
            confidence.
          </h1>
          <p className="t-2 mb-40 xs:mb-20">
            Nexdemy helps freshers effortlessly enter the world of IT and ascend
            the corporate ladder with world-class certification programs.
          </p>
          <Buttons value={{ val: "Register Now", type: 1 }} />
        </div>
        <div className="right flex  md:w-[48%]  sm:w-[90%]">
          <div className="ImageWrap">
            <Image src={HomeImages.HomepageBannerImage} alt="Banner" />
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionTwo() {
  return (
    <section className="homeSecTwo">
      <div className=" flex forBg w-full">
        <div className="left flex w-full xl:w-[50%] xs:gap-y-20  justify-center items-center">
          <div className="left flex xs:w-full w-[33%] self-start">
            <h3 className="t-2 mb-20">What colleges teach you?</h3>
            <p>Old syllabus that’s no more in usage. Theoretical knowledge.</p>
          </div>
          <div className="center xs:hidden flex w-[8%]">
            <Image src={HomeImages.Vs} alt="vs" />
          </div>
          <div className="right flex xs:w-full w-[32%] self-start justify-start">
            <div className="contentWrap ">
              <h3 className="t-2 mb-20">What do companies want?</h3>
              <p>Latest industrial skills. Practical knowledge.</p>
            </div>
          </div>
        </div>
        <div className="right flex w-full xl:w-[50%]  justify-center">
          <div className="contentWrap flex justify-center">
            <h3 className="text-center mb-40 xs:mb-20 w-full">
              With Nexdemy, learn what gets you your dream job
            </h3>
            <Buttons value={{ val: "Apply Now", type: 2 }} />
          </div>
        </div>
      </div>
    </section>
  );
}
function SectionThree() {
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
    <section className="hs-3">
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
                  <div className="cardWrap flex w-full  justify-center gap-30 ">
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

function SectionFour() {
  const cardClass = "trainCard md:w-[31%] sm:w-[45%] xs:w-[90%]";
  const cardData = HomeTrainCards;
  return (
    <section className="hs-4">
      <div className="cw flex justify-center ">
        <HeadWrap
          value={{
            title: "Elevate your career with Nexdemy Training",
            desc: "Enjoy every perk that elevates your life ahead.",
          }}
        />
        <div className="contentWrap mt-80 xs:mt-40 w-full`">
          <div className="cardWrap flex md:justify-between sm:justify-evenly xs:justify-around gap-y-40 xs:gap-y-20">
            <TrainCard value={cardData} cls={cardClass} />
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionFive() {
  return (
    <section className="hs-5">
      <div className="cw flex justify-center">
        <HeadWrap
          value={{
            title: "Internships at Nexdemy!",
            desc: "Real-world experience to enhance your skills.",
          }}
        />

        <div className="contentWrap flex w-full lg:justify-between items-center sm:justify-around">
          <div className="left flex lg:w-[39%] sm:w-[80%] xs:w-[100%] lg:order-1 sm:order-2 xs:order-2">
            <p className="t-2 ">
              At Nexdemy, we believe in providing our students with hands-on
              experience to help them apply their skills in the real world. Our
              internship program offers the opportunity to work on live projects
              with our clients, gain practical knowledge, and build a
              professional network. It’s a chance to add value to your resume
              and prepare for a successful career in the IT industry.
            </p>
          </div>
          <div className="right flex lg:w-[60%] sm:w-[80%] xs:w-[100%] lg:order-2 sm:order-1 xs:order-1">
            <div className="ImageWrap">
              <Image
                className="w-full"
                src={HomeImages.InternshipAtNexdemy}
                alt="Gif"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionSix() {
  return (
    <section className="hs-6">
      <div className="cw flex justify-center ">
        <HeadWrap
          value={{
            title: "Check what our students say about us",
            desc: "Discover how Nexdemy transformed our students' careers through their testimonials and success stories.",
          }}
        />

        <SwiperSlides value={HomeSwiperData} />
      </div>
    </section>
  );
}

function SectionSeven() {
  return (
    <section className="hs-7">
      <div className="cw flex justify-center">
        <HeadWrap
          value={{
            title: "Now, let’s discuss your dreams.",
            desc: "Fill in your details in this enquiry form. It takes only a few seconds.",
          }}
        />

        <div className="contentWrap flex w-full justify-center lg:justify-between items-center">
          <div className="left flex md:w-[80%] lg:w-[49%]">
            <div className="ImageWrap ">
              <Image
                className="flex w-[100%]"
                loading="lazy"
                src={HomeImages.ContactGif}
                alt="Gif"
              />
            </div>
          </div>
          <div className="right flex md:w-[80%] lg:w-[50%]">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionEight() {
  return (
    <section className="hs-8">
      <div className="cw flex w-full">
        <HeadWrap value={{ title: "Frequently asked questions" }} />
        <div className="contentWrap accordionWrap mt-60">
          <Faq value={FaqData} />
        </div>
      </div>
    </section>
  );
}
