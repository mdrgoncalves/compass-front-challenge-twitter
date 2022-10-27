import { Story, Meta } from '@storybook/html';
import { createHeading, HeadingProps } from './Heading';

export default {
    title: 'Components/Heading',
    argTypes: {
        level: {
            control: { type: 'select' },
            options: [1, 2, 3],
        },
        text: { control: 'text' },
    },
} as Meta;

const Template: Story<HeadingProps> = (args) => {
    return createHeading(args);
}

export const Heading1 = Template.bind({});
Heading1.args = {
    level: 1,
    text: 'Heading 1',
};

export const Heading2 = Template.bind({});
Heading2.args = {
    level: 2,
    text: 'Heading 2',
};

export const Heading3 = Template.bind({});
Heading3.args = {
    level: 3,
    text: 'Heading 3',
};
