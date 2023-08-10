import './About.css';

const IconBox = ({url,name}) =>{
    return (
        <div className='iconBox'>
            <img src={url} alt="" />
            <p>{name}</p>
        </div>
    );
}

const About = () => {
    const skills = [
        {
            url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
            name: 'React'
        },
        {
            url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
            name: 'Typescript'
        },
        {
            url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
            name: 'Java'
        },
        {
            url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
            name: 'Spring boot'
        },
        {
            url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
            name: 'Javascript'
        },
        {
            url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
            name: 'Redux'
        },
        {
            url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
            name: 'Html'
        },
        {
            url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
            name: 'Css'
        },
        {
            url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg',
            name: 'Mui'
        },
        {
            url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
            name: 'Python'
        },
        {
            url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
            name: 'Tailwind CSS'
        },
        {
            url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
            name: 'Node js'
        },
        {
            url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
            name: 'Express Js'
        },
        {
            url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
            name: 'Azure'
        },
        {
            url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
            name: 'Jest'
        },
        {
            url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
            name: 'Git'
        },

    ];
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
            <h2 className='headText'>Experiences</h2>
            <div>
                <div className='experienceContainer'>
                    <div>
                        <p className='expTitle'>Software Engineer</p>
                        <p className='details'>Tata Consultancy Services</p>
                        <p className='details'>Full time | Hyderabad, India</p>
                    </div>
                    <div className='horLine'></div>
                    <div>
                        <p className='details'>June 2022 - Present</p>
                        <p className='details'>1 year 2 months</p>
                    </div>
                </div>

                <div className='experienceContainer'>
                    <div>
                        <p className='expTitle'>Full Stack Developer Intern</p>
                        <p className='details'>Zemoso Technologies</p>
                        <p className='details'>Internship | Hyderabad, India</p>
                    </div>
                    <div className='horLine'></div>
                    <div>
                        <p className='details'>Feb 2022 - June 2022</p>
                        <p className='details'>5 months</p>
                    </div>
                </div>
            </div>
            <h2 className='headText'>Education</h2>
            <div>
                <div className='experienceContainer'>
                    <div>
                        <p className='expTitle'>Bachelor's of Technology</p>
                        <p className='details'>Gokaraju Rangaraju Institute of Engineering and Technology</p>
                        <p className='details'>Grade: 8.44</p>
                    </div>
                    <div className='horLine'></div>
                    <div>
                        <p className='details'>June 2018 - June 2022</p>
                    </div>
                </div>
            </div>
            <h2 className='headText' >Skills</h2>
            <div className='skillContainer'>
                {
                    skills.map((skill)=>{
                        return <IconBox key={skill.url} url={skill.url} name={skill.name} />
                    })
                }
            </div>
        </div>
    );
}

export default About;