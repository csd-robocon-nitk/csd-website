import { Bike, BookHeadphones, BrainCircuit, Cpu, Earth, Factory, Leaf, Map, RadioTower, Satellite } from "lucide-react"
import Publications from "./Publications"
import ResearchArea from "./ResearchArea"

export default function ResearchPage () {
    return (
        <div className="min-h-screen mt-20 p-5 bg-white">
            <h1 className="text-4xl font-bold mb-8 max-w-[1100px] mx-auto">Our Research Areas</h1>
            <div className="grid grid-cols-4 items-stretch gap-5 max-w-[1100px] mx-auto">
                <ResearchArea 
                    Logo = {Map}
                    logo_color="#3b82f6"
                    title = "Precision Surveying and Mapping"
                    description = "LiDAR, Photogrammetry, and GIS-based research for urban planning, disaster management, and infrastructure development"
                />
                <ResearchArea 
                    Logo = {Leaf}
                    logo_color="#58eb3b"
                    title = "Sustainable Energy Systems"
                    description = "Solar farm feasibility, renewable energy integration, energy forecasting, and storage systems"
                />
                <ResearchArea 
                    Logo = {BrainCircuit}
                    logo_color="#ff66ea"
                    title = "Automation and Robotics"
                    description = "Autonomous systems, drone and UAV development, and control systems for industrial automation"
                />
                <ResearchArea 
                    Logo = {Factory}
                    logo_color="#5c5c5c"
                    title = "Advanced Manufacturing and Prototyping"
                    description = "3D printing, rapid prototyping, and materials research for sustainable manufacturing processes"
                />
                <ResearchArea 
                    Logo = {Earth}
                    logo_color="#36910a"
                    title = "Environmental Impact Assessment"
                    description = "Research into environmental monitoring, EIA for industries, and sustainability practices"
                />
                <ResearchArea 
                    Logo = {Satellite}
                    logo_color="#61caff"
                    title = "Remote Sensing & GIS Applications"
                    description = "Research into satellite data analysis, land-use planning, and agriculture monitoring"
                />
                <ResearchArea 
                    Logo = {Bike}
                    logo_color="#f7954a"
                    title = "Electric Vehicles and E-Mobility"
                    description = "Development of electric motors, testing, and performance optimization for electric vehicles"
                />
                <ResearchArea 
                    Logo = {RadioTower}
                    logo_color="#e6df3c"
                    title = "Communication Systems"
                    description = "HAM radio research, software-defined radios (SDRs), and wireless communication technologies"
                />
                <span />
                <ResearchArea 
                    Logo = {BookHeadphones}
                    logo_color="#c62bff"
                    title = "Immersive Learning Technologies"
                    description = "Research into virtual labs, augmented reality (AR), and virtual reality (VR) for education"
                />
                <ResearchArea 
                    Logo = {Cpu}
                    logo_color="#f25265"
                    title = "Embedded Systems and IoT"
                    description = "Research on embedded systems, IoT applications, and sensor networks for smart cities and industries"
                />
            </div>
            <h1 className="text-4xl font-bold mt-10 mb-6 max-w-[1100px] mx-auto">Research Publications</h1>
            <Publications />
        </div>
    )
}