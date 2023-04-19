import Link from "next/link";
import { FooterIcons } from "../../assets/icons/_icons";
import Image from "next/image";

export default function Footer({ toggleDrawer }) {
  return (
    <section className="footerSec">
      <div className="cw flex w-full">
        <div className="contentWrap gap-y-40 flex w-full justify-between">
          <div className="flex md:w-[33%]">
            {/* <div className="fLogo flex w-full justify-start">
              <FooterIcons.FooterLogo />
            </div> */}
            <p className="mt-20">
              Nexdemy is a leading training company that offers comprehensive
              courses in UI UX, graphic design, front end, digital marketing,
              and a lot more domains for freshers. With experienced trainers and
              practical training, Nexdemy equips students with industry-ready
              skills to excel in their careers.
            </p>
          </div>
          <div className="flex md:w-[20%]">
            <div className="contentWrap footerMenus flex w-full place-content-center items-start">
              <h3 className="flex t-2 w-full mb-20">Pages</h3>
              <Link href={"/"}>
                <p>Home</p>
              </Link>
              <Link href={"/About-us"}>
                <p>About us</p>
              </Link>
              <Link
                href={"#"}
                // onClick={toggleDrawer(true)}
              >
                <p>Contact</p>
              </Link>
              <Link href={"/Courses"}>
                <p>Courses Offered</p>
              </Link>
            </div>
          </div>
          <div className="flex md:w-[33%]">
            <div className="contentWrap  flex w-full place-content-start items-start">
              <h3 className="flex t-2 w-full mb-20">To Reach us</h3>
              <div className="socialIcon flex ">
                <div className="footIcon">
                  <a
                    href="https://www.linkedin.com/company/nexdemy/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image src={FooterIcons.LinkedinFooter} alt="" />
                  </a>
                </div>
                <div className="footIcon">
                  <a
                    href="https://www.facebook.com/nexdemy.official"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image src={FooterIcons.FacebookFooter} alt="" />
                  </a>
                </div>
                <div className="footIcon">
                  <a
                    href="https://www.instagram.com/nexdemy_official/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image src={FooterIcons.InstaFooter} alt="" />
                  </a>
                </div>
                <div className="footIcon">
                  <a
                    href="https://api.whatsapp.com/send?phone=9566577707"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image src={FooterIcons.WhatsappFooter} alt="" />
                  </a>
                </div>
                <div className="footIcon">
                  <a
                    href="https://www.youtube.com/@nexdemyofficial"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image src={FooterIcons.YoutubeFooter} alt="" />
                  </a>
                </div>
                <div className="footIcon">
                  <a
                    href="https://twitter.com/nexdemy_off"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image src={FooterIcons.TwitterFooter} alt="" />
                  </a>
                </div>
              </div>
              <p className="flex  w-full my-20">Lets Talk</p>
              <div className="contactWrap flex">
                <div className="contactIcon">
                  <Image
                    priority
                    src={FooterIcons.PhoneNumber}
                    alt="PhoneNumber"
                  />
                </div>
                <p>+91-95665 77707 / +91-44 4859 1798 </p>
              </div>
            </div>
          </div>
        </div>
        <div className="copyRights mt-80 flex w-full justify-center">
          Copyright - 2022 Nexdemy Training - Privay & Policy
        </div>
      </div>
    </section>
  );
}
