import '/public/assets/styles/main.css';
import { createContentContainer } from '../molecules/ContentContainer';
import { createNewsCard } from './NewsCard';

export const createNewsContainer = () => {

    const firstNews = createNewsCard({
        topic: 'COVID19',
        topicDay: 'Last night',
        newsTitleText: 'England’s Chief Medical Officer says the UK is at the most dangerous time of the pandemic',
        newsImageLocation: '/assets/img/england-news.png',
        hashText: 'covid19',
    });

    const secondNews = createNewsCard({
        topic: 'US news',
        topicDay: '4h ago',
        newsTitleText: 'Parler may go offline following suspensions by Amazon, Apple and Google',
        newsImageLocation: '/assets/img/us-news.png',
        hashText: 'trump',
    });

    const thirdNews = createNewsCard({
        topic: 'India',
        topicDay: '1h ago',
        newsTitleText: 'India vs Australia: India hold on to earn a draw on Day 5 in Sydney Test',
        newsImageLocation: '/assets/img/india-news.png',
        hashText: 'sport',
    });

    const newsContainer = createContentContainer({
        contentTitle: 'What\'s happening',
        components: [firstNews, secondNews, thirdNews]
    });

    return newsContainer;
}