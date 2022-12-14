import '/public/assets/styles/main.css';
import { createMenuList } from '../molecules/MenuList';
import { createProfile } from '../molecules/Profile';

export const createSideMenu = () => {

    const menuList = createMenuList(true);
    
    const profile = createProfile({
        type: 'menu',
        profileName: 'Jerome Bell',
        profileId: 'afonsoinocente',
    });

    const sideMenu = document.createElement('aside');
    sideMenu.classList.add('side-menu');

    sideMenu.appendChild(menuList);
    sideMenu.appendChild(profile);

    return sideMenu;
}