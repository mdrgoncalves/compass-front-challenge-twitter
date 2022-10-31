import '/public/assets/styles/main.css';

export interface InputTextAreaProps {
    placeholder: string;
    charactersLimit: number;
}

export const createInputTextArea = ({
    placeholder,
    charactersLimit
}: InputTextAreaProps) => {

    const inputTextArea = document.createElement('textarea');
    inputTextArea.classList.add('input-text');
    inputTextArea.maxLength = charactersLimit;
    inputTextArea.placeholder = placeholder;

    return inputTextArea;
}