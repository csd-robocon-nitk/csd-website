export default function Lidar () {
    return (
        <div className="px-5">
            <div className="flex items-center gap-10 border-b-[3px] border-dotted border-indigo-800 py-6 px-10">
                <img src="/facilities/faro.png" className="max-h-72 aspect-square object-contain" />
                <div className="">
                    <h1 className="text-2xl font-semibold">FARO S350 A</h1>
                    <h2 className="">Measures at 1 million points per second, extended range up to 600m with HDR camera integration</h2>
                    <div className="pl-10">
                        <ul className="list-disc">
                            <li>Measurement speed of 1M pts/sec</li>
                            <li>Field of view 300/360 Deg</li>
                            <li>Class 1 Laser of 1550nm</li>
                            <li>Extended range up to 600m</li>
                            <li>HDR camera unit</li>
                            <li>On sight compensation</li>
                            <li>Integrated WLAN</li>
                            <li>Inbuilt GPS and GLONASS sensor</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-10 border-b-[3px] border-dotted border-indigo-800 py-6 px-10">
                <div className="">
                    <h1 className="text-2xl font-semibold">YellowScan Fly and Drive</h1>
                    <h2 className="">Lightweight, compact, and capable of autonomous aerial mapping with 5cm accuracy designed for UAV integration</h2>
                    <div className="pl-10">
                        <ul className="list-disc">
                            <li>Fully autonomous</li>
                            <li>Can be used from altitude of 50m</li>
                            <li>Lightweight having only 1.6kg</li>
                            <li>Accuracy of 5cm</li>
                            <li>Precision of 4cm</li>
                            <li>Compact</li>
                            <li>Simple to operate</li>
                            <li>Wireless data transmission</li>
                        </ul>
                    </div>
                </div>
                <img src="/facilities/yellowscan.png" className="max-h-72 aspect-square object-contain" />
            </div>
            <div className="flex items-center gap-10 py-6 px-10">
                <img src="/facilities/pix4d.png" className="max-h-72 aspect-square object-contain" />
                <div className="">
                    <h1 className="text-2xl font-semibold">Pix4D Mapper</h1>
                    <h2 className="">Software for processing aerial images to generate orthomosaics, 3D textured models, and digital elevation maps  for terrain and structural analysis</h2>
                    <div className="pl-10">
                        <ul className="list-disc">
                            <li>Color point cloud</li>
                            <li>Classified point cloud</li>
                            <li>Orthomosaic</li>
                            <li>Contour lines</li>
                            <li>Digital elevation model (DEM)</li>
                            <li>Digital surface model (DSM)</li>
                            <li>Thermal maps</li>
                            <li>Reflectance maps</li>
                            <li>3D textured mesh</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}