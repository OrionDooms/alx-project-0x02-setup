import React from "react";
import { type CardProps } from "@/interfaces";


const Card: React.FC<CardProps> = ({ title, content }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-6 m-4 max-x-md dark:bg-gray-800 border w-72">
            <h2 className="text-gray-900 text-lg font-semibold mb-2">{title}</h2>
            <p className="text-gray-700 dark:text-gray-300">{content}</p>
        </div>
    )
}
export default Card;