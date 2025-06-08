import './welcome.css';
export default function Welcome(){
    return(
        <div className="welcome-container">
            <div className="image-container">
                <img id="image" src={process.env.PUBLIC_URL + '/images/a little girl.jpg'} alt="a little girl" />
            </div>
            <div className="text-container">
                <h1>Welcome to Al-Bareem</h1>
                <p>A safe and fun learning environment for your child's bright future</p>
                <button className='enroll-btn'>Enroll Now</button>
            </div>
        </div>
    );
}