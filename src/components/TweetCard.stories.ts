import { Story, Meta } from '@storybook/html';
import { createTweetCard, TweetCardProps } from './TweetCard';

export default {
    title: 'Components/Tweet Card',

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
        tweetText: {
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
    randomButtons: true
};