import React, { useState } from 'react';

const Feed = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: 'John Doe',
      content: 'This is my first post!',
      image: 'https://via.placeholder.com/600x400', // Placeholder image
      comments: [
        { id: 1, user: 'Jane Smith', content: 'Great post!' },
        { id: 2, user: 'Alice Johnson', content: 'Thanks for sharing!' },
        { id: 3, user: 'Bob Brown', content: 'Nice!' },
        { id: 4, user: 'Charlie Davis', content: 'Awesome!' },
        { id: 5, user: 'Emily Clark', content: 'Love it!' },
      ],
    },
    {
      id: 2,
      user: 'Alice Johnson',
      content: 'Hello everyone!',
      image: 'https://via.placeholder.com/600x400', // Placeholder image
      comments: [],
    },
  ]);

  const [newPost, setNewPost] = useState({ content: '', image: '' });
  const [newComment, setNewComment] = useState('');
  const [activePostId, setActivePostId] = useState(null);
  const [expandedPostId, setExpandedPostId] = useState(null);

  const currentUser = 'Current User'; // Placeholder for the current user

  const handlePostChange = (e) => {
    const { name, value } = e.target;
    setNewPost((prevPost) => ({ ...prevPost, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewPost((prevPost) => ({ ...prevPost, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (newPost.content.trim() === '' || newPost.image.trim() === '') return;

    const newPostData = {
      id: posts.length + 1,
      user: currentUser,
      content: newPost.content,
      image: newPost.image,
      comments: [],
    };

    setPosts([newPostData, ...posts]);
    setNewPost({ content: '', image: '' });
  };

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = (postId) => {
    if (newComment.trim() === '') return;

    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        return {
          ...post,
          comments: [
            ...post.comments,
            { id: post.comments.length + 1, user: currentUser, content: newComment },
          ],
        };
      }
      return post;
    });

    setPosts(updatedPosts);
    setNewComment('');
    setActivePostId(null);
  };

  const toggleExpandComments = (postId) => {
    setExpandedPostId(expandedPostId === postId ? null : postId);
  };

  return (
    <div className="p-4 font-sans bg-gray-100 min-h-screen">
      <h1 className="text-4xl text-center mb-8 font-bold text-gray-800">Social Media Feed</h1>
      <div className="max-w-2xl mx-auto space-y-6">
        <form onSubmit={handlePostSubmit} className="bg-white border border-gray-200 rounded-lg shadow-md p-4">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Create a New Post</h2>
          <input
            type="text"
            name="content"
            value={newPost.content}
            onChange={handlePostChange}
            className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="What's on your mind?"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {newPost.image && (
            <img src={newPost.image} alt="Preview" className="w-full h-auto mb-4 rounded" />
          )}
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Post
          </button>
        </form>
        {posts.map((post) => (
          <div key={post.id} className="bg-white border border-gray-200 rounded-lg shadow-md">
            <div className="p-4 flex items-center">
              <img
                src={`https://i.pravatar.cc/150?img=${post.id}`} // Placeholder avatar
                alt="User avatar"
                className="w-10 h-10 rounded-full mr-4"
              />
              <div>
                <h2 className="text-lg font-semibold text-gray-800">{post.user}</h2>
                <p className="text-sm text-gray-500">Posted 2 hours ago</p>
              </div>
            </div>
            <img src={post.image} alt="Post" className="w-full h-auto" />
            <div className="p-4">
              <p className="text-gray-800 mb-4">{post.content}</p>
              <div className="space-y-2">
                {post.comments.slice(0, expandedPostId === post.id ? post.comments.length : 3).map((comment) => (
                  <div key={comment.id} className="bg-gray-100 p-2 rounded">
                    <p className="text-sm font-semibold text-gray-700">{comment.user}</p>
                    <p className="text-sm text-gray-600">{comment.content}</p>
                  </div>
                ))}
                {post.comments.length > 3 && (
                  <button
                    onClick={() => toggleExpandComments(post.id)}
                    className="text-blue-500 hover:underline"
                  >
                    {expandedPostId === post.id ? 'Show less' : `Show more (${post.comments.length - 3} more)`}
                  </button>
                )}
              </div>
              {activePostId === post.id && (
                <div className="mt-4">
                  <input
                    type="text"
                    value={newComment}
                    onChange={handleCommentChange}
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Add a comment"
                  />
                  <button
                    onClick={() => handleCommentSubmit(post.id)}
                    className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    Submit
                  </button>
                </div>
              )}
              <button
                onClick={() => setActivePostId(post.id)}
                className="mt-4 px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
              >
                {activePostId === post.id ? 'Cancel' : 'Comment'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;