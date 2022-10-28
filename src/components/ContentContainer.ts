import '/public/assets/styles/main.css';
import { createMenuItem } from './MenuItem';
import { createHeading } from './Heading';

export interface ContentContainerProps {
    contentTitle: string;
    components: HTMLElement[];
}

export const createContentContainer = ({
    contentTitle,
    components
}: ContentContainerProps) => {

    const contentContainer = document.createElement('section');
    contentContainer.classList.add('content-container');

    contentTitle = contentTitle || 'Content';

    const contentContainerTitle = createHeading({
        level: 1,
        text: `${contentTitle}`,
    });
    contentContainerTitle.classList.add('content-container__title');

    contentContainer.appendChild(contentContainerTitle);

    const placeholderDiv = document.createElement('div');
    placeholderDiv.classList.add('content-container--placeholder');
    components = components || [placeholderDiv];

    components.forEach((component) => {
        contentContainer.appendChild(component);
    });

    const containerShowMore = createMenuItem({
        iconType: 'other',
        label: 'Show more',
        href: '/assets/pages/error404.html',
    });
    containerShowMore.classList.add('content-container__show-more');
    
    contentContainer.appendChild(containerShowMore);

    return contentContainer;
};