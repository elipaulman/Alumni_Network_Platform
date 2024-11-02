import React, { useState, useEffect } from "react";
import axios from 'axios';

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({
    content: "",
    image: "",
    tags: "",
    category: "",
  });
  const [newComment, setNewComment] = useState("");
  const [activePostId, setActivePostId] = useState(null);
  const [expandedPostId, setExpandedPostId] = useState(null);
  const [isPostFormVisible, setIsPostFormVisible] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [userNames, setUserNames] = useState({});

  // Update later to get current user from auth context
  const currentUser = "User Name";
  const HARDCODED_USER_EMAIL = "user@gmail.com";

  const categories = [
    "Sculpture",
    "Watercolor",
    "Digital Art",
    "Photography",
    "Mixed Media",
    "Other",
  ];

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:5050/db/posts/');
      setPosts(response.data);
      fetchUserNames(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const fetchUserNames = async (posts) => {
    const userEmails = [...new Set(posts.map(post => post.userEmail))];
    const userNamesMap = {};

    await Promise.all(userEmails.map(async (email) => {
      try {
        const response = await axios.get(`http://localhost:5050/db/users/${email}`);
        userNamesMap[email] = `${response.data.firstName} ${response.data.lastName}`;
      } catch (error) {
        console.error('Error fetching username:', error);
      }
    }));

    setUserNames(userNamesMap);
  };

  const handlePostChange = (e) => {
    const { name, value } = e.target;
    setNewPost((prevPost) => ({ ...prevPost, [name]: value }));
  };

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    if (
      newPost.content.trim() === "" ||
      newPost.image.trim() === "" ||
      newPost.category.trim() === ""
    )
      return;

    try {
      const postData = {
        userEmail: HARDCODED_USER_EMAIL,
        text: newPost.content,
        image: newPost.image,
        tags: newPost.tags.split(",").map((tag) => tag.trim()),
        category: newPost.category
      };

      const response = await axios.post('http://localhost:5050/db/posts/', postData);

      if (response.data) {
        fetchPosts();
        setNewPost({ content: "", image: "", tags: "", category: "" });
        setIsPostFormVisible(false);
      }
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = async (postId) => {
    if (newComment.trim() === "") return;

    try {
      const commentData = {
        user: currentUser,
        content: newComment
      };

      const response = await axios.post(`http://localhost:5050/db/posts/${postId}/comments`, commentData);

      if (response.data) {
        fetchPosts();
        setNewComment("");
        setActivePostId(null);
      }
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  const toggleExpandComments = (postId) => {
    setExpandedPostId(expandedPostId === postId ? null : postId);
  };

  const handleCategoryFilterChange = (e) => {
    setCategoryFilter(e.target.value);
  };

  const filteredPosts = posts.filter(
    (post) => categoryFilter === "" || post.category === categoryFilter
  );

  return (
    <div className="p-4 font-sans bg-gray-100 min-h-screen">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Your Feed</h1>
          <button
            onClick={() => setIsPostFormVisible(!isPostFormVisible)}
            className="flex items-center px-6 py-3 bg-[#00BDF2] text-white rounded-full shadow-lg hover:bg-[#00a6cf] focus:outline-none focus:ring-2 focus:ring-[#00BDF2] transition duration-200 ease-in-out"
          >
            <span className="mr-2 text-lg font-medium">Create Post</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v16m8-8H4"
              ></path>
            </svg>
          </button>
        </div>
        {isPostFormVisible && (
          <form
            onSubmit={handlePostSubmit}
            className="bg-white border border-gray-200 rounded-lg shadow-md p-4 space-y-4"
          >
            <div>
              <label className="block mb-2 text-gray-700 font-semibold">
                Content:
              </label>
              <textarea
                name="content"
                value={newPost.content}
                onChange={handlePostChange}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#00BDF2] transition duration-200 ease-in-out"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-gray-700 font-semibold">
                Image URL:
              </label>
              <input
                type="text"
                name="image"
                value={newPost.image}
                onChange={handlePostChange}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#00BDF2] transition duration-200 ease-in-out"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-gray-700 font-semibold">
                Tags (comma separated):
              </label>
              <input
                type="text"
                name="tags"
                value={newPost.tags}
                onChange={handlePostChange}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#00BDF2] transition duration-200 ease-in-out"
              />
            </div>
            <div>
              <label className="block mb-2 text-gray-700 font-semibold">
                Category:
              </label>
              <select
                name="category"
                value={newPost.category}
                onChange={handlePostChange}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#00BDF2] transition duration-200 ease-in-out"
                required
              >
                <option value="">Select a category</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 bg-[#00BDF2] text-white rounded-full shadow-lg hover:bg-[#00a6cf] focus:outline-none focus:ring-2 focus:ring-[#00BDF2] transition duration-200 ease-in-out"
              >
                Submit
              </button>
            </div>
          </form>
        )}
        <div className="mb-4">
          <select
            value={categoryFilter}
            onChange={handleCategoryFilterChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#00BDF2] transition duration-200 ease-in-out"
          >
            <option value="">Filter by Category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        {filteredPosts.map((post) => (
          <div
            key={post._id}
            className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition duration-200 ease-in-out"
          >
            <div className="p-4 flex items-center">
              <img
                src={`https://i.pravatar.cc/150?img=${post._id}`}
                alt="User avatar"
                className="w-10 h-10 rounded-full mr-4 border-2 border-[#00BDF2]"
              />
              <div>
                <h2 className="text-lg font-semibold text-gray-800">
                  {userNames[post.userEmail] || post.userEmail}
                </h2>
                <p className="text-sm text-gray-500">Posted 2 hours ago</p>
              </div>
            </div>
            <img src={post.image} alt="Post" className="w-full h-auto rounded-t-lg" />
            <div className="p-4">
              <p className="text-gray-800 mb-1 font-medium">{post.text}</p>
              <p className="text-sm text-gray-500 italic mb-1">{post.category}</p>
              <div className="flex flex-wrap gap-2 mb-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-[#00BDF2] text-white px-2 py-1 rounded-full text-sm shadow-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <div className="space-y-2">
                {post.comments && post.comments.slice(
                    0,
                    expandedPostId === post._id ? post.comments.length : 1
                  )
                  .map((comment) => (
                    <div key={comment._id} className="bg-gray-100 p-2 rounded">
                      <p className="text-sm font-semibold text-gray-700">
                        {comment.user}
                      </p>
                      <p className="text-sm text-gray-600">{comment.content}</p>
                    </div>
                  ))}
                {post.comments && post.comments.length > 1 && (
                  <button
                    onClick={() => toggleExpandComments(post._id)}
                    className="text-[#00BDF2] hover:underline"
                  >
                    {expandedPostId === post._id
                      ? "Show less"
                      : `Show more (${post.comments.length - 1} more)`}
                  </button>
                )}
              </div>
            </div>
            <div className="p-4 border-t border-gray-200">
              <input
                type="text"
                placeholder="Write a comment..."
                value={activePostId === post._id ? newComment : ""}
                onChange={handleCommentChange}
                onFocus={() => setActivePostId(post._id)}
                onBlur={() => setActivePostId(null)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleCommentSubmit(post._id);
                  }
                }}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#00BDF2] transition duration-200 ease-in-out"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;
