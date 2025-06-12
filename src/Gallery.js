import './gallery.css';
export default function Gallery(){
    return(
        <div className="gallery-container">
            <div className="text-container">
                <h1>Gallery</h1>
                <p>see moments of joy and learning at our school</p>
            </div>
            <div className="btn-contianer">
                <button className="classrooms">Classrooms</button>
                <button className="activities">Activities</button>
                <button className="events">Events</button>
            </div>
        </div>
    );
}