import dp from '../assets/DP.jpg'
const Body = () => {
    return (
      <div className="bodyContainer">
        <div>
          <div className="welcome">Welcome to my portfolio</div>
          <h1 className="mainHeading">
            Hi👋, I'm Tharun Pirangi
            <br />
            <span style={{fontSize: '32px', fontWeight: '400'}}>Software Engineer @ TCS</span>
          </h1>
          <div>
            <button style={{ marginRight: "16px" }} className="primary-btn">
              Download Resume
            </button>
            <button className="secondary-btn">Connect</button>
          </div>
        </div>
        <img className="dp" src={dp} alt="" />
      </div>
    );
}

export default Body;