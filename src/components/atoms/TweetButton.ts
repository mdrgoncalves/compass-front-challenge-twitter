import '/public/assets/styles/main.css';

export interface TweetButtonProps {
    iconType: 'comment' | 'like' | 'retweet' | 'share';
    countNumber: number;
};

export const createTweetButton = ({
    iconType,
    countNumber = 0
} : TweetButtonProps) => {
    
    const tweetButton = document.createElement('button');
    tweetButton.classList.add('tweet-button');

    const tweetButtonIcon = document.createElement('img');
    tweetButtonIcon.classList.add('tweet-button__icon');
    tweetButtonIcon.src = `/assets/img/${iconType}.svg`;
    tweetButtonIcon.alt = `${iconType} icon`;

    tweetButton.append(tweetButtonIcon);

    const buttonCount = document.createElement('span');
    buttonCount.classList.add('tweet-button__count');
    buttonCount.innerText = `${countNumber}`;

    if (iconType === 'like') {
        tweetButton.addEventListener('click', () => {
            tweetButtonIcon.src = `/assets/img/like-fill.svg`;
            countNumber++;
            buttonCount.innerText = countNumber.toString();
        }
    )}

    tweetButton.append(buttonCount);
    
    return tweetButton;
}
