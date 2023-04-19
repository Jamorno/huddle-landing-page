import Image from "next/image"

export default function Content() {
    return (
        <div className="text-white px-10 lg:grid lg:items-center xl:px-20 xl:grid grid-cols-2 xl:items-center">
            <div className="pt-14 xl:pt-16">
                <Image src="/illustration-mockups.svg" width="900" height="400" />
            </div>

            <div className="space-y-5 pt-12 lg:px-8 xl:px-14 xl:space-y-6">
                <h1 className="text-3xl text-center font-semibold leading-tight lg:text-start lg:text-4xl lg:leading-tight xl:text-start xl:text-5xl xl:leading-tight">
                    Build The Community Your Fans Will Love
                </h1>

                <p className="text-md text-md text-center text-violet-300 lg:text-start lg:text-md xl:text-start xl:text-lg">
                    Huddle re-imagines the way we build communities. You have a voice, but so does your audience.
                    Create connections with your users as you engage in genuine discussion.
                </p>

                <div className="text-center lg:text-start xl:text-start">
                    <button className="bg-white text-violet-500 text-sm px-16 py-2 rounded-full hover:bg-pink-400 hover:text-white duration-300 drop-shadow-lg lg:text-lg lg:px-14 lg:py-3 xl:text-xl xl:px-16 xl:py-4">
                        Register
                    </button>
                </div>
            </div>
        </div>
    )
}
