import React from "react";

const Headline = ({ title, content }) => (
    <div className="w-3/5 flex p-6 bg-white rounded-lg shadow-md m-2">
        <div className="ml-6 pt-1">
            <h2 className="text-xl text-gray-900 leading-tight">{title}</h2>
            <p className="text-base text-gray-600 leading-normal">{content}</p>
        </div>
    </div>
);

export default Headline;
