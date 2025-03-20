import Image from "next/image";
import { Linkedin, Github, Mail } from "lucide-react";

function StaffCard({ item }) {
  // Handle missing data gracefully
  const name = item?.attributes?.name || "Staff Member";
  const designation = item?.attributes?.Designation || "";
  const skills = item?.attributes?.areasOfInterest?.split("\n").filter(Boolean) || [];
  const linkedinUrl = item?.attributes?.linkedin || "#";
  const githubUrl = item?.attributes?.github || null;
  const emailAddress = item?.attributes?.email || null;
  
  // Handle image path safely
  const imageUrl = item?.attributes?.pfp?.data?.attributes?.formats?.thumbnail?.url
    ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${item.attributes.pfp.data.attributes.formats.thumbnail.url}`
    : "/placeholder.svg";

  return (
    <div className="group relative w-72 h-72 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ease-in-out">
      {/* Front card - visible initially */}
      <div 
        className="absolute inset-0 bg-sky-50 p-4 transition-all duration-300 ease-in-out group-hover:-translate-y-full"
        aria-hidden="true"
      >
        <figure className="mb-4 overflow-hidden rounded-md">
          <Image
            width={200}
            height={200}
            src={imageUrl}
            alt={`Photo of ${name}`}
            className="rounded-md object-cover w-full h-48 transition-transform hover:scale-105 duration-300"
            onError={(e) => {
              e.currentTarget.src = "/placeholder.svg";
            }}
            priority={false}
          />
        </figure>
        <h2 className="text-xl font-bold text-center truncate text-gray-800">
          {name}
        </h2>
      </div>

      {/* Back card - visible on hover */}
      <div 
        className="absolute inset-0 bg-white p-4 transition-all duration-300 ease-in-out translate-y-full group-hover:translate-y-0 flex flex-col gap-2"
        role="region"
        aria-label={`Details about ${name}`}
      >
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-bold text-center text-gray-800">
            {name}
          </h2>
          {designation && (
            <h3 className="text-sm font-medium text-center text-gray-600">
              {designation}
            </h3>
          )}
        </div>
        
        {skills.length > 0 && (
          <ul className="text-sm mb-auto space-y-1 mt-2 max-h-[120px] overflow-y-auto scrollbar-thin">
            {skills.map((skill, index) => (
              <li className="text-left text-gray-700" key={index}>
                • {skill}
              </li>
            ))}
          </ul>
        )}
        
        <div className="mt-auto pt-2">
          <ul className="flex justify-center items-center gap-4">
            {linkedinUrl !== "#" && (
              <li>
                <a
                  href={linkedinUrl}
                  className="block text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${name}'s LinkedIn profile`}
                >
                  <Linkedin size={22} />
                </a>
              </li>
            )}
            
            {githubUrl && (
              <li>
                <a
                  href={githubUrl}
                  className="block text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${name}'s GitHub profile`}
                >
                  <Github size={22} />
                </a>
              </li>
            )}
            
            {emailAddress && (
              <li>
                <a
                  href={`mailto:${emailAddress}`}
                  className="block text-gray-600 hover:text-green-600 transition-colors duration-200"
                  aria-label={`Email ${name}`}
                >
                  <Mail size={22} />
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default StaffCard;