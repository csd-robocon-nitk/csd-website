export function ThreeDPrinting () {
    return (
        <div className="p-5">
            <div className="flex items-center gap-3 border-b-[3px] border-dotted border-indigo-800">
                <img src="/facilities/makerbot.png" className="p-10 max-h-96" />
                <div>
                    <h1 className="text-3xl font-semibold">Makerbot Replicator 2</h1>
                    <h2 className="">Utilizes Fused Deposition Modeling (FDM) technology with PLA material, enabling precise layer resolutions of 100 microns</h2>
                    <p className="pl-10 text-lg">
                        <b>Print Technology:</b> Fused Deposition Modeling <br />
                        <b>Model Material:</b> PLA <br />
                        <b>Build Volume:</b> 295L X 195W X 165H mm <br />
                        <b>Layer Resolution:</b> 100 microns <br />
                        <b>Material Diameter:</b> 1.75 mm  <br />
                        <b>Nozzle Diameter:</b> 0.4 MM <br />
                        <b>Software Bundle:</b> MakerBot Print Software, MakerBot Mobile <br />
                    </p>
                </div>
            </div>
            <div className="flex items-center gap-3 border-b-[3px] border-dotted border-indigo-800">
                <div className="pl-10">
                    <h1 className="text-3xl font-semibold">Stratasys Uprint SE Plus</h1>
                    <h2 className="">ABS material with high precision layer thickness options (0.254 mm and 0.330 mm) ideal for functional prototypes</h2>
                    <p className="pl-10 text-lg">
                        <b>Print Technology:</b> Fused Deposition Modeling <br />
                        <b>Model Material:</b> ABS plus <br />
                        <b>Maximum Build Size:</b> 203 x 203 x 152 mm <br />
                        <b>Layer Thickness:</b> 0.254 mm or 0.330 mm <br />
                        <b>Material Diameter:</b> 1.75 mm  <br />
                        <b>Software Bundle:</b> CatalystEX 4.5 <br />
                    </p>
                </div>
                <img src="/facilities/stratasys.png" className="p-10 max-h-96" />
            </div>
            <div className="flex items-center gap-3">
                <img src="/facilities/hp fusion.png" className="p-10 max-h-96" />
                <div>
                    <h1 className="text-3xl font-semibold">HP Multi Jet Fusion 580</h1>
                    <h2 className="">Advanced nylon printing with multicolor capabilities, achieving high speed and accuracy with a layer thickness of 0.08mm</h2>
                    <p className="pl-10 text-lg">
                        <b>Print Technology:</b> Multi Jet Fusion <br />
                        <b>Model Material:</b> Nylon PA 12 <br />
                        <b>Maximum Build Size:</b> 332 x 190 x 248 mm <br />
                        <b>Building speed:</b> 1,817 cm3 /hr <br />
                        <b>Layer Thickness:</b> 0.08mm <br />
                        <b>Full build job time for 248-mm buildable height:</b> 18 Hrs <br />
                        <b>Software Bundle:</b>  <br />
                        <ul className="pl-12 list-disc">
                            <li>HP SmartStream 3D Build Manager</li>
                            <li>HP SmartStream 3D Command Center</li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>
    )
}