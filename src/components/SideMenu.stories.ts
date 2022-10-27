import { Story, Meta } from '@storybook/html';
import { createSideMenu } from './SideMenu';

export default {
    title: 'Components/Side Menu',
    parameters: {
        options: {
            showPanel: false,
        }
    }
} as Meta;

const Template: Story = () => {
    return createSideMenu();
}

export const SideMenu = Template.bind({});
SideMenu.args = {};

