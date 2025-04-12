// setup userSlice

import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: [
      {
        id: 1,
        name: "Olivia Rhye",
        avatar: "/avatar/Avatar.png",
        lastActive: "2min ago",
        credit: 4,
        role: "Admin",
        roleIcon: "/Qualified.png",
        generated: 123,
        unlocked: 123,
        assigned: 40,
        email: "olivia@gmail.com",
        assignedIcon: "/one-waves-solid.png",
        assignedColor: "bg-orange-100 text-orange-600",
      },
      {
        id: 2,
        name: "Olivia Rhye",
        avatar: "/avatar/Avatar.png",
        lastActive: "2min ago",
        credit: 4,
        role: "Removed",
        roleIcon: "/RemoveQualified.png",
        generated: 23,
        unlocked: 23,
        assigned: 25,
        email: "olivia@gmail.com",
        assignedIcon: "/two-waves-solid.png",
        assignedColor: "bg-blue-100 text-blue-600",
      },
      {
        id: 3,
        name: "Olivia Rhye",
        avatar: "/avatar/Avatar.png",
        lastActive: "2min ago",
        credit: 4,
        email: "olivia@gmail.com",
        role: "Member",
        roleIcon: "/RemoveQualified.png",
        generated: 56,
        unlocked: 56,
        assigned: 15,
        assignedIcon: "/three-waves-solid.png",
        assignedColor: "bg-green-100 text-green-600",
      },
      {
        id: 4,
        name: "Olivia Rhye",
        avatar: "/avatar/Avatar.png",
        lastActive: "2min ago",
        credit: 4,
        email: "olivia@gmail.com",
        role: "Admin",
        roleIcon: "/Qualified.png",
        generated: 12,
        unlocked: 12,
        assigned: 10,
        assignedIcon: null,
        assignedColor: "bg-gray-100 text-gray-600",
      },
      {
        id: 5,
        name: "Olivia Rhye",
        avatar: "/avatar/Avatar.png",
        lastActive: "2min ago",
        credit: 4,
        email: "olivia@gmail.com",
        role: "Member",
        roleIcon: "/RemoveQualified.png",
        generated: 123,
        unlocked: 123,
        assigned: 5,
        assignedIcon: null,
        assignedColor: "bg-gray-100 text-gray-600",
      },
      {
        id: 6,
        name: "Olivia Rhye",
        avatar: "/avatar/Avatar.png",
        lastActive: "2min ago",
        credit: 4,
        email: "olivia@gmail.com",
        role: "Member",
        roleIcon: "/RemoveQualified.png",
        generated: 120,
        unlocked: 122,
        assigned: 9,
        assignedIcon: null,
        assignedColor: "bg-gray-100 text-gray-600",
      },
      {
        id: 7,
        name: "Olivia Rhye",
        avatar: "/avatar/Avatar.png",
        lastActive: "2min ago",
        credit: 4,
        email: "olivia@gmail.com",
        role: "Admin",
        roleIcon: "/Qualified.png",
        generated: 12,
        unlocked: 12,
        assigned: 10,
        assignedIcon: null,
        assignedColor: "bg-gray-100 text-gray-600",
      },
    ],
    isLoggedIn: false,
  },
  reducers: {
    manageUser: (state, action) => {
      const id = Number(action.payload.id);
      const userIndex = state.user.findIndex((user) => user.id === id);
      if (userIndex !== -1) {
        state.user[userIndex].role = action.payload.role;
        state.user.users[action.payload].email = action.payload.email;
      }
    },
    changeUserCredit: (state, action) => {
      const id = Number(action.payload.id);
      const credited = Number(action.payload.credited);
      const userIndex = state.user.findIndex((user) => user.id === id);
      if (userIndex !== -1) {
        state.user[userIndex].credit = credited;
      }
    },
    deleteUser: (state, action) => {
      state.user = state.user.filter((user) => user.id !== action.payload);
    },
    login: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { manageUser, changeUserCredit, deleteUser, login } =
  userSlice.actions;

export default userSlice.reducer;
