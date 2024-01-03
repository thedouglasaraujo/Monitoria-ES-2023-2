import { useState } from "react";
import NewPostButton from "../../components/NewPostButton";
import Modal from "../../components/Modal";
import Post from "../../components/Post";
import "./styles.css";

interface PostData {
  caption: string;
  image: string | ArrayBuffer | null;
}

export default function NewPostPage() {
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
      <NewPostButton onClick={handleOpenModal} disabled={isModalOpen} />

      <div className="modal">
        {isModalOpen && <Modal onClose={handleCloseModal} />}
      </div>

      {newPostData && (newPostData.image || newPostData.caption.trim() !== '') && (
        <Post postData={newPostData} />
      )}
    </div>
  );
}