import { Story, Meta } from '@storybook/html';
import { createTweetButtons, TweetButtonsProps } from './TweetButtons';

export default {
    title: 'Molecules/Tweet Buttons',
    argTypes: {
        commentCount: {
            control: {
                type: 'number'
            }
        },
        likeCount: {
            control: {
                type: 'number'
            }
        },
        retweetCount: {
            control: {
                type: 'number'
            }
        },
        shareCount: {
            control: {
                type: 'number'
            }
        }
    }
} as Meta;

const Template: Story<TweetButtonsProps> = (args) => {
    return createTweetButtons(args);
}

export const TweetButtons = Template.bind({});
TweetButtons.args = {
    commentCount: 10,
    likeCount: 10,
    retweetCount: 10,
    shareCount: 10
};
