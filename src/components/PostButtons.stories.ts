import { Story, Meta } from '@storybook/html';
import { createPostButtons } from './PostButtons';

export default {
    title: 'Components/Post Buttons',
    parameters: {
        options: {
            showPanel: false,
        }
    }
} as Meta;

const Template: Story = () => {
    return createPostButtons();
}

export const PostButtons = Template.bind({});
PostButtons.args = {};

