import { TabsContent } from "@radix-ui/react-tabs"
import { Card, CardContent } from "./ui/card"

export default function KeyFeatures ({ key_features}) {
    return (
        <TabsContent
            value="key_features"
            className="space-y-6 mt-6"
        >
            <div className="grid md:grid-cols-2 gap-6">
                {
                    key_features.map(
                        (feature, index) => (
                            <Card key={index}>
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-semibold mb-2">
                                        {feature.title}
                                    </h3>
                                    <p>{feature.description}</p>
                                </CardContent>
                            </Card>
                        )
                    )
                }
            </div>
        </TabsContent>
    )
}