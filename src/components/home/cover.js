export default function CoverSection () {
    return (
        <div className="hero h-screen overflow-hidden">
            <div className="hero-overlay z-10 bg-opacity-90"></div>
            <video autoPlay muted loop className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover">
                <source src="/cover_video.mp4" />
            </video>
            <div className="hero-content z-10">
                <h1 className="text-6xl font-black text-center leading-tight text-slate-300 drop-shadow-2xl shadow-black cover-heading">CENTER FOR SYSTEM DESIGN<br />NITK</h1>
            </div>
        </div>
    )
}