import {
  AboutImages,
  FrontEndImages,
  GraphicImages,
  HomeImages,
  TestimonialImages,
  UiUxImages,
  CommonImages,
} from "../assets/images/_Images";
import {
  AboutIcons,
  CourseIcons,
  CourseIconsFrontEnd,
  CourseIconsGraphic,
  HomeIcons,
} from "../assets/icons/_icons";

/*--------------------------------------------
<================== menus ===================>
--------------------------------------------- */
export const menus = [
  { name: "Home", url: "/", type: "link" },
  {
    name: "Courses Offered",
    url: null,
    type: "label",
    subMenu: [
      { name: "UX / UI Design", url: "courses-offered/ui-ux-design" },
      {
        name: "Frontend Development",
        url: "courses-offered/frontend-development",
      },
      { name: "Python Development", url: "courses-offered/python-development" },
      {
        name: "Node JS Development",
        url: "courses-offered/nodejs-development",
      },
      { name: "2D / 3D Design", url: "courses-offered/2d-3d-design" },
      { name: "Graphic Design", url: "courses-offered/graphic-design" },
    ],
  },
  { name: "About Us", url: "About-us", type: "link" },
];

/*--------------------------------------------------------
<================== home course cards  ===================>
--------------------------------------------------------- */

export const HomeCourseCards = [
  {
    image: HomeImages.UiUxGif,
    title: "UX / UI",
    type: "all,design,marketing",
  },
  {
    image: HomeImages.FrontEndDevCourse,
    title: "Frontend Development",
    type: "all,design,marketing,development",
  },
  {
    image: HomeImages.PythonCourse,
    title: "Python Development",
    type: "all,development,marketing",
  },
  {
    image: HomeImages.NodeJsCourse,
    title: "Node JS Development",
    type: "all,development,marketing",
  },
  {
    image: HomeImages.ThreeDimesionCourse,
    title: "2D / 3D Design",
    type: "all,design,marketing",
  },
  {
    image: HomeImages.GraphicCourse,
    title: "Graphic Design",
    type: "all,design",
  },
];
/*--------------------------------------------------------
<================== home course cards  ===================>
--------------------------------------------------------- */

export const PythonCourseCards = [
  {
    image: HomeImages.ThreeDimesionCourse,
    title: "2D / 3D Design",
    type: "all,design,marketing",
  },
  {
    image: HomeImages.GraphicCourse,
    title: "Graphic Design",
    type: "all,design",
  },
  {
    image: HomeImages.FrontEndDevCourse,
    title: "Angular Development",
    type: "all,design,marketing,development",
  },
];
/*------------------------------------------------------
<================== home train cards ===================>
------------------------------------------------------- */

export const HomeTrainCards = [
  {
    icon: HomeIcons.DreamJob,
    title: "Dream Job",
    desc: "Complete your basic training and take up your dream job in any of the Nexconz group of companies.",
    hover: "l",
  },
  {
    icon: HomeIcons.Intern,
    title: "Internship Opportunity",
    desc: "Become an intern at Nexdemy, master your skillset, and gain  access to your dream corporate life.",
    hover: "t",
  },
  {
    icon: HomeIcons.Practical,
    title: "Practical Experience",
    desc: "Complete your basic training and take up your dream job in any of the Nexconz group of companies.",
    hover: "r",
  },
  {
    icon: HomeIcons.CourseCompletion,
    title: "Course Completion Certificates",
    desc: "Earn your certificate of merit, embed it in your profile with pride, and help HR managers discover who you’re.",
    hover: "l",
  },
  {
    icon: HomeIcons.LinkedIn,
    title: "LinkedIn Endorsements",
    desc: "We don’t leave you astray once the program is done. We support you by recommending your profile to elite companies..",
    hover: "b",
  },
  {
    icon: HomeIcons.NexdemyNetwork,
    title: "Nexdemy Network",
    desc: "Become a part of our Nexdemy network where you can unlock thousands of job opportunities.",
    hover: "r",
  },
];

/*------------------------------------------------------
<================== home swiper data ===================>
------------------------------------------------------- */

export const HomeSwiperData = {
  headerText: "Testimonials",
  values: [
    {
      name: "Samsi Antony",
      course: "UX / UI Design",
      desc: "I was impressed with the quality of the training at Nexdemy. The trainers were passionate about the subject, and their enthusiasm was contagious. The course content was up-to-date and relevant, and I learned a lot about how to create engaging user experiences. I now have a greater appreciation for the importance of UI UX design, and I look forward to applying these principles in my work.",
      image: TestimonialImages.Testimonials1,
      id: "afsdadsfdff",
    },
    {
      name: "Mohan Raj",
      course: "UX / UI Design",
      desc: "I had the pleasure of attending Nexdemy's UI UX course, and I must say it was one of the best investments I have made for my career. The trainers were knowledgeable and experienced, and the course material was very practical and relevant. I am now equipped with the skills and tools to design user-centered interfaces that are both aesthetically pleasing and functional.",
      image: TestimonialImages.MohanRaj,
      id: "dfasdsafddf",
    },
    {
      name: "Tharan",
      course: "UX / UI Design",
      desc: "I highly recommend Nexdemy's UI UX training for anyone looking to improve their design skills. The course was well-structured, and the trainers were very supportive throughout. I learned how to conduct user research, create wireframes, and design prototypes that truly meet the needs of users. Thanks to Nexdemy, I feel more confident and competent in my work.",
      image: TestimonialImages.Tharan,
      id: "fasdadsfasdff",
    },
    {
      name: "Bharath",
      course: "Frontend Development",
      desc: "I had an amazing experience learning front end development from Nexdemy. The trainers are highly skilled and knowledgeable, and they made the learning process engaging and interactive. The course curriculum is up-to-date with the latest industry trends, and I was able to build a strong foundation in front end development. Thanks to Nexdemy, I was able to land my dream job in the tech industry.",
      image: TestimonialImages.Bharath,
      id: "asdfqrweqr",
    },
    {
      name: "Sunith",
      course: "UX / UI Design",
      desc: "Nexdemy's UI UX training has been a game-changer for me. The trainers provided a lot of hands-on practice, and I was able to apply the concepts I learned immediately. The course covered everything from design principles to design thinking, and I feel like I have a solid foundation in UI UX design. I am excited to continue building on this knowledge and taking my career to the next level.",
      image: TestimonialImages.Sunith,
      id: "asdfasdr24",
    },
  ],
};

/*----------------------------------------------
<================== faq data ===================>
----------------------------------------------- */

export const FaqData = [
  {
    q: "How do I get the UI UX certification?",
    a: "To get the Nexdemy certification, you need to complete the entire course and pass the assessment at the end. The assessment will test your knowledge and skills in your desired field, and upon passing, you will receive a digital certificate that you can showcase on your resume or LinkedIn profile.",
  },
  {
    q: "How to channelize my career after Nexdemy training?",
    a: "Nexdemy's training is designed to equip you with the skills and knowledge you need to pursue a career in your desired field. After completing the course, you can apply for your desired positions in various industries such as tech, healthcare, finance, and more. You can also work as a freelancer.",
  },
  {
    q: "I have no prior working experience. Will Nexdemy course benefit me?",
    a: "Absolutely! Nexdemy's courses are suitable for beginners who have no prior working experience. The course starts with the basics and gradually builds up your skills and knowledge in your desired field. Whether you're a fresh graduate, a career changer, or someone who wants to upskill, the course can help you achieve your goals.",
  },
  {
    q: "Can engineering students too apply for Nexdemy courses?",
    a: "Yes, engineering students can apply for Nexdemy's courses. The course is open to anyone who is interested in IT skills and wants to learn the skills and knowledge needed to succeed in this field.",
  },
  {
    q: "Is degree mandatory to join the Nexdemy course online?",
    a: "No, a degree is not mandatory to join Nexdemy's course online. The course is open to anyone who has a passion for IT skills and wants to learn more about it. However, having a degree in a relevant field such as graphic design, computer science, or psychology can be an added advantage.",
  },
];

// for ui-ux

export const FaqDataUiUx = [
  {
    q: "How do I get the UI UX certification? ",
    a: "To get the UI UX certification from Nexdemy, you need to complete the UI UX course, which covers topics such as design principles, user research, wireframing, prototyping, and user testing. Upon completion of the course, you will need to pass the final assessment to receive your certification.",
  },
  {
    q: "How to channelize my career after UI UX training?",
    a: "After completing the UI UX training from Nexdemy, you can explore various career opportunities in UI UX design. You can work as a UI UX designer in various industries such as tech, healthcare, finance, and more. You can also work as a freelancer or start your own UI UX design business. The skills and knowledge you gain from the course can help you excel in your career and achieve your goals.",
  },
  {
    q: "I have no prior experience in design. Will this UI UX course benefit me?",
    a: "Yes, even if you have no prior experience in design, the UI UX course from Nexdemy can benefit you. The course is designed to start from the basics and gradually build your skills and knowledge in UI UX design. The course covers everything from design principles to user research to prototyping and testing. With the help of the course trainers, you can develop a solid understanding of UI UX design and apply it to your work.",
  },
  {
    q: "Can engineering students too apply for UI UX design course?",
    a: "Yes, engineering students can apply for the UI UX design course at Nexdemy. The course is open to anyone who is interested in UI UX design and wants to learn the skills and knowledge needed to succeed in this field. Engineering students can benefit from the course as it can help them understand how to design user-centered interfaces and create better user experiences.",
  },
  {
    q: "Is degree mandatory to join the UI UX course online?",
    a: "No, having a degree is not mandatory to join the UI UX course online at Nexdemy. The course is open to anyone who has a passion for UI UX design and wants to learn more about it. However, having a degree in a relevant field such as graphic design, computer science, or psychology can be an added advantage. The course trainers will guide you through the concepts and skills needed to succeed in UI UX design.",
  },
];

// for frontend

export const FaqDataFrontEnd = [
  {
    q: "How do I get the front end development course certification? ",
    a: "To get the front-end development course certification from Nexdemy, you need to complete the course, which covers topics such as HTML, CSS, JavaScript, jQuery, and more. Upon completion of the course, you will need to pass the final assessment to receive your certification.",
  },
  {
    q: "How to channelize my career after front end development course training? ",
    a: "After completing the front-end development training from Nexdemy, you can explore various career opportunities in front-end development. You can work as a front-end developer in various industries such as tech, e-commerce, finance, and more. You can also work as a freelancer or start your own front-end development business. The skills and knowledge you gain from the course can help you excel in your career and achieve your goals.",
  },
  {
    q: "I have no prior experience in front end. Will this front end development course course benefit me?",
    a: "Yes, even if you have no prior experience in front-end development, the course from Nexdemy can benefit you. The course is designed to start from the basics and gradually build your skills and knowledge in front-end development. The course covers everything from HTML to CSS to JavaScript. With the help of the course trainers, you can develop a solid understanding of front-end development and apply it to your work.",
  },
  {
    q: "Can engineering students too apply for front end development course?",
    a: "Yes, engineering students can apply for the front-end development course at Nexdemy. The course is open to anyone who is interested in front-end development and wants to learn the skills and knowledge needed to succeed in this field. Engineering students can benefit from the course as it can help them understand how to build web applications and create better user experiences.",
  },
  {
    q: "Is degree mandatory to join the front end development course online?",
    a: "No, having a degree is not mandatory to join the front-end development course online at Nexdemy. The course is open to anyone who has a passion for front-end development and wants to learn more about it. However, having a degree in a relevant field such as computer science or information technology can be an added advantage. The course trainers will guide you through the concepts and skills needed to succeed in front-end development.",
  },
];

// for graphic

export const FaqDataGraphic = [
  {
    q: "How do I get the graphic design certification?",
    a: "To get the graphic design certification from Nexdemy, you need to complete the graphic design course, which covers topics such as design principles, typography, color theory, branding, and more. Upon completion of the course, you will need to pass the final assessment to receive your certification.",
  },
  {
    q: "How to channelize my career after graphic design training? ",
    a: "After completing the graphic design training from Nexdemy, you can explore various career opportunities in graphic design. You can work as a graphic designer in various industries such as advertising, publishing, branding, and more. You can also work as a freelancer or start your own graphic design business. The skills and knowledge you gain from the course can help you excel in your career and achieve your goals.",
  },
  {
    q: "I have no prior experience in design. Will this graphic design course benefit me?",
    a: "Yes, even if you have no prior experience in design, the graphic design course from Nexdemy can benefit you. The course is designed to start from the basics and gradually build your skills and knowledge in graphic design. The course covers everything from design principles to typography to branding. With the help of the course trainers, you can develop a solid understanding of graphic design and apply it to your work.",
  },
  {
    q: "Can engineering students too apply for graphic design course?",
    a: "Yes, engineering students can apply for the graphic design course at Nexdemy. The course is open to anyone who is interested in graphic design and wants to learn the skills and knowledge needed to succeed in this field. Engineering students can benefit from the course as it can help them understand how to design visually appealing interfaces and create better user experiences.",
  },
  {
    q: "Is degree mandatory to join the graphic design course online? ",
    a: "No, having a degree is not mandatory to join the graphic design course online at Nexdemy. The course is open to anyone who has a passion for graphic design and wants to learn more about it. However, having a degree in a relevant field such as art, media, or communication can be an added advantage. The course trainers will guide you through the concepts and skills needed to succeed in graphic design.",
  },
];

// for python

export const FaqDataPython = [
  {
    q: "Python Programming Basics for Beginners?",
    a: "No, having a degree is not mandatory to join the front-end development course online at Nexdemy. The course is open to anyone who has a passion for front-end development and wants to learn more about it. However, having a degree in a relevant field such as computer science or information technology can be an added advantage. The course trainers will guide you through the concepts and skills needed to succeed in front-end development.",
  },
  {
    q: "Python Data Structure ",
    a: "No, having a degree is not mandatory to join the front-end development course online at Nexdemy. The course is open to anyone who has a passion for front-end development and wants to learn more about it. However, having a degree in a relevant field such as computer science or information technology can be an added advantage. The course trainers will guide you through the concepts and skills needed to succeed in front-end development.",
  },
  {
    q: "Python Conditional Loops",
    a: "No, having a degree is not mandatory to join the front-end development course online at Nexdemy. The course is open to anyone who has a passion for front-end development and wants to learn more about it. However, having a degree in a relevant field such as computer science or information technology can be an added advantage. The course trainers will guide you through the concepts and skills needed to succeed in front-end development.",
  },
  {
    q: "Python Strings",
    a: "No, having a degree is not mandatory to join the front-end development course online at Nexdemy. The course is open to anyone who has a passion for front-end development and wants to learn more about it. However, having a degree in a relevant field such as computer science or information technology can be an added advantage. The course trainers will guide you through the concepts and skills needed to succeed in front-end development.",
  },
  {
    q: "Python Functions ",
    a: "No, having a degree is not mandatory to join the front-end development course online at Nexdemy. The course is open to anyone who has a passion for front-end development and wants to learn more about it. However, having a degree in a relevant field such as computer science or information technology can be an added advantage. The course trainers will guide you through the concepts and skills needed to succeed in front-end development.",
  },
  {
    q: "Python File Handling ",
    a: "No, having a degree is not mandatory to join the front-end development course online at Nexdemy. The course is open to anyone who has a passion for front-end development and wants to learn more about it. However, having a degree in a relevant field such as computer science or information technology can be an added advantage. The course trainers will guide you through the concepts and skills needed to succeed in front-end development.",
  },
  {
    q: "Python Data Science ",
    a: "No, having a degree is not mandatory to join the front-end development course online at Nexdemy. The course is open to anyone who has a passion for front-end development and wants to learn more about it. However, having a degree in a relevant field such as computer science or information technology can be an added advantage. The course trainers will guide you through the concepts and skills needed to succeed in front-end development.",
  },
  {
    q: "Python List ",
    a: "No, having a degree is not mandatory to join the front-end development course online at Nexdemy. The course is open to anyone who has a passion for front-end development and wants to learn more about it. However, having a degree in a relevant field such as computer science or information technology can be an added advantage. The course trainers will guide you through the concepts and skills needed to succeed in front-end development.",
  },
];

/*---------------------------------------------------------
<================== about trainer cards ===================>
--------------------------------------------------------- */

export const AboutTrainerCards = [
  {
    image: AboutImages.Akhil,
    title: "Akileshwaran",
    dept: "UX / UI Design",
  },
  {
    image: AboutImages.Viki,
    title: "Vignesh",
    dept: "UX / UI Design",
  },
  {
    image: AboutImages.Sajin,
    title: "Sajin Mon",
    dept: "Graphic Designer",
  },
  {
    image: AboutImages.Laks,
    title: "Lakshmi Narayanan",
    dept: "Frontend Development",
  },
  {
    image: CommonImages.FemaleAvatar,
    title: "Vigneshwari",
    dept: "React &React Native",
  },
  {
    image: AboutImages.Prabha,
    title: "Prabakaran",
    dept: "Node JS & Python Development",
  },
  {
    image: AboutImages.Prabha,
    title: "Prabakaran",
    dept: "Backend Development",
  },
  {
    image: AboutImages.Thamarai,
    title: "Thamaraikannan",
    dept: "3D Design",
  },
  {
    image: AboutImages.Gowtham,
    title: "Gowthaman",
    dept: "Unreal Development",
  },

  // {
  //   image: CommonImages.MaleAvatar,
  //   title: "Lokesh Kumar",
  //   dept: "SEO & SEM",
  // },
];

/*------------------------------------------------------------
<================== about philosophy cards ===================>
------------------------------------------------------------- */

export const AboutPhilCards = [
  {
    t: "Learning at Nexdemy",
    d: "Nexdemy makes learning challenging and fun. You will be involved in real-time client projects and will be guided by mentors and project leaders throughout your course period.",
    i: AboutIcons.Book,
  },
  {
    t: "Collaborative Environment",
    d: "Synergetic training ambience that fosters leadership and socializing skills alongside learning.",
    i: AboutIcons.Family,
  },
  {
    t: "Career Guidance",
    d: "Nexdemy trainers offer free career guidance sessions to help you effectively streamline your professional path for success.",
    i: AboutIcons.Guidance,
  },
];

/*---------------------------------------------------------
<================== course tools cards ===================>
----------------------------------------------------------- */

// for ui-ux

export const CourseToolCardUiUx = [
  {
    t: "Adobe Photoshop",
    i: CourseIcons.Ps,
  },
  {
    t: "Adobe Illustrator",
    i: CourseIcons.Ai,
  },
  {
    t: "Adobe XD",
    i: CourseIcons.Xd,
  },
  {
    t: "Figma",
    i: CourseIcons.Figma,
  },
];

// for frontend

export const CourseToolCardFrontEnd = [
  {
    t: "HTML",
    i: CourseIconsFrontEnd.Html5,
  },
  {
    t: "CSS",
    i: CourseIconsFrontEnd.Css3,
  },
  {
    t: "JAVASCRIPT",
    i: CourseIconsFrontEnd.Javascript,
  },
  {
    t: "ANGULAR",
    i: CourseIconsFrontEnd.Angular,
  },
  {
    t: "REACT",
    i: CourseIconsFrontEnd.React,
  },
];

// for graphic

export const CourseToolCardGraphic = [
  {
    t: "Adobe Photoshop",
    i: CourseIconsGraphic.Ps,
  },
  {
    t: "Adobe Illustrator",
    i: CourseIconsGraphic.Ai,
  },
  {
    t: "Lightroom",
    i: CourseIconsGraphic.Lightroom,
  },
  {
    t: "Indesign",
    i: CourseIconsGraphic.Indesign,
  },
];

/*--------------------------------------------------------------------------
<================== kye cards data for all course pages  ===================>
--------------------------------------------------------------------------- */

// for ui-ux page

export const KeyCardsDataUiUx = [
  {
    t: "Skillset",
    d: "UI UX design course from Nexdemy helps the trainees master the skills involved in developing an appealing user interface in both mobile and web applications.",
  },
  {
    t: "Expertise",
    d: "Our UI UX design course syllabus has been framed based on the insights from the top UI/UX design masters who hold expertise in user experience design.",
  },
  {
    t: "For beginners",
    d: "Nexdemy’s UI UX design course for beginners is aimed at helping them possess strong knowledge over the basics through multiple practical sessions.",
  },
  {
    t: "Placement",
    d: "Upon course completion, students are largely benefited because it is one of the few UI UX design course with placement offers from corporate firms.",
  },
  {
    t: "Flexibility",
    d: "It is touted to be the best UI UX design course for both beginners and working professionals because the curriculum is a blend of both levels.",
  },
  {
    t: "Certification",
    d: "The UI/UX design course certificate helps our students showcase their ability during the times of interviews at corporate organizations.",
  },
];

// for frontend

export const KeyCardsDataFrontend = [
  {
    t: "Skillset",
    d: "Front end development course from Nexdemy helps the students in choosing and creating the structure and design of a web page.",
  },
  {
    t: "Expertise",
    d: "Our Front end development course curriculum has been formed under the guidance of expert front end web developers who hold nearly a decade of experience. ",
  },
  {
    t: "For beginners",
    d: "Nexdemy’s front end web development course for newcomers is entirely framed to help them possess a very good understanding and application of the basics. ",
  },
  {
    t: "Placement",
    d: "At the end of the course, students benefit a lot because it is the best front end developer course that offers placement support too. ",
  },
  {
    t: "Flexibility",
    d: "Nexdemy’s front end development course online is appropriate for both beginners and mature professionals because the module is a blend of both levels for advancement.",
  },
  {
    t: "Certification",
    d: "Nexdemy’s front end development online course with certification better helps our students to demonstrate their skills in company interviews.",
  },
];

// for graphic

export const KeyCardsDataGraphic = [
  {
    t: "Skillset",
    d: "Graphic design course from Nexdemy enables the trainees specialize the skills involved in leveraging text and images to narrate stories to the audience.",
  },
  {
    t: "Expertise",
    d: "Our graphic design course syllabus has been devised based on the inputs from the skillful graphic designers who hold proficiency in the graphic design domain.",
  },
  {
    t: "For beginners",
    d: "Nexdemy’s graphic design course for beginners is exclusively designed to help them gain a strong foundation over the basics with numerous practice sessions. ",
  },
  {
    t: "Placement",
    d: "By the end of the course, students are greatly benefited because it’s the best graphic design course with placement offers from IT organizations.",
  },
  {
    t: "Flexibility",
    d: "Nexdemy’s graphic designing course is suitable for both newcomers and experienced professionals because the syllabus is a fine mix of both levels.",
  },
  {
    t: "Certification",
    d: "The graphic design course certificate better assists our students in displaying their skillset during interviews with companies.",
  },
];

export const KeyCardsDataPython = [
  {
    t: "Skillset",
    d: "Learn industry-relevant skills with hands-on training in Python programming language at Nexdemy’s Python classes in Chennai.",
  },
  {
    t: "Expertise",
    d: "Our trainers have extensive experience and expertise in Python to guide you toward success.",
  },
  {
    t: "For beginners",
    d: "Our Python course in Chennai is designed for beginners with no prior programming experience. ",
  },
  {
    t: "Placement",
    d: "Our Python course in Chennai with placement includes guidance from our experienced team to land your dream job.",
  },
  {
    t: "Flexibility",
    d: "Nexdemy’s graphic designing course is suitable for both newcomers and experienced professionals because the syllabus is a fine mix of both levels.",
  },
  {
    t: "Certification",
    d: "The graphic design course certificate better assists our students in displaying their skillset during interviews with companies.",
  },
];

export const KeyCardsDataNodejs = [
  {
    t: "Skillset",
    d: "Learn Node JS by acquiring a comprehensive skillset, including backend development, web application creation, and API integration.",
  },
  {
    t: "Expertise",
    d: "Learn Node JS from industry experts with hands-on Node JS training, real-world projects, and expert guidance to become a proficient Node JS developer.",
  },
  {
    t: "For beginners",
    d: "Ideal for beginners, this Node JS course provides a step-by-step approach to Node JS programming, convering the fundamentals and advanced concepts. ",
  },
  {
    t: "Placement",
    d: "Get assistance with job placement through our extensive industry network, and showcase your skills with a certified completion on Node JS course.",
  },
  {
    t: "Flexibility",
    d: "Choose from flexible Node JS training options-online or classroom-based training, with personalized schedules to suit  your learning style.",
  },
  {
    t: "Certification",
    d: "Get certified upon completion of your Node JS course, and showcase your skills and expertise in Node JS to potential employers.",
  },
];
/*----------------------------------------------------------
<================== training models card ===================>
---------------------------------------------------------- */

// for ui-ux

export const TrainModelCards = [
  {
    image: UiUxImages.ClassRoomTraining,
    t: "Classroom Training",
    d: [
      "Get trained by our tutors in UI UX design classroom training program at Nexdemy’s training center.",
      "Interactive real-time live training sessions help you learn and improve at a better pace.",
    ],
    button: {
      val: "Enquiry Now",
      type: 1,
    },
  },
  {
    image: UiUxImages.OnlineTraining,
    t: "Online Training",
    d: [
      "Take up trainers-led UI UX design course online with the option to download all the training videos.",
      "Become a pro by attending the UI UX design course online from the comfort of your own home.",
    ],
    button: {
      val: "Enquiry Now",
      type: 1,
    },
  },
];

// for front end

export const TrainModelCardsFrontEnd = [
  {
    image: UiUxImages.ClassRoomTraining,
    t: "Classroom Training",
    d: [
      "Get trained by our experts in front end development classroom training program at Nexdemy’s training center.",
      "Jump start your career by participating in this real-time interactive front-end training program.",
    ],
    button: {
      val: "Enquiry Now",
      type: 1,
    },
  },
  {
    image: UiUxImages.OnlineTraining,
    t: "Online Training",
    d: [
      "Take up instructors-led front end development courses online with the feature to download all the training videos.",
      "Become a front-end pro by learning the front end development course online from your own home.",
    ],
    button: {
      val: "Enquiry Now",
      type: 1,
    },
  },
];

// for graphic

export const TrainModelCardsGraphic = [
  {
    image: UiUxImages.ClassRoomTraining,
    t: "Classroom Training",
    d: [
      "Get trained by our trainers in graphic design classroom training program at Nexdemy’s training center.",
      "Give a headstart to your career by participating in this interactive training program.",
    ],
    button: {
      val: "Enquiry Now",
      type: 1,
    },
  },
  {
    image: UiUxImages.OnlineTraining,
    t: "Online Training",
    d: [
      "Take up tutors-led graphic design course online with the provision to download all the training videos.",
      "Become a professional by learning the graphic design course online from your own home.",
    ],
    button: {
      val: "Enquiry Now",
      type: 1,
    },
  },
];

/*------------------------------------------------------
<================== syllabus points ===================>
------------------------------------------------------- */

// for ui-ux

export const pointsUiUx = [
  "Introduction",
  "Research",
  "Analyse & Define",
  "User Flows & Sitemaps",
  "Navigation & Interaction design",
  "Grid and UI components",
  "UI Design in Figma",
  "Color & Typography",
  "Visual Design and Hierarchy",
  "Usability Testing",
  "Case Study",
  "Resume & Presentation",
];

// for frontend

export const pointsFrontend = [
  "Introduction and overview of the web technologies",
  "Installation and setting up environments in local machines for the Development",
  "Basics of Html and to advance Level of Html tags & attributes",
  "Basic to Advanced level of Css properties and types of stylesheets and how to handle them with html",
  "Basic level tasks and challenges with html & css",
  "Introduction to Javascript and deeper understanding of javascript functions ,classes, statements, loops, form validations and events handlings",
  "Angular overview and Architecture of Angular, Fundamentals  of Typescript and understanding of NPM then how to work with VS code editor with angular ",
  "deep understanding of angular , MVC patterns,Directives, components , , modules and Structures",
  "Routings and Navigations ,Event Handling and Building Reusable Components , Reactive Forms.",
  "Tasks and Challenges based on angular ",
];
// for python

export const pointsPython = [
  "Introduction and overview of the web technologies",
  "Installation and setting up environments in local machines for the Development",
  "Basics of Html and to advance Level of Html tags & attributes",
  "Basic to Advanced level of Css properties and types of stylesheets and how to handle them with html",
  "Basic level tasks and challenges with html & css",
  "Introduction to Javascript and deeper understanding of javascript functions ,classes, statements, loops, form validations and events handlings",
  "Angular overview and Architecture of Angular, Fundamentals  of Typescript and understanding of NPM then how to work with VS code editor with angular ",
  "deep understanding of angular , MVC patterns,Directives, components , , modules and Structures",
  "Routings and Navigations ,Event Handling and Building Reusable Components , Reactive Forms.",
  "Tasks and Challenges based on angular ",
];

// for frontend

export const pointsGraphics = [
  {
    name: "Adobe Photoshop ",
    points: [
      "INTRODUCTION OF PHOTOSHOP",
      "TOOLS AND USAGES",
      "COLORS & ADJUSTMENT LAYERS",
      "COLOR GRADING",
      "IMAGE BACKGROUND CORRECTIONS AND CHANGES",
      "HIGH-END",
    ],
  },
  {
    name: "Adobe Illustrator ",
    points: [
      "INTERFACE INTRODUCTION",
      "LOGO DESIGNING",
      "DIGITAL ILLUSTRATION",
      "ADVERTISEMENT DESIGNING",
      "POSTER DESIGNING",
      "MENU CARD DESIGNING",
      "PRACTICAL DESIGN ASSIGNMENTS",
    ],
  },
  {
    name: "Adobe Indesign",
    points: [
      "INTERFACE INTRODUCTION",
      "CREATING A NEWSLETTER",
      "MAGAZINE DESIGNING",
      "WORKING WITH LONG DOCUMENT",
    ],
  },
];

/*--------------------------------------------------------
<==================  course page cards  ===================>
--------------------------------------------------------- */

export const CourseCards = [
  {
    image: HomeImages.UiUxGif,
    title: "UX / UI",
    type: "all,design",
    button: {
      val: "Learn more",
      type: 1,
    },
  },
  {
    image: HomeImages.GraphicCourse,
    title: "Graphic Design",
    type: "all,design",
    button: {
      val: "Learn more",
      type: 1,
    },
  },
  {
    image: HomeImages.FrontEndDevCourse,
    title: "Angular",
    type: "all,frontend development",
    button: {
      val: "Learn more",
      type: 1,
    },
  },
  {
    image: HomeImages.ReactCourse,
    title: "React",
    type: "all,frontend development",
    button: {
      val: "Learn more",
      type: 1,
    },
  },
  {
    image: HomeImages.NodeJsCourse,
    title: "Node JS",
    type: "all,backend development",
    button: {
      val: "Coming Soon",
      type: 1,
    },
  },
  {
    image: HomeImages.PythonCourse,
    title: "Python",
    type: "all,backend development",
    button: {
      val: "Coming Soon",
      type: 1,
    },
  },
  {
    image: HomeImages.ThreeDimesionCourse,
    title: "3D Design",
    type: "all,3d & animation",
    button: {
      val: "Coming Soon",
      type: 1,
    },
  },
  {
    image: HomeImages.GameDevCourse,
    title: "Game Development Using Unreal 5",
    type: "all,game development",
    button: {
      val: "Coming Soon",
      type: 1,
    },
  },
  {
    image: HomeImages.ReactNativeCourse,
    title: "React Native",
    type: "all,mobile apps",
    button: {
      val: "Coming Soon",
      type: 1,
    },
  },
  {
    image: HomeImages.FlutterCourse,
    title: "Flutter",
    type: "all,mobile apps",
    button: {
      val: "Coming Soon",
      type: 1,
    },
  },
  {
    image: HomeImages.SeoCourse,
    title: "Search Engine Optimization",
    type: "all,digital marketing",
    button: {
      val: "Coming Soon",
      type: 1,
    },
  },
  {
    image: HomeImages.SemCourse,
    title: "Search Engine Marketing",
    type: "all,digital marketing",
    button: {
      val: "Coming Soon",
      type: 1,
    },
  },
];

/*------------------------------------------------------
<================== to get page data ===================>
------------------------------------------------------- */

export function getPageData(page) {
  var data = [];
  switch (page) {
    // for ui ux page

    case "ui-ux-design":
      data = {
        sectionOne: {
          imageOrder: 2,
          descOrder: 1,
          image: UiUxImages.UiUxBanner,
          t: "UX UI Design Course",
          d: "Unlock your creativity with Nexdemy's UI/UX design course. Learn to design user-centered interfaces, wireframes, and prototypes with our expert trainers. Get hands-on experience and kickstart your design career today!",
          button: {
            val: "Register Now",
            type: 1,
          },
        },
        sectionTwo: {
          title: "Key Highlights of UI UX Design Course",
          desc: "Get industry-relevant UI/UX design training from experienced professionals and build a strong foundation to kickstart your design career with our UI/UX course.",
          keyCardsData: KeyCardsDataUiUx,
        },
        sectionThree: {
          image: UiUxImages.UiUxDesignGif,
          t: "UI UX Design Course - A Brief Overview",
          d: "Learn to design seamless user experiences with our UI UX design course. Gain hands-on experience in creating intuitive interfaces that deliver exceptional user engagement.",
          p: "Our UI UX design course offers a comprehensive curriculum that covers the entire design process, from research and ideation to prototyping and user testing. Through a blend of theoretical and practical training, you'll gain the skills needed to design intuitive interfaces, enhance user engagement, and create a seamless user experience across various digital platforms.",
        },
        sectionFour: {
          image: UiUxImages.UiUxLearnGif,
          t: "What do you learn in the UX / UI Course?",
          d: "Master the art of creating intuitive, user-friendly interfaces with our comprehensive UI/UX design course.",
          p: "In our UI/UX course, we provide extensive training on research methodologies to help you understand the target audience and their needs. You'll learn to draw wireframes that communicate the core structure of a design and explore various layout options. We'll also teach you the nuances of client handling to manage projects effectively. Our course offers hands-on training on industry-standard tools such as Figma, Adobe XD, Photoshop, and Illustrator. You'll learn to use these tools to create visually stunning designs that are functional and user-friendly. We'll help you build a portfolio that showcases your work and highlights your design process. We'll also guide you on setting up a professional LinkedIn profile to create a strong online presence and improve your employability. Finally, we'll provide you with interview preparation guidance, including resume-building and interview tips, to help you crack the interview and land your dream job in the UI/UX field.",
        },
        sectionFive: {
          image: UiUxImages.UiUxStudGif,
          t: "Who should take up this UI/UX Design course?",
          d: "Individuals who are keen to utilize their creative abilities to break away from their mundane daily routine or those who desire to embark on a new career path.",
          p: "College freshers, Graduates of any degree, Graphic Designers, Visual Designers, Business Analysts, Instructional Designers, Developers, Project Managers, Entrepreneurs, and Managing Directors/CEO.",
        },
        sectionSix: {
          t: "Tools Covered",
          d: "Master the essential design tools with Nexdemy's UI/UX training program.",
          courseCardData: CourseToolCardUiUx,
        },
        sectionSeven: {
          t: "UI UX Design Course Training Models",
          d: "Transform your design skills with Nexdemy's two types of comprehensive UI/UX training models.",
          TrainModelCards: TrainModelCards,
        },
        sectionEight: {
          path: page,
          image: UiUxImages.UiUxSyllabus,
          t: "UI UX Design Course Syllabus",
          d: "Master the art of user-centered design and create intuitive interfaces with our comprehensive UI/UX course syllabus.",
          points: pointsUiUx,
        },
        sectionNine: {
          t: "Your UX / UI Trainers",
          d: "Our experienced UI/UX trainers are industry professionals who are passionate about sharing their knowledge.",
          AboutTrainerCards: AboutTrainerCards.filter(
            (i) => i.dept === "UX / UI Design"
          ),
        },
        slide: {
          t: "Check what our students say about us",
          d: "Discover how Nexdemy transformed our students' careers through their testimonials and success stories.",
        },
        faq: {
          t: "Frequently asked questions",
          faqData: FaqDataUiUx,
        },
      };

      return data;

    // for frontend page

    case "frontend-development":
      data = {
        sectionOne: {
          image: FrontEndImages.FrontEndDevBanner,
          t: "Front End Development Course",
          d: "Join Nexdemy's front end development course to become a proficient web developer. Learn HTML, CSS, JavaScript, and other essential tools to design and develop interactive web pages. Get industry-ready skills and start your coding journey today!",
          button: {
            val: "Register Now",
            type: 1,
          },
        },
        sectionTwo: {
          title: "Key Highlights of Front End Development Course",
          desc: "Unlock your creative potential and gain practical skills with our Front End Development course, designed to help you build modern, responsive websites.",
          keyCardsData: KeyCardsDataFrontend,
        },
        sectionThree: {
          image: FrontEndImages.BriefFrontEnd,
          t: "Front End Development Course - A brief overview",
          d: "Transform your passion for coding into a career with Nexdemy's Front End Development course.",
          p: "The Front End Development course offers a comprehensive understanding to aspiring front end developers on what goes into designing the style and user interfaces of websites. This course will help you learn front end development from scratch as well as the major tools and technologies in it. Register in our front end development course and get started today. ",
        },
        sectionFour: {
          image: FrontEndImages.FrontEndDevLearn,
          t: "What Do You Learn in the Front End Development Course?",
          d: "Master the art of creating stunning and interactive websites through our comprehensive front-end development course.",
          p: "You will learn the latest technologies, including HTML, CSS, Javascript, React, Node, Angular and even Web3 development. You will master all the prominent tools, becoming a certified front-end developer by the end of the course. After the course you will be able to build any website you want. Build fully-fledged websites and web apps for your startup or business. Master frontend development with React. Learn professional developer best practices.",
        },
        sectionFive: {
          image: FrontEndImages.FrontEndFifth,
          t: "Who Should Take Up This Front End Development Course?",
          d: "Unlock endless possibilities for your career with our front-end development course tailored for beginners and professionals alike.",
          p: "Programming enthusiasts, aspiring graduates, freshers, and professionals who wish to swap industries. ",
        },
        sectionSix: {
          t: "Tools Covered",
          d: "Build your toolkit with the latest and most in-demand front-end development tools through our comprehensive course.",
          courseCardData: CourseToolCardFrontEnd,
        },
        sectionSeven: {
          t: "Front End Development Course Training Models",
          d: "Choose the perfect training model to master front-end development and elevate your career.",
          TrainModelCards: TrainModelCardsFrontEnd,
        },
        sectionEight: {
          path: page,
          image: FrontEndImages.FrontendSyllabus,
          t: "Front End Development Course Syllabus",
          d: "Stay ahead of the game with our up-to-date and comprehensive front-end development course syllabus.",
          points: pointsFrontend,
        },
        sectionNine: {
          t: "Our Front End Development Course Trainers",
          d: "Learn from the best in the industry with our team of experienced and skilled front-end development course trainers.",
          AboutTrainerCards: AboutTrainerCards.filter(
            (i) => i.dept === "Frontend Development"
          ),
        },
        slide: {
          t: "Check what our students say about us",
          d: "Hear from our satisfied students who have successfully transformed their careers with our front-end development course.",
        },
        faq: {
          t: "Frequently asked questions",
          faqData: FaqDataFrontEnd,
        },
      };

      return data;

    // for graphic design page

    case "graphic-design":
      data = {
        sectionOne: {
          imageOrder: 2,
          descOrder: 1,
          image: GraphicImages.GraphicDesignBanner,
          t: "Graphic Design Course",
          d: "Transform your imagination into reality with Nexdemy's graphic design course. Learn to create stunning visuals for print and digital media. Our practical training equips you with the skills to excel in the design industry.",
          button: {
            val: "Register Now",
            type: 1,
          },
        },
        sectionTwo: {
          title: "Key Highlights of Graphic Design Course",
          desc: "Discover your creativity and unleash your imagination with our Graphic Design course, designed to teach you the skills and techniques needed to excel.",
          keyCardsData: KeyCardsDataGraphic,
        },
        sectionThree: {
          image: GraphicImages.GraphicCourseBrief,
          t: "Graphic Design Course - A Brief Overview",
          d: "Discover the exciting world of graphic design with our brief overview - Nexdemy has everything you need to get started today!",
          p: "Nexdemy graphic course online is framed with guidance from experts and based on the current technological trends to better help the students in designing social media posters to print ads of all sizes and mediums. Our graphic design course online benefits both newcomers and competent graphic designers in their career progression through practical exposure to client works.",
        },
        sectionFour: {
          image: GraphicImages.GraphicLearn,
          t: "What Do You Learn in the Graphic Design Course?",
          d: "Get a comprehensive education in graphic design - our course at Nexdemy covers all the essential skills.",
          p: "Gain a deeper understanding of typography, color concepts, images, layout mechanisms, and other design techniques. Comprehend and master the three important graphic design software - Adobe Photoshop, Illustrator and InDesign. Learn image design, editing and overall manipulation in Adobe Photoshop. Excel in using the all the important design tools in Adobe Illustrator. Learn creating newspaper spreads and magazine layouts using Adobe InDesign. Learn predicting the future design trends and undertake projects that require expertise of the latest technologies. ",
        },
        sectionFive: {
          image: GraphicImages.GraphicFifth,
          t: "Who Should Take Up This Graphic Design Course?",
          d: "Our graphic design course is perfect for anyone looking to start a career in this exciting field.",
          p: "Web developerWeb designers,s, Product designers, Aspiring graduates.",
        },
        sectionSix: {
          t: "Tools Covered",
          d: "Master the essential tools and software of graphic design with Nexdemy's comprehensive course.",
          courseCardData: CourseToolCardGraphic,
        },
        sectionSeven: {
          t: "Graphic Design Course Training Models",
          d: "Flexible training models tailored to your needs - choose the approach that works best for you.",
          TrainModelCards: TrainModelCardsGraphic,
        },
        sectionEight: {
          path: page,
          t: "Graphic Design Course Syllabus",
          d: "Explore our detailed course syllabus at Nexdemy and unleash your creative potential!",
          points: pointsGraphics,
        },
        sectionNine: {
          t: "Our Graphic Design Trainers",
          d: "Learn from the best in the industry - our expert trainers have a passion for sharing their knowledge. ",
          AboutTrainerCards: AboutTrainerCards.filter(
            (i) =>
              i.dept === "Graphic Designer" ||
              i.dept === "2D / 3D & Graphic Design"
          ),
        },
        slide: {
          t: "Check what our students say about us",
          d: "Don't just take our word for it - see what our students have to say about their experience.",
        },
        faq: {
          t: "FAQs on Graphic Design Course",
          faqData: FaqDataGraphic,
        },
      };

      return data;

    // for python developer page
    case "python-development":
      data = {
        sectionOne: {
          imageOrder: 2,
          descOrder: 1,
          image: GraphicImages.GraphicDesignBanner,
          t: "Python Training in Chennai",
          d: "Master Python programming language with our comprehensive Python training in Chennai. Learn from industry experts and gain hands-on experience to become a skilled Python developer. Register now and steer your journey to success.",
          button: {
            val: "Register Now",
            type: 1,
          },
        },
        sectionTwo: {
          title: "Key Highlights of Python Training in Chennai at Nexdemy",
          desc: "Empower your coding skills with our comprehensive Python course in Chennai.",
          keyCardsData: KeyCardsDataGraphic,
        },
        sectionThree: {
          image: GraphicImages.GraphicCourseBrief,
          t: "Overview of Python Course in Chennai",
          d: "Master the dynamic programming language with our comprehensive Python institute in Chennai",
          p: "Nexdemy’s Python Training in Chennai provides hands-on experience in web development, data analysis, and more. The course covers basic and advanced concepts of Python programming with real-world projects. With expert guidance, you'll learn to use libraries, tools, and frameworks. Nexdemy offers the best python course in chennai because whether you're a beginner or an experienced programmer, our trainers will help you to master Python and open up exciting career opportunities.",
        },
        sectionFour: {
          image: GraphicImages.GraphicLearn,
          t: "What will you learn in this Python Certification Course in Chennai?",
          d: "Learn the most popular programming language in the world with our Python course",
          p: "In our Python Certification Course in Chennai, you will learn the basics of programming, data types, conditional statements, loops, functions, and file handling. You will also gain an understanding of advanced topics such as object-oriented programming, regular expressions, and databases. Furthermore, you will learn how to work with popular Python libraries such as NumPy, Pandas, and Matplotlib for data analysis and visualization. By the end of the course, you will have hands-on experience with real-world projects, allowing you to apply your newfound knowledge and skills in a practical setting. ",
        },
        sectionFive: {
          image: GraphicImages.GraphicFifth,
          t: "Who should take up this best Python Training in Chennai?",
          d: "Become a Python pro, regardless of your background - Join our comprehensive Python course today!",
          p: "Python is an open-source, high-level programming language that is gaining increasing popularity in the world of software development. Nexdemy’s Python training centre in Chennai is ideal for anyone who wants to learn this versatile language, including students, fresh graduates, working professionals, and even entrepreneurs. If you are a beginner, you can start with the basics and build your way up to advanced concepts. If you are a working professional, you can gain expertise in Python and add value to your career. Entrepreneurs can also benefit from learning Python and using it for data analysis, web development, and more. Overall, these are one of the best Python classes in Chennai because it is perfect for anyone who wants to gain in-demand skills and stay ahead of the competition in the fast-paced world of technology.",
        },
        sectionSix: {
          t: "Tools Covered",
          d: "Master the essential tools and software of graphic design with Nexdemy's comprehensive course.",
          courseCardData: CourseToolCardGraphic,
        },
        sectionSeven: {
          t: "Our Python Course Training Models",
          d: "Learn Python your way with our flexible and customized training models.",
          TrainModelCards: TrainModelCardsGraphic,
        },
        sectionEight: {
          path: page,
          image: FrontEndImages.FrontendSyllabus,
          t: "Why Nexdemy is one step ahead of all the other Python training institutes in Chennai?",
          d: "Discover why Nexdemy stands out from the rest of the Python training institutes in Chennai.",
          points: pointsPython,
        },
        sectionNine: {
          t: "Our Python Course Trainers",
          d: "Learn from the best to be the best - Our Python course trainers are industry experts with years of experience.",
          AboutTrainerCards: AboutTrainerCards.filter(
            (i) => i.dept === "Backend Development"
          ),
        },
        slide: {
          t: "Check what our students say about us",
          d: "See why our Python students prefer Nexdemy's training.",
        },
        faq: {
          t: "FAQs on Python Course",
          faqData: FaqDataGraphic,
        },
        syllabus: {
          t: "Syllabus of Python Training in Chennai",
          d: "Master the power of Python with our comprehensive training syllabus designed to take your skills to the next level!",
          faqData: FaqDataPython,
        },
        sectionFourth: {
          image: GraphicImages.GraphicLearn,
          t: "What are the prerequisites for taking this Python Certification Course from Python Training Institute in Chennai?",
          d: "Prepare for your Python journey with Nexdemy's prerequisite check. ",
          p: "At Nexdemy, we believe that anyone with a passion for programming and an eagerness to learn can take up our Python Certification Course in Chennai. However, to make the most of this course, we recommend that you have a basic understanding of programming concepts and logic, as well as a familiarity with any programming language. We also suggest that you have a computer with Python installed, and access to the internet to explore the latest libraries and frameworks.",
        },
        sectionFifth: {
          image: GraphicImages.GraphicLearn,
          t: "Why Should I learn Python Course in Chennai?",
          d: "Unlock limitless possibilities with Python - join the  best Python institute in Chennai.",
          p: "Python has become one of the most popular programming languages used in various domains such as web development, data science, machine learning, artificial intelligence, and more. Learning Python will open up endless opportunities for career growth and development. By enrolling in Nexdemy, the best coaching centre for Python in Chennai, you'll learn from expert trainers who provide hands-on training and real-world examples to help you gain mastery over the language. Our course is designed to equip you with industry-relevant skills, which will enable you to excel in your career and stand out from the competition. ",
        },
        sectionSixteen: {
          image: GraphicImages.GraphicCourseBrief,
          t: "What are the skills covered in Python Training in Chennai?",
          d: "Master the most in-demand skills with Python training in Chennai at Nexdemy. ",
          p: "At Nexdemy, our Python course in Chennai covers a comprehensive curriculum, including Python basics, data types, control flow, functions, modules, file handling, database connectivity, and advanced topics like OOP, GUI, and web development frameworks. You will also gain hands-on experience through real-world projects and assignments, which will prepare you for a career as a Python developer. Our expert trainers will guide you throughout the course and help you build a strong foundation in Python programming.",
        },
      };

      return data;

    case "nodejs-development":
      data = {
        sectionOne: {
          imageOrder: 2,
          descOrder: 1,
          image: HomeImages.NodeJsCourse,
          t: "Node JS Course",
          d: "Develop dynamic, scalable web applications with our Node JS course training. Learn Node JS by starting off with server-side programming, data handling, and more with hands-on projects. No prior experience is needed. Enroll now and kickstart your career!",
          button: {
            val: "Register Now",
            type: 1,
          },
        },
        sectionTwo: {
          title: "Key Highlights of Graphic Design Course",
          desc: "Discover your creativity and unleash your imagination with our Graphic Design course, designed to teach you the skills and techniques needed to excel.",
          keyCardsData: KeyCardsDataNodejs,
        },
        sectionThree: {
          t: "Why Node JS?",
          d: "Explore the endless possibilities of a rewarding career after completing your Node JS certification course.",
          courseCardData: CourseToolCardGraphic,
        },
        sectionFour: {
          image: GraphicImages.GraphicLearn,
          t: "Node JS Course - Overview",
          d: "Accelerate your web development career today with our best Node JS courses.",
          p: "Our Node JS cours is designed to provide you with a solid foundation in this popular technology, so you can begin building your own applications. In our Node JS training course, you will learn the fundamental concepts of Node JS framework, including asynchronous programming, event-driven programming, and building APIs. You will also gain hands-on experience in using Node JS to develop real-world applications, such as chat applications,e-commerce platforms, etc. ",
        },
        sectionFive: {
          image: GraphicImages.GraphicFifth,
          t: "What do you learn in the Node JS Course?",
          d: "Master the art of building fast and scalable network applications with our Node JS  Course.",
          p: "Web developerWeb designers,s, Product designers, Aspiring graduates.",
        },
        sectionSix: {
          t: "Tools Covered",
          d: "Master the essential tools and software of graphic design with Nexdemy's comprehensive course.",
          courseCardData: CourseToolCardGraphic,
        },
        sectionSeven: {
          t: "Graphic Design Course Training Models",
          d: "Flexible training models tailored to your needs - choose the approach that works best for you.",
          TrainModelCards: TrainModelCardsGraphic,
        },
        sectionEight: {
          path: page,
          t: "Graphic Design Course Syllabus",
          d: "Explore our detailed course syllabus at Nexdemy and unleash your creative potential!",
          points: pointsGraphics,
        },
        sectionNine: {
          t: "Our Graphic Design Trainers",
          d: "Learn from the best in the industry - our expert trainers have a passion for sharing their knowledge. ",
          AboutTrainerCards: AboutTrainerCards.filter(
            (i) =>
              i.dept === "Graphic Designer" ||
              i.dept === "2D / 3D & Graphic Design"
          ),
        },
        slide: {
          t: "Check what our students say about us",
          d: "Don't just take our word for it - see what our students have to say about their experience.",
        },
        faq: {
          t: "FAQs on Graphic Design Course",
          faqData: FaqDataGraphic,
        },
      };

      return data;

    default:
      break;
  }
}
