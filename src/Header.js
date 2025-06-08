import './header.css';
export default function Header() {
    const menuItems = [
        {
            name: 'Home',
            href: '/home',
        },
        {
            name: 'About Us',
            href: '/about',
        },
        {
            name: 'Program',
            href: '/program',
        },
        {
            name: 'Gallery',
            href: '/gallery',
        },
        {
            name: 'Events',
            href: '/events',
        },
        {
            name: 'Resources',
            href: '/resources',
        },
        {
            name: 'Testimonials',
            href: '/testimonials',
        },
        {
            name: 'Admission',
            href: '/admission',
        },
        {
            name: 'Contact Us',
            href: '/contact',
        },
        
        
    ];
    return(
        <div className="header-container">
            <ul className="menu-list">
                {menuItems.map((item) => {
                    let classItem = 'menu-item';
                    let linkItem = 'link-item';
                    switch (item.name) {
                        case 'Home':
                            classItem += 'menu-item';
                            break;
                        case 'About Us':
                            classItem += 'menu-item';
                            break;
                        case 'Program':
                            classItem += 'menu-item';
                            break;
                        case 'Gallery':
                            classItem += 'menu-item';
                            break;
                        case 'Events':
                            classItem += 'menu-item';
                            break;
                        case 'Resources':
                            classItem += 'menu-item';       
                            break;
                        case 'Testimonials':
                            classItem += 'menu-item';
                            break;
                        case 'Admission':
                            classItem += 'menu-item';
                            break;
                        case 'Contact Us':
                            classItem += 'menu-item';
                            break;
                        default:
                            classItem += 'menu-item';
                            break;
                    }
                    return(
                        <li key={item.name} className={classItem}>
                            <a href={item.href} className={linkItem}>{item.name}</a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}