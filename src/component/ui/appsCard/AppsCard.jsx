import React from "react";
import { FaStar } from "react-icons/fa";
import { MdFileDownload } from "react-icons/md";
import { Link } from "react-router";

const AppsCard = ({ apps }) => {
  const {id, image, title, downloads, ratingAvg } = apps;

  return (
    <Link to={`/apps/${id}`} className="group bg-white border border-gray-100 shadow-sm hover:shadow-2xl rounded-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2">
      {/* ইমেজ সেকশন */}
      <div className="bg-gray-50 p-6 flex justify-center items-center overflow-hidden">
        <img
          className="w-40 h-40 object-contain group-hover:scale-110 transition-transform duration-500"
          src={image}
          alt={title}
        />
      </div>

      {/* কন্টেন্ট সেকশন */}
      <div className="p-5 text-center">
        <h3 className="text-xl font-bold text-gray-800 mb-2 truncate px-2">
          {title}
        </h3>

        <div className="flex justify-center items-center gap-2 mb-5">
          <div className="flex items-center gap-1 bg-[#F1F5E8] text-green-500 px-3 py-1 rounded-full text-xs font-bold">
            <MdFileDownload className="text-sm" />
            <span>{downloads}</span>
          </div>

          <div className="flex items-center text-[#FF8811] gap-1 bg-[#FFF0E1] px-3 py-1 rounded-full text-xs font-bold">
            <FaStar className="text-sm" />
            <span>{ratingAvg} Downloads</span>
          </div>
        </div>
        <button className="w-full py-2.5 rounded-xl bg-gray-900 text-white font-semibold hover:bg-[#632EE3] transition-colors duration-300">
          Get App
        </button>
      </div>
    </Link>
      
  );
};

export default AppsCard;
