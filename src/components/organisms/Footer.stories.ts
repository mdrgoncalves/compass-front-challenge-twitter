import { Story, Meta } from '@storybook/html';
import { createFooter } from './Footer';

export default {
    title: 'Organisms/Footer',
} as Meta;

const Template: Story = () => {
    return createFooter();
}

export const Footer = Template.bind({});
Footer.args = {};