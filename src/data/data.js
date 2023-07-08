import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";
import messenger from "../assets/messenger.svg";

import logo from '../assets/logo.jpg'

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
];

const projectslist = [
  {
    img:p1,
    title:"Nike Shoe Store",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptate itaque nihil consequatur soluta distinctio nesciunt? Nam quasi, accusantium soluta molestias maxime enim eius, sequi veritatis quae ipsam aut. Culpa.",
    btn:"Source Code",
    link:"",

  },
  {
    img:p2,
    title:"Home-Alike",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptate itaque nihil consequatur soluta distinctio nesciunt? Nam quasi, accusantium soluta molestias maxime enim eius, sequi veritatis quae ipsam aut. Culpa.",
    btn:"Source Code",
    link:"",

  },
  {
    img:p3,
    title:"Fetch-Sentiment",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptate itaque nihil consequatur soluta distinctio nesciunt? Nam quasi, accusantium soluta molestias maxime enim eius, sequi veritatis quae ipsam aut. Culpa.",
    btn:"Source Code",
    link:"",

  },
] 

const Logo = {img: logo}

  export {homeapi, skills, projectslist,Logo}