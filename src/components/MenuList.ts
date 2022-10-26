import '/public/assets/styles/main.css';
import { createButton } from './Button';
import { createMenuItem, MenuItemProps } from './MenuItem';

export const createMenuList = () => {

    const pagError = '#';

    const menuItens: MenuItemProps[] = [
        {
            iconType: 'home',
            label: 'Home',
            href: pagError
        },
        {
            iconType: 'explore',
            label: 'Explore',
            href: pagError
        },
        {
            iconType: 'notifications',
            label: 'Notifications',
            href: pagError
        },
        {
            iconType: 'messages',
            label: 'Messages',
            href: pagError
        },
        {
            iconType: 'bookmarks',
            label: 'Bookmarks',
            href: pagError
        },
        {
            iconType: 'lists',
            label: 'Lists',
            href: pagError
        },
        {
            iconType: 'profile',
            label: 'Profile',
            href: pagError
        },
        {
            iconType: 'more',
            label: 'More',
            href: pagError
        }
    ];


    return `
        <div class='menu'>
            <h1>
                <a href='#' class='logo'>
                    <img src='/assets/img/logo.svg' alt='logo' class='logo__img'/>
                </a>
            </h1>
            <ul class='menu-list'>
                ${menuItens.map(item => createMenuItem(item)).join('')}
            </ul>
            ${createButton({
                primary: true,
                label: 'Tweet',
                size: 'big'
            })}
        </div>
    `;
}
