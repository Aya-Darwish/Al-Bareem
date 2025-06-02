import './aboutUs.css';
export default function AboutUs(){
    return(
        <div className="about-us-container">
            <h1 id='learn-more-about-us'> about us</h1>
            <div className="ourVision">
                <h1>Our Vision</h1>
                <p>we aim to be the leading educational institution in the Syria, where every child in empowered <br/>
                to realize their full potential in a safe and supportive environment</p>
            </div>
            <div className="ourMission">
                <h1>Our Mission</h1>
                <p>To provide a high-quality education that nurtures the childre's natural curiosity, develop theri <br/>
                social, emotional, and creative skills, and instills a lifelong love of learning</p>
            </div>
            <div className="ourValues">
                <h1>Our Values</h1>
                <p>respect <br/>
                creativity <br/>
                safety <br/>
                collaboration <br/>
                </p>
            </div>
        </div>
    );
}