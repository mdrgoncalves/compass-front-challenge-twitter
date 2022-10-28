import '/public/assets/styles/main.css';
import { createButton } from './Button';
import { createHeading } from './Heading';
import { createAvatar } from './Avatar';

export interface ProfileProps {
    type: 'menu' | 'follow';
    avatarSrc?: string;
    profileName: string;
    profileId: string;
}

export const createProfile = ({
    type,
    avatarSrc,
    profileName,
    profileId
}: ProfileProps) => {

    const avatar = createAvatar({
        size: 'small',
        avatarLocation: avatarSrc
    });

    const profile = document.createElement('article');
    profile.classList.add('profile');

    const identification = document.createElement('div');
    identification.classList.add('profile__identification');
    identification.appendChild(avatar);

    const profileContent = document.createElement('div');
    profileContent.classList.add('profile__content');

    const profileNameText = createHeading({
        level: 2,
        text: profileName
    });

    const profileIdText = createHeading({
        level: 3,
        text: `@${profileId}`
    });

    identification.appendChild(profileContent);

    profileContent.appendChild(profileNameText);
    profileContent.appendChild(profileIdText);

    profile.appendChild(identification);

    if (type === 'follow') {
        profile.classList.add('profile--follow');

        const followButton = createButton({
            primary: false,
            label: 'Follow',
            size: 'small',
            smallerWidth: true
        });

        profile.appendChild(followButton);

        return profile;
    }

    profile.innerHTML += `
        <button class='profile__button'>
            <img class='profile__button-icon' src='/assets/img/dots-menu.svg' alt='dots menu' />
        </button>
    `;

    return profile;
};