import { Story, Meta } from '@storybook/html';
import { createSpacer } from './Spacer';

type SpacerArgs = {
    outline: boolean;
};

export default {
    title: 'Atoms/Spacer',
    argTypes: {
        outline: {
            control: { type: 'boolean' },
        },
    }
} as Meta<SpacerArgs>;

const Template: Story<SpacerArgs> = (args) => {
    return createSpacer(args.outline);
}

export const Spacer = Template.bind({});
Spacer.args = {
    outline: true,
};