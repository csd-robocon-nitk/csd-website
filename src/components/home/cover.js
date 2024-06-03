

export default function CoverSection () {
    return (
        // <div className="h-screen overflow-hidden">
        //     <video autoPlay muted loop className="absolute top-0 left-0 w-full h-full object-cover">
        //         <source src="/cover_video.mp4" />
        //     </video>
        //     <div className="absolute top-0 left-0 flex justify-center items-center bg-zinc-900/75 w-full h-full">
        //         <h1 className="text-6xl font-black text-center leading-tight text-zinc-300 drop-shadow-2xl shadow-black cover-heading">CENTER FOR SYSTEM DESIGN<br />NITK</h1>
        //     </div>
        // </div>
        <div className="cover bg-black h-screen overflow-hidden relative flex flex-col gap-8 justify-center items-center">
            <div className="w-full z-0 overflow-hidden">
                <video autoPlay muted loop className="absolute scale-125 h-screen top-0 left-0 w-full object-cover brightness-[.25] blur-[2px]">
                    <source src="/about.mp4" />
                </video>
            </div>
            <div className="h-screen absolute justify-center lg:gap-8 gap-5 items-center flex flex-col text-transparent bg-clip-text bg-gradient-to-r from-cobalt-300 to-shark-300 text-center">
                <div className="flex flex-col gap-0 items-center">
                    <div className="lg:text-8xl sm:text-6xl text-4xl font-bold tracking-tighter">Centre for System Design</div>
                    <div className="lg:text-7xl sm:text-5xl text-4xl font-bold tracking-tighter">NITK</div>
                </div>
                <div className="lg:text-4xl sm:text-3xl text-2xl font-medium tracking-tighter">A Centre of Excellence at NITK Surathkal</div>
            </div>
        </div>
    )
}