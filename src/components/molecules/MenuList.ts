import '/public/assets/styles/main.css';
import { createButton } from '../atoms/Button';
import { createMenuItem, MenuItemProps } from '../atoms/MenuItem';

export const createMenuList = (redirectError: boolean = false) => {

    const pagError = redirectError ? '/pages/error404.html' : '#';

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

    const menu = document.createElement('div');
    menu.classList.add('menu');

    const logo = document.createElement('h1');
    logo.innerHTML = `
        <a href='#' class='logo'>
            <img src='/assets/img/logo.svg' alt='logo' class='logo__img'/>
        </a>
    `;

    const menuList = document.createElement('ul');
    menuList.classList.add('menu-list');
    
    menuItens.forEach(item => {
        menuList.appendChild(createMenuItem(item));
    });

    const button = createButton({
        primary: true,
        label: 'Tweet',
        size: 'big',
        onClick: focusPostMenu
    });

    menu.appendChild(logo);
    menu.appendChild(menuList);
    menu.appendChild(button);

    return menu;
}

function focusPostMenu() {
    const inputText = document.querySelector<HTMLInputElement>('.post-card__input')!;
    inputText.focus();
}