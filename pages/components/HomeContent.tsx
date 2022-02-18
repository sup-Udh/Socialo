import Image from "next/image";
import SocialoButton from "./Content/SocialoButton";

function Content() {
    return (
        <div className="flex items-center justify-center space-x-10 content-evenly h-[calc(100vh-8rem)] ">
            <div className="flex-0.5">
                <div className="flex space-y-5 flex-col">
                    <h2 className="text-[35px] w-[22.5rem] drop-shadow-md">Create Your Profiles With Your <span className="font-bold">Social Accounts</span></h2>
                    <SocialoButton text="Try Now!" href="/" purple={true}/>
                </div>
            </div>

            <div className="flex-0.5">
                <Image src={"/dancing.svg"} alt="" width={"398"} height={"368"}/>
            </div>
        </div>
    );
}

export default Content;
