import { Story, Meta } from '@storybook/html';
import { createInputTextArea, InputTextAreaProps } from './InputTextArea';

export default {
    title: 'Atoms/Inputs',
    argTypes: {
        placeholder: { control: 'text' },
        charactersLimit: { control: 'number' },
    },
} as Meta;

const Template: Story<InputTextAreaProps> = (args) => {
    return createInputTextArea(args);
}

export const InputTextArea = Template.bind({});
InputTextArea .args = {
    placeholder: 'What\'s happening?',
    charactersLimit: 380,
};
