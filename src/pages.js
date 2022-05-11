import sara from "./assets/images/sara-photo.png"

export function Home() {
    return(
        <div className="home">
            <img className="profile-photo" src={sara} alt="a picture of Sara Williams, a white woman with brown hair" />
            <h1 className="intro-text">Hi, I'm Sara.</h1>
            <p className="intro-p">I created this website using ReactJS to show that I'm more than just a few bullets on a resume. What I lack in programming experience, I
            make up for in determination to learn and great communication and teamwork skills. I have a lot to offer the right team, so if you're 
            searching for a dedicated employee, let's talk!
            </p>
            <a href="mailto:sara.williams.n@gmail.com"><button className="contact-me">Contact Me</button></a>
        </div>
    );
}

export function Resume() {
    return (
        <div className="my-resume">
            <h1 className="intro-text">Resume</h1>
            <h2 className="resume-header">Education</h2>
            <hr className="solid"/>
            <p><strong>Colorado State University</strong>, Applied Computing Technology</p>
            <p><strong>Colorado State University</strong>, Languages, Literatures, and Culture - German Concentration</p>
            <h2>Relevant Coursework</h2>
                <table className="course-table">
                    <tr>
                        <th>Course Name</th>
                        <th>Skills Gained</th>
                    </tr>
                    <tr>
                        <td>Computer Science I</td>
                        <td>Blah blah blah</td>
                    </tr>
                    <tr>
                        <td>Computer Science II</td>
                        <td>Blah blah blah</td>
                    </tr>
                    <tr>
                        <td>Web Development</td>
                        <td>HTML, CSS, Fuel MVC, JavaScript, PHP, SpringBoot</td>
                    </tr>
                    <tr>
                        <td>Software Engineering</td>
                        <td>Agile, Git, ReactJS, Boostrap, Travis CI, ZenHub, Java</td>
                    </tr>
                    <tr>
                        <td>Database Systems</td>
                        <td>SQL, Relation database design, database management</td>
                    </tr>
                </table>
            <h2>Professional Experience</h2>
        </div>
    );
}

export function MyProjects() {
    return (
        <div>
            <h1 className="intro-text">My Projects</h1>
            <p>Test</p>
        </div>
    );
}