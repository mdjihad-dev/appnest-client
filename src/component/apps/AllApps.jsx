import React, { use } from "react";
import AppsCard from "../ui/appsCard/AppsCard";


const promiseData = fetch("/data.json").then((res) => res.json());

const AllApps = () => {
  const allData = use(promiseData);

  return (
    <div className="container mx-auto py-20 px-4">
      <h2 className="text-4xl font-bold text-center">Our All Applications</h2>
      <p className="text-base font-semibold text-gray-600 text-center mt-3 mb-9">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {allData.map((item) => (
          <AppsCard key={item.id} apps={item} />
        ))}
      </div>
    </div>
  );
};

export default AllApps;
