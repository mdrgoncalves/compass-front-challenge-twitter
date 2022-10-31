import { Story, Meta } from '@storybook/html';
import { createHeader, HeaderProps } from './Header';

export default {
    title: 'Organisms/Header',
    argTypes: {
        pageName: { control: 'text' },
    },
} as Meta;

const Template: Story<HeaderProps> = (args) => {
    return createHeader(args);
}

export const Header = Template.bind({});
Header.args = {
    pageName: 'Home',
};
