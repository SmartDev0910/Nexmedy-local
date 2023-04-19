import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
// import { useLocation } from "react-router-dom";
import { CommonImages } from "@/assets/images/_Images";
import {
  Buttons,
  CourseCard,
  Faq,
  HeadWrap,
  KeyCards,
  SwiperSlides,
  ToolCard,
} from "@/components/_index";
import {
  getPageData,
  PythonCourseCards,
  HomeSwiperData,
} from "@/data-sets/data-sets";

export default function UiUx() {
  const router = useRouter();

  const path = router.pathname.slice(1).split("/")[1];
  const pageData = getPageData(path);
  return (
    <>
      <SectionOne data={pageData.sectionOne} />
      <SectionTwo data={pageData.sectionTwo} />
      <SectionThree data={pageData.sectionThree} />

      <SectionSeventh data={pageData.sectionEight} />

      <SectionFour data={pageData.sectionFour} />
      <SectionFive data={pageData.sectionFive} />
      {/* <SectionSix data={pageData.sectionSix} /> */}
      <SectionFourth data={pageData.sectionFourth} />
      <SectionFifth data={pageData.sectionFifth} />
      <Section16 data={pageData.sectionSixteen} />
      <SectionSeven data={pageData.sectionSeven} />
      <SectionEight data={pageData.sectionEight} />
      <Section13 data={pageData.syllabus} />
      <SectionNine data={pageData.sectionNine} />
      <SectionTen data={pageData.slide} />
      <SectionEleven path={path} />
      <SectionTwelve data={pageData.faq} />
    </>
  );
}

function SectionOne({ data }) {
  return (
    <section className="c-1 ">
      <div className="cw flex w-full justify-center">
        <div className="flex justify-center md:justify-between items-center">
          <div
            className={`left flex md:w-[46%] order-1 md:order-${data.imageOrder}`}
          >
            <div className="contentWrap flex w-full place-content-start">
              <h1 className="mb-20">{data.t}</h1>
              <p className="t-2 mb-30">{data.d}</p>
              <Buttons value={data.button} />
            </div>
          </div>
          <div
            className={`right flex md:w-[53%] order-2 md:order-${data.descOrder}`}
          >
            <div className="imgWrap">
              <Image loading="lazy" src={data.image} alt="Gif" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionTwo({ data }) {
  return (
    <section className="c-2">
      <div className="cw flex w-full justify-center">
        <HeadWrap
          value={{
            title: data.title,
            desc: data.desc,
          }}
        />
        <div className="contentWrap gap-y-30 md:mt-80 mt-30 flex justify-around w-full">
          <KeyCards value={data.keyCardsData} />
        </div>
      </div>
    </section>
  );
}

function SectionThree({ data }) {
  return (
    <section className="c-3">
      <div className="cw flex justify-center w-full">
        <HeadWrap
          value={{
            title: data.t,
            desc: data.d,
          }}
        />
        <div className="contentWrap md:mt-80 mt-30  flex justify-center md:justify-between items-center">
          <div className="left flex md:w-[49%] order-2 md:order-1">
            <div className="contentWrap flex w-full place-content-start ">
              <p className="t-2">{data.p}</p>
            </div>
          </div>
          <div className="right  flex md:w-[48%] order-1 md:order-  2">
            <div className="imgWrap">
              <Image loading="lazy" src={data.image} alt="Gif" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function Section16({ data }) {
  return (
    <section className="c-3">
      <div className="cw flex justify-center w-full">
        <HeadWrap
          value={{
            title: data.t,
            desc: data.d,
          }}
        />
        <div className="contentWrap md:mt-80 mt-30  flex justify-center md:justify-between items-center">
          <div className="left flex md:w-[49%] order-2 md:order-1">
            <div className="contentWrap flex w-full place-content-start ">
              <p className="t-2">{data.p}</p>
            </div>
          </div>
          <div className="right  flex md:w-[48%] order-1 md:order-  2">
            <div className="imgWrap">
              <Image loading="lazy" src={data.image} alt="Gif" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function SectionFour({ data }) {
  return (
    <section className="c-4">
      <div className="cw flex justify-center w-full">
        <HeadWrap
          value={{
            title: data.t,
            desc: data.d,
          }}
        />
        <div className="contentWrap gap-y-30 md:mt-80 mt-30  flex justify-center md:justify-between items-center">
          <div className="left flex md:w-[49%] order-2 ">
            <div className="contentWrap flex w-full place-content-start ">
              <p className="t-2 text-center md:text-start">{data.p}</p>
            </div>
          </div>
          <div className="right  flex md:w-[44%] order-1">
            <div className="imgWrap ">
              <Image
                className="rounded-[25px]"
                loading="lazy"
                src={data.image}
                alt="Gif"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionFourth({ data }) {
  return (
    <section className="hs-8">
      <div className="cw flex justify-center w-full">
        <HeadWrap
          value={{
            title: data.t,
            desc: data.d,
          }}
        />
        <div className="contentWrap gap-y-30 md:mt-80 mt-30  flex justify-center md:justify-between items-center">
          <div className="left flex md:w-[49%] order-2 ">
            <div className="imgWrap ">
              <Image
                className="rounded-[25px]"
                loading="lazy"
                src={data.image}
                alt="Gif"
              />
            </div>
          </div>
          <div className="right  flex md:w-[44%] order-1">
            <div className="contentWrap flex w-full place-content-start ">
              <p className="t-2 text-center md:text-start">{data.p}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionFifth({ data }) {
  return (
    <section className="c-4">
      <div className="cw flex justify-center w-full">
        <HeadWrap
          value={{
            title: data.t,
            desc: data.d,
          }}
        />
        <div className="contentWrap gap-y-30 md:mt-80 mt-30  flex justify-center md:justify-between items-center">
          <div className="left flex md:w-[49%] order-2 ">
            <div className="contentWrap flex w-full place-content-start ">
              <p className="t-2 text-center md:text-start">{data.p}</p>
            </div>
          </div>
          <div className="right  flex md:w-[44%] order-1">
            <div className="imgWrap ">
              <Image
                className="rounded-[25px]"
                loading="lazy"
                src={data.image}
                alt="Gif"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionFive({ data }) {
  return (
    <section className="c-5">
      <div className="cw flex justify-center w-full">
        <HeadWrap
          value={{
            title: data.t,
            desc: data.d,
          }}
        />

        <div className="contentWrap  md:mt-80 mt-30  flex justify-center md:justify-between items-center">
          <div className="left flex md:w-[39%]  order-2 md:order-1">
            <div className="contentWrap flex w-full place-content-start ">
              <p className="t-2 text-center md:text-start">{data.p}</p>
            </div>
          </div>
          <div className="right  flex md:w-[59%] order-1 md:order-2">
            <div className="imgWrap ">
              <Image loading="lazy" src={data.image} alt="Gif" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionSix({ data }) {
  return (
    <section className="c-6">
      <div className="cw flex justify-center w-full">
        <HeadWrap
          value={{
            title: data.t,
            desc: data.d,
          }}
        />
        <div className="contentWrap gap-30 mt-30 md:mt-80 flex w-full justify-center">
          <ToolCard value={data.courseCardData} />
        </div>
      </div>
    </section>
  );
}

function SectionSeven({ data }) {
  return (
    <section className="c-7">
      <div className="cw flex w-full justify-center">
        <HeadWrap
          value={{
            title: data.t,
            desc: data.d,
          }}
        />

        <div className="contentWrap gap-y-30 mt-30 md:mt-80 flex w-full">
          {data.TrainModelCards.map((i) => (
            <div
              key={i.t}
              className="trainModelCard sm:p-30 p-20 gap-y-30 flex w-full place-content-center md:place-content-between items-center"
            >
              <div className="left flex w-[100%] sm:w-[90%] md:w-[35%]">
                <div className="imgWrap">
                  <Image loading="lazy" src={i.image} alt="Gif" />
                </div>
              </div>
              <div className="right flex w-[100%] sm:w-[90%]  md:w-[61%]">
                <h1>{i.t}</h1>
                {i.d.map((p) => (
                  <p key={p}>{p}</p>
                ))}

                <Buttons value={i.button} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionEight({ data }) {
  var clsName;
  if (data.path === "ui-ux-design") {
    clsName = {
      left: "left flex w-full md:w-[60%]",
      right: "right flex w-full md:w-[38%]",
    };
  } else if (data.path === "python-development") {
    clsName = {
      left: "left flex w-full md:w-[35%]",
      right: "right flex w-full md:w-[61%]",
    };
  }

  return (
    <section
      className={`c-8 ${
        data.path === "frontend-development" ||
        data.path === "graphic-design" ||
        data.path === "python-development"
          ? "yellowBg"
          : ""
      }`}
    >
      <div className="cw flex w-full justify-center">
        <HeadWrap
          value={{
            title: data.t,
            desc: data.d,
          }}
        />
        {data.path === "python-development" && (
          <div className="contentWrap mt-30 md:mt-80 flex w-full justify-between items-center">
            <div className={clsName.left}>
              <div className="imgWrap flex w-full">
                <Image
                  className="w-full"
                  loading="lazy"
                  src={data.image}
                  alt="Gif"
                />
              </div>
            </div>
            <div className={clsName.right}>
              {data.points.map((p) => (
                <div key={p} className="contentWrap">
                  <div className="imgWrap flex w-[8%]">
                    <Image loading="lazy" src={CommonImages.Bullet} alt="Gif" />
                  </div>
                  <h3 className="t-2 flex w-[92%]">{p}</h3>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* {data.path === "python-development" && (
          <div className="contentWrap gap-y-30 mt-30 md:mt-80 flex w-full justify-around items-start">
            {data.points.map((i) => (
              <div
                key={i.name}
                className="contentPoints flex w-full sm:w-[45%] lg:w-[30%]"
              >
                <h1>{i.name}</h1>
                <div className="Wrap mt-20 flex w-full">
                  {i.points.map((t) => (
                    <div key={t} className="contentWrap flex w-full">
                      <div className="imgWrap customPoints flex w-[10%] justify-center">
                        <Image
                          loading="lazy"
                          src={CommonImages.Bullet}
                          alt="Gif"
                        />
                      </div>
                      <h3 className="t-2 flex w-[90%]">{t}</h3>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )} */}
      </div>
    </section>
  );
}
function SectionSeventh({ data }) {
  var clsName;
  if (data.path === "ui-ux-design") {
    clsName = {
      left: "left flex w-full md:w-[60%]",
      right: "right flex w-full md:w-[38%]",
    };
  } else if (data.path === "python-development") {
    clsName = {
      left: "left flex w-full md:w-[35%]",
      right: "right flex w-full md:w-[61%]",
    };
  }

  return (
    <section
      className={`c-8 ${
        data.path === "frontend-development" ||
        data.path === "graphic-design" ||
        data.path === "python-development"
          ? "yellowBg"
          : ""
      }`}
    >
      <div className="cw flex w-full justify-center">
        <HeadWrap
          value={{
            title: data.t,
            desc: data.d,
          }}
        />
        {data.path === "python-development" && (
          <div className="contentWrap mt-30 md:mt-80 flex w-full justify-between items-center">
            {/* <div className={clsName.left}>
              <div className="imgWrap flex w-full">
                <Image
                  className="w-full"
                  loading="lazy"
                  src={data.image}
                  alt="Gif"
                />
              </div>
            </div> */}
            <div className={clsName.right}>
              {data.points.map((p) => (
                <div key={p} className="contentWrap">
                  <div className="imgWrap flex w-[8%]">
                    <Image loading="lazy" src={CommonImages.Bullet} alt="Gif" />
                  </div>
                  <div>
                    <h3 className="t-2 flex w-[92%]">{p}</h3>
                    <div className="contentWrap flex w-full place-content-start">
                      <p className="t-2">{p}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* {data.path === "python-development" && (
          <div className="contentWrap gap-y-30 mt-30 md:mt-80 flex w-full justify-around items-start">
            {data.points.map((i) => (
              <div
                key={i.name}
                className="contentPoints flex w-full sm:w-[45%] lg:w-[30%]"
              >
                <h1>{i.name}</h1>
                <div className="Wrap mt-20 flex w-full">
                  {i.points.map((t) => (
                    <div key={t} className="contentWrap flex w-full">
                      <div className="imgWrap customPoints flex w-[10%] justify-center">
                        <Image
                          loading="lazy"
                          src={CommonImages.Bullet}
                          alt="Gif"
                        />
                      </div>
                      <h3 className="t-2 flex w-[90%]">{t}</h3>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )} */}
      </div>
    </section>
  );
}
function SectionNine({ data }) {
  const cardClass =
    "courseCard courseTrainerCard md:w-[31%] sm:w-[45%] xs:w-[70%]";

  return (
    <section className="c-9">
      <div className="cw flex justify-center w-full">
        <HeadWrap
          value={{
            title: data.t,
            desc: data.d,
          }}
        />

        <div className="contentWrap mt-80 flex w-full justify-center">
          <div className="cardWrap flex w-full justify-center gap-30">
            <CourseCard value={data.AboutTrainerCards} cls={cardClass} />
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionTen({ data }) {
  return (
    <section className="hs-6">
      <div className="cw flex justify-center ">
        <HeadWrap
          value={{
            title: data.t,
            desc: data.d,
          }}
        />

        <SwiperSlides value={HomeSwiperData} />
      </div>
    </section>
  );
}

function SectionEleven({ path }) {
  const cardClass = "courseCard md:w-[31%] sm:w-[45%] xs:w-[70%]";

  function filterData() {
    switch (path) {
      case "ui-ux-design":
        return "UX / UI";
      case "frontend-development":
        return "Frontend Development";
      case "graphic-design":
        return "Graphic Design";
      case "python-development":
        return "Python Development";
      default:
        break;
    }
  }
  // eslint-disable-next-line array-callback-return
  const cardData = PythonCourseCards.filter((i) => {
    if (i.type.includes("design")) {
      if (i.title !== filterData()) {
        return i;
      }
    }
  });
  return (
    <section className="c-11">
      <div className="cw flex w-full justify-center">
        <HeadWrap
          value={{
            title: "Related Nexdemy Courses",
            desc: "Broaden your skillset with Nexdemy's comprehensive range of courses in related fields.",
          }}
        />
        <div className="contentWrap mt-30 md:mt-80 flex w-full justify-center">
          <div className="cardWrap flex w-full gap-30 justify-center">
            <CourseCard value={cardData} cls={cardClass}>
              <Buttons value={{ val: "Learn more", type: 1 }} />
            </CourseCard>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionTwelve({ data }) {
  return (
    <section className="hs-8">
      <div className="cw flex w-full">
        <HeadWrap value={{ title: data.t }} />
        <div className="contentWrap accordionWrap mt-60">
          <Faq value={data.faqData} />
        </div>
      </div>
    </section>
  );
}
function Section13({ data }) {
  return (
    <section className="hs-9">
      <div className="cw flex w-full">
        <HeadWrap value={{ title: data.t, desc: data.d }} />
        <div className="contentWrap accordionWrap mt-60">
          <Faq value={data.faqData} />
        </div>
      </div>
    </section>
  );
}
