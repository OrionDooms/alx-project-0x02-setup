import React from "react";
import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";

const About: React.FC = () => {
    return (
        <div className="p-10">
            <Header />
            <h1 className="text-4xl font-bold mb-8">About page</h1>
            <div className="flex gap-6 flex-wrap">
                <Button label="Small Button" size="small" shape="rounded-sm" />
                <Button label="Medium Button" size="medium" shape="rounded-md" />
                <Button label="Large Button" size="large" shape="rounded-full" />
            </div>
        </div>
    );
};
export default About;