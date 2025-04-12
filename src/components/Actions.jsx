import { useDispatch, useSelector } from "react-redux";
import { deleteUser, manageUser } from "../utils/userSlice";
import removeIcon from "/remove.svg";
import manageIcon from "/manage.svg";

const Actions = ({ id, setIsModalOpen }) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleManageRole = () => {
    setIsModalOpen(false);
    dispatch(manageUser({ id, role: "Admin" }));
  };

  const handleRemoveFromTeam = () => {
    setIsModalOpen(false);
    dispatch(deleteUser(id));
  };

  return (
    <div className="absolute top-5 right-[75%]  w-[237px] py-[5px] shadow-sm rounded-[7px] bg-white border-[1px] border-[#DDDDDD] transition-all duration-300">
      <div className="w-full flex flex-col ">
        <button className="w-full py-[6px] px-[24px] h-[46px] border-b-[1px] border-[#EAECF0]">
          <h2 className="w-full text-[14px] font-[600] text-start">Actions</h2>
        </button>
        <button
          className="w-full py-[6px] px-[24px] h-[46px] border-b-[1px] border-[#EAECF0] flex items-center gap-2 "
          onClick={handleManageRole}
        >
          <img className="w-[24px] h-[24px]" src={manageIcon} alt="manage" />
          <h2 className="w-full text-[14px] font-[600] text-start">
            Manage Role
          </h2>
        </button>
        <button
          className="w-full py-[6px] px-[24px] h-[46px] flex items-center gap-2"
          onClick={handleRemoveFromTeam}
        >
          <img className="w-[24px] h-[24px]" src={removeIcon} alt="remove" />
          <h2 className="text-[14px] font-[600]">Remove from team</h2>
        </button>
      </div>
    </div>
  );
};

export default Actions;
