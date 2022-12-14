import { Story, Meta } from '@storybook/html';
import { createTweetCard, TweetCardProps } from './TweetCard';

export default {
    title: 'Organisms/Tweet Card',

    argTypes: {
        avatarSrc: {
            control: {
                type: 'text'
            }
        },
        tweetPersonName: {
            control: {
                type: 'text'
            }
        },
        tweetPersonUsername: {
            control: {
                type: 'text'
            }
        },
        mockup: {
            control: {
                type: 'boolean'
            }
        },
        mockupTimeValue: {
            control: {
                type: 'text'
            }
        },
        tweetText: {
            control: {
                type: 'text'
            }
        },
        tweetImageSrc: {
            control: {
                type: 'text'
            }
        },
        randomButtons: {
            control: {
                type: 'boolean'
            }
        }
    }
} as Meta;

const Template: Story<TweetCardProps> = (args) => {
    return createTweetCard(args);
}

export const TweetCard = Template.bind({});
TweetCard.args = {
    randomButtons: true,
    tweetImageSrc: '/assets/img/page-cover.png'
};