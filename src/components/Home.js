import React from "react";
import sara from "../assets/images/sara-photo.png"

export function Home() {
    return(
        <div className="home">
            <img className="profile-photo" src={sara} alt="Sara Williams, a white woman with brown hair" />
            <h1 className="intro-text">Hi, I'm Sara.</h1>
            <p className="intro-p">I created this website using ReactJS to show that I'm more than just a few bullets on a resume. What I lack in programming experience, I
            make up for in determination to learn and great communication and teamwork skills. I have a lot to offer the right team, so if you're 
            searching for a dedicated employee, let's talk!
            </p>
            <a href="mailto:sara.williams.n@gmail.com"><button className="contact-me">Contact Me</button></a>
        </div>
    );
}