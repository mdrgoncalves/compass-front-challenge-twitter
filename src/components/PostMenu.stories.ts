import { Story, Meta } from '@storybook/html';
import { createPostCard } from './PostMenu';

export default {
    title: 'Components/Post Card',
    parameters: {
        options: {
            showPanel: false,
        }
    }
} as Meta;

const Template: Story = () => {
    return createPostCard();
}

export const PostCard = Template.bind({});
PostCard.args = {};

