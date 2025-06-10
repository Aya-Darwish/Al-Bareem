import './Program.css';


export default function Program(){
    const itemProgram = [
        {title: 'KG1', description: 'when children are engaging in fun, interactive activities like singing, storytelling, and basic crafts to develop their social, motor, and early learning skill in a playful environment.', src: process.env.PUBLIC_URL + '/images/kg1.jpg'},
        {title: 'KG2', description: 'when children are exploring the early math and literacy skills, participating in group activities, and engaging in creative play to build confidence, independence, and love for learing.', src: process.env.PUBLIC_URL + '/images/kg2.jpg'},
        {title: 'KG3', description: 'when children are developing foundational academic skills like readin, writing, and basic math, while also enjoying hands-on experiments, collaborative projects, and structured play to prepare them for primary school.', src: process.env.PUBLIC_URL + '/images/kg3.jpg'},
    ];
    return(
        <div className="program-container">
            <h1>Our Program</h1>
            <p>We offer a variety of program designed to meet the needs of children of different ages</p>
            <ul>
                {itemProgram.map((item) => {
                    let titleClass = '';
                    let itemClass = '';

                    switch(item.title){
                        case 'KG1':
                            titleClass = 'title-kg1';
                            itemClass = 'item-kg1';
                            break;
                        case 'KG2':
                            titleClass = 'title-kg2';
                            itemClass = 'item-kg2';
                            break;
                        case 'KG3':
                            titleClass = 'title-kg3';
                            itemClass = 'item-kg3';
                            break;
                        default:
                            break;
                    }

                    return(
                        <li key={item.title} className={`program-item ${itemClass}`}>
                            <div className="text-content">
                                <h2 className={titleClass}>{item.title}</h2>
                                <p>{item.description}</p>
                            </div>
                            <img src={item.src} alt={item.title} />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}