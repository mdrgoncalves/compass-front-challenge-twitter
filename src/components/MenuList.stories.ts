import { Story, Meta } from '@storybook/html';
import { createMenuList } from './MenuList';

export default {
    title: 'Components/Menu List',
    parameters: {
        options: {
            showPanel: false,
        }
    }
} as Meta;

const Template: Story = () => {
    return createMenuList();
};

export const Default = Template.bind({});
Default.args = {};
