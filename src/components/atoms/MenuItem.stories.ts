import { Story, Meta } from '@storybook/html';
import { createMenuItem, MenuItemProps } from './MenuItem';

export default {
    title: 'Atoms/Menu Item',
    argTypes: {
        iconType: { 
            control: { type: 'select' },
            options: ['home', 'explore', 'notifications', 'messages', 'bookmarks', 'lists', 'profile', 'more', 'other'],
        },
        label: { control: 'text' },
        href: { control: 'text' },
    },
} as Meta;

const Template: Story<MenuItemProps> = (args) => {
    return createMenuItem(args);
};

export const Home = Template.bind({});
Home.args = {
    iconType: 'home',
    label: 'Home',
};

export const Explore = Template.bind({});
Explore.args = {
    iconType: 'explore',
    label: 'Explore',
};

export const Notifications = Template.bind({});
Notifications.args = {
    iconType: 'notifications',
    label: 'Notifications',
};

export const Messages = Template.bind({});
Messages.args = {
    iconType: 'messages',
    label: 'Messages',
};

export const Bookmarks = Template.bind({});
Bookmarks.args = {
    iconType: 'bookmarks',
    label: 'Bookmarks',
};

export const Lists = Template.bind({});
Lists.args = {
    iconType: 'lists',
    label: 'Lists',
};

export const Profile = Template.bind({});
Profile.args = {
    iconType: 'profile',
    label: 'Profile',
};

export const More = Template.bind({});
More.args = {
    iconType: 'more',
    label: 'More',
};

export const Other = Template.bind({});
Other.args = {
    iconType: 'other',
    label: 'Other',
};