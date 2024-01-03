import React from "react";
import "./styles.css";

interface PostProps {
  postData: { caption: string; image: string | ArrayBuffer | null };
}

const Post: React.FC<PostProps> = ({ postData }) => {
  const hasImage = postData.image !== null;

  return (
    <div className={`post${hasImage ? ' with-image' : ''}`}>
      {postData.image && (
        <div className="image-preview">
          <img src={String(postData.image)} alt="Prévia da Imagem" />
        </div>
      )}
      <p><strong>@user.name</strong> {postData.caption}</p>
      <p className="time-post">1min</p>
    </div>
  );
};

export default Post;
