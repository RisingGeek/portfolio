import emoji from "react-easy-emoji";
import * as Svg from './Svg';

const greeting = {
  /* Summary And Greeting Section */
  username: "Portfolio",
  title: "Hi all, I'm Bhavay Puri",
  subTitle: emoji("A passionate Full Stack Software Developer 🚀 having an experience of building applications with JavaScript / Reactjs / Nodejs."),
  resumeLink: "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing",
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/risinggeek/",
  linkedin: "https://www.linkedin.com/in/bhavaypuri/",
  gmail: "bhavaypuri15@gmail.com",
  medium: "https://medium.com/@bhavaypuri15",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Skills",

  /* Make Sure You include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "ReactJS",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Redux",
      fontAwesomeClassname: Svg.Redux
    },
    {
      skillName: "NodeJS",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Work experiences

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer Intern",
      company: "Leena AI",
      companylogo: require("./assets/images/leenaLogo.png"),
      date: "June 2019 – August 2019",
      desc: "Leena AI is a Y-Combinator backed startup which provides an AI powered HR assistant to give instant response to employee queries.",
      descBullets: [
        "Development of Flow Dashboard, REST API integration",
        "Development of heatmap(from scratch) for flow dashboard",
        "Feature development for employee directory - filters, search, pagination"
      ]
    },
  ]
};

/* Open Source Section to View Github contributions */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "RisingGeek", 
  showGithubProfile: "true",  // Set true or false to show Contact profile using Github, defaults to true
  display: true, // Set false to hide this section, defaults to true
  projects: [
    { owner: "uber", name: "baseweb" },
    { owner: "vega", name: "editor" },
    { owner: "msk-documents", name: "msk-ui" }
  ]
};


// Personal Projects

const projects = {
  title: "Projects 🧩",
  projects: [
    {
      image: require("./assets/images/twitterClone.png"),
      link: "https://twitter-geek.netlify.app/",
      name: "Twitter Clone",
      description: "A minimalistic clone of Twitter that allows you to add tweet, follow people, like, retweet, comment, view profile and search users.",
      technologies: "React, Redux, NodeJS, MYSQL"
    },
    {
      image: require("./assets/images/codePair.png"),
      link: "https://codepair.netlify.app/",
      name: "Code Pair Platform",
      description: "A platform where users can share an interactive editor and write code together. It has language support for C++, Java and Python. This project is based on the concept of Operational Transformation which forms the basis for a shared editor.",
      technologies: "React, NodeJS, WebRTC, WebSockets"
    },
    {
      image: require("./assets/images/webChat.png"),
      link: "https://burger-128d8.firebaseapp.com/",
      name: "Web Chat Application",
      description: "A web chat application that allows chatting and sharing photos.",
      technologies: "React, Redux, NodeJS, MongoDB, Firebase Storage, SocketIO"
    },
    {
      image: require("./assets/images/spendingTracker.png"),
      link: "http://awesome-spending-tracker.herokuapp.com/",
      name: "Spending Tracker",
      description: "This application manages expenses so that you can keep track of your spending.",
      technologies: "NodeJS, MongoDB, PassportJS"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {

  title: "Blogs 📙",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://medium.com/@bhavaypuri15/redux-setup-in-nextjs-1e476ac813fd",
      title: "Redux setup in NextJS",
      description: "Learn how to manage state through Redux in NextJS."
    },
    {
      url: "https://medium.com/@bhavaypuri15/fast-i-o-in-java-eaf9a972fb6d",
      title: "Fast I/O in Java",
      description: "Get started with input/output Stream and buffered reader/writer."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Reach out to me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9910320233",
  emailAddress: "bhavaypuri15@gmail.com",
};

export { greeting, socialMediaLinks, skillsSection, workExperiences, openSource, projects, blogSection, contactInfo };
