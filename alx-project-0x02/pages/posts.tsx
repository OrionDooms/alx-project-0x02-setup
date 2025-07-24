import React, { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { type PostProps} from "@/interfaces";

const Posts: React.FC = () => {
    const [posts, setPosts] = useState<PostProps[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await res.json();

            const mappedData: PostProps[] = data.slice(0, 10).map((post: any) => ({
                userId: post.userId,
                title: post.title,
                content: post.body,
            }));
            setPosts(mappedData);
        };
        fetchPosts();
    }, []);
    
    return (
        <div>
            <Header />
            <div className="p-10">
                <h1 className="text-4xl font-bold">
                    Posts Page</h1>
                <div>
                    {posts.map((post, index) => (
                        <PostCard
                            key={index}
                            userId={post.userId}
                            title={post.title}
                            content={post.content}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Posts;