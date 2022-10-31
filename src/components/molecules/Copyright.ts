import '/public/assets/styles/main.css';

export const createCopyright = () => {

    const copyright = document.createElement('div');
    copyright.classList.add('copyright');

    copyright.innerHTML = `
        <p class="copyright__content">Terms of Service Privacy Policy Cookie Policy</p>
        <p class="copyright__content">Ads info More © 2021 Twitter, Inc.</p>
    `;

    return copyright;
};
