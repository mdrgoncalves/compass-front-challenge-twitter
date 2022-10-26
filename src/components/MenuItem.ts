import '../../public/assets/styles/main.css';

export interface MenuItemProps {
    iconType: 'home' | 'explore' | 'notifications' | 'messages' | 'bookmarks' | 'lists' | 'profile' | 'more',
    label: string;
    href?: string;
}

export const createMenuItem = ({
    iconType,
    label,
    href
}: MenuItemProps) => {
    return `
        <li class='menu-item'>
            <picture>
                <img src='/assets/img/${iconType}.svg' alt='${iconType} icon' class='menu-item__icon'/>
            </picture>
            <a href="${href ? href : ''}" class='menu-item__link'>
                ${label}
            </a>
        </li>
    `;
};
