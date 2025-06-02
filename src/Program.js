import { useState } from 'react';
import './program.css';

export default function Program() {
    const [visible, setVisible] = useState(false);
    const [isStacked, setIsStacked] = useState(false);

    const handleClick = (description) => {
        setVisible(description);
        setIsStacked(true);
    };

    const program = [
        {
            id: 1,
            name: 'kg1',
            description: 'The sun shines bright, flowers bloom, birds sing sweet songs, and children laugh and play in the happy garden.',
        },
        {
            id: 2,
            name: 'kg2',
            description: 'Butterflies flutter by, trees dance in the breeze, children read and draw, learning new things with smiles and giggles.',
        }, 
        {
            id: 3,
            name: 'kg3',
            description: '"In a world of colors and dreams, kids explore, imagine, create, share stories, and grow with kindness, joy, and wonder.',
        }
    ];

    return (
        <div className="program-wrapper">
            <h1 id='our-programs'>Our Programs</h1>
            <div className={`program-container ${isStacked ? 'stacked' : ''}`}>
                {program.map((prog) => (
                    <button
                        key={prog.id}
                        onClick={() => handleClick(prog.description)}
                        className={`program-btn program-btn-${prog.name.toLowerCase()}`}
                    >
                        {prog.name}
                    </button>
                ))}
            </div>
            {visible && <div className="program-description">{visible}</div>}
        </div>
    )
}
