import '/public/assets/styles/main.css';
import { createMenuList } from './MenuList';
import { createProfile } from './Profile';

export const createSideMenu = () => {

    const menuList = createMenuList();
    
    const profile = createProfile({
        profileName: 'Jerome Bell',
        profileId: 'afonsoinocente',
    });

    const sideMenu = document.createElement('aside');
    sideMenu.classList.add('side-menu');

    sideMenu.appendChild(menuList);
    sideMenu.appendChild(profile);

    return sideMenu;
}