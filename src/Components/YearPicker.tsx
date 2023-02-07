import React, { useState, useRef, useEffect } from "react";

const YearPicker: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const years = Array.from({ length: 211 }, (_, i) => 1940 + i);
  const yearRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    yearRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
  }, [yearRef, showModal]);

  return (
    <div className="relative">
      <button
        className="flex items-center justify-between p-2 rounded-md bg-white border border-gray-300 focus:outline-none focus:border-indigo-500"
        onClick={() => setShowModal(true)}
      >
        <span>{selectedYear}</span>
        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M5.293 7. 293a1 1 0 011. 414 0L10 10. 586l3. 293-3. 293a1 1 0 111. 414 1. 414l-4 4a1 1 0 01-1. 414 0l-4-4a1 1 0 010-1. 414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {showModal && (
        <div className="fixed bg-blue-500 bg-opacity-10 w-[480px] h-screen top-0 flex items-center justify-center">
          <div className="mt-12 mx-auto w-[321px] h-[261px] bg-white rounded-md p-[24px] overflow-hidden flex flex-col justify-center items-center relative">
            <h5 className="z-10 self-start text-[18px] font-semibold">Tahun</h5>
            <div className="absolute h-[105px] bg-gradient-to-t from-[rgba(255,255,255,0.9)] via-[rgba(255,255,255,0.95)] to-[rgb(255,255,255)] top-0 border-b-2 border-black w-1/4"></div>
            <div className="absolute h-[105px] bg-gradient-to-t from-[rgb(255,255,255)] via-[rgba(255,255,255,0.95)] to-[rgba(255,255,255,0.9)] bottom-0 border-t-2 border-black w-1/4"></div>
            <div className="container-year grid grid-cols-1 gap-y-4 h-full overflow-y-scroll w-full">
              {years.map((year) => (
                <>
                  <button
                    key={year}
                    className={`rounded-md text-[24px] font-bold ${
                      year === selectedYear ? "black" : "text-gray-600"
                    }`}
                    onClick={() => {
                      setSelectedYear(year);
                      setShowModal(false);
                    }}
                  >
                    {year}
                  </button>
                  {selectedYear === year && (
                    <div className="-mt-8" ref={yearRef} />
                  )}
                </>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default YearPicker;
