interface Team {
    _id: string,
    teamName: string,
    teamCategory: string,
    createdAt: string,
    updatedAt: string,
    __v: number
}

const TeamCard = ({ team }: { team: Team }) => {
    const { teamName, teamCategory, createdAt, updatedAt } = team;
    return (
        <div className="p-8 border border-green-500">
            <p>image</p>
            <p className="text-2xl font-bold">{teamName}</p>
            <p className="text-xl font-semibold">{teamCategory}</p>
            <p className="text-md">{createdAt}</p>
            <p className="text-md">{updatedAt}</p>
        </div>
    );
};

export default TeamCard;