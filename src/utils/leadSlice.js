import { createSlice } from "@reduxjs/toolkit";

const leadSlice = createSlice({
  name: "lead",
  initialState: {
    leads: [
      {
        id: 1,
        name: "Jennifer Markus",
        avatar: "https://randomuser.me/api/portraits/women/65.jpg",
        location: "Mumbai, India",
        networkAvatars: [],
        description:
          "A team from company name mentioned is seeking a highly motivated Business Development Executive to outreach and secure bo...",
        time: "Found 2 hour ago",
        isLocked: true,
        score: 99,
        creditToUnlock: 3,
        phoneLocked: false,
        isDisliked: false,
        isLiked: false,
        assignedTo: null,
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
        description:
          "A team from company name mentioned is seeking a highly motivated Business Development Executive to outreach and secure bo...",
        time: "3 hours ago",
        isLocked: false,
        score: 74,
        isLiked: false,
        isDisliked: false,
        assignedTo: null,
      },
      {
        id: 3,
        name: "Jennifer Markus",
        avatar: "https://randomuser.me/api/portraits/women/65.jpg",
        location: "Mumbai, China",
        networkAvatars: [],
        description:
          "A team from company name mentioned is seeking a highly motivated Business Development Executive to outreach and secure bo...",
        time: "Found 2 hour ago",
        isLocked: true,
        isLiked: false,
        isDisliked: false,
        assignedTo: null,
        creditToUnlock: 3,
        phoneLocked: false,
        score: 99,
      },
      {
        id: 4,
        name: "Jennifer Markus",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        location: "Mumbai, Singapore",
        description:
          "A team from company name mentioned is seeking a highly motivated Business Development Executive to outreach and secure bo...",
        networkAvatars: [
          "https://randomuser.me/api/portraits/men/31.jpg",
          "https://randomuser.me/api/portraits/women/30.jpg",
          "https://randomuser.me/api/portraits/men/29.jpg",
        ],
        time: "3 hours ago",
        isLocked: true,
        isLiked: false,
        isDisliked: false,
        assignedTo: null,
        creditToUnlock: 3,
        phoneLocked: true,
        score: 74,
      },
      {
        id: 5,
        name: "Jennifer Markus",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        location: "Mumbai, India",
        description:
          "A team from company name mentioned is seeking a highly motivated Business Development Executive to outreach and secure bo...",
        networkAvatars: [
          "https://randomuser.me/api/portraits/men/31.jpg",
          "https://randomuser.me/api/portraits/women/30.jpg",
          "https://randomuser.me/api/portraits/men/29.jpg",
        ],
        time: "3 hours ago",
        isLocked: false,
        score: 74,
        isLiked: false,
        isDisliked: false,
        assignedTo: null,
      },
      {
        id: 6,
        name: "Jennifer Markus",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        location: "Mumbai, India",
        description:
          "A team from company name mentioned is seeking a highly motivated Business Development Executive to outreach and secure bo...",
        networkAvatars: [
          "https://randomuser.me/api/portraits/men/31.jpg",
          "https://randomuser.me/api/portraits/women/30.jpg",
          "https://randomuser.me/api/portraits/men/29.jpg",
        ],
        time: "3 hours ago",
        isLocked: false,
        score: 74,
        isLiked: false,
        isDisliked: false,
        assignedTo: null,
      },
    ],
    filteredLeads: [],
  },
  reducers: {
    unlockLead: (state, action) => {
      const leadIndex = state.leads.findIndex(
        (lead) => lead.id === action.payload
      );
      if (leadIndex !== -1) {
        state.leads[leadIndex].isLocked = false;
      }
    },
    assignLead: (state, action) => {
      state.leads[action.payload].assignedTo = action.payload;
    },
    likeLead: (state, action) => {
      const leadIndex = action.payload;
      state.leads[leadIndex].isLiked = !state.leads[leadIndex].isLiked;
      state.leads[leadIndex].isDisliked = false;
    },
    dislikeLead: (state, action) => {
      const leadIndex = action.payload;
      state.leads[leadIndex].isDisliked = !state.leads[leadIndex].isDisliked;
      state.leads[leadIndex].isLiked = false;
    },
    filterLeads: (state, action) => {
      state.filteredLeads = action.payload;
    },
  },
});

export const { unlockLead, assignLead, likeLead, dislikeLead, filterLeads } =
  leadSlice.actions;

export default leadSlice.reducer;
