import React, { Suspense, use } from 'react';
import AppsCard from '../../ui/appsCard/AppsCard';
import { Link } from 'react-router';

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
                useData.slice(0, 6).map(apps => <Suspense fallback='Lodding'>
                    <AppsCard key={apps.id} apps={apps}></AppsCard>
                </Suspense>)
            }
        </div>
        <div className="text-center my-5">
            <Link to={'/apps'}>
                <button className="btn btn-primary">Show More</button>
            </Link>
        </div>
      </div>
    );
};

export default TrandingApps;