import useGroups from "@/utils/useGroups";
import TeamCard from "./TeamCard";
import CreateTeam from "./CreateTeam";

interface Team {
    _id: string,
    teamName: string,
    teamCategory: string,
    createdAt: string,
    updatedAt: string,
    __v: number
}
const myTeam = false;


const DisplayTeams = async () => {
    const { data } = await useGroups();
    return (
        <div className="pb-14">{!myTeam && <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {data?.map((team: Team) => <TeamCard key={team._id} team={team}></TeamCard>)}
        </div >}
            {myTeam && <div><CreateTeam></CreateTeam><DisplayTeams></DisplayTeams></div>}
        </div>
    );
};

export default DisplayTeams;