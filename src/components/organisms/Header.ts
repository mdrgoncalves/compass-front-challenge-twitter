import '/public/assets/styles/main.css';
import { createThemeSwitch } from '../atoms/ThemeSwitch';
import { createHeading } from '../atoms/Heading';

export interface HeaderProps {
    pageName: string;
}

export const createHeader = ({
    pageName
}: HeaderProps) => {

    const themeSwitch = createThemeSwitch({
        onClick: () => {
            document.body.classList.toggle('dark-theme');
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