
interface PostProps {
  caption: string;
}

function Post({ caption }: PostProps) {
  return (
    <div className="post-container">
      {caption}
    </div>
  );
}

export default Post;