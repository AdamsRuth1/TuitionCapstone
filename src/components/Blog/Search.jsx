import searchIcon from "../../assets/Icons/search-icon.png"

const Search = () => {
  const handleGo = () => {
    alert("clicked Goal.......")
  }
  return (
    <div className=" flex justify-center lg:pt-[5rem] relative">
      <div className="items-center flex bottom-4 left-[24.5rem] absolute">
        <img src={searchIcon} alt="Search icon" width={32} height={32} />
      </div>
      <input
        type="text"
        placeholder="Search topics, information"
        className="lg:w-[608px] lg:h-[64px] font-Modarat
         font-normal text-[16px] text-[#A1A4A8] leading-[16px] 
         outline-none bg-[#F5F5F5] rounded-[4px] pl-[3.8rem] border border-[#E6E6E6]"
      />
      <div className="items-center flex bottom-[0.6rem] right-[25rem] absolute">
        <button
          className="py-[10px] px-[24px] rounded-[4px] bg-[#252E6A] text-[#FFFFFF] 
        font-Modarat font-normal text-[20px] leading-[24px]"
          onClick={handleGo}
        >
          Go
        </button>
      </div>
    </div>
  );
};

export default Search;
