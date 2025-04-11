const users = [
  {
    name: "Olivia Rhye",
    avatar: "/avatar/Avatar.png",
    lastActive: "2min ago",
    role: "Admin",
    roleIcon: <img src="/Qualified.png" alt="Qualified" />,
    generated: 123,
    unlocked: 123,
    assigned: 40,
    assignedIcon: <img src="/one-waves-solid.png" alt="one-waves-solid" />,
    assignedColor: "bg-orange-100 text-orange-600",
  },
  {
    name: "Olivia Rhye",
    avatar: "/avatar/Avatar.png",
    lastActive: "2min ago",
    role: "Removed",
    roleIcon: <img src="/RemoveQualified.png" alt="Removed" />,
    generated: 23,
    unlocked: 23,
    assigned: 25,
    assignedIcon: <img src="/two-waves-solid.png" alt="two-waves-solid" />,
    assignedColor: "bg-blue-100 text-blue-600",
  },
  {
    name: "Olivia Rhye",
    avatar: "/avatar/Avatar.png",
    lastActive: "2min ago",
    role: "Member",
    roleIcon: <img src="/RemoveQualified.png" alt="Removed" />,
    generated: 56,
    unlocked: 56,
    assigned: 15,
    assignedIcon: <img src="/three-waves-solid.png" alt="three-waves-solid" />,
    assignedColor: "bg-green-100 text-green-600",
  },
  {
    name: "Olivia Rhye",
    avatar: "/avatar/Avatar.png",
    lastActive: "2min ago",
    role: "Admin",
    roleIcon: <img src="/Qualified.png" alt="Qualified" />,
    generated: 12,
    unlocked: 12,
    assigned: 10,
    assignedIcon: null,
    assignedColor: "bg-gray-100 text-gray-600",
  },
  {
    name: "Olivia Rhye",
    avatar: "/avatar/Avatar.png",
    lastActive: "2min ago",
    role: "Member",
    roleIcon: <img src="/RemoveQualified.png" alt="Removed" />,
    generated: 123,
    unlocked: 123,
    assigned: 5,
    assignedIcon: null,
    assignedColor: "bg-gray-100 text-gray-600",
  },
];

const roleColors = {
  Admin: "text-blue-600 bg-blue-100",
  Removed: "text-gray-600 bg-gray-100",
  Member: "text-gray-600 bg-gray-100",
};

export default function UserTable() {
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
                  src="/help-circle.png"
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
          {users.map((user, i) => (
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
                  {user.roleIcon && <span>{user.roleIcon}</span>}
                  {user.role}
                </span>
              </td>
              <td className="px-4 py-3">{user.generated}</td>
              <td className="px-4 py-3">{user.unlocked}</td>
              <td className="px-4 py-3">
                <span
                  className={`inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full font-semibold ${user.assignedColor}`}
                >
                  {user.assignedIcon && <span>{user.assignedIcon}</span>}
                  {user.assigned}
                </span>
              </td>
              <td className="px-4 py-3 text-right">
                <img
                  src="/dots-vertical.png"
                  size={16}
                  className="text-gray-500 cursor-pointer"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4 px-4">
        <button className="border-[1px] px-[14px] py-[8px] rounded-lg border-[#D0D5DD] bg-white">
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
          <button className="w-[40px] h-[40px] bg-[#F9FAFB] px-3 py-1 rounded-lg text-[14px] font-[500] text-[#1D2939]">
            1
          </button>
          <button className="w-[40px] h-[40px] bg-[#F9FAFB] text-[#475467] px-3 py-1 rounded-lg">
            2
          </button>
          <span>...</span>
          <button className="w-[40px] h-[40px] bg-[#F9FAFB] text-[#475467] px-3 py-1 rounded-lg">
            6
          </button>
          <button className="w-[40px] h-[40px] bg-[#F9FAFB] text-[#475467] px-3 py-1 rounded-lg">
            7
          </button>
        </div>
        <button className="border-[1px] px-[14px] py-[8px] rounded-lg border-[#D0D5DD] bg-white">
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
