import React, { useState } from "react";
import { PostModalProps } from "@/interfaces";

const PostModal: React.FC<PostModalProps> = ({ isOpen, onClose, onSubmit }) => {
    const [ title, setTitle] = useState("");
    const [ content, setcontent] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (title && content) {
            onSubmit({ title, content });
            setTitle("");
            setcontent("");
            onClose();
        };

        if (!isOpen) return null;
        return (
            < div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
                <div className="bg-white p-6 rounded-lg shadow-lg w-96 dark:bg-gray-800">
                    <h2 className="text-xl mb-4 font-semibold text-gray-800 dark:text-white">Add a Post</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input className="w-full p-2 px-4 border rounded dark:bg-gray-700 dark:text-white"
                        type="text" placeholder="Title" 
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required />

                        <textarea placeholder="Content" 
                        value={content}
                        onChange={(e) => setcontent(e.target.value)}
                        className="w-full p-2 px-4 border rounded dark:bg-gray-700 dark:text-white"
                        required />

                        <div>
                            <button type="button" onClick={onClose}>
                                Cancel</button>
                            <button type="submit">Add Post</button>

                        </div>
                        </form>
                </div>
            </div>
        )
    }
}
export default PostModal;