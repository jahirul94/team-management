"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";

interface Team {
    _id: string,
    teamName: string,
    teamCategory: string,
    createdAt: string,
    updatedAt: string,
    __v: number
}

const TeamCard = ({ team }: { team: Team }) => {
    const { _id, teamName, teamCategory, createdAt, updatedAt } = team;
    const router = useRouter();

    const handleAddMembers = (id: string) => {
        return router.push(`dashboard/${id}`)
    }

    return (
        <div onClick={() => handleAddMembers(_id)} className="p-6 border border-blue-500 rounded-lg space-y-2">
            <Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" height={200} width={150} alt="group image" className="rounded-full"></Image>
            <p className="text-xl md:text-2xl font-bold">{teamName}</p>
            <p className="text-lg md:text-xl font-semibold pb-4">{teamCategory}</p>
            <p className="text-md">{createdAt}</p>
            <p className="text-md">{updatedAt}</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate repellat tempora vel animi eum explicabo pariatur perferendis voluptatem ipsa vero iste quas consequuntur, omnis eaque natus labore assumenda reprehenderit architecto voluptate debitis nam magni quaerat? Laudantium expedita, nemo debitis doloremque repudiandae dolores blanditiis sapiente magnam vitae officia alias ab voluptatibus!</p>
        </div>
    );
};

export default TeamCard;