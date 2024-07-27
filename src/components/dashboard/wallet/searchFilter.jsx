import React from "react";
import Icon from "../../../assets/images/Frame (2).png";

export default function Search({ searchTerm, onSearch }) {
  return (
    <div className="mb-3 xl:w-96 relative">
      <div className="flex items-center">
        <span className="absolute left-8  top-1/2 transform -translate-y-1/2 z-10">
          <img src={Icon} alt="Search Icon" />
        </span>

        <input
          type="search"
          className="relative ml-4 mr-4 block flex-auto rounded border border-customLine pl-14 py-[10px] text-base font-normal font-Modarat bg-transparent outline-none transition duration-200 ease-in-out focus:border-customLine focus:text-neutral-700 focus:outline-none dark:border-neutral-600 dark:placeholder:text-inputText dark:focus:border-primary"
          placeholder="Search card name"
          aria-label="Search"
          aria-describedby="button-addon2"
          value={searchTerm}
          onChange={(e) => onSearch(e.target.value)}
          style={{
            backgroundColor: "#F5F5F5",
            borderWidth: "1px",
            borderColor: "#CCCCCC",
            color: "#A1A4A8",
          }}
        />
      </div>
    </div>
  );
}
