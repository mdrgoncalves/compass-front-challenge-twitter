import '/public/assets/styles/main.css';

export interface PostButtonProps {
    buttonType: 'image' | 'gif' | 'poll' | 'emoji' | 'schedule',
    onClick?: () => void;
}

export const createPostButton = ({
    buttonType,
    onClick
}: PostButtonProps) => {

    if (buttonType === 'image') {
        
        const inputContainer = document.createElement('div');

        const imageLabel = document.createElement('label');
        imageLabel.classList.add('post-button__image-label');
        imageLabel.setAttribute('for', 'image-input');

        const imageIcon = document.createElement('img')
        imageIcon.classList.add('post-button__icon');
        imageIcon.setAttribute('src', '/assets/img/image-post.svg');
        imageIcon.setAttribute('alt', 'image icon');
        imageLabel.appendChild(imageIcon);

        const imageInput = document.createElement('input');
        imageInput.type = 'file';
        imageInput.accept = 'image/*';
        imageInput.id = 'image-input';
        
        inputContainer.append(imageLabel, imageInput);

        return inputContainer;
    }

    const button = document.createElement('button');

    button.innerHTML = `
        <img src='/assets/img/${buttonType}-post.svg' alt='${buttonType} icon' class='post-button__icon'/>
    `;

    button.classList.add('post-button');
    button.addEventListener('click', onClick!);

    return button;
}