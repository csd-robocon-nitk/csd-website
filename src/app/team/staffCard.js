import Image from "next/image";
import { Linkedin } from "lucide-react";

function StaffCard({ item }) {
  const skills = item.attributes.areasOfInterest.split("\n");
  return (
    <div className="group relative w-72 h-72 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <div className="absolute inset-0 bg-sky-50 p-4 transition-all duration-200 ease-in-out group-hover:-translate-y-full">
        <figure className="mb-4">
          <Image
            width={200}
            height={200}
            src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${item.attributes.pfp.data.attributes.formats.thumbnail.url}`}
            alt={item.attributes.name}
            className="rounded-md object-cover w-full h-48"
            onError={(e) => {
              e.currentTarget.src = "/placeholder.svg";
            }}
          />
        </figure>
        <h2 className="text-xl font-bold text-center truncate">
          {item.attributes.name}
        </h2>
      </div>
      <div className="absolute inset-0 bg-white p-4 transition-all duration-200 ease-in-out translate-y-full group-hover:translate-y-0 flex flex-col gap-2">
        <div className="flex flex-col gap-0">
          <h2 className="text-xl font-bold text-center">
            {item.attributes.name}
          </h2>
          <h2 className="text-sm font-bold text-center">
            {item.attributes.Designation}
          </h2>
        </div>
        <ul className="text-sm mb-4 space-y-1">
          {skills.map((skill, index) => (
            <li className="text-left" key={index}>
              {skill}
            </li>
          ))}
        </ul>
        <div className="absolute bottom-4 left-0 right-0">
          <ul className="flex justify-center items-center gap-4">
            {/* <li>
              <a
                href={youtubeUrl}
                className="block text-gray-600 hover:text-red-600 transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name}'s YouTube channel`}
              >
                <Youtube size={24} />
              </a>
            </li> */}
            <li>
              <a
                href={item.attributes.linkedin}
                className="block text-gray-600 hover:text-blue-600 transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${item.attributes.name}'s LinkedIn profile`}
              >
                <Linkedin size={20} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default StaffCard;
