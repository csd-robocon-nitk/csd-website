export default async function PeoplePage() {
    const token = process.env.TOKEN;
    if (!token) {
        throw new Error('Token not found!');
    }

    const res = await fetch(`${process.env.STRAPI_API_URL}/api/peoples?populate=pfp`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
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
        <main className="text-center bg-white pt-20" data-theme="dark">

            {/* Displaying all Associated Faculty */}
            <section className="p-10">
                <div className="text-6xl text-blue-400 mb-4 pb-2 relative">
                    Associated Faculty
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-60 h-1 bg-blue-700"></div>
                </div>

                <div className="flex flex-wrap p-10 justify-center p-4 space-x-8">
                    {associated_faculty &&
                        associated_faculty.map((item, i) => (
                            <div key={i} className="card w-1/5 dark:bg-base-200 shadow-xl mb-4">
                                <figure className="px-10 pt-10">
                                    <img src={`${process.env.STRAPI_API_URL}${item.attributes.pfp.data.attributes.formats.thumbnail.url}`} alt={item.attributes.name} className="rounded-xl border-4 rounded-full w-55 h-55 object-cover mx-auto" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">{item.attributes.name}</h2>
                                    <p>{item.attributes.Designation}</p>
                                    <p>{item.attributes.Department}</p>
                                    <div className="card-actions">
                                        <button className="btn btn-primary">Read More</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>

            {/* Displaying all Associated Research Scholars */}
<section style={{ backgroundColor: '#34495e' }} className="p-10">
    <div className="text-6xl text-base-900 mb-4 pb-2 relative">
        Associated Research Scholars
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-60 h-1 bg-blue-700"></div>
    </div>

    <div className="flex flex-wrap p-10 justify-center p-4 space-x-8">
        {associated_research_scholars &&
            associated_research_scholars.map((item, i) => (
                <div key={i} className="card card-side bg-base-100 shadow-xl mb-4 w-1/3 max-w-sm">
                    <figure className="px-10 pt-10 flex justify-center items-center">
                        <img src={`${process.env.STRAPI_API_URL}${item.attributes.pfp.data.attributes.formats.thumbnail.url}`} alt={item.attributes.name} className="rounded-xl border-4 rounded-full w-32 h-32 object-cover mx-auto" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-lg font-medium">{item.attributes.name}</h2>
                        <p className="text-sm">{item.attributes.Designation}</p>
                        <p className="text-sm">{item.attributes.Department}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-sm btn-primary">Read More</button>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
</section>

{/* Displaying all Associated Staff */}
<section className="p-10">
    <div className="text-6xl text-blue-900 mb-4 pb-2 relative">
        Associated Staff
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-60 h-1 bg-blue-700"></div>
    </div>

    <div className="flex flex-wrap p-10 justify-center p-4 space-x-8">
        {associated_staff &&
            associated_staff.map((item, i) => (
                <div key={i} className="card card-side bg-base-100 shadow-xl mb-4 w-1/3 max-w-sm">
                    <figure className="px-10 pt-10">
                        <img src={`${process.env.STRAPI_API_URL}${item.attributes.pfp.data.attributes.formats.thumbnail.url}`} alt={item.attributes.name} className="rounded-xl border-4 rounded-full w-32 h-32 object-cover mx-auto" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-lg font-medium">{item.attributes.name}</h2>
                        <p className="text-sm">{item.attributes.Designation}</p>
                        <p className="text-sm">{item.attributes.Department}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-sm btn-primary">Read More</button>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
</section>



        </main>
    )
}