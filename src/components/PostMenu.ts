import { createButton } from './Button';
import '/public/assets/styles/main.css';
import { createInputTextArea } from './InputTextArea';
import { createAvatar } from './Avatar';
import { createPostButtons } from './PostButtons';

export const createPostCard = () => {

    const postCard = document.createElement('div');
    postCard.classList.add('post-card');

    const postCardAvatar = createAvatar({
        size: 'medium',
    })
    postCardAvatar.classList.add('post-card__avatar');

    const postCardInput = createInputTextArea({
        placeholder: 'What\'s happening?',
        charactersLimit: 380,
    })
    postCardInput.classList.add('post-card__input');

    const postCardButtons = createPostButtons();
    postCardButtons.classList.add('post-card__buttons');

    const postCardTweetContainer = document.createElement('div');
    const postCardTweet = createButton({
        primary: true,
        label: 'Tweet',
        size: 'big',
        smallerWidth: true,
    })
    postCardTweet.classList.add('post-card__tweet');
    postCardTweetContainer.appendChild(postCardTweet);
    postCardTweetContainer.classList.add('post-card__tweet-container');
    

    postCard.appendChild(postCardAvatar);
    postCard.appendChild(postCardInput);
    postCard.appendChild(postCardButtons);
    postCard.appendChild(postCardTweetContainer);

    return postCard;
}