import './header.css';

export default function Header(){
    const menuItems = [
        {name: 'Home' , href: '/home'},
        {name: 'About us' , href: '/about.us'},
        {name: 'Program' , href: '/program'},
        {name: 'Gallery' , href: '/gallery'},
        {name: 'Events' , href: '/events'},
        {name: 'Resources' , href: '/resources'},
        {name: 'Testimonials' , href: '/home'},
        {name: 'admission' , href: '/admission'},
        {name: 'Contact us' , href: '/contact.us'},
    ];
    return(
        <div>
            <nav className="contianer">
                <h1>Al-Bareem</h1>
                <ul>
                    {menuItems.map((item) => {
                        let linkClass = 'menu-link'; 
                        let listItemClass = 'menu-item';

                        switch(item.name){
                            case 'Home':
                                linkClass += 'home-style';
                                break;

                            case 'About us':
                                linkClass += 'about-style';
                                break;

                            case 'Program':
                                linkClass += 'program-style';
                                break;

                            case 'Gallery':
                                linkClass += 'gallery-style';
                                break;

                            case 'Events':
                                linkClass += 'events-style';
                                break;

                            case 'Resources':
                                linkClass += 'resources-style';
                                break;

                            case 'Testimonials':
                                linkClass += 'testimonials-style';
                                break;

                            case 'Admission':
                                linkClass += 'admission-style';
                                break;

                            case 'Contact us':
                                linkClass += 'contact-style';
                                break;

                            default: 
                                break;
                        }
                        return(
                                <li key={item.name} className={listItemClass}>
                                    <a href={item.href} className={linkClass}>{item.name}</a>
                                </li>
                        );
                    })}
                </ul>
            </nav>
        </div>
    );
}