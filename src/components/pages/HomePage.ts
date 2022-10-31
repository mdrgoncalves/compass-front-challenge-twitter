import { createSideMenu } from '../organisms/SideMenu';
import { createHeader } from '../organisms/Header';
import { createPostCard } from '../organisms/PostCard';
import { createTweetCard } from '../organisms/TweetCard';
import { createFooter } from '../organisms/Footer';
import { createInfoAside } from '../organisms/InfoAside';
import { createSpacer } from '../atoms/Spacer';

export function renderHomePage() {

    const container = document.querySelector<HTMLDivElement>('#container')!;
    container.classList.add('container');

    const sideMenu = createSideMenu();
    sideMenu.classList.add('app-side-menu');

    const postHeader = document.createElement('div');
    postHeader.classList.add('app-post-header');

    const header = createHeader({
        pageName: 'Home',
    });
    header.classList.add('header');

    const cardMenu = createPostCard();
    cardMenu.classList.add('app-post-menu');

    const spacer = createSpacer();
    spacer.classList.add('app-spacer');

    postHeader.append(header, cardMenu, spacer);

    const tweetsContainer = document.createElement('main');
    tweetsContainer.classList.add('app-tweets-container');

    const tweetCard = createTweetCard({
        avatarSrc: '/assets/img/darlene-follow.png',
        tweetPersonName: 'Darlene Robertson',
        tweetPersonUsername: '@darlenemichelle',
        mockup: true,
        mockupTimeValue: '1h',
        tweetText: 'Uaaaah, I can now create my own tweets and post them on my profile!',
        tweetImageSrc: '/assets/img/darlene-test-image.png',
        randomButtons: true,
    });
    tweetCard.classList.add('app-tweet-card');

    const tweetCardTwo = createTweetCard({
        avatarSrc: '/assets/img/devon-follow.png',
        tweetPersonName: 'Devon Lane',
        tweetPersonUsername: '@devonlane',
        mockup: true,
        mockupTimeValue: '2d',
        tweetText: 'Nice! I don\'t know how to code, but I can now learn how to do it with this new feature! This is awesome and I\'m so happy!',
        tweetImageSrc: '/assets/img/devon-test-image.jpg',
        randomButtons: true,
    });
    tweetCardTwo.classList.add('app-tweet-card');

    const tweetCardThree = createTweetCard({
        avatarSrc: '/assets/img/devon-follow.png',
        tweetPersonName: 'Devon Lane',
        tweetPersonUsername: '@devonlane',
        mockup: true,
        mockupTimeValue: '1mo',
        tweetText: 'OMG! I have a new follower! I\'m so happy! I\'m going to tweet about it!',
        randomButtons: true,
    });
    tweetCardTwo.classList.add('app-tweet-card');

    tweetsContainer.append(tweetCard, tweetCardTwo, tweetCardThree);

    const infoAside = createInfoAside();
    infoAside.classList.add('app-info-aside');

    const footer = createFooter();
    footer.classList.add('app-footer');

    container.append(sideMenu, postHeader, tweetsContainer, infoAside, footer);
}