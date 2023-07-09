import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";
import messenger from "../assets/messenger.svg";

import logo from '../assets/devesh.png'

import p1 from '../assets/my_project_1.png'
import p2 from '../assets/my_project_2.png'
import p3 from '../assets/my_project_3.png'

const homeapi = {
    sociallinks: [
      { icon: facebook },
      { icon: messenger },
      { icon: instagram },
      { icon: twitter },
      { icon: youtube },
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
    link:"",

  },
  {
    img:p2,
    title:"Home-Alike",
    text:"Home-Alike is a web application built with React for the frontend and Express.js for the backend, using MongoDB as the database. It allows users to search, book, and review home-stays at different tourist locations. The frontend offers an intuitive interface for browsing and selecting accommodations, while the backend manages data storage, authentication, and booking processes. Users can create profiles, filter search results, make secure bookings, and provide feedback through reviews. Home-Alike provides a seamless platform for travelers to find and book unique home-stays.",
    btn:"Source Code",
    link:"",

  },
  {
    img:p3,
    title:"Fetch-Sentiment",
    text:"Fetch Sentiment is a project that utilizes sentiment analysis to determine the sentiment of any given message or text. It utilizes Twitter data for training the sentiment analysis model. The project is built with a React frontend and a Django backend. Users can input text, and the backend processes the sentiment analysis using the trained model. The results are then displayed on the frontend, allowing users to gain insights into the sentiment expressed in the input text. The project provides a seamless and user-friendly experience for sentiment analysis.",
    btn:"Source Code",
    link:"",

  },
] 

const Logo = {img: logo}

  export {homeapi, skills, projectslist,Logo}