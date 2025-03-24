import { TabsContent } from "@radix-ui/react-tabs"
import Slides from "./Slides"

export default function Description ({ slides, full_description}) {
    return (
        <TabsContent
            value="description"
            className="space-y-8 mt-6"
        >
            <Slides slides={slides} />

            <div className="prose max-w-none">
                <p className="text-lg leading-relaxed whitespace-pre-wrap text-justify">
                    {full_description}
                </p>
            </div>
        </TabsContent>
    )
}