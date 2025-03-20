import React from "react";
import PeopleCard from "./peopleCard";

function Faculty({data}) {

  return (
    <div className="w-full mt-5">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1rem",
            width: "100%",
            padding: "1rem",
          }}
        >
            {
                data.map((item, index) => (
                    <PeopleCard key={index} item={item} />
                ))
            }
        </div>
    </div>
  );
}

export default Faculty;
