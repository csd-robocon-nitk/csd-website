import Team from "./team.js";

export default async function PeoplePage() {
  const token = process.env.NEXT_PUBLIC_TOKEN;
  if (!token) {
    throw new Error("Token not found!");
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/peoples?populate=*`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-cache",
    }
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
  }

  const people = await res.json();
  const people_data = await people.data;

  const handleType = (type) => {
    setType(type);
  };

  // efn
  return (
    <div className="min-h-screen py-10 px-5 pt-10 mt-16 bg-white flex w-full flex-col items-center">
      <Team data={people_data} />
    </div>
  );
}
