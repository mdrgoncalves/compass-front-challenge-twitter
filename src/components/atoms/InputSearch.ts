import '/public/assets/styles/main.css';

export const createInputSearch = () => {

    const inputContainer = document.createElement('div');
    inputContainer.classList.add('input-container');

    const inputSearch = document.createElement('input');
    inputSearch.classList.add('input-search');
    inputSearch.placeholder = 'Search Twitter';

    inputContainer.appendChild(inputSearch);

    return inputContainer;
}