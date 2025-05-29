import './welcome.css';
export default function Welcome(){
    return(
        <div className="welcome-container">
            <div className="welcome-image">
                <h1>Welcome to our Al-Bareem</h1>
                <p>A safe and fun learning environment for your child's bright future</p>
                <button className="enroll-button">Enroll Now</button>
                <button className="learn-button">Leaern More</button>
            </div>
        </div>
    );
}