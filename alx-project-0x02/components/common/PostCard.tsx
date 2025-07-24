import React from 'react';
import { type PostProps } from '@/interfaces';

const PostCard: React.FC<PostProps> = ({ userId, title, content }) => {
    return (
        <div className='bg-white p-4 mb-4 border rounded-lg shadow-md dark:bg-gray-800 dark:text-white'>
            <h2 className='text-lg font-semibold'>User ID: {userId}</h2>
            <h3 className='text-xl font-bold mt-2'>{title}</h3>
            <p className='mt-2 text-gray-600 dark:text-gray-400'>{content}</p>
        </div>
    )
}
export default PostCard;