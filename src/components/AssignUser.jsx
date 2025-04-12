import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import tickIcon from "/tick.svg";

const AssignUser = ({ onClose }) => {
  const user = useSelector((state) => state.user.user);
  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(user);
  const [selectedUser, setSelectedUser] = useState(null);
  const assignUserRef = useRef(null);

  const handleSearch = (e) => {
    const filteredUsers = user.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredUsers(filteredUsers);
  };

  const onHover = (user) => {
    setSelectedUser(user?.id || null);
  };

  useEffect(() => {
    handleSearch();
  }, [search]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        assignUserRef.current &&
        !assignUserRef.current.contains(event.target)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div
      ref={assignUserRef}
      className="w-[263px] absolute top-[20%] z-50 left-[25%] flex flex-col bg-white p-2 shadow-md border-[1px] border-[#DDDDDD] rounded-[8px]"
    >
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
          className="w-full h-[21px] text-[14px] font-[400] p-2 text-[#353535] placeholder:text-[#353535] placeholder:text-[14px] focus:outline-none"
          type="text"
          placeholder="Search..."
        />
        <div
          onClick={() => setSearch("")}
          className="bg-[#DDDDDD] rounded-[34px] w-[18px] h-[18px] flex items-center justify-center hover:bg-[#EDEFF2] cursor-pointer"
        >
          <img className="w-[7px] h-[7px]" src="/icon/close.png" alt="close" />
        </div>
      </div>
      <div className="max-h-[250px] overflow-y-auto flex flex-col">
        {filteredUsers.map((user) => (
          <div
            className="flex items-center justify-between border-b-[1px] border-[#DDDDDD] px-[24px] py-[6px] cursor-pointer"
            key={user.id}
            onClick={() => {
              setSelectedUser(user);
              onClose();
            }}
            onMouseEnter={() => onHover(user)}
            style={{
              backgroundColor: selectedUser === user.id ? "#EDEFF2" : "white",
            }}
          >
            <div className="flex items-center gap-2">
              <img src={user.avatar} alt={user.name} />
              <h2>{user.name}</h2>
            </div>
            {selectedUser === user.id && (
              <img
                src={tickIcon}
                alt="tick"
                onClick={() => setSelectedUser(user.id)}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssignUser;
