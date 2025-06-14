import './testimonial.css';
export default function Testimonial(){
    const parentsSays = [
        {name: 'Sara Mohommad', parent: 'Reem', experience: 'Our experience with the school has been fantastic, the teachers are dedicated and care for each child individully, my daugher learn and enjoy every day, and I have noticed significant development in their language and social skill, the curriculum balances learning and play, which makes children love school, I am very happy with my decision to enroll my daughter in this school'},
    ];
    return(
        <div className="testimonial-container">
            <div className="testimonial-text">
                <h1>Testimonial</h1>
                <p>Read what parents say about their experience in our school</p>
                <button className='more-btn'>&gt;</button>
            </div>
            <div className="parent">
                {parentsSays.map((item) => {
                    let classItem = 'menu-item';
                    let linkItem = 'link-item';
                    switch(item.name){
                        case 'Sara Mohommad':
                            classItem += 'sara-mohammad-style';
                            linkItem += 'sara-mohammad';
                            break;
                        default:
                            break;
                    }
                    return(
                        <div key={item.name} className={classItem}>
                            <h3 className={linkItem}>{item.name}</h3>
                            <p>{item.parent}</p>
                            <p id='experience'>{item.experience}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}