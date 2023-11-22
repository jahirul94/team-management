"use client"
import axios from "axios";
import { useEffect, useState } from "react";
import DashboardHeader from "../DashboardHeader";
import ViewTeam from "../ViewTeam";

export type Team = {
    createdAt: string;
    teamCategory: string;
    teamName: string;
    updatedAt: string;
    __v: string;
    _id: string
}

export type User = {
    _id: string;
    email: string;
    password: string;
    role: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
    photoURL?: string;
    displayName?: string
}

const initialTeamState: Team = {
    createdAt: '',
    teamCategory: '',
    teamName: '',
    updatedAt: '',
    __v: '',
    _id: '',
  };

const DynamicPage = (param: { params: { id: string } }) => {
    const id = param?.params?.id;
    const [team, setTeam] = useState<Team>(initialTeamState);
    const [users, setUsers] = useState<Array<User>>([]);
    
    useEffect(() => {
        axios.get(`https://little-programmers-frontend-api-abdurrahmantalha.vercel.app/api/v1/team/${id}`)
            .then(data => {
                const loadedTeam: Team = data.data.data;
                setTeam(loadedTeam)
            })
            .catch(error => console.log(error))
    }, [id])

    useEffect(() => {
        axios.get("https://little-programmers-frontend-api-abdurrahmantalha.vercel.app/api/v1/user")
            .then(data => setUsers(data.data.data))
            .catch(error => console.log(error))
    })

    return (
        <div className="px-2 md:px-10 lg:px-24 bg-[#FFF9F9] min-h-screen">
            <DashboardHeader users={users} team={team}></DashboardHeader>
            <ViewTeam></ViewTeam>
        </div>
    );
};

export default DynamicPage;