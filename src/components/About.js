import './About.css';

const About = () => {
    return (
        <div className='aboutContainer'>
            <div>
                <h1 className='headText'>About me</h1>
                <p className='about'>Hi there! My name is Tharun Pirangi, and I'm working as a Software Engineer in TCS. 
                    I have experience in building scalable web applications.
                    Apart from that you will see me working with Java. I have great interest in building robust backend systems.
                    Currently learning System Design. I'm always eager to learn and work with
                    new technologies. I'm excited to continue learning and growing in my field.
                </p>
            </div>
            <h2>Experiences</h2>
            <div>
                <div className='experienceContainer'>
                    <div>
                        <h2>Software Engineer</h2>
                        <p>Tata Consultancy Services</p>
                        <p>Full time | Hyderabad, India</p>
                    </div>
                    <div>
                        <p>June 2022 - Present</p>
                        <p>1 year 2 months</p>
                    </div>
                </div>

                <div className='experienceContainer'>
                    <div>
                        <h2>Full Stack Developer Intern</h2>
                        <p>Zemoso Technologies</p>
                        <p>Internship | Hyderabad, India</p>
                    </div>
                    <div>
                        <p>Feb 2022 - June 2022</p>
                        <p>5 months</p>
                    </div>
                </div>
            </div>
            <h2>Education</h2>
            <div>
                <div className='experienceContainer'>
                    <div>
                        <h2>Bachelor's of Technology</h2>
                        <p>Gokaraju Rangaraju Institute of Engineering and Technology</p>
                        <p>Full time | Hyderabad, India</p>
                    </div>
                    <div>
                        <p>June 2018 - June 2022</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;