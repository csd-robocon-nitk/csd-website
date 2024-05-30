import UpdateCard from "./updateCard";

export default async function UpdatesSection() {
  const token = process.env.TOKEN;
  if (!token) {
    throw new Error("Token not found!");
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/updates?populate=*`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
  }

  const updates = await res.json();
  const updates_data = updates.data;

  return (
    <div className="w-full lg:px-60 px-10 flex flex-col items-center">
      <div className="flex flex-col items-center gap-8 rounded-2xl py-5 my-5 w-full">
        <div className="text-4xl font-bold">Updates</div>
        <div className=" flex flex-wrap justify-evenly items-stretch gap-2">
          {updates_data.map((update, id) => (
            <UpdateCard key={id} update={update} />
          ))}
        </div>
      </div>
    </div>
  );
}
