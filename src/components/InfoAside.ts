import { createCopyright } from './Copyright';
import { createInputSearch } from './InputSearch';
import '/public/assets/styles/main.css';
import { createNewsContainer } from './NewsContainer';
import { createFollowsContainer } from './FollowsContainer';

export const createInfoAside = () => {

    const infoAside = document.createElement('aside');
    infoAside.classList.add('info-aside');

    const searchInput = createInputSearch();
    const newsContainer = createNewsContainer();
    const followContainer = createFollowsContainer();
    const copyright = createCopyright();

    infoAside.append(searchInput, newsContainer, followContainer, copyright);

    return infoAside;
};



