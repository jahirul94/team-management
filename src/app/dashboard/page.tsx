import DashboardHeader from "./DashboardHeader";
import ViewTeam from "./ViewTeam";
import useUsers from '@/utils/useUsers'

export const metadata = {
    title: 'Dashboard',
    description: 'your teams dashboard',
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




const TeamDashboard = async () => {
    const users: Array<User> = await useUsers();
    return (
        <div className="px-0 md:px-24 bg-[#FFF9F9] min-h-screen">
            <DashboardHeader users={users}></DashboardHeader>
            <ViewTeam></ViewTeam>
        </div>
    );
};

export default TeamDashboard;