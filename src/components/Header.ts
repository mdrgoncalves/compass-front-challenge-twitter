import '/public/assets/styles/main.css';
import { createThemeSwitch } from './ThemeSwitch';
import { createHeading } from './Heading';

export interface HeaderProps {
    pageName: string;
}

export const createHeader = ({
    pageName
}: HeaderProps) => {

    const themeSwitch = createThemeSwitch({
        onClick: () => {
            alert('Theme switch clicked');
        }
    });

    const heading = createHeading({
            level: 1,
            text: pageName
    });

    const header = document.createElement('header');
    header.classList.add('header');
    
    header.appendChild(heading);
    header.appendChild(themeSwitch);

    return header;
};