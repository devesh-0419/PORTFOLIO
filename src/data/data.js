import github from "../assets/github.png";
import instagram from "../assets/instagram.svg";
import leetcode from "../assets/leetcode.png";
import linkedin from "../assets/linkedin.svg";
import hackerrank from "../assets/hackerrank.png";
import resume_logo from "../assets/resumelogo.png";
import logo from '../assets/devesh.png'

import resume from '../assets/Resume/DeveshSwarnkar-Btech.pdf';



const github_id = 'https://github.com/devesh-0419/';
const leetcode_id='https://leetcode.com/_devesh_s/'
const instagram_id='https://instagram.com/_devesh_s/'
const linkedin_id='https://www.linkedin.com/in/devesh-swarnkar-a069161b7/';
const hackerrank_id = 'https://www.hackerrank.com/deveshswarnkar01' 

import p1 from '../assets/my_project_1.png'
import p2 from '../assets/my_project_2.png'
import p3 from '../assets/my_project_3.png'

const homeapi = {
    sociallinks: [
      {
        icon: resume_logo,
        link: resume
      },
      { icon: github,
      link:github_id },
      { icon: leetcode,
      link:leetcode_id },
      { icon: instagram,
      link:instagram_id },
      { icon: linkedin,
      link:linkedin_id },
      { icon: hackerrank,
      link:hackerrank_id },
    ],
  };

const skills = [
    {skill:'HTML'},
    {skill:'CSS'},
    {skill:'REACT'},
    {skill:'NODE.JS'},
    {skill:'GIT'},
    {skill:'EXPRESS.JS'},
    {skill:'TAILWIND CSS'},
    {skill:'MONGODB'},
    {skill:'C'},
    {skill:'C++'},
    {skill:'UNITY3D'},
];

const projectslist = [
  {
    img:p1,
    title:"Nike Shoe Store",
    text:"The Nike shoe store website is built using ReactJS, Vite, and Tailwind CSS. It allows users to browse, buy, and add shoes to their cart. The website offers a user-friendly interface and a cart system. ReactJS enables efficient development and dynamic user interfaces, Vite provides quick feedback during development, and Tailwind CSS allows for easy and customizable styling.",
    btn:"Source Code",
    link:"https://github.com/devesh-0419/nike-shoe-store",

  },
  {
    img:p2,
    title:"P2P Energy Trading",
    text:`The project P2P energy trading website leverages React for the frontend development and Solidity for creating smart contracts. It establishes a decentralized platform where users can participate in the direct buying and selling of solar energy. Through the implementation of peer-to-peer transactions, the website enables secure and efficient trading of renewable energy resources.`,
    btn:"Source Code",
    link:"https://github.com/devesh-0419/P2PEnergyTradingPlatform",

  },
  {
    img:p3,
    title:"Fetch-Sentiment",
    text:"Fetch Sentiment is a project that utilizes sentiment analysis to determine the sentiment of any given message or text. It utilizes Twitter data for training the sentiment analysis model. The project is built with a React frontend and a Django backend. Users can input text, and the backend processes the sentiment analysis using the trained model. The results are then displayed on the frontend, allowing users to gain insights into the sentiment expressed in the input text. The project provides a seamless and user-friendly experience for sentiment analysis.",
    btn:"Source Code",
    link:"https://github.com/devesh-0419/Fetch-Sentimnt/tree/master",

  },
] 

const Logo = {img: logo}

  export {homeapi, skills, projectslist,Logo}