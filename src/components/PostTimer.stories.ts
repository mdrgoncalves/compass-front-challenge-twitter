import { Story, Meta } from '@storybook/html';
import { createPostTimer } from './PostTimer';

type PostTimerArgs = {
    mockupTime: boolean;
}

export default {
    title: 'Components/Post Timer',
    argTypes: {
        mockupTime: { control: 'boolean' },
    }
} as Meta<PostTimerArgs>;

const Template: Story<PostTimerArgs> = (args) => {
    return createPostTimer(args.mockupTime);
}

export const PostTimerDefault = Template.bind({});
PostTimerDefault.args = {
    mockupTime: false,
}

export const PostTimerMockup = Template.bind({});
PostTimerMockup.args = {
    mockupTime: true,
}

