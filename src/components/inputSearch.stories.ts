import { Story, Meta } from '@storybook/html';
import { createInputSearch } from './InputSearch';

export default {
    title: 'Components/Inputs',

} as Meta;

const Template: Story = () => {
    return createInputSearch();
}

export const InputSearch = Template.bind({});
InputSearch.args = {};