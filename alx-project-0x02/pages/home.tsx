import React, { use, useState }  from "react";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import { CardProps } from "@/interfaces";


const Home: React.FC = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [posts, setPosts] = useState<CardProps[]>([
        {title: "Title 1", content: "Content for post 1"},
        {title: "Title 2", content: "Content for post 2"}
    ]);

    const handleAddPost = (post: CardProps) => {
        setPosts((prev) => [...prev, post]);
    };

	return (
	<div className="justify-center items-center flex-col h-screen">
		<h1 className="text-4xl font-bold">Home page</h1>

        <button onClick={() => setModalOpen(true)}
            className="test-white bg-blue-600 mb=6 px-4 py-2 mb-6 rounded hover: bg-blue-7000">
            Add post
        </button>

		<div className="grid grid-cols-3 space-y-5">
            {
            posts.map((post, index) => (
                <Card
                key={index}
                title={post.title} 
                content={post.content} />
                ))}
            </div>

            <PostModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                onSubmit={handleAddPost} />
	</div>
	);
};
export default Home;