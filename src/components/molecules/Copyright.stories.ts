import { Story, Meta } from '@storybook/html';
import { createCopyright } from './Copyright';

export default {
    title: 'Molecules/Copyright',
} as Meta;

const Template: Story = () => createCopyright();

export const Copyright = Template.bind({});
Copyright.args = {};