import { TabsContent } from "@radix-ui/react-tabs"

export default function Impact ({ impact }) {
    return (
        <TabsContent value="impact" className="space-y-8 mt-6">
            <div className="prose max-w-none">
                <h2 className="text-3xl font-bold mb-4">
                    {impact.title}
                </h2>
                <p className="text-lg">{impact.description}</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {
                    impact.metrics.map((item, index) => (
                        <div
                            key={index}
                            className="bg-sky-100 shadow shadow-sky-300/50 flex flex-col justify-center items-center text-center rounded-lg p-5"
                        >
                            <p className="text-3xl font-bold text-sky-500 mb-2">
                                {item.metric}
                            </p>
                            <p className="text-sm">
                                {item.description}
                            </p>
                        </div>
                    ))
                }
            </div>
        </TabsContent>
    )
}