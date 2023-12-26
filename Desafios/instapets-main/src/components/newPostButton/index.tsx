import { useState } from "react";
import Modal from "../../components/modal";
import AddIcon from '@material-ui/icons/Add';
import "./styles.css";

export default function NewPostButton() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="new-post">
            <button className="add-post-button" onClick={handleOpenModal}>Criar novo post <span><AddIcon/></span></button>
            <div className="modal">
                {isModalOpen && <Modal onClose={handleCloseModal} />}
            </div>
        </div>
    );
}
