import { Story, Meta } from '@storybook/html';
import { createNewsCard, NewsCardProps } from './NewsCard';

export default {
    title: 'Organisms/News Card',
    argTypes: {
        topic: { control: 'text' },
        topicDay: { control: 'text' },
        newsTitleText: { control: 'text' },
        newsImageLocation: { control: 'text' },
        hashText: { control: 'text' },
    },
} as Meta;

const Template: Story<NewsCardProps> = (args) => createNewsCard(args);

export const NewsCard = Template.bind({});
NewsCard.args = {
    topic: 'COVID19',
    topicDay: 'Last night',
    newsTitleText: 'England’s Chief Medical Officer says the UK is at the most dangerous time of the pandemic',
    newsImageLocation: '/assets/img/england-news.png',
    hashText: '#covid19',
};

