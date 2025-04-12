import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterLeads } from "../utils/leadSlice";

const countries = [
  "India",
  "United Kingdom",
  "United States of America",
  "Saudi Arabia",
  "Singapore",
  "Taiwan",
  "France",
  "Germany",
  "China",
];

const scoreOptions = ["0-80", "90-100"];

const FilterPanel = ({ onClick, setFilterData }) => {
  const dispatch = useDispatch();
  const leads = useSelector((state) => state.lead.leads);
  const [activeTab, setActiveTab] = useState("location");
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [selectedScores, setSelectedScores] = useState([]);
  const [search, setSearch] = useState("");
  const [totalApplied, setTotalApplied] = useState(0);

  const toggleCountry = (country) => {
    if (selectedCountries.includes(country)) {
      setSelectedCountries(selectedCountries.filter((c) => c !== country));
    } else {
      setSelectedCountries([...selectedCountries, country]);
    }
  };

  const toggleScore = (score) => {
    if (selectedScores.includes(score)) {
      setSelectedScores(selectedScores.filter((s) => s !== score));
    } else {
      setSelectedScores([...selectedScores, score]);
    }
  };

  const handleApplyFilters = () => {
    const filteredData = leads.filter((lead) => {
      const country = lead.location.split(",")[1].trim();
      if (selectedCountries.length === 0 && selectedScores.length === 0) {
        return true;
      }
      const locationMatch =
        selectedCountries.length === 0 || selectedCountries.includes(country);

      const scoreMatch =
        selectedScores.length === 0 ||
        (selectedScores.includes("0-80") && lead.score <= 80) ||
        (selectedScores.includes("90-100") && lead.score >= 90);

      return locationMatch && scoreMatch;
    });
    dispatch(filterLeads(filteredData));
    onClick();
  };

  useEffect(() => {
    setTotalApplied(selectedCountries.length + selectedScores.length);
  }, [selectedCountries, selectedScores]);

  const filteredCountries = countries.filter((country) =>
    country.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="fixed inset-0 bg-black/30 z-50">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10  w-[700px]  border-[1px] border-[#E9EAEB] bg-white rounded-lg shadow-md">
        <div className="flex items-center gap-2 px-[24px] pt-[24px] w-full">
          <div className="w-[48px] h-[48px] rounded-[10px] bg-white border border-[#E9EAEB] shadow-sm flex items-center justify-center">
            <img
              src="/filter.png"
              alt="filter"
              onClick={onClick}
              className="w-[24px] h-[24px]"
            />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1">
              <h2 className="text-sm font-[600]">Filters</h2>
              <div className="text-blue-600 rounded-[16px] bg-blue-50 py-[2px] px-[6px] flex items-center justify-center gap-1">
                <span className="text-[11px] ">{totalApplied} applied</span>
                <img
                  className="w-[8px] h-[8px]"
                  src="/icon/close.png"
                  alt="close"
                />
              </div>
            </div>
            <h3 className="text-[14px] text-[#535862]">
              See results in your view based filters you select here
            </h3>
          </div>
        </div>
        <div className="h-[20px] w-full border-b-[1px] border-[#E9EAEB]"></div>

        <div className="flex flex-col">
          <div className="flex space-x-4 h-full border-b-[1px] border-[#E9EAEB] ">
            {/* Filter tabs */}
            <div className="w-1/4 border-r pt-[12px] px-2">
              <button
                onClick={() => setActiveTab("location")}
                className={`w-full text-left py-2 px-3 font-medium flex items-center justify-between gap-2 ${
                  activeTab === "location"
                    ? "text-blue-600 bg-blue-50 rounded hover:bg-blue-100"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <div className="flex items-center gap-2">
                  <img src="/blue-location.png" alt="location" />
                  <span>Location</span>
                </div>
                <span className="rounded-[16px] py-[1px] px-[7px] bg-[#2859DF]/10">
                  {selectedCountries.length}
                </span>
              </button>
              <button
                onClick={() => setActiveTab("score")}
                className={`w-full text-left py-2 px-3 font-medium flex items-center justify-between gap-2 ${
                  activeTab === "score"
                    ? "text-blue-600 bg-blue-50 rounded hover:bg-blue-100"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <div className="flex items-center gap-2">
                  <img src="/score.png" alt="score" />
                  <span>Score</span>
                </div>
                <span className="rounded-[16px] py-[1px] px-[7px] bg-[#2859DF]/10">
                  {selectedScores.length}
                </span>
              </button>
            </div>

            <div className="w-3/4 flex flex-col gap-4 pt-[12px] pr-[16px] pb-[10px]">
              {activeTab === "location" && (
                <>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <h2 className="text-sm font-[600]">Location</h2>
                      <div className="text-blue-600 rounded-[16px] bg-blue-50 py-[2px] px-[6px] flex items-center justify-center gap-1">
                        <span className="text-[11px] ">
                          {selectedCountries.length} applied
                        </span>
                        <img
                          className="w-[8px] h-[8px]"
                          src="/icon/close.png"
                          alt="close"
                        />
                      </div>
                    </div>
                    <h3 className="text-[12px] text-[#535862]">
                      Select options to filter results
                    </h3>
                  </div>

                  <div className="w-full flex items-center border-[1px] border-[#DDDDDD] rounded-[8px] p-[12px] gap-[10px]">
                    <div className="flex w-[18px] h-[18px] items-center justify-center">
                      <img
                        className="w-[13.5px] h-[13.5px]"
                        src="/icon/search.png"
                        alt="search"
                      />
                    </div>
                    <input
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className="w-full h-[21px] text-[14px] font-[500] p-2 text-[#353535] placeholder:text-[#353535] placeholder:text-[14px] focus:outline-none"
                      type="text"
                      placeholder="Search..."
                    />
                    <div
                      onClick={() => setSearch("")}
                      className="bg-[#DDDDDD] rounded-[34px] w-[18px] h-[18px] flex items-center justify-center hover:bg-[#EDEFF2] cursor-pointer"
                    >
                      <img
                        className="w-[7px] h-[7px]"
                        src="/icon/close.png"
                        alt="close"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 max-h-64 overflow-y-auto">
                    {filteredCountries.map((country) => (
                      <label
                        key={country}
                        className="flex items-center space-x-2 bg-[#FBFBFB] px-[20px] h-[40px] rounded-[8px]"
                      >
                        <input
                          type="checkbox"
                          checked={selectedCountries.includes(country)}
                          onChange={() => toggleCountry(country)}
                        />
                        <span>{country}</span>
                      </label>
                    ))}
                  </div>
                </>
              )}

              {/* Score Filter */}
              {activeTab === "score" && (
                <>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <h2 className="text-sm font-[600]">Score</h2>
                      <div className="text-blue-600 rounded-[16px] bg-blue-50 py-[2px] px-[6px] flex items-center justify-center gap-1">
                        <span className="text-[11px] ">
                          {selectedScores.length} applied
                        </span>
                        <img
                          className="w-[8px] h-[8px]"
                          src="/icon/close.png"
                          alt="close"
                        />
                      </div>
                    </div>
                    <h3 className="text-[12px] text-[#535862]">
                      Select options to filter results
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {scoreOptions.map((score) => (
                      <label
                        key={score}
                        className="flex items-center space-x-2 bg-[#FBFBFB] px-[20px] h-[40px] rounded-[8px]"
                      >
                        <input
                          type="checkbox"
                          checked={selectedScores.includes(score)}
                          onChange={() => toggleScore(score)}
                        />
                        <span>{score}</span>
                      </label>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex w-full pt-[32px] pb-[24px] px-[24px]">
            <div className="flex w-full gap-4">
              <button
                className="w-1/2 px-4 py-2 rounded border border-gray-300 text-sm hover:bg-gray-100"
                onClick={onClick}
              >
                Cancel
              </button>
              <button
                className="w-1/2 px-4 py-2 rounded bg-blue-600 text-white text-sm hover:bg-blue-700"
                onClick={handleApplyFilters}
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
