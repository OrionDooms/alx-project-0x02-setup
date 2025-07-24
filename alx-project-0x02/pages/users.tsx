import React, {useEffect, useState} from "react";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import {type UserProps} from "@/interfaces";

const Users: React.FC = () => {
    const [users, setUsers] = useState<UserProps[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await res.json();
            setUsers(data);
        }
        fetchUsers();
    }, []);

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
export default Users;