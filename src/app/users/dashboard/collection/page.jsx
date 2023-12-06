import Header from "@/components/Dashboard/Header";
import {useRouter} from "next/navigation";

const Page = () => {
    return (
    <div className="container mx-auto mt-8 ">
        <header>
            <Header title={`My Collection`} />
        </header>
    </div>
    );
};
export default Page