import { Story, Meta } from '@storybook/html';
import { createMenuList } from './MenuList';

export default {
    title: 'Molecules/Menu List',
    
    argTypes: {
        redirectError: {
            control: { type: 'boolean' },
        },
    }
} as Meta;

const Template: Story = () => {
    return createMenuList();
};

export const MenuList = Template.bind({});
MenuList.args = {};
