import '/public/assets/styles/main.css';

export interface PostButtonProps {
    buttonType: 'image' | 'gif' | 'poll' | 'emoji' | 'schedule',
    onClick?: () => void;
}

export const createPostButton = ({
    buttonType,
    onClick
}: PostButtonProps) => {

    const button = document.createElement('button');
    button.innerHTML = `
        <img src='/assets/img/${buttonType}-post.svg' alt='${buttonType} icon' class='post-button__icon'/>
    `;

    button.classList.add('post-button');
    button.addEventListener('click', onClick);

    return button;
}