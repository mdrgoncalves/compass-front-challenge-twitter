import { createTweetCard } from '../components/organisms/TweetCard';
export function sendPost(): void {

    const tweetButton = document.querySelector<HTMLButtonElement>('.post-card__tweet')!;
    const inputTextArea = document.querySelector<HTMLTextAreaElement>('.post-card__input')!;
    const imageInsert = document.getElementById('image-input')! as HTMLInputElement;
    const tweetContainer = document.querySelector('.app-tweets-container')! as HTMLElement;

    inputTextArea.addEventListener('keyup', function() {
        if (this.value.length > 0) {
            tweetButton.style.opacity = '1';
        } else {
            tweetButton.style.opacity = '0.5';
        }
    });

    imageInsert.addEventListener('change', function() {
        const reader = new FileReader();

        reader.addEventListener('load', function() {
            localStorage.setItem('newImage', reader.result as string);
        });

        reader.readAsDataURL(this.files![0]);
    });

    tweetButton.addEventListener('click', function() { 
        
        const newImage = localStorage.getItem('newImage') as string;
        let newPost: HTMLElement;

        if (newImage) {
            newPost = createTweetCard({
                tweetText: inputTextArea.value,
                tweetImageSrc: newImage,
                randomButtons: false
            });
        } else {
            newPost = createTweetCard({
                tweetText: inputTextArea.value,
                randomButtons: false
            });
        }

        tweetContainer.prepend(newPost);
        localStorage.removeItem('newImage');
        inputTextArea.value = '';
    });

}