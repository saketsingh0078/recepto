const cards = [
  {
    id: 1,
    name: "Jennifer Markus",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    location: "Mumbai, India",
    networkAvatars: [],
    time: "Found 2 hour ago",
    isUnlockable: true,
    locked: true,
    score: 99,
  },
  {
    id: 2,
    name: "Jennifer Markus",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    location: "Mumbai, India",
    networkAvatars: [
      "https://randomuser.me/api/portraits/men/31.jpg",
      "https://randomuser.me/api/portraits/women/30.jpg",
      "https://randomuser.me/api/portraits/men/29.jpg",
    ],
    time: "3 hours ago",
    isUnlockable: false,
    score: 74,
  },
  {
    id: 3,
    name: "Jennifer Markus",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    location: "Mumbai, India",
    networkAvatars: [],
    time: "Found 2 hour ago",
    isUnlockable: true,
    locked: true,
    score: 99,
  },
  {
    id: 4,
    name: "Jennifer Markus",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    location: "Mumbai, India",
    networkAvatars: [
      "https://randomuser.me/api/portraits/men/31.jpg",
      "https://randomuser.me/api/portraits/women/30.jpg",
      "https://randomuser.me/api/portraits/men/29.jpg",
    ],
    time: "3 hours ago",
    isUnlockable: false,
    score: 74,
  },
  {
    id: 5,
    name: "Jennifer Markus",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    location: "Mumbai, India",
    networkAvatars: [
      "https://randomuser.me/api/portraits/men/31.jpg",
      "https://randomuser.me/api/portraits/women/30.jpg",
      "https://randomuser.me/api/portraits/men/29.jpg",
    ],
    time: "3 hours ago",
    isUnlockable: true,
    score: 74,
  },
  {
    id: 6,
    name: "Jennifer Markus",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    location: "Mumbai, India",
    networkAvatars: [
      "https://randomuser.me/api/portraits/men/31.jpg",
      "https://randomuser.me/api/portraits/women/30.jpg",
      "https://randomuser.me/api/portraits/men/29.jpg",
    ],
    time: "3 hours ago",
    isUnlockable: false,
    score: 74,
  },
];

export default function LeadList() {
  return (
    <div className="w-full h-screen overflow-x-hidden">
      <div className="w-[full] h-[70px] pt-[24px] px-[24px] bg-white">
        <div className="flex items-center justify-end pr-[150px]">
          <div className="flex items-center gap-2">
            <img className="w-[24px] h-[24px]" src="/filter.png" alt="filter" />
            <h3>Filters</h3>
            <h4 className="w-[20px] h-[20px] rounded-[16px] bg-[#2859DF1A] text-[#2859DF] text-sm font-medium flex items-center justify-center p-1">
              2
            </h4>
          </div>
        </div>
      </div>
      <div className="py-4 space-y-2 max-w-[1000px] mx-auto">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`flex p-4 rounded-xl border shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 bg-white ${
              card.locked ? "border-l-[6px] border-l-[#0085FF]" : ""
            }`}
          >
            <div className="w-full flex gap-3">
              <div className="relative">
                <img
                  src={card.avatar}
                  alt={card.name}
                  className={`w-[34px] h-[34px] rounded-[7.77px] ${
                    card.locked ? "bg-black/50 opacity-50" : ""
                  }`}
                />
                {card.locked && (
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
                        {card.name}
                      </h2>
                      <span className="text-sm flex gap-1 items-center text-gray-500">
                        <img src="/location.png" alt="locationIcon" />
                        {card.location}
                      </span>
                      {card.locked && (
                        <div className="w-3/4 h-full absolute top-0 right-0  backdrop-blur-sm rounded-md"></div>
                      )}
                    </div>

                    <div className="flex items-center gap-1 px-2 py-0.5 text-xs rounded-full bg-gray-100 text-gray-700">
                      {card.networkAvatars.length > 0 &&
                        card.networkAvatars.map((img, idx) => (
                          <img
                            key={idx}
                            src={img}
                            className="w-4 h-4 rounded-full border -ml-1"
                          />
                        ))}
                      <span>Org’s Network</span>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <div className="flex items-center gap-2">
                      {card.isUnlockable ? (
                        <div className="flex gap-2">
                          <button className="w-[170px] h-[30px] flex items-center gap-2 px-4 py-1.5 bg-blue-600 text-white text-sm rounded-full font-semibold">
                            <img src="/phone.png" alt="phoneIcon" />
                            Unlock
                            <span className="text-yellow-300 flex gap-1 items-center">
                              <img src="/icon/coin.png" alt="coinIcon" />3
                            </span>
                          </button>
                          <div className="flex items-center gap-2">
                            <span
                              className={` text-[#FFFFFF] font-semibold text-sm px-2 py-0.5 rounded-md ${
                                card.score > 90
                                  ? "bg-[#5353FF]"
                                  : "bg-[#40C25F]"
                              }`}
                            >
                              {card.score}
                            </span>
                            <img
                              className=" cursor-pointer"
                              src="/like.png"
                              alt="likeIcon"
                            />
                            <img
                              className="cursor-pointer"
                              src="/dislike.png"
                              alt="dislikeIcon"
                            />
                          </div>
                        </div>
                      ) : (
                        <div className="flex gap-2">
                          <div className="flex gap-2 items-center">
                            <button className="w-[170px] h-[30px] px-4 py-1 border border-[#A16207] text-[#895419] text-sm rounded-full font-[600]">
                              Assign
                            </button>
                            <button className="w-[170px] h-[30px] px-4 py-1 border border-[#A16207] text-[#895419] text-sm rounded-full font-[600]">
                              View Details
                            </button>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="bg-[#40C25F] text-[#FFFFFF] font-semibold text-sm px-2 py-0.5 rounded-md">
                              {card.score}
                            </span>
                            <img
                              className=" cursor-pointer"
                              src="/like.png"
                              alt="likeIcon"
                            />
                            <img
                              className="cursor-pointer"
                              src="/dislike.png"
                              alt="dislikeIcon"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <p className="text-[14px] leading-[135%] font-[500] mt-1 text-[#353535] text-nowrap">
                  A team from <em>*company name mentioned*</em> is seeking a
                  highly motivated Business Development Executive to outreach
                  and secure bo...
                </p>

                {card.locked ? (
                  <div className="flex items-center gap-3 mt-2 text-sm text-gray-500">
                    <span className="px-2 py-0.5 rounded-full bg-[#EFF8FF] text-[#0085FF] text-xs flex items-center gap-1">
                      <img src="/blue-time.png" alt="clockIcon" /> {card.time}
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
                      <img src="/time.png" alt="clockIcon" /> {card.time}
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
          </div>
        ))}
      </div>
    </div>
  );
}
