import '/public/assets/styles/main.css';

export interface ButtonProps {
    primary: boolean;
    label: string;
    size: 'small' | 'medium' | 'big';
}

export const createButton = ({
    primary,
    label,
    size
}: ButtonProps) => {
    return `
        <button 
            class='btn ${primary ? 'btn--primary' : 'btn--secondary'} 
            ${'btn--' + size}'
        >
            ${label}
        </button>
    `;
};
