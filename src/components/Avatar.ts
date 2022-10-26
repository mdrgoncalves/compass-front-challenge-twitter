import '/public/assets/styles/main.css';

export interface AvatarProps {
    size: 'small' | 'medium';
}

export const createAvatar = ({size} : AvatarProps) => {

    const avatar = document.createElement('picture');
    avatar.classList.add('avatar');
    avatar.innerHTML = `
        <img 
            class='avatar__icon--${size}' 
            src='/assets/img/avatar.svg' 
            alt='avatar icon' 
        />
    `;

    return avatar;
}