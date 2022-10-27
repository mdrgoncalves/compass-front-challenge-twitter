import '/public/assets/styles/main.css';
import { createPostTimer } from './PostTimer';
import { createHeading } from './Heading';
import { createAvatar } from './Avatar';
import { createTweetButtons } from './TweetButtons';
import { createMenuItem } from './MenuItem';

export interface TweetCardProps {
    avatarSrc?: string;
    tweetPersonName?: string;
    tweetPersonUsername?: string;
    mockup?: boolean;
    tweetText?: string;
    tweetImageSrc?: string;
    randomButtons?: boolean;
}

export const createTweetCard = ({
    avatarSrc,
    tweetPersonName,
    tweetPersonUsername,
    mockup,
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

    const tweetTime = createPostTimer(mockup);

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

    tweetImageSrc = tweetImageSrc || '/assets/img/image-test.png';

    tweetImage.innerHTML = `
        <img
            class='tweet-card__image--content'
            src='${tweetImageSrc}'
            alt='tweet image'
        />
    `;

    tweetCard.append(tweetImage);

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
        href: '#',
    });
    showThread.classList.add('tweet-card__show-thread');

    tweetCard.append(showThread);

    return tweetCard;
}

function getRandomNumber() {
    return Math.floor(Math.random() * 100);
}