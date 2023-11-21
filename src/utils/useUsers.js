
const useUsers = async () => {
    const res = await fetch("https://little-programmers-frontend-api-abdurrahmantalha.vercel.app/api/v1/user", { cache: 'no-store' })
    const users = await res.json();
    return users?.data;
};

export default useUsers;