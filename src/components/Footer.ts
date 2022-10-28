import { createButton } from './Button';
import '/public/assets/styles/main.css';

export const createFooter = () => {

    const footer = document.createElement('footer');
    footer.classList.add('footer');

    const footerContent = document.createElement('div');
    footerContent.classList.add('footer__content');

    footerContent.innerHTML = `
        <h3 class="footer__content-title">Dont't miss what's happening</h3>
        <p class="footer__content-text">People on Twitter are the first to know.</p>
    `;

    const footerButtons = document.createElement('div');
    footerButtons.classList.add('footer__buttons');

    const redirect = '/assets/pages/error404.html';

    const loginButton = createButton({
        primary: false,
        label: 'Log in',
        size: 'medium',
        smallerWidth: true,
        invertColor: 'secondary',
        onClick: () => {
            document.location.href = redirect;
        }
    });
    loginButton.classList.add('footer__buttons-login');

    const signUpButton = createButton({
        primary: true,
        label: 'Sign up',
        size: 'medium',
        smallerWidth: true,
        invertColor: 'primary',
        onClick: () => {
            document.location.href = redirect;
        }
    });
    signUpButton.classList.add('footer__buttons-signup');

    footerButtons.append(loginButton, signUpButton);
    footer.append(footerContent, footerButtons);

    return footer;
}