import dp from '../assets/DP.jpg'
import { Link } from 'react-router-dom';
// import resume from '../../public/Tharun_Resume.pdf';
const Body = () => {
    return (
      <div className="bodyContainer">
        <div>
          <div className="welcome">Welcome to my portfolio</div>
          <h1 className="mainHeading">
            Hi👋, I'm   <span className='heading'>Tharun Pirangi</span>
            <br />
            <span className='title'>Software Engineer @ TCS</span>
            <br />
            <span className='nextLine'>Passionate about building scalable web applications</span>
          </h1>
          <div className='btns'>
            <a href={"https://drive.google.com/file/d/1d2ebdK6SnpJlpurov_7jengvqDH0LZQp/view?usp=sharing"} target='_blank' rel="noreferrer">
            <button style={{ marginRight: "16px" }} className="primary-btn">
              View Resume
            </button>
            </a>
            <button className="secondary-btn"><Link style={{color:'inherit', textDecoration: 'none'}} to="/contact">Connect</Link></button>
          </div>
        </div>
        <img className="dp" src={dp} alt="" />
      </div>
    );
}

export default Body;