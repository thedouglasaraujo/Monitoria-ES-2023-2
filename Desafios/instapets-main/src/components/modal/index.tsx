import "./styles.css";
import { ChangeEvent, FormEvent, useState } from "react";

interface NewPostModalProps {
  onClose?: () => void;
}

function NewPostModal({ onClose }: NewPostModalProps) {
  const [caption, setCaption] = useState<string>("");
  const [image, setImage] = useState<string>("");

  const handleChangeCaption = (e: ChangeEvent<HTMLInputElement>) => {
    setCaption(e.target.value);
  };

  const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    setImage(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Novo Post</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="caption"
            placeholder="Legenda"
            value={caption}
            onChange={handleChangeCaption}
          />
          <input
            type="file"
            id="image"
            value={image}
            onChange={handleChangeImage}
          />
          <button type="submit">Publicar</button>
        </form>
      </div>
    </div>
  );
}

export default NewPostModal;
