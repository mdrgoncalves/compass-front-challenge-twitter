import { Story, Meta } from '@storybook/html';
import { createAvatar, AvatarProps } from './Avatar';

export default {
    title: 'Components/Avatar',
    argTypes: {
        size: {
            control: { type: 'select' },
            options: ['small', 'medium'],
        },
    }
} as Meta;

const Template: Story<AvatarProps> = (args) => {
    return createAvatar(args);
};

export const Small = Template.bind({});
Small.args = {
    size: 'small',
};

export const Medium = Template.bind({});
Medium.args = {
    size: 'medium',
};
