import '/public/assets/styles/main.css';

export interface HeaderProps {
    onClick?: () => void;
}

export const createThemeSwitch = ({
    onClick
}: HeaderProps) => {

    const button = document.createElement('button');
    button.classList.add('theme-switch');
    button.innerHTML = `
        <img src='/assets/img/switch.svg' alt='Theme switch icon' />
    `;
    button.addEventListener('click', onClick);

    return button;
}
