import React from "react";

function About() {
  return (
    <div>
      <p className="content is-medium">Arbi Nazari - React Porfolio</p>
      <hr />
      <img className="pic" src={process.env.PUBLIC_URL + '/img/arbi.jpg'} alt="Arbi Nazari"/>
      <p className="content is-italic mt-4">
        Hello, My Name is Arbi Nazari
      </p>
      <p className="content">
      My Name is Arbi Nazari and I am 42 years old married with two boys ages 10 and 14. I have a legal 
      background but, always had a passion in technology, law and law enforcement. I am currently the VP of 
      Operations for Courtlnked.com and have successfully launched and sold several of start-up +
      such as EsqChat.com, LegalCPU and CaseTree.com.
      </p>
    </div>
  );
}

export default About;