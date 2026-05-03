import React, { use } from "react";
import { useParams } from "react-router"; // বা react-router-dom

// ডেটা প্রমিজ (ফাইলের বাইরে রাখলে পারফরম্যান্স ভালো হয়)
const promiseData = fetch("/data.json").then((res) => res.json());

const DetailsPage = () => {
  // ১. ইউআরএল থেকে আইডিটা বের করে আনা
  const { id } = useParams();

  // ২. জেসন ডেটা লোড করা
  const allData = use(promiseData);

  // ৩. আইডি মিলিয়ে নির্দিষ্ট অবজেক্টটি খুঁজে বের করা
  const singleApp = allData.find((app) => app.id == id);

  // যদি ডেটা না পাওয়া যায় তার জন্য একটা চেক
  if (!singleApp) {
    return (
      <div className="text-center py-20">
        মামা, এই অ্যাপের কোনো হদিস পাওয়া যাচ্ছে না!
      </div>
    );
  }

  return (
    <div className="container mx-auto py-16 px-4">
      <div className="flex flex-col md:flex-row gap-12 items-center bg-gray-50 p-8 rounded-3xl shadow-sm">
        {/* ইমেজ সেকশন */}
        <div className="w-full md:w-1/3">
          <img
            src={singleApp.image}
            alt={singleApp.title}
            className="w-full h-auto rounded-2xl shadow-lg border-4 border-white"
          />
        </div>

        {/* ইনফরমেশন সেকশন */}
        <div className="w-full md:w-2/3">
          <h1 className="text-5xl font-black text-gray-900 mb-2">
            {singleApp.title}
          </h1>
          <p className="text-[#632EE3] font-bold text-xl mb-6 uppercase tracking-wider">
            {singleApp.category}
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            {singleApp.description}
          </p>

          <div className="flex gap-4">
            <button className="btn bg-[#632EE3] text-white hover:bg-[#4d24b3] px-10 border-none">
              Install Now
            </button>
            <button className="btn btn-outline border-[#632EE3] text-[#632EE3] hover:bg-[#632EE3] hover:border-[#632EE3]">
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
