import Link from "next/link";
import {authSession} from "@/libs/auth-libs";
import ButtonDashboard from "@/components/Navbar/ButtonDashboard";
import ButtonLogin from "@/components/Navbar/ButtonLogin";
import ButtonLogout from "@/components/Navbar/ButtonLogout";
const UserAction = async () => {
    const user = await authSession();

    const actionLabel = !!user;
    const actionUrl = user ? "/api/auth/signout" : "/api/auth/signin";
    return (
        <>
        {user ? (
            <Link href="/users/dashboard" >
              <ButtonDashboard/>
            </Link>
        ):null}
        <Link href={actionUrl} >
            {
                actionLabel ? (
                    <ButtonLogout/>
                ) : <ButtonLogin/>
            }
        </Link>

        </>
    );
};
export default UserAction