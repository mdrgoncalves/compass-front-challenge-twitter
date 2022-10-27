import '/public/assets/styles/main.css';

export interface MenuItemProps {
    iconType: 'home' | 'explore' | 'notifications' | 'messages' | 'bookmarks' | 'lists' | 'profile' | 'more' | 'other',
    label: string;
    href?: string;
}

export const createMenuItem = ({
    iconType,
    label,
    href
}: MenuItemProps) => {

    const menuItem = document.createElement('li');
    menuItem.classList.add('menu-item');

    if (iconType === 'other') {
        menuItem.innerHTML = `
            <a href="${href ? href : ''}" class='menu-item__other'>
                ${label}
            </a>
        `;

        return menuItem;
    }

    menuItem.innerHTML = `
        <picture>
            <img src='/assets/img/${iconType}.svg' alt='${iconType} icon' class='menu-item__icon'/>
        </picture>
        <a href="${href ? href : ''}" class='menu-item__link'>
            ${label}
        </a>
    `;

    return menuItem;
};
