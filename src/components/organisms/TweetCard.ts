import '/public/assets/styles/main.css';
import { createPostTimer } from '../atoms/PostTimer';
import { createHeading } from '../atoms/Heading';
import { createAvatar } from '../atoms/Avatar';
import { createTweetButtons } from '../molecules/TweetButtons';
import { createMenuItem } from '../atoms/MenuItem';

export interface TweetCardProps {
    avatarSrc?: string;
    tweetPersonName?: string;
    tweetPersonUsername?: string;
    mockup?: boolean;
    mockupTimeValue?: string;
    tweetText?: string;
    tweetImageSrc?: string;
    randomButtons?: boolean;
}

export const createTweetCard = ({
    avatarSrc,
    tweetPersonName,
    tweetPersonUsername,
    mockup,
    mockupTimeValue,
    tweetText,
    tweetImageSrc,
    randomButtons
}: TweetCardProps) => {

    const tweetCard = document.createElement('div');
    tweetCard.classList.add('tweet-card');

    avatarSrc = avatarSrc || '/assets/img/avatar.svg';

    const avatar = createAvatar({
        size: 'medium',
        avatarLocation: avatarSrc
    })
    avatar.classList.add('tweet-card__avatar');

    tweetCard.append(avatar);

    const tweetIdentity = document.createElement('div');
    tweetIdentity.classList.add('tweet-card__identity');

    tweetPersonName = tweetPersonName || 'Devon Lane';

    const tweetName = createHeading({
        level: 2,
        text: tweetPersonName
    });

    tweetPersonUsername = tweetPersonUsername || '@devonlane';

    const tweetId = createHeading({
        level: 3,
        text: `${tweetPersonUsername} · `
    });

    mockup = mockup || false;
    mockupTimeValue = mockupTimeValue || '1h';

    const tweetTime = createPostTimer({
        mockup: mockup,
        mockupValue: mockupTimeValue
    });

    tweetIdentity.append(tweetName);
    tweetIdentity.append(tweetId);
    tweetIdentity.append(tweetTime);

    tweetCard.append(tweetIdentity);

    const tweetContent = document.createElement('p');
    tweetContent.classList.add('tweet-card__content');

    tweetText = tweetText || 'Teste!';

    tweetContent.innerText = tweetText;

    tweetCard.append(tweetContent);

    const tweetImage = document.createElement('picture');
    tweetImage.classList.add('tweet-card__image');

    tweetImage.innerHTML = `
        <img
            class='tweet-card__image--content'
            src='${tweetImageSrc}'
            alt='tweet image'
        />
    `;

    if (tweetImageSrc) {
        tweetCard.append(tweetImage);
    }

    const randomCounters: number[] = randomButtons ? [
        getRandomNumber(),
        getRandomNumber(),
        getRandomNumber(),
        getRandomNumber()
    ] : [0, 0, 0, 0];

    const tweetActions = createTweetButtons({
        commentCount: randomCounters[0],
        retweetCount: randomCounters[1],
        likeCount: randomCounters[2],
        shareCount: randomCounters[3]
    });
    tweetActions.classList.add('tweet-card__actions');

    tweetCard.append(tweetActions);

    const showThread = createMenuItem({
        iconType: 'other',
        label: 'Show this thread',
        href: '/pages/error404.html',
    });
    showThread.classList.add('tweet-card__show-thread');

    tweetCard.append(showThread);

    return tweetCard;
}

function getRandomNumber() {
    return Math.floor(Math.random() * 100);
}