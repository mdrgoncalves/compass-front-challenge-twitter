import { Story, Meta } from '@storybook/html';
import { createTweetButton, TweetButtonProps } from './TweetButton';

export default {
    title: 'Atoms/Tweet Button',
    argTypes: {
        iconType: {
            control: {
                type: 'select',
                options: ['comment', 'like', 'retweet', 'share']
            }
        },
        countNumber: {
            control: {
                type: 'number'
            }
        }
    }
} as Meta;

const Template: Story<TweetButtonProps> = (args) => {
    return createTweetButton(args);
}

export const Comment = Template.bind({});
Comment.args = {
    iconType: 'comment',
    countNumber: 10
};

export const LikeButton = Template.bind({});
LikeButton.args = {
    iconType: 'like',
    countNumber: 10
};

export const RetweetButton = Template.bind({});
RetweetButton.args = {
    iconType: 'retweet',
    countNumber: 10
};

export const ShareButton = Template.bind({});
ShareButton.args = {
    iconType: 'share',
    countNumber: 10
};

