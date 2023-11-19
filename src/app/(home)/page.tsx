import CreateTeam from './CreateTeam';
import DisplayTeams from './DisplayTeams';

export const metadata = {
    title: "Home",
  };

const HomePage = async() => {
    return (
        <div className='px-24'>
            <CreateTeam></CreateTeam>
            <DisplayTeams></DisplayTeams>
        </div>
    );
};

export default HomePage;