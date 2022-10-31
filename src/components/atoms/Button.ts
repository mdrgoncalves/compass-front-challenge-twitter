import '/public/assets/styles/main.css';

export interface ButtonProps {
    primary: boolean;
    label: string;
    size: 'small' | 'medium' | 'big';
    smallerWidth?: boolean;
    invertColor?: 'primary' | 'secondary';
    onClick?: () => void;
}

export const createButton = ({
    primary,
    label,
    size,
    smallerWidth,
    invertColor,
    onClick,
}: ButtonProps) => {

    const button = document.createElement('button');
    button.classList.add(
        'btn',
        `${primary ? 'btn--primary' : 'btn--secondary'}`,
        `${'btn--' + size}`,
        `${smallerWidth ? 'btn--smaller' : 'btn--primary'}`,
        `${'btn--invert-' + invertColor}`
    );

    button.textContent = label;
    button.addEventListener('click', onClick!);
    
    return button;
};
