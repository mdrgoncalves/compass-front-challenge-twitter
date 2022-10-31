import { Story, Meta } from '@storybook/html';
import { createInfoAside } from './InfoAside';

export default {
    title: 'Organisms/Info Aside',
} as Meta;

const Template: Story = () => createInfoAside();

export const InfoAside = Template.bind({});
InfoAside.args = {};