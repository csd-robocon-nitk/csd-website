import { TabsContent } from "@radix-ui/react-tabs"
import { Card, CardContent } from "./ui/card"

export default function Testimonials ({ testimonials }) {
    return (
        <TabsContent
            value="testimonials"
            className="space-y-6 mt-6"
        >
            {
                testimonials.map(
                    (testimonial, index) => (
                        <Card
                            key={index}
                            className="bg-secondary/10"
                        >
                            <CardContent className="p-6">
                                <p className="italic mb-4">
                                    "{testimonial.comment}"
                                </p>
                                <p className="font-semibold">
                                    - {testimonial.name}
                                </p>
                            </CardContent>
                        </Card>
                    )
                )}
        </TabsContent>
    )
}