import { Story, Meta } from '@storybook/html';
import { createThemeSwitch } from './ThemeSwitch';

export default {
    title: 'Components/Theme Switch',
    argTypes: {
        onClick: { action: 'clicked' }
    },
} as Meta;

const Template: Story = () => {
    return createThemeSwitch({
        onClick: () => {
            alert('Theme switch clicked');
        }
    });
}

export const ThemeSwitch = Template.bind({});
ThemeSwitch.args = {};