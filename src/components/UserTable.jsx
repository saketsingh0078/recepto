import { useState } from "react";
import { useSelector } from "react-redux";
import Actions from "./Actions";
import dropDownIcon from "/Dropdown.svg";
import helpIcon from "/help.svg";

const roleColors = {
  Admin: "text-blue-600 bg-blue-100",
  Removed: "text-gray-600 bg-gray-100",
  Member: "text-gray-600 bg-gray-100",
};

export default function UserTable() {
  const users = useSelector((state) => state.user);
  const [activeRowIndex, setActiveRowIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  const handleActions = (index) => {
    setIsModalOpen(true);
    setActiveRowIndex(activeRowIndex === index ? null : index);
  };

  // Calculate pagination
  const totalPages = Math.ceil(users.user.length / usersPerPage);
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.user.slice(indexOfFirstUser, indexOfLastUser);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="py-4 rounded-lg border shadow-sm">
      <table className="w-full text-sm text-left">
        <thead className="text-xs text-gray-500 uppercase">
          <tr className="bg-[#F5F5F5]">
            <th className="px-4 py-3">Team</th>
            <th className="px-4 py-3 ">
              <div className="flex gap-2">
                <h3>Role</h3>
                <img
                  className="w-[16px] h-[16px]"
                  src={helpIcon}
                  alt="filter"
                />
              </div>
            </th>
            <th className="px-4 py-3 ">
              <div className="flex gap-2">
                <h3>Generated</h3>
                <img
                  className="w-[16px] h-[16px]"
                  src="/help-circle.png"
                  alt="filter"
                />
              </div>
            </th>
            <th className="px-4 py-3">
              <div className="flex gap-2">
                <h3>Unlocked</h3>
                <img
                  className="w-[16px] h-[16px]"
                  src="/help-circle.png"
                  alt="filter"
                />
              </div>
            </th>
            <th className="px-4 py-3">
              <div className="flex gap-2">
                <h3>Assigned</h3>
                <img
                  className="w-[16px] h-[16px]"
                  src="/help-circle.png"
                  alt="filter"
                />
              </div>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {currentUsers.map((user, i) => (
            <tr key={i} className="border-t">
              <td className="px-4 py-3 flex items-center gap-3">
                <div className="relative">
                  <img
                    className=" w-[40px] h-[40px] rounded-[200px] "
                    src="/avatar/Avatar.png"
                    alt="avatar"
                  />
                  <div className="w-[10px] h-[10px] rounded-[5px] border-[1.5px] border-[#FFFFFF] bg-[#12B76A] absolute top-[28px] left-[28px]"></div>
                </div>
                <div>
                  <p className="font-medium text-gray-800">{user.name}</p>
                  <p className="text-xs text-gray-500">
                    Last active {user.lastActive}
                  </p>
                </div>
              </td>
              <td className="px-4 py-3">
                <span
                  className={`inline-flex items-center gap-1  px-2 py-1 rounded-full text-xs font-medium ${
                    roleColors[user.role]
                  }`}
                >
                  {user.roleIcon && <img src={user.roleIcon} alt="role" />}
                  {user.role}
                </span>
              </td>
              <td className="px-4 py-3">{user.generated}</td>
              <td className="px-4 py-3">{user.unlocked}</td>
              <td className="px-4 py-3">
                <span
                  className={`inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full font-semibold ${user.assignedColor}`}
                >
                  {user.assignedIcon && (
                    <img src={user.assignedIcon} alt="assigned" />
                  )}
                  {user.assigned}
                </span>
              </td>
              <td className="px-4 py-3 text-right relative">
                <img
                  src={dropDownIcon}
                  draggable={false}
                  className={`w-[24px] h-[24px] text-gray-500 cursor-pointer ${
                    isModalOpen && activeRowIndex === i ? "bg-blue-100 " : ""
                  }`}
                  onClick={() => handleActions(i)}
                />
                {isModalOpen && activeRowIndex === i && (
                  <Actions id={user.id} setIsModalOpen={setIsModalOpen} />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4 px-4">
        <button
          className="border-[1px] px-[14px] py-[8px] rounded-lg border-[#D0D5DD] bg-white disabled:opacity-50"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <div className="flex gap-2">
            <img
              className="w-[20px] h-[20px]"
              src="/arrow-left.png"
              alt="arrow-left"
            />
            <h2 className="text-[14px] font-[600]">Previous</h2>
          </div>
        </button>
        <div className="flex items-center gap-2 text-sm">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(
            (pageNumber) => (
              <button
                key={pageNumber}
                className={`w-[40px] h-[40px] px-3 py-1 rounded-lg text-[14px] font-[500] ${
                  currentPage === pageNumber
                    ? "bg-[#F9FAFB] text-[#1D2939]"
                    : "bg-[#F9FAFB] text-[#475467]"
                }`}
                onClick={() => handlePageChange(pageNumber)}
              >
                {pageNumber}
              </button>
            )
          )}
        </div>
        <button
          className="border-[1px] px-[14px] py-[8px] rounded-lg border-[#D0D5DD] bg-white disabled:opacity-50"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <div className="flex gap-2">
            <h2 className="text-[14px] font-[600]">Next</h2>
            <img
              className="w-[20px] h-[20px]"
              src="/arrow-right.png"
              alt="arrow-left"
            />
          </div>
        </button>
      </div>
    </div>
  );
}
