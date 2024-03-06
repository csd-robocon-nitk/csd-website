import UpdateCard from "./updateCard"

let updates = [
    {
        image: "/updates/001.jpg",
        title: "Coming Soon..."
    },
    {
        image: "/updates/002.jpg",
        title: "NITK is Full of Possibilities | 2023 BTech Orientation"
    },
    {
        image: "updates/003.jpg",
        title: "Awareness Program for MSME's | Kottara Chowki | 20th March 2023"
    }
]

export default function UpdatesSection () {
    return (
        <div className="max-w-screen-lg mx-auto py-10">
            <h1 className="text-4xl mb-10">Updates</h1>
            <div className="flex flex-wrap justify-evenly items-stretch">
                {updates.map((u,i) => <UpdateCard key={i} update={u} />)}
            </div>
        </div>
    )
}