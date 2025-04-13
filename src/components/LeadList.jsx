import { useSelector, useDispatch } from "react-redux";
import {
  filterLeads,
  unlockLead,
  likeLead,
  dislikeLead,
} from "../utils/leadSlice";
import { changeUserCredit } from "../utils/userSlice";
import { useEffect, useState } from "react";
import FilterPanel from "./FilterPanel";
import AssignUser from "./AssignUser";
import filterIcon from "/filter.svg";

export default function LeadList() {
  const dispatch = useDispatch();
  const leads = useSelector((state) => state.lead.leads);
  const user = useSelector((state) => state.user);
  const filteredLeads = useSelector((state) => state.lead.filteredLeads);
  const userCredit = user.user[0].credit;
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isAssignOpen, setIsAssignOpen] = useState(false);
  const [selectedLead, setSelectedLead] = useState(null);

  useEffect(() => {
    dispatch(filterLeads(leads));
  }, [leads]);

  const handleUnlock = (id) => {
    const leftCredit = userCredit - leads[id].creditToUnlock;
    if (userCredit > leads[id].creditToUnlock) {
      dispatch(unlockLead(id + 1));
      dispatch(
        changeUserCredit({
          id: id + 1,
          credited: leftCredit,
        })
      );
    } else {
      alert("You don't have enough credits");
    }
  };

  const handleLike = (id) => {
    dispatch(likeLead(id - 1));
  };

  const handleDislike = (id) => {
    dispatch(dislikeLead(id - 1));
  };

  const handleFilterOpen = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <div className="w-full h-screen overflow-x-hidden">
      <div className="w-[full] h-[70px] pt-[24px] px-[24px] bg-white">
        <div className="flex items-center justify-end pr-[150px]">
          <div className="flex items-center gap-2">
            <img
              className="w-[24px] h-[24px] cursor-pointer"
              src={filterIcon}
              alt="filter"
              onClick={handleFilterOpen}
            />
            <h3>Filters</h3>
            <h4 className="w-[20px] h-[20px] rounded-[16px] bg-[#2859DF1A] text-[#2859DF] text-sm font-medium flex items-center justify-center p-1">
              {filteredLeads?.length}
            </h4>
          </div>
        </div>
      </div>
      <div className="py-4 space-y-2 max-w-[1000px] mx-auto">
        {filteredLeads?.map((lead) => (
          <div
            key={lead.id}
            className={`relative  flex p-4 rounded-xl border shadow-sm hover:shadow-md hover:shadow-gray-300 ${
              isAssignOpen && selectedLead === lead.id
                ? "border-[#0085FF]/40 shadow-lg"
                : "border-[#DDDDDD]"
            } bg-white ${
              lead.isLocked ? "border-l-[6px] border-l-[#0085FF]" : ""
            }`}
          >
            <div className="w-full flex gap-3">
              <div className="relative">
                <img
                  src={lead.avatar}
                  alt={lead.name}
                  className={`w-[34px] h-[34px] rounded-[7.77px] ${
                    lead.locked ? "bg-black/50 opacity-50" : ""
                  }`}
                />
                {lead.isLocked && (
                  <div className="absolute top-2 left-2 flex items-center justify-center  rounded-full">
                    <img
                      className="w-4 h-4  rounded-full"
                      src="/lock.png"
                      alt="lockIcon"
                    />
                  </div>
                )}
              </div>
              <div className="w-full">
                <div className="flex justify-between gap-2">
                  <div className="flex gap-4 items-center">
                    <div className="flex flex-col gap-1 relative">
                      <h2 className="font-semibold text-gray-800">
                        {lead.name}
                      </h2>
                      <span className="text-sm flex gap-1 items-center text-gray-500">
                        <img src="/location.png" alt="locationIcon" />
                        {lead.location}
                      </span>
                      {lead.isLocked && (
                        <div className="w-3/4 h-full absolute top-0 right-0  backdrop-blur-sm rounded-md"></div>
                      )}
                    </div>

                    <div className="flex items-center gap-1 px-2 py-0.5 text-xs rounded-full bg-gray-100 text-gray-700">
                      {lead.networkAvatars.length > 0 &&
                        lead.networkAvatars.map((img, idx) => (
                          <img
                            key={idx}
                            src={img}
                            className="w-4 h-4 rounded-full border -ml-1"
                          />
                        ))}
                      <span>Org's Network</span>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <div className="flex items-center gap-2">
                      {lead.isLocked ? (
                        <div className="flex gap-2">
                          <button
                            className="w-[170px] h-[30px] flex items-center justify-center gap-2 px-4 py-1.5 bg-blue-600 text-white text-sm rounded-full font-semibold hover:bg-blue-700 hover:scale-105 transition-all duration-300"
                            onClick={() => handleUnlock(lead.id - 1)}
                          >
                            <img src="/phone.png" alt="phoneIcon" />
                            Unlock
                            <span className="text-yellow-300 flex gap-2 items-center">
                              <img src="/icon/coin.png" alt="coinIcon" />3
                            </span>
                          </button>
                          <div className="flex items-center gap-2">
                            <span
                              className={` text-[#FFFFFF] font-semibold text-sm px-2 py-0.5 rounded-md ${
                                lead.score > 90
                                  ? "bg-[#5353FF]"
                                  : "bg-[#40C25F]"
                              }`}
                            >
                              {lead.score}
                            </span>
                            <img
                              className={`cursor-pointer ${
                                lead.isLiked ? "opacity-100" : "opacity-50"
                              }`}
                              src="/like.png"
                              alt="likeIcon"
                              onClick={() => handleLike(lead.id)}
                            />
                            <img
                              className={`cursor-pointer ${
                                lead.isDisliked ? "opacity-100" : "opacity-50"
                              }`}
                              src="/dislike.png"
                              alt="dislikeIcon"
                              onClick={() => handleDislike(lead.id)}
                            />
                          </div>
                        </div>
                      ) : (
                        <div className="flex gap-2">
                          <div className="flex gap-2 items-center">
                            <button
                              className="w-[170px] h-[30px] px-4 py-1 border border-[#A16207] text-[#895419] text-sm rounded-full font-[600]"
                              onClick={() => {
                                setIsAssignOpen(true);
                                setSelectedLead(lead.id);
                              }}
                              disabled={isAssignOpen}
                            >
                              Assign
                            </button>
                            <button className="w-[170px] h-[30px] px-4 py-1 border border-[#A16207] text-[#895419] text-sm rounded-full font-[600]">
                              View Details
                            </button>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="bg-[#40C25F] text-[#FFFFFF] font-semibold text-sm px-2 py-0.5 rounded-md">
                              {lead.score}
                            </span>
                            <img
                              className={`cursor-pointer ${
                                lead.isLiked ? "opacity-100" : "opacity-50"
                              }`}
                              src="/like.png"
                              alt="likeIcon"
                              onClick={() => handleLike(lead.id)}
                            />
                            <img
                              className={`cursor-pointer ${
                                lead.isDisliked ? "opacity-100" : "opacity-50"
                              }`}
                              src="/dislike.png"
                              alt="dislikeIcon"
                              onClick={() => handleDislike(lead.id)}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <p className="text-[14px] leading-[135%] font-[500] mt-1 text-[#353535] text-nowrap">
                  {lead.description}
                </p>

                {lead.isLocked ? (
                  <div className="flex items-center gap-3 mt-2 text-sm text-gray-500">
                    <span className="px-2 py-0.5 rounded-full bg-[#EFF8FF] text-[#0085FF] text-xs flex items-center gap-1">
                      <img src="/blue-time.png" alt="clockIcon" /> {lead.time}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-[#FFF7ED] text-[#FE9239] text-xs flex items-center gap-1">
                      <img
                        src="/rocket.png"
                        className="w-3 h-3"
                        alt="rocketIcon"
                      />
                      ReceeptoNet
                    </span>
                  </div>
                ) : (
                  <div className="flex items-center gap-3 mt-2 text-sm text-gray-500">
                    <span className="px-2 py-0.5 rounded-full bg-gray-100 text-xs flex items-center gap-1">
                      <img src="/time.png" alt="clockIcon" /> {lead.time}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-[#EDEFF2] text-[#555560] text-xs flex items-center gap-1">
                      <img
                        src="/whatsapp.png"
                        className="w-3 h-3"
                        alt="whatsapp"
                      />
                      Group name
                    </span>
                  </div>
                )}
              </div>
            </div>
            {isAssignOpen && selectedLead === lead.id && (
              <AssignUser
                onClose={() => {
                  setIsAssignOpen(false);
                  setSelectedLead(null);
                }}
              />
            )}
          </div>
        ))}
      </div>
      {isFilterOpen && <FilterPanel onClick={handleFilterOpen} />}
    </div>
  );
}
