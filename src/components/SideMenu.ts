import '/public/assets/styles/main.css';
import { createMenuList } from './MenuList';
import { createProfile } from './Profile';

export const createSideMenu = () => {

    const menuList = createMenuList();
    
    const profile = createProfile({
        profileName: 'Jerome Bell',
        profileId: 'afonsoinocente',
    });

    return `
        <div class='side-menu'>
            ${menuList}
            ${profile}
        </div>
    `;
}