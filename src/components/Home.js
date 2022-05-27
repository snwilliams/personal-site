import React from "react";
import sara from "../assets/images/sara-photo.png"

export function Home() {
    return(
        <div className="home">
            <img className="profile-photo" src={sara} alt="Sara Williams, a white woman with brown hair" />
            <h1 className="intro-text">Hi, I'm Sara.</h1>
            <p className="intro-p">
                I'm a U.S. based software developer at the start of my career, currently looking for a new opportunity with a mission-driven organization that values developer growth.
                Check out my Projects and my Resume to learn more about my experience and what I've been working on, and if I could be a good fit for your organization, let's talk!
            </p>
            <a href="mailto:sara.williams.n@gmail.com"><button className="contact-me">Contact Me</button></a>
        </div>
    );
}