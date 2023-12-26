import { useState } from "react";
import Modal from "../../components/modal";
import Post from "../../components/post";
import AddIcon from '@material-ui/icons/Add';
import "./styles.css";

export default function NewPostButton() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newPostData, setNewPostData] = useState(null);

    const handleOpenModal = () => {
        setNewPostData(null);
        setIsModalOpen(true);
    };

    const handleCloseModal = (postData) => {
        setIsModalOpen(false);
        if (postData) {
            setNewPostData(postData);
        }
    };

    return (
        <div className="new-post">
            <button className="add-post-button" onClick={handleOpenModal}>
                Criar novo post <span><AddIcon /></span>
            </button>
            <div className="modal">
                {isModalOpen && <Modal onClose={handleCloseModal} />}
            </div>

            {newPostData && (
                <Post postData={newPostData} />
            )}
        </div>
    );
}
