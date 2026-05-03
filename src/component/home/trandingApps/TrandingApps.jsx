import React, { Suspense, use } from 'react';
import AppsCard from '../../ui/appsCard/AppsCard';

const promiseData = fetch('/data.json').then(res => res.json());

const TrandingApps = () => {

    const useData = use(promiseData);
    console.log(useData);

    return (
      <div>
        <div className="text-center my-10">
          <h2 className='text-3xl font-bold'>Trending Apps</h2>
          <p className='text-gray-500'>Explore All Trending Apps on the Market developed by us</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                useData.map(apps => <Suspense fallback='Lodding...'>
                    <AppsCard key={apps.id} apps={apps}></AppsCard>
                </Suspense>)
            }
        </div>
      </div>
    );
};

export default TrandingApps;