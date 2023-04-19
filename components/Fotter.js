import {
    BsFacebook,
    BsInstagram
} from "react-icons/bs"
import { AiFillTwitterCircle } from "react-icons/ai";

export default function Fotter() {
    return (
        <div className="flex pt-16 text-white items-center justify-center cursor-pointer md:pb-10 lg:justify-end lg:pr-20 lg:pt-5 xl:justify-end xl:pr-36 xl:pt-10">
            <BsFacebook size={"25"} className="hover:text-pink-400 mx-3 duration-300" />
            <AiFillTwitterCircle size={"30"} className="hover:text-pink-400 mx-3 duration-300" />
            <BsInstagram size={"25"} className="hover:text-pink-400 mx-3 duration-300" />
        </div>
    )
}
