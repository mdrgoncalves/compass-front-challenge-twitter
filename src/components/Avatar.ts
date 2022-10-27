import '/public/assets/styles/main.css';

export interface AvatarProps {
    size: 'small' | 'medium';
    avatarLocation?: string;
}

export const createAvatar = ({
    size,
    avatarLocation
} : AvatarProps) => {

    const avatar = document.createElement('picture');
    avatar.classList.add('avatar');

    avatarLocation = avatarLocation || '/assets/img/avatar.svg';

    avatar.innerHTML = `
        <img 
            class='avatar__icon--${size}' 
            src='${avatarLocation}'
            alt='avatar icon'
        />
    `;

    return avatar;
}