import useGroups from "@/utils/useGroups";
import TeamCard from "./TeamCard";


interface Team {
    _id: string,
    teamName: string,
    teamCategory: string,
    createdAt: string,
    updatedAt: string,
    __v: number
}

const DisplayTeams = async () => {
    const { data } = await useGroups();
    return (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {data?.map((team: Team) => <TeamCard key={team._id} team={team}></TeamCard>)}
        </div >

    );
};

export default DisplayTeams;