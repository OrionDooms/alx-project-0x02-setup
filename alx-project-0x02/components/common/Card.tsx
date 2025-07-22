import React from "react";
import { CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({ title, content }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-6 m-4 max-x-md dark:bg-gray-800">
            <h2 className="text-xl font-semibold mb-2  text-gray-900 dark:text-white">{title}</h2>
            <p className="text-gray-700 dark:text-gray-300">{content}</p>
        </div>
    )
}
export default Card;