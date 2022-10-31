import '/public/assets/styles/main.css';

export interface HeadingProps {
    level: 1 | 2 | 3;
    text: string;
}

export const createHeading = ({
    level,
    text
}: HeadingProps) => {
    
    const heading = document.createElement(`h${level}`);
    heading.classList.add(`heading-${level}`);
    heading.innerHTML = text;

    return heading;
};
    