import { TabsContent } from "@radix-ui/react-tabs"
import { Card, CardContent } from "./ui/card"

export default function KeyFeatures({ key_features }) {
    return (
        <TabsContent
            value="key_features"
            className="space-y-10 mt-6"
        >
            <div className="relative flex flex-col gap-10">

                {/* Vertical line only on md+ */}
                <div className="absolute left-1/2 top-0 h-full w-1 bg-sky-500 -translate-x-1/2 hidden md:block" />

                {key_features.map((feature, index) => (
                    <div
                        key={index}
                        className={`
                            relative flex w-full
                            ${index % 2 === 0
                                ? "md:justify-start"
                                : "md:justify-end"}
                            justify-center
                        `}
                    >

                        {/* Connector lines only on md+ */}
                        <div
                            className={`
                                absolute top-1/2 h-1 w-12 bg-sky-500 hidden md:block
                                ${index % 2 === 0
                                    ? "right-[50%]"
                                    : "left-[50%]"}
                            `}
                        />

                        <div className="md:w-[45%] w-full">
                            <Card className="bg-sky-100 border border-sky-300 shadow-md">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-semibold mb-2 text-sky-900">
                                        {feature.title}
                                    </h3>

                                    <p className="text-sky-950">
                                        {feature.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                ))}
            </div>
        </TabsContent>
    )
}