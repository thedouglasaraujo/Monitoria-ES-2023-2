import { useState } from "react";
import Modal from "../Modal";
import Post from "../Post";
import AddIcon from '@material-ui/icons/Add';
import "./styles.css";

interface PostData {
    caption: string;
    image: string | ArrayBuffer | null;
}

export default function NewPostButton() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newPostData, setNewPostData] = useState<PostData | null>(null);

    const handleOpenModal = () => {
        setNewPostData(null);
        setIsModalOpen(true);
    };

    const handleCloseModal = (postData: PostData | null) => {
        setIsModalOpen(false);
        if (postData && (postData.image || postData.caption.trim() !== '')) {
            setNewPostData(postData);
        }
    };

    return (
        <div className="new-post">
            <button
                className="add-post-button"
                onClick={handleOpenModal}
                disabled={isModalOpen}
            >
                Criar novo post <span><AddIcon /></span>
            </button>
            <div className="modal">
                {isModalOpen && <Modal onClose={handleCloseModal} />}
            </div>

            {newPostData && (newPostData.image || newPostData.caption.trim() !== '') && (
                <Post postData={newPostData} />
            )}
        </div>
    );
}