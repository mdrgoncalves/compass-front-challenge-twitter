import '/public/assets/styles/main.css';
import { createContentContainer } from './ContentContainer';
import { createProfile } from './Profile';

export const createFollowsContainer = () => {

    const firstFollow = createProfile({
        type: 'follow',
        avatarSrc: '/assets/img/bessie-follow.png',
        profileName: 'Bessie Cooper',
        profileId: 'alessandroveronezi'
    });

    const secondFollow = createProfile({
        type: 'follow',
        avatarSrc: '/assets/img/jennie-follow.png',
        profileName: 'Jenny Wilson',
        profileId: 'gabrielcantarin'
    });

    const followsContainer = createContentContainer({
        contentTitle: 'Who to follow',
        components: [firstFollow, secondFollow]
    });

    return followsContainer;
}