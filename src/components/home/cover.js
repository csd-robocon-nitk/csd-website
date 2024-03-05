export default function CoverSection () {
    return (
        <div className="hero h-screen overflow-hidden">
            <div className="hero-overlay z-10 bg-opacity-90"></div>
            <video autoPlay muted loop className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover">
                <source src="/cover_video.mp4" />
            </video>
            <div className="hero-content z-10">
                <h1 className="text-5xl font-bold text-center leading-normal">Center for System Design <br /> NITK</h1>
            </div>
        </div>
    )
}