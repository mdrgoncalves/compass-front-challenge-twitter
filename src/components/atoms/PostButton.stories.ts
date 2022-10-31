import { Story, Meta } from '@storybook/html';
import { createPostButton, PostButtonProps } from './PostButton';

export default {
    title: 'Atoms/Post Button',
    argTypes: {
        buttonType: {
            control: { type: 'select' },
            options: ['image', 'gif', 'poll', 'emoji', 'schedule'],
        },
        onClick: { action: 'clicked' }
    }
} as Meta;

const Template: Story<PostButtonProps> = (args) => {
    return createPostButton(args);
}

export const Image = Template.bind({});
Image.args = {
    buttonType: 'image',
};

export const Gif = Template.bind({});
Gif.args = {
    buttonType: 'gif',
};

export const Poll = Template.bind({});
Poll.args = {
    buttonType: 'poll',
};

export const Emoji = Template.bind({});
Emoji.args = {
    buttonType: 'emoji',
};

export const Schedule = Template.bind({});
Schedule.args = {
    buttonType: 'schedule',
};
