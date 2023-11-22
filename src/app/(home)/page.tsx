import CreateTeam from './CreateTeam';
import DisplayTeams from './DisplayTeams';

export const metadata = {
    title: "Home",
};

const HomePage = () => {
    return (
        <div className='px-4 md:px-10 lg:px-24'>
            <CreateTeam></CreateTeam>
            <DisplayTeams></DisplayTeams>
        </div>
    );
};

export default HomePage;