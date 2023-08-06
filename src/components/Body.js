import dp from '../assets/DP.jpg'
const Body = () => {
    return (
        <div className="bodyContainer">
            <div>
                <div className='welcome'>
                    Welcome to my portfolio
                </div>
                <h1 className='mainHeading'>
                    Hi👋, I'm Tharun Pirangi
                    <br></br>
                    Software Engineer @TCS
                </h1>
            </div>
            <img className='dp' src={dp} alt="" />
        </div>
    );
}

export default Body;