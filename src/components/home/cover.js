export default function CoverSection () {
    return (
        <div className="h-screen overflow-hidden">
            <video autoPlay muted loop className="absolute top-0 left-0 w-full h-full object-cover">
                <source src="/cover_video.mp4" />
            </video>
            <div className="absolute top-0 left-0 flex justify-center items-center bg-zinc-900/85 w-full h-full">
                <h1 className="text-6xl font-black text-center leading-tight text-zinc-300 drop-shadow-2xl shadow-black cover-heading">CENTER FOR SYSTEM DESIGN<br />NITK</h1>
            </div>
        </div>
    )
}