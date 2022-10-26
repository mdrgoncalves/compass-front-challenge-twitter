import '/public/assets/styles/main.css';

export interface AvatarProps {
    size: 'small' | 'medium';
}

export const createAvatar = ({size} : AvatarProps) => {
    return `
        <picture class='avatar'>
            <img 
                class='avatar__icon--${size}' 
                src='/assets/img/avatar.svg' 
                alt='avatar icon' 
            />
        </picture>
    `;
}