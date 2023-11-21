import { AuthContext } from "@/providers/AuthProvider";
import { useRouter } from "next/navigation";
import { useContext } from "react";

const PrivateRoutes = ({ children }: any) => {
    const { user }: any = useContext(AuthContext);
    const router = useRouter();

    if (!user) {
        return router.push("/login")
    }

    if (user) {
        console.log(user);
        return children;
    }
};

export default PrivateRoutes;