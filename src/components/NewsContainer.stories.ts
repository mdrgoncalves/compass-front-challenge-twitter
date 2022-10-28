import { Story, Meta } from '@storybook/html';
import { createNewsContainer } from './NewsContainer';

export default {
    title: 'Components/News Container',
    parameters: {
        options: {
            showPanel: false,
        }
    }
} as Meta;

const Template: Story = () => createNewsContainer();

export const NewsContainer = Template.bind({});
NewsContainer.args = {};
