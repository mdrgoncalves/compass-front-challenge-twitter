import '/public/assets/styles/main.css';
import { createTweetButton, TweetButtonProps } from './TweetButton';

export interface TweetButtonsProps {
    commentCount: number;
    likeCount: number;
    retweetCount: number;
    shareCount: number;
};

export const createTweetButtons = ({
    commentCount,
    likeCount,
    retweetCount,
    shareCount
} : TweetButtonsProps) => {
    
    const tweetButtons = document.createElement('div');
    tweetButtons.classList.add('tweet-buttons');

    const tweetButtonsList = document.createElement('ul');
    tweetButtonsList.classList.add('tweet-buttons__list');

    const tweetButtonsListItems: TweetButtonProps[] = [
        {
            iconType: 'comment',
            countNumber: commentCount
        },
        {
            iconType: 'retweet',
            countNumber: likeCount
        },
        {
            iconType: 'like',
            countNumber: retweetCount
        },
        {
            iconType: 'share',
            countNumber: shareCount
        },
    ];

    tweetButtonsListItems.forEach((item) => {
        const tweetButtonsListItem = document.createElement('li');
        tweetButtonsListItem.classList.add('tweet-buttons__list-item');

        const tweetButton = createTweetButton(item);
        tweetButtonsListItem.append(tweetButton);

        tweetButtonsList.append(tweetButtonsListItem);
    });

    tweetButtons.append(tweetButtonsList);

    return tweetButtons;
}