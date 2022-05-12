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
            <h1 className="intro-text">Experience Summary</h1>
                <hr className="solid"/>
                <p>
                    After graduating from high school, I served for six years in the United States Navy as a language analyst. I was honorably discharged from the Navy in
                    2011, I began attending Colorado State University, where I earned a degree in Languages, Literatures, and Cultures with a German concentration. The career
                    prospects with that degree were not what I had hoped, and so I made the decision to return to school and pursue a second degree. I enrolled in Front Range
                    Community College in Fort Collins, where I was planning to get a web design certificate. However, I ended up taking a Computer Science I course, and I fell
                    in love with programming and with Computer Science. During my two years at Front Range, I worked as a teacher's assistant for Computer Science I and II. The
                    opportunity to teach really helped me to cement all of the fundamentals of object oriented programming, and helped me learn skills in technical communication.
                </p>
                <br />
                <p>
                    From there, I transferred to Colorado State University, where I completed my bachelor's degree in Applied Computing Technology in the Computer Science Department. 
                    I returned to work at an office where I had worked during my first degree, this time as a Web Designer for the office's WordPress website. I utilized the WordPress 5, 
                    Elementor editor, HTML, CSS, and JavaScript to rebuild the website from an older version. Due to the pandemic, all of the local internship opportunities available to 
                    me were cancelled. However, I worked hard to hone my skills on my own, using LinkedIn Learning and relying on professional connections to learn skills such as ReactJS, 
                    as well as expanding my knowledge of JavaScript and WordPress.
                </p>
                <br />
                <p>
                    After a cross-country move, I am now seeking a full-time or part-time position in the tech field. I am amenable to many different kinds of work, and am more focused
                    on finding a team or organization that is doing work motivated by a clear mission.
                </p>
                <br />
            <h1 className="intro-text">Resum&eacute;</h1>
            <hr className="solid"/>
            <br />
            <h2 className="resume-header">Education</h2>
                <hr className="solid"/>
                <p><strong>Colorado State University</strong>, Applied Computing Technology</p>
                <p><strong>Colorado State University</strong>, Languages, Literatures, and Culture - German Concentration</p>
            <br />
            <h2>Relevant Coursework</h2>
            <hr className="solid"/>
                <table className="course-table">
                    <tr>
                        <th>Course Name</th>
                        <th>Skills Gained</th>
                    </tr>
                    <tr>
                        <td><a className="resume-link" href="https://frontrange.smartcatalogiq.com/Current/Catalog/Courses/CSC-Computer-Science/1000/CSC-1060">Computer Science I</a></td>
                        <td>Java, algorithm development, data representation, logical expressions, functions, input/output</td>
                    </tr>
                    <tr>
                        <td><a className="resume-link" href="https://frontrange.smartcatalogiq.com/Current/Catalog/Courses/CSC-Computer-Science/1000/CSC-1061">Computer Science II</a></td>
                        <td>advanced Java, advanced algorithms, data structures, problem-solving</td>
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
            <br />
            <h2>Professional Experience</h2>
                <hr className="solid"/>
                <h3>Web Designer and Program Assistant</h3>
                <p>Off-Campus Life at Colorado State University, Fort Collins, CO</p>
                <p><i>July 2019-Current</i></p>
                <ul>
                    <li>Performed updates and maintenance of office WordPress websites, using the Elementor plugin, as well as HTML, CSS, and JavaScript.</li>
                    <li>Evaluate and install plugins on WordPress website to achieve specific user-requested functionality.</li>
                    <li>Provide exceptional customer service and accurate information to students regarding office services and programs, renting in the Fort Collins community, city codes and ordinances, and building neighborhood relations.</li>
                </ul>

                <h3>Teaching Assistant, Computer Science I</h3>
                <p>Front Range Community College, Fort Collins, CO</p>
                <p><i>Jan 2018 - May 2019</i></p>
                <ul>
                    <li>Provided classroom support for Intro to Programming and Computer Science I courses, including identifying and fixing logic and syntax errors within code and explaining fundamental computer science concepts. Received overwhelmingly positive evaluations from all students served. </li>
                    <li>Prepared and taught lessons for a Computer Science I course when the instructor fell ill and was unable to continue teaching. Handled all grading, exams, and lectures, leading to a 100% pass rate for the class.</li>
                </ul>

                <h3>Administrative and Marketing Assistant</h3>
                <p>Magnum Geo-Solutions, Loveland, CO</p>
                <p><i>Nov 2015-July 2018</i></p>
                <ul>
                    <li>Provided administrative support for a small engineering office, including billing and collections, human resources, social media management, graphic design, and general office management.</li>
                </ul>

                <h3>Administrative Assistant/Executive Director</h3>
                <p>RamRide and Off-Campus Life, Colorado State University, Fort Collins, CO</p>
                <p><i>Aug 2013-Jun 2015</i></p>
                <ul>
                    <li>Created and maintained secure Access databases of volunteer information, leading to 100% volunteer sign-up success rate.</li>
                    <li>Wrote multiple in-depth training guides for use by RamRide staff and volunteers concerning operations of XDS Dispatch system, DriveLinQ application, and RamRide policies and procedures.</li>
                    <li>Provided long-term planning on health, safety, and risk management strategies for RamRide, Colorado State University's safe ride program, which provides safe rides home to an average of 1500 CSU students every weekend of operations by using a fleet of 19 vehicles, and a unique group of over 100 student volunteers. </li>
                    <li>Responsible for hiring, training, and supervising a team of ten student staff members, and met with all student staff on a weekly or bi-weekly basis to provide professional support</li>
                </ul>

                <h3>Military Language Analyst</h3>
                <p>United States Navy</p>
                <p><i>Aug 2005-Jul 2011</i></p>
                <ul>
                    <li>Transcribed and translated real-time communications, and sent time sensitive reports to customers.</li>
                    <li>Provided quality control on other analyst reports.</li>
                    <li>Taught mission essential knowledge to new incoming analysts.</li>
                    <li>Maintained a top secret security clearance.</li>
                </ul>

            <h2>Additional Achievements</h2>
                <hr className="solid"/>
                <ul>
                    <li>Front Range Community College Hackathon Winner, Fall 2018</li>
                    <li>Officer, Front Range Community College Computer Science Club, 2018-2019</li>
                </ul>

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