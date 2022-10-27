import { Story, Meta } from '@storybook/html';
import { createProfile, ProfileProps } from './Profile';

export default {
    title: 'Components/Profile',
    argTypes: {
        profileName: { control: 'text' },
        profileId: { control: 'text' },
    },
} as Meta;

const Template: Story<ProfileProps> = (args) => {
    return createProfile(args);
}

export const Profile = Template.bind({});
Profile.args = {
    profileName: 'Jerome Bell',
    profileId: 'afonsoinocente',
};


