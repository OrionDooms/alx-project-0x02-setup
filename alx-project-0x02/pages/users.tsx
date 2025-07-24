import React, {useEffect, useState} from "react";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { type UserProps } from "@/interfaces";

interface UsersPageProps {
    users: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ users}) => {
    return (
        <div>
            <Header />
            <h1>Users Page</h1>
            <div>
                {users.map((user) => (
                    <UserCard key={user.id} {...user} />))}
            </div>
        </div>
    );
};
export const getStaticProps = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    return { props: { users } };
};
export default Users;