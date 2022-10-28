import { Story, Meta } from '@storybook/html';
import { createContentContainer, ContentContainerProps } from './ContentContainer';

export default {
    title: 'Components/Content Container',
    argTypes: {
        contentTitle: { control: 'text' },
        components: { control: 'array' },
    },
} as Meta;

const Template: Story<ContentContainerProps> = (args) => createContentContainer(args);

export const ContentContainer = Template.bind({});
ContentContainer.args = {
    contentTitle: 'Content',
};
