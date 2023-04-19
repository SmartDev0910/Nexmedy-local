import React from "react";
import Image from "next/image";
import { AboutImages } from "../assets/images/_Images";
import {
  HeadWrap,
  SwiperSlides,
  CourseCard,
  Buttons,
} from "../components/_index";
import {
  AboutPhilCards,
  AboutTrainerCards,
  HomeSwiperData,
} from "../data-sets/data-sets";

export default function AboutUs() {
  return (
    <>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
    </>
  );
}

function SectionOne() {
  return (
    <section className="a-1">
      <div className="cw flex w-full justify-center md:justify-between items-center">
        <div className="left flex md:w-[46%]">
          <div className="contentWrap flex w-full place-content-start">
            <h1 className="mb-20 xs:mb-10">About Us</h1>
            <p className="md:w-[80%]">
              Discover your creative potential with Nexdemy! Our courses,
              exclusively designed for freshers, in UI/UX, graphic design,
              front-end development, 2D, digital marketing, and a lot other IT
              domains will equip you with the skills to succeed in your dream
              career.
            </p>
          </div>
        </div>
        <div className="right flex md:w-[53%]">
          <div className="imgWrap">
            <Image loading="lazy" src={AboutImages.AboutBanner} alt="Gif" />
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionTwo() {
  return (
    <section className="a-2">
      <div className="cw flex w-full justify-center">
        <div className="contentWrap gap-y-20 flex w-full justify-center md:justify-between">
          {[
            { t: "100%", d: "Student satisfaction" },
            { t: "95%", d: "Practical Learning" },
            { t: "17%", d: "Latest Skillset" },
          ].map((i) => (
            <div
              key={i.t}
              className="card flex justify-center sm:w-[90%] xs:w-[100%] md:w-[31%]"
            >
              <h1>{i.t}</h1>
              <h3 className="t-2 mt-20">{i.d}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionThree() {
  return (
    <section className="a-3">
      <div className="cw flex w-full justify-center">
        <HeadWrap
          value={{
            title: "How we work",
            desc: "We collaborate closely with you to bring your hidden talent to life.",
          }}
        />
        <div className="flex justify-center md:justify-between items-center">
          <div className="left flex md:w-[46%] order-2">
            <div className="contentWrap flex w-full place-content-start">
              <p className="md:w-[80%]">
                Our aim is to connect with students and job seekers and impart
                education that really matters today. Absolutely no beating
                around the bush. We deal with skills that can be applied
                instantly and could help them land a job in days. Such a
                straight forward and profitable process develops a sense of
                confidence in themselves and they tend to have a natural
                affinity towards learning.
              </p>
            </div>
          </div>
          <div className="right flex md:w-[53%] order-1">
            <div className="imgWrap">
              <Image loading="lazy" src={AboutImages.AboutWork} alt="Gif" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionFour() {
  return (
    <section className="a-4">
      <div className="cw flex w-full justify-center">
        <HeadWrap
          value={{
            title: "Our Philosophy",
            desc: "Empowering them with industry-relevant skills and knowledge to succeed in their chosen field.",
          }}
        />
        <div className="contentWrap gap-y-30 flex w-full justify-around lg:justify-between mt-80">
          {AboutPhilCards.map((item) => (
            <div key={item.t} className="philCard">
              <div className="philHovIcon">
                <div className="iconWrap">{/* <item.i /> */}</div>
              </div>
              <h2>{item.t}</h2>
              <p>{item.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionFive() {
  const cardClass =
    "courseCard aboutTrainerCard md:w-[31%] sm:w-[45%] xs:w-[70%]";

  return (
    <section className="a-5">
      <div className="cw flex w-full justify-center">
        <HeadWrap
          value={{
            title: "Your Nexdemy Trainers",
            desc: "Our experienced trainers are industry professionals who are passionate about sharing their knowledge.",
          }}
        />
        <div className="contentWrap mt-80 flex w-full justify-center">
          <div className="cardWrap flex w-full justify-center gap-30">
            <CourseCard value={AboutTrainerCards} cls={cardClass} />
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
    <section className="a-7">
      <div className="cw flex w-full justify-center withBg">
        <h1>
          Empower yourself with the latest skills and get paid in a matter of
          days.
        </h1>
        <Buttons value={{ val: "Apply Now", type: 2 }} />
      </div>
    </section>
  );
}
