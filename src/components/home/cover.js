import './cover.css'

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
        <div className="cover h-screen w-full flex flex-col gap-8 justify-center items-center">
            <div className="xl:text-9xl lg:text-7xl sm:text-5xl text-3xl font-extrabold tracking-tighter">Center for System Design</div>
            <div className="xl:text-8xl lg:text-7xl sm:text-5xl text-3xl font-extrabold tracking-tighter">NITK</div>
            <div className="xl:text-6xl lg:text-4xl sm:text-2xl text-lg font-bold tracking-tighter">A Centre of Excellence at NITK Surathkal</div>
        </div>
    )
}