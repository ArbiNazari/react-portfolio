import React from "react";
import Project from "./Project";

const projects = [
  {
    id: 0,
    title: "RunBuddy",
    languages: "Html, css",
    image: "/img/1.jpg",
    description: "Application for Scheduling a Run with your Buddy!",
    repo: "https://github.com/ArbiNazarir",
    live: "https://lernantino.github.io/run-buddy//",
  },
  {
    id: 1,
    title: "Wanderlust",
    languages: "html, Css/BootStrap, Third Party Api, Node.JS. Bcrypt, Dotenv, Bulma",
    image: "/img/3.jpg",
    description: "This app inspires our visitors to take a break from the hustle and bustle of life and the pressure of social media likes and comments. To travel and adventure out to the world and hopefully, sign up and share back..",
    repo: "https://github.com/ArbiNazari/WanderLust",
    live: "https://sleepy-meadow-10807.herokuapp.com",
  },
  {
    id: 2,
    title: "ZoltarBall",
    languages: "html, Css/BootStrap, Third Party Api,  js",
    image: "/img/2.jpg",
    description: "This is an app help you pick bets.",
    repo: "https://github.com/ArbiNazari/ZoltarBall",
  },
  {
    id: 3,
    title: "Coming Soon",
    languages: "html, css, js",
    image: "/img/place2.jpg",
    description: "Coming Soon",
    packages: "none",
    repo: "https://github.com/ArbiNazari",
  },

  {
    id: 3,
    title: "Coming Soon",
    languages: "html, css, js",
    image: "/img/place2.jpg",
    description: "Coming Soon",
    packages: "none",
    repo: "https://github.com/ArbiNazari",
  },

];

function Portfolio() {
  return (
    <div>
      <p className="content is-medium">Portfolio</p>
      <hr />

      <Project projects={projects} />
    </div>
  );
}

export default Portfolio;