import '/public/assets/styles/main.css';
import { createAvatar } from './Avatar';

export interface ProfileProps {
    profileName: string;
    profileId: string;
}

export const createProfile = ({
    profileName,
    profileId
}: ProfileProps) => {

    const avatar = createAvatar({size: 'small'});

    return `
        <div class='profile'>
            <div class='profile__identification'>
                ${avatar}
                <div class='profile__content'>
                    <h2 class='profile__name'>${profileName}</h2>
                    <h3 class='profile__id'>@${profileId}</h3>
                </div>
            </div>
            <button class='profile__button'>
                <img class='profile__button-icon' src='/assets/img/dots-menu.svg' alt='dots menu' />
            </button>
        </div>
    `;
};