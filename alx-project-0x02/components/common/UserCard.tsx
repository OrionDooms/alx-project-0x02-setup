import React from "react";
import { type UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
    return (
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
            <div>
                <p>{address.street}, {address.suite}, 
                    {address.city}, {address.zipcode}</p>
            </div>
        </div>
    );
};
export default UserCard;
