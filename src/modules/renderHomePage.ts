import '../../public/assets/styles/main.css';
import { createSideMenu } from '../components/SideMenu';
import { createHeader } from '../components/Header';
import { createPostCard } from '../components/PostMenu';
import { createTweetCard } from '../components/TweetCard';
import { createFooter } from '../components/Footer';
import { createInfoAside } from '../components/InfoAside';
import { createSpacer } from '../components/Spacer';

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
        tweetPersonName: 'John Doe',
        tweetPersonUsername: '@johndoe',
        mockup: true,
        tweetText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc est aliquam nulla, eget ultricies lorem ipsum sed nunc. Sed euismod, nunc vel tincidunt lacinia, nunc est aliquam nulla, eget ultricies lorem ipsum sed nunc.',
        randomButtons: true,
    });
    tweetCard.classList.add('app-tweet-card');

    const tweetCardTwo = createTweetCard({
        tweetPersonName: 'John Doe',
        tweetPersonUsername: '@johndoe',
        mockup: true,
        tweetText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc est aliquam nulla, eget ultricies lorem ipsum sed nunc. Sed euismod, nunc vel tincidunt lacinia, nunc est aliquam nulla, eget ultricies lorem ipsum sed nunc.',
        randomButtons: true,
    });
    tweetCardTwo.classList.add('app-tweet-card');

    tweetsContainer.append(tweetCard, tweetCardTwo);

    const infoAside = createInfoAside();
    infoAside.classList.add('app-info-aside');

    const footer = createFooter();
    footer.classList.add('app-footer');

    container.append(sideMenu, postHeader, tweetsContainer, infoAside, footer);
}