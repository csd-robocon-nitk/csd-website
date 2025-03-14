export default function Uav () {
    return (
        <div className="px-5">
            <div className="flex items-center gap-10 border-b-[3px] border-dotted border-indigo-800 py-6 px-10">
                <img src="/facilities/photogrammetry drone.png" className="max-h-72 aspect-square object-contain" />
                <div className="">
                    <h1 className="text-2xl font-semibold">Photogrammetry Drone</h1>
                    <h2 className="">RTK-enabled for precise vertical (±0.1m) and horizontal (±0.1m) mapping</h2>
                    <div className="pl-10">
                        <b>Camera sensor:</b> 1" CMOS; <b>Effective pixels: 20 M</b> <br />
                        <b>Mapping Accuracy:</b> <br /> 
                        <div className="pl-7">
                            <b>RTK enabled</b>
                            <p className="pl-7">
                                <b>Vertical:</b> ±0.1 m <br />
                                <b>Horizontal:</b> ±0.1 m <br />
                            </p>
                            <b>RTK disabled</b>
                            <p className="pl-7">
                                <b>Vertical:</b> ±0.1 m (with vision positioning); ±0.5 m (with GNSS positioning) <br/>
                                <b>Horizontal:</b> ±0.3 m (with vision positioning); ±1.5 m (with GNSS positioning)
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-10 border-b-[3px] border-dotted border-indigo-800 py-6 px-10">
                <div className="">
                    <h1 className="text-2xl font-semibold">Thermal Drone (M210 V2 RTK)</h1>
                    <h2 className="">Equipped with VOx microbolometer for accurate thermal imaging for environmental and industrial inspections</h2>
                    <div className="pl-10">
                        <b>UAV System:</b> M210 V2  RTK <br />
                        <b>Thermal Imager:</b> Uncooled VOx Microbolometer <br />
                        <b>Digital Formats:</b> 640*512, 336*256 <br />
                        <b>Scene Range:</b>  <br />
                        <p className="pl-7">
                            <b>640*512:</b>  -25° to 135℃ <br />
                            <b>336*256:</b> -25° to 100℃ <br />
                        </p>
                        <b>Measuring Accuracy:</b> ±5°C (±41°F) <br />

                    </div>
                </div>
                <img src="/facilities/thermal drone.png" className="max-h-72 aspect-square object-contain" />
            </div>
            <div className="flex items-center gap-10 border-b-[3px] border-dotted border-indigo-800 py-6 px-10">
                <img src="/facilities/arial lidar system.png" className="max-h-72 aspect-square object-contain" />
                <div className="">
                    <h1 className="text-2xl font-semibold">Aerial Lidar Drone</h1>
                    <h2 className="">Velodyne VLP-16 sensor, capable of capturing 300 million points per second for detailed 3D modeling</h2>
                    <div className="pl-10">
                        <b>Sensor:</b> Velodyne VLP-16 <br />
                        <b>System Accuracy:</b> 5 cm <br />
                        <b>System Precision:</b> 4 cm <br />
                        <b>Field Of View:</b> 360°, ideal for horizontal and vertical mapping <br />
                        <b>Resolution:</b> Capable of Capturing 300 million points per second <br />
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-10 py-6 px-10">
                <div className="">
                    <h1 className="text-2xl font-semibold">Multispectral Drone System</h1>
                    <h2 className="">Equipped with filters (Blue, Green, Red, NIR) for environmental monitoring and agricultural analysis. Integrated Spectral Sunlight Sensor for Accurate Results. Filters:</h2>
                    <div className="pl-10">
                        <b>Blue (B):</b> 450 nm ± 16 nm <br />
                        <b>Green (G):</b> 560 nm ± 16 nm <br />
                        <b>Red (R):</b> 650 nm ± 16 nm <br />
                        <b>Red edge (RE):</b> 730 nm ± 16 nm <br />
                        <b>Near-infrared (NIR):</b> 840 nm ± 26 nm <br />
                        <b>RGB:</b> 2.18 MP <br />
                    </div>
                </div>
                <img src="/facilities/multispectral drone system.png" className="max-h-72 aspect-square object-contain" />
            </div>
        </div>
    )
}