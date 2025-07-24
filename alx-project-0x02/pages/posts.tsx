import React from "react";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { type PostProps } from "@/interfaces";

interface PostsPageProps {
    posts: PostProps[];
}

const Posts: React.FC<PostsPageProps> = ({ posts }) => {    
    return (
        <div>
            <Header />
            <h1>Posts Page</h1>
            <div>
                {posts.map((post) => (
                    <PostCard key={post.id} {...post} />
                ))}
            </div>
        </div>
    );
};
export const getStaticProps = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();

    return { props: { posts } };
};
export default Posts;