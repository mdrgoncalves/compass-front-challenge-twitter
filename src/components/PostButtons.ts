import '/public/assets/styles/main.css';
import { createPostButton, PostButtonProps } from './PostButton';

export const createPostButtons = () => {

    const postButtons: PostButtonProps[] = [
        {
            buttonType: 'image',
        },
        {
            buttonType: 'gif',
        },
        {
            buttonType: 'poll',
        },
        {
            buttonType: 'emoji',
        },
        {
            buttonType: 'schedule',
        },
    ];

    const postButtonsNav = document.createElement('nav'); 
    postButtonsNav.classList.add('post-buttons-nav');

    const postButtonsNavList = document.createElement('ul');
    postButtonsNavList.classList.add('post-buttons-nav__list');

    postButtons.forEach((postButton) => {
        const postButtonElement = createPostButton(postButton);
        const postButtonListItem = document.createElement('li');
        postButtonListItem.classList.add('post-buttons-nav__list-item');
        postButtonListItem.appendChild(postButtonElement);
        postButtonsNavList.appendChild(postButtonListItem);
    });

    postButtonsNav.appendChild(postButtonsNavList);

    return postButtonsNav;
}