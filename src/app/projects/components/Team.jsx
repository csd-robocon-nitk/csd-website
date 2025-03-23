import { TabsContent } from "@radix-ui/react-tabs"

export default function Team ({ team, external_team }) {
    return (
        <TabsContent
            value="team"
            className="space-y-6 mt-6"
        >
            {team &&
                team.map(member => <li key={2*member.id}>{member.attributes.name}</li>)
            }

            {external_team &&
                external_team.map(member => <li key={2*member.id+1}>{member.name}</li>)
            }
        </TabsContent>
    )
}