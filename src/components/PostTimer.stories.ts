import { Story, Meta } from '@storybook/html';
import { createPostTimer, PostTimerProps } from './PostTimer';

export default {
    title: 'Components/Post Timer',
    argTypes: {
        mockup: {
            control: {
                type: 'boolean'
            }
        },
        mockupValue: {
            control: {
                type: 'text'
            }
        }
    }
} as Meta;

const Template: Story<PostTimerProps> = (args) => {
    return createPostTimer(args);
}

export const PostTimerDefault = Template.bind({});
PostTimerDefault.args = {
    mockup: false,
}

export const PostTimerMockup = Template.bind({});
PostTimerMockup.args = {
    mockup: true,
    mockupValue: '1h'
}

