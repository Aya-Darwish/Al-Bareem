import './aboutUs.css';
export default function AboutUs(){
    const usItems = [
        {name: "vision", description: "To provide the high-quality education that nurures children's natural curiosity, develops their social, emotional, and creative skills, and instills a lifelong love of learning."},
        {name: "Mission", description: "To provide the high-quality education that nurures children's natural curiosity, develops their social, emotional, and creative skills, and instills a lifelong love of learning."},
        {name: " Values", description: "Respect, Creativety, Safety, Collaboration."},
    ];
    return(
        <div className="about-us-container">
            <h1>About Us</h1>
            <ul>
                {usItems.map((item)=> {
                    let classItem = 'item-class';
                    let listClassItem = 'item-link';
                    switch(item.name){
                        case 'Mission':
                            classItem += 'Mission';
                            listClassItem += '-mission';
                            break;
                        case 'Vision':
                            classItem += 'Vision';
                            listClassItem += '-vision';
                            break;
                        case 'Values':
                            classItem += 'Values';
                            listClassItem += '-values';
                            break;
                        default:
                            break;
                    }
                    return(
                        <li key={item.name} className={listClassItem}>
                            <h2 className={classItem}>{item.name}</h2>
                            <p>{item.description}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

