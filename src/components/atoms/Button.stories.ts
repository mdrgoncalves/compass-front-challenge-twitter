import { Story, Meta } from '@storybook/html';
import { createButton, ButtonProps } from './Button';

export default {
    title: 'Atoms/Button',
    argTypes: {
        primary: { control: 'boolean' },
        label: { control: 'text' },
        size: { 
            control: { type: 'select' },
            options: ['small', 'medium', 'big'],
        },
        smallerWidth: { control: 'boolean' },
        invertColor: {
            control: { type: 'select' },
            options: ['primary', 'secondary'],
        },
        onClick: { action: 'clicked' },
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

export const SmallerButton = Template.bind({});
SmallerButton.args = {
    primary: false,
    label: 'Smaller Button',
    size: 'big',
    smallerWidth: true,
};

export const InvertedPrimaryButton = Template.bind({});
InvertedPrimaryButton.args = {
    primary: true,
    label: 'Inverted Button',
    size: 'big',
    invertColor: 'primary',
};

export const InvertedSecondaryButton = Template.bind({});
InvertedSecondaryButton.args = {
    primary: false,
    label: 'Inverted Button',
    size: 'big',
    invertColor: 'secondary',
};