// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Nikhil",
  middleName: "",
  lastName: "Dutt",
  message: " Analyst | Creative | Developer | Entrepreneur",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/nikhil-dutt",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/nikhil-dutt/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/16apx8s6zlVwCu7Aea6jdJtXOnAb6GsNP8QAsTv7gWZo/edit",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("C:/Users/light/Desktop/Nikhil_website/home/src/editable-stuff/picture of nikhil.jpeg"),
  imageSize: 300,
  message:
    "4th-year undergraduate at the University of California, Berkeley pursuing a dual degree in Data Science and Economics. Strong leadership and project management skills through numerous entrepreneurial ventures. Well versed in developing data analysis models and creating machine learning pipelines in a wide array of industries. Passionate about using data in unconventional ways to uncover stories from the past and make predictions about the future. Feel free to reach out anytime at ndutt@berkeley.edu!",
  resume: require("C:/Users/light/Desktop/Nikhil_website/home/src/editable-stuff/Nikhil_Dutt_Resume_2020.pdf"),
};

// PROJECTS SECTION
// Setting up project length will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: false,
  heading: "Current Projects",
  gitHubUsername: "nikhil-dutt", //i.e."johnDoe12Gh"
  reposLength: 2,
  specificRepos: ["nikhil-dutt.github.io","ds4a"],
};

// Leadership SECTION
const leadership = {
  show: true,
  heading: "Background",
  message:
    ("I possess three unique traits that would make me a valuable asset to your organization." + "\n" +
     "The first is that I have an entrepreneurial mindset. I have always loved creating things that I felt were helpful to others. My earliest entrepreneurial memory was when I won my elementary school science fair with a magnetic zipper jacket.  It was created because I hated how cumbersome it was to properly align a regular zipper. Then, in High School, I created an app that would help doctors pictorially confirm where they were planning to do surgeries to prevent wrong site incisions, which is a surprisingly common mistake. Now, I am building a satellite image detection model with the United Nations to use in identifying poppy drug fields in Mexico. My numerous ventures have given me strong leadership and project management skills." + "\n" +
     "The second major quality I possess is that I am a naturally curious person. I spend a good portion of my free time just learning about a variety of things through podcasts and books. This can range from developmental economics to physics to sports. In a way, I think this is my greatest asset. The wide array of knowledge gives me an interdisciplinary perspective on problems, allowing me to uniquely connect the dots to create more fruitful solutions."+"\n"+"Finally, I use a creative lens when analyzing the world. This is best shown through my love of comedy. I am enamored with the art of making a person laugh because there is no greater feeling. I grew up as the class clown and eventually employed my skillset in standup comedy at UC Berkeley. Being an astute comedian requires a strong understanding of people and situations. You have to be able to approach an idea from an angle nobody suspects to get the biggest laugh. I would leverage this creativity in an industry setting."
     ),
//      ("I possess three unique traits that would make me a valuable asset to your organization." + "\n" + "steve"),
  images: [
    { 
      img: require("C:/Users/light/Desktop/Nikhil_website/home/src/editable-stuff/ai.jpg"),
//      label: "First slide label",
      paragraph: "Digital Art I created. Each dot in the eye is the profile picture of a friend on Facebook.",
    },
    { 
      img: require("C:/Users/light/Desktop/Nikhil_website/home/src/editable-stuff/cow.JPG"),
//      label: "An Object Detection Model thought I was a cow!",
      paragraph: "Object Detection Model thought I was a cow!",
    },
    {
      img: require('C:/Users/light/Desktop/Nikhil_website/home/src/editable-stuff/flba.jpg'),
//      label: "Third slide label",
      paragraph: "Winning the FBLA State Championship!",
    },
    {
      img: require("C:/Users/light/Desktop/Nikhil_website/home/src/editable-stuff/houdini.png"),
//      label: "Fourth slide label",
      paragraph: "Developing App in the UC Berkeley Accelerator Program!",
    },
    {
      img: require("C:/Users/light/Desktop/Nikhil_website/home/src/editable-stuff/ed cross.JPG"),
//      label: "Fifth slide label",
      paragraph: "Central Florida Red Cross Council",
    },
    {
      img: require("C:/Users/light/Desktop/Nikhil_website/home/src/editable-stuff/ewsarticle.png"),
//      label: "Sixth slide label",
      paragraph: "News Article written about me!",

    },
    {
      img: require("C:/Users/light/Desktop/Nikhil_website/home/src/editable-stuff/IMG_4124.jpg"),
      paragraph: "International Student Summit"
    },
  ],
  imageSize: {
    width:"650",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "SQL", value: 85 },
    { name: "Stata", value: 75 },
    { name: "API's", value: 65 },
    { name: "Statistical Modeling", value: 90 },
    { name: "TensorFlow", value: 65 },
    { name: "Tableau", value: 55 },
    { name: "Java", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for Software Engineering or Data Science opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "ndutt@berkeley.edu",
};

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch };
