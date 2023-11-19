
const useGroups = async () => {
    const res = await fetch("https://little-programmers-frontend-api-abdurrahmantalha.vercel.app/api/v1/team", { cache: 'force-cache' })
    const data = await res.json();
    return data;
};

export default useGroups;