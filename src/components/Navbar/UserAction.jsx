import Link from "next/link";
import {authSession} from "@/libs/auth-libs";
const UserAction = async () => {
    const user = await authSession();

    const actionLabel = user ? "SignOut" : "SignIn";
    const actionUrl = user ? "/api/auth/signout" : "/api/auth/signin";
    return (
        <>
        {user ? (
            <Link href="/users/dashboard" >
                <button className="bg-color-dark hover:bg-color-darksecondary transition-all text-color-primary font-bold py-2 px-4 rounded">
                    Dashboard
                </button>
            </Link>
        ):null}
        <Link href={actionUrl} >
            <button className="bg-color-dark hover:bg-color-darksecondary transition-all text-color-primary font-bold py-2 px-4 rounded">
                {actionLabel}
            </button>
        </Link>

        </>
    );
};
export default UserAction