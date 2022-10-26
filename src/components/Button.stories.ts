import { Story, Meta } from '@storybook/html';
import { createButton, ButtonProps } from './Button';

export default {
    title: 'Components/Button',
    argTypes: {
        primary: { control: 'boolean' },
        label: { control: 'text' },
        size: { 
            control: { type: 'select' },
            options: ['small', 'medium', 'big'],
        },
    },
} as Meta;

const Template: Story<ButtonProps> = (args) => {
    return createButton(args);
};

export const PrimaryBig = Template.bind({});
PrimaryBig.args = {
    primary: true,
    label: 'Primary',
    size: 'big',
};

export const PrimaryMedium = Template.bind({});
PrimaryMedium.args = {
    primary: true,
    label: 'Primary',
    size: 'medium',
};

export const SecondaryMedium = Template.bind({});
SecondaryMedium.args = {
    primary: false,
    label: 'Secondary',
    size: 'medium',
};

export const SecondarySmall = Template.bind({});
SecondarySmall.args = {
    primary: false,
    label: 'Secondary',
    size: 'small',
};