import '/public/assets/styles/main.css';
import { createMenuItem } from '../atoms/MenuItem';
import { createHeading } from '../atoms/Heading';

export interface NewsCardProps {
    topic: string;
    topicDay: string;
    newsTitleText: string;
    newsImageLocation: string;
    hashText: string;
}

export const createNewsCard = ({
    topic,
    topicDay,
    newsTitleText,
    newsImageLocation,
    hashText
}: NewsCardProps) => {

    const newsCard = document.createElement('article');
    newsCard.classList.add('news-card');

    topic = topic || 'COVID19';
    topicDay = topicDay || 'Last night';
    
    const newsHeading = createHeading({
        level: 3,
        text: `${topic} · ${topicDay}`,
    });
    newsHeading.classList.add('news-card__heading');

    newsCard.appendChild(newsHeading);

    newsTitleText = newsTitleText || 'England’s Chief Medical Officer says the UK is at the most dangerous time of the pandemic';

    const newsTitle = createHeading({
        level: 2,
        text: newsTitleText,
    });
    newsTitle.classList.add('news-card__title');

    newsCard.appendChild(newsTitle);

    newsImageLocation = newsImageLocation || '/assets/img/england-news.png';

    const newsImage = document.createElement('img');
    newsImage.src = newsImageLocation;
    newsImage.alt = 'news image';
    newsImage.classList.add('news-card__image');

    newsCard.appendChild(newsImage);

    const newsTrendingContainer = document.createElement('div');
    newsTrendingContainer.classList.add('news-card__trending');

    const newsTrending = createHeading({
        level: 3,
        text: 'Trending with ',
    });
    newsTrending.classList.add('news-card__trending-text');

    newsTrendingContainer.appendChild(newsTrending);

    hashText = hashText || 'covid19';

    const hash = createMenuItem({
        iconType: 'other',
        label: `#${hashText}`,
        href: '/public/pages/error404.html',
    });
    hash.classList.add('news-card__hash');

    newsTrendingContainer.appendChild(hash);

    newsCard.appendChild(newsTrendingContainer);

    return newsCard;
}
