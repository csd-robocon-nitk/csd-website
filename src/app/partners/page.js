import Splash from "@/components/splash";
import React from "react";
import Image from "next/image";
import PartnerCard from "./partnerCard";
import PartnerHoverCard from "./partnerHoverCard";

async function Partners() {
  const token = process.env.NEXT_PUBLIC_TOKEN;
  if (!token) {
    throw new Error("Token not found!");
  }

  let partners = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/sponsors?populate=*`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-cache",
    }
  );

  if (!partners.ok) {
    throw new Error(
      `Failed to fetch data: ${partners.status} ${partners.statusText}`
    );
  }

  partners = await partners.json();

  const industry = partners.data.filter(
    (partner) => partner.attributes.PartnerType === "Industry"
  );
  const government = partners.data.filter(
    (partner) => partner.attributes.PartnerType === "Government"
  );
  const academia = partners.data.filter(
    (partner) => partner.attributes.PartnerType === "Academia"
  );

  return (
    <div className="flex flex-col py-20">
      <Splash
        title={"Our Partners"}
        subtitle={
          "Trusted partnerships driving innovation across industry, government, and academia with over ₹60 crores in funded projects"
        }
      />

      <div className="flex flex-col px-32">
        <h1 className="text-4xl font-bold py-4">Government</h1>
        <div className="grid grid-cols-4 gap-4">
          {government.map((partner, index) => {
            return <PartnerHoverCard partner={partner} key={index} index={index}/>;
          })}
        </div>
        <h1 className="text-4xl font-bold py-4">Industry</h1>
        <div className="grid grid-cols-4 gap-4">
          {industry.map((partner, index) => {
            return <PartnerHoverCard partner={partner} key={index} index={index}/>;
          })}
        </div>
        <h1 className="text-4xl font-bold py-4">Academia</h1>
        <div className="grid grid-cols-4 gap-4">
          {academia.map((partner, index) => {
            return <PartnerHoverCard partner={partner} key={index} index={index}/>;
          })}
        </div>
      </div>
    </div>
  );
}

export default Partners;
