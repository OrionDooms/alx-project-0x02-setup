import React from "react";
import Header from "@/components/layout/Header";

const Posts: React.FC = () => {
    return (
        <div>
            <Header />
            <div className="p-10">
                <h1 className="text-4xl font-bold">
                    Posts Page</h1>
            </div>
        </div>
    );
};
export default Posts;