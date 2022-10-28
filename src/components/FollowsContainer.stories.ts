import { Story, Meta } from '@storybook/html';
import { createFollowsContainer } from './FollowsContainer';

export default {
    title: 'Components/Follows Container',
    parameters: {
        options: {
            showPanel: false,
        }
    }
} as Meta;

const Template: Story = () => createFollowsContainer();

export const FollowsContainer = Template.bind({});
FollowsContainer.args = {};
