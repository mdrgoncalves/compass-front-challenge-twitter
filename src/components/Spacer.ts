import '/public/assets/styles/main.css';

export const createSpacer = (outline: boolean = false) => {
    const spacer = document.createElement('div');
    spacer.classList.add('spacer');

    if (outline) {
        spacer.classList.add('spacer--outline');
    }

    return spacer;
}