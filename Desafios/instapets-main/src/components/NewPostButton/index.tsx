import AddIcon from '@material-ui/icons/Add';
import "./styles.css";

interface NewPostButtonProps {
    onClick: () => void;
    disabled: boolean;
}

const NewPostButton: React.FC<NewPostButtonProps> = ({ onClick, disabled }) => {
    return (
        <button
            className="add-post-button"
            onClick={onClick}
            disabled={disabled}
        >
            Criar novo post <span><AddIcon /></span>
        </button>
    );
}

export default NewPostButton;