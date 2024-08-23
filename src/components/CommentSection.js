import React, { useState } from 'react';

function CommentSection() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = () => {
    setComments([...comments, newComment]);
    setNewComment('');
  };

  return (
    <div>
      <h3>Comments</h3>
      <textarea
        value={newComment}
        onChange={handleCommentChange}
        placeholder="Leave a comment..."
      />
      <button onClick={handleCommentSubmit}>Submit</button>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </div>
  );
}

export default CommentSection;
