import { createSlice } from "@reduxjs/toolkit";

const leadSlice = createSlice({
  name: "lead",
  initialState: {
    leads: [
      {
        id: 1,
        name: "Sarah Johnson",
        avatar: "https://randomuser.me/api/portraits/women/65.jpg",
        location: "Mumbai, India",
        networkAvatars: [],
        description:
          "Looking for a skilled Project Manager with experience in agile methodologies and team leadership to join our growing tech startup...",
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
        name: "Michael Chen",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        location: "Delhi, India",
        networkAvatars: [
          "https://randomuser.me/api/portraits/men/31.jpg",
          "https://randomuser.me/api/portraits/women/30.jpg",
          "https://randomuser.me/api/portraits/men/29.jpg",
        ],
        description:
          "Seeking a Senior Software Engineer with expertise in React and Node.js to lead our frontend development team and mentor junior developers...",
        time: "3 hours ago",
        isLocked: false,
        score: 74,
        isLiked: false,
        isDisliked: false,
        assignedTo: null,
      },
      {
        id: 3,
        name: "Emma Wilson",
        avatar: "https://randomuser.me/api/portraits/women/65.jpg",
        location: "Shanghai, China",
        networkAvatars: [],
        description:
          "Hiring a Digital Marketing Specialist to develop and execute social media strategies and drive engagement across multiple platforms...",
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
        name: "David Kim",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        location: "Sentosa, Singapore",
        description:
          "Looking for a Data Scientist with machine learning experience to analyze customer behavior and optimize our recommendation systems...",
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
        name: "Sophia Rodriguez",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        location: "Berlin, Germany",
        description:
          "Seeking a UX/UI Designer to create intuitive and engaging user experiences for our mobile and web applications...",
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
        name: "James Anderson",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        location: "Gurgaon, India",
        description:
          "Looking for a Product Manager to oversee the development of our new SaaS platform and drive product innovation...",
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
    filters: {
      selectedCountries: [],
      selectedScores: [],
    },
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
    setSelectedCountries: (state, action) => {
      state.filters.selectedCountries = action.payload;
    },
    setSelectedScores: (state, action) => {
      state.filters.selectedScores = action.payload;
    },
  },
});

export const {
  unlockLead,
  assignLead,
  likeLead,
  dislikeLead,
  filterLeads,
  setSelectedCountries,
  setSelectedScores,
} = leadSlice.actions;

export default leadSlice.reducer;
