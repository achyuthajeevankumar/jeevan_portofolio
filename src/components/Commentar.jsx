import React, { useState, useEffect } from "react";
import { User, MessageSquare, Send } from "lucide-react";
import { getComments, addComment } from "../firebase-comment";
import Swal from "sweetalert2";

const Komentar = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({ name: "", content: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    const data = await getComments();
    setComments(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newComment.name || !newComment.content) return;
    
    setIsSubmitting(true);
    try {
      await addComment(newComment);
      setNewComment({ name: "", content: "" });
      await fetchComments();
      Swal.fire({
        icon: "success",
        title: "Comment added!",
        showConfirmButton: false,
        timer: 1500,
        background: '#111',
        color: '#fff'
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Could not add comment. Try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-8">
      <h3 className="text-2xl font-bold text-white flex items-center gap-2">
        <MessageSquare className="w-6 h-6 text-purple-500" />
        Guestbook
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative group">
          <User className="absolute left-3 top-3 w-5 h-5 text-gray-500 group-focus-within:text-purple-500 transition-colors" />
          <input
            type="text"
            placeholder="Your name"
            className="w-full bg-white/5 border border-white/10 rounded-xl p-2 pl-10 text-white focus:outline-none focus:border-purple-500/50 transition-all"
            value={newComment.name}
            onChange={(e) => setNewComment({ ...newComment, name: e.target.value })}
            required
          />
        </div>
        <textarea
          placeholder="Write a message..."
          className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-purple-500/50 transition-all min-h-[100px]"
          value={newComment.content}
          onChange={(e) => setNewComment({ ...newComment, content: e.target.value })}
          required
        ></textarea>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
        >
          <Send className="w-4 h-4" />
          {isSubmitting ? "Sending..." : "Post Comment"}
        </button>
      </form>

      <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
        {comments.length === 0 ? (
          <p className="text-gray-500 text-center py-4">No comments yet. Be the first!</p>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} className="bg-white/5 border border-white/10 p-4 rounded-2xl space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-bold text-purple-400 text-sm">{comment.name}</span>
                <span className="text-[10px] text-gray-500">
                  {new Date(comment.createdAt).toLocaleDateString()}
                </span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">{comment.content}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Komentar;
