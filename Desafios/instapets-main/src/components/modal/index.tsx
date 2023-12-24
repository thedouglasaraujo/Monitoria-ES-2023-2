import "./styles.css";
import { ChangeEvent, FormEvent, useState } from "react";

interface NewPostModalProps {
  onClose?: () => void;
}

function NewPostModal({ onClose }: NewPostModalProps) {
  const [caption, setCaption] = useState<string>("");
  const [image, setImage] = useState<string | ArrayBuffer | null>(null);

  const handleChangeCaption = (e: ChangeEvent<HTMLInputElement>) => {
    setCaption(e.target.value);
  };

  const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImage(null);
    }
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
        <h2>Novo post</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="caption"
            placeholder="Legenda"
            value={caption}
            onChange={handleChangeCaption}
          />
          <label className="file-input-label" htmlFor="image">
            <div className="custom-file-input">
              Upload Image
            </div>
            <input
              type="file"
              id="image"
              onChange={handleChangeImage}
              style={{ display: 'none' }}
            />
          </label>
          {image && (
            <div className="image-preview">
              <img src={image as string} alt="Prévia da Imagem" />
            </div>
          )}
          <button type="submit">Publicar</button>
        </form>
      </div>
    </div>
  );
}

export default NewPostModal;
