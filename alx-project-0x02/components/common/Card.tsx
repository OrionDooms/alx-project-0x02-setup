import React from "react";
import {type CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({ title, content }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-6 m-4 max-x-md dark:bg-gray-800 border w-72">
            <img className="w-full h-40 object-cover mb-4 rounded" src="https://placehold.co/300x160" alt="Placeholder"/>
            <p className="text-gray-900 text-lg font-semibold dark:text-white mb-2">{title}</p>
            <p className="text-gray-700 dark:text-gray-300">{content}</p>
            
        </div>
    )
}
export default Card;