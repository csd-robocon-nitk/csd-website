import { ChartSpline, Database, LayoutGrid, SlidersHorizontal } from "lucide-react"
import Publications from "./Publications"

export default function ResearchPage () {
    return (
        <div className="min-h-screen mt-20 p-5">
            <h1 className="text-4xl font-bold mb-8 max-w-[1100px] mx-auto">Our Research Areas</h1>
            <div className="grid grid-cols-2 gap-5 max-w-[1100px] mx-auto">
                <div className="flex flex-col items-center p-5 shadow-gray-300 shadow-md rounded-md bg-blue-50/50">
                    <Database className="w-16 h-16 text-blue-500 mb-3"/>
                    <h2 className="text-xl mb-1 font-medium text-center">Data Acquisition</h2>
                    <p className="text-center text-gray-600">Collecting and analyzing large datasets for insights and decision-making.</p>
                </div>
                <div className="flex flex-col items-center p-5 shadow-gray-300 shadow-md rounded-md bg-green-50/50">
                    <ChartSpline className="w-16 h-16 text-green-500 mb-3"/>
                    <h2 className="text-xl mb-1 font-medium text-center">Digital Signal Processing</h2>
                    <p className="text-center text-gray-600">Enhancing and manipulating digital signals for improved performance.</p>
                </div>
                <div className="flex flex-col items-center p-5 shadow-gray-300 shadow-md rounded-md bg-red-50/50">
                    <SlidersHorizontal className="w-16 h-16 text-red-500 mb-3"/>
                    <h2 className="text-xl mb-1 font-medium text-center">Real-Time Control Systems</h2>
                    <p className="text-center text-gray-600">Developing systems that respond instantly to input for critical applications.</p>
                </div>
                <div className="flex flex-col items-center p-5 shadow-gray-300 shadow-md rounded-md bg-purple-50/50">
                    <LayoutGrid className="w-16 h-16 text-purple-500 mb-3"/>
                    <h2 className="text-xl mb-1 font-medium text-center">Graphical Simulation</h2>
                    <p className="text-center text-gray-600">Creating visual representations of complex systems and processes.</p>
                </div>
            </div>
            <h1 className="text-4xl font-bold mt-10 mb-6 max-w-[1100px] mx-auto">Research Publications</h1>
            <Publications />
        </div>
    )
}