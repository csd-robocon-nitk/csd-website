import PeopleCard from './peopleCard.js'

export default async function PeoplePage() {
    const token = process.env.TOKEN;
    if (!token) {
        throw new Error('Token not found!');
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/peoples?populate=*`, {
        headers: {
            'Authorization': `Bearer ${token}`
        },
        cache: "no-cache"
    });

    if (!res.ok) {
        throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
    }

    const people = await res.json();
    const people_data = people.data;

    const associated_faculty = people_data.filter(item => item.attributes.type === "associated_faculty");
    const associated_research_scholars = people_data.filter(item => item.attributes.type === "associated_research_scholars");
    const associated_staff = people_data.filter(item => item.attributes.type === "associated_staff");

    return (
        <div className="py-10 pt-10 mt-20 bg-gradient-to-r from-cobalt-200 to-shark-200 flex w-full flex-col items-center">
            <div className="flex flex-col items-center justify-evenly w-ful">
                <h1 className="font-extrabold text-4xl lg:text-5xl">Associated Faculty</h1>
                <div className="flex flex-wrap items-center p-10 justify-center gap-8">
                    {
                        associated_faculty.map((faculty,index) => (

                            <PeopleCard key={index} item={faculty} />

                        ))
                    }
                </div>
            </div>
            <div className="flex flex-col items-center justify-center">
                <h1 className="font-extrabold text-4xl lg:text-5xl">Associated Research Scholars</h1>
                <div className="flex flex-wrap items-center p-10 justify-center space-x-8">
                    {
                        associated_research_scholars.map((faculty,index) => (

                            <PeopleCard key={index} item={faculty} />

                        ))
                    }
                </div>
            </div>
            <div className="flex flex-col items-center justify-center">
                <h1 className="font-extrabold text-4xl lg:text-5xl">Associated Staff</h1>
                <div className="flex flex-wrap items-center p-10 justify-center space-x-8">
                    {
                        associated_staff.map((faculty,index) => (

                            <PeopleCard key={index} item={faculty} />

                        ))
                    }
                </div>
            </div>
            
        </div>
    )
}