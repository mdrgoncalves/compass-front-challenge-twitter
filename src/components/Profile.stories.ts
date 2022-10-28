import { Story, Meta } from '@storybook/html';
import { createProfile, ProfileProps } from './Profile';

export default {
    title: 'Components/Profile',
    argTypes: {
        type: {
            control: {
                type: 'select',
                options: ['menu', 'follow']
            }
        },
        avatarSrc: {
            control: {
                type: 'text'
            }
        },
        profileName: {
            control: {
                type: 'text'
            }
        },
        profileId: {
            control: {
                type: 'text'
            }
        },
    }
} as Meta;

const Template: Story<ProfileProps> = (args) => createProfile(args);

export const Menu = Template.bind({});
Menu.args = {
    type: 'menu',
    profileName: 'John Doe',
    profileId: 'johndoe'
};

export const Follow = Template.bind({});
Follow.args = {
    type: 'follow',
    profileName: 'John Doe',
    profileId: 'johndoe'
};


