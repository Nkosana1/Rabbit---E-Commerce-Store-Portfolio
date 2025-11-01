import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  projects: [],
  currentProject: null,
  isLoading: false,
  error: null,
};

const projectSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setProjects: (state, action) => {
      state.projects = action.payload;
    },
    setCurrentProject: (state, action) => {
      state.currentProject = action.payload;
    },
    addProject: (state, action) => {
      state.projects.push(action.payload);
    },
    updateProject: (state, action) => {
      const index = state.projects.findIndex((p) => p._id === action.payload._id);
      if (index !== -1) {
        state.projects[index] = action.payload;
      }
      if (state.currentProject?._id === action.payload._id) {
        state.currentProject = action.payload;
      }
    },
    deleteProject: (state, action) => {
      state.projects = state.projects.filter((p) => p._id !== action.payload);
      if (state.currentProject?._id === action.payload) {
        state.currentProject = null;
      }
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  setProjects,
  setCurrentProject,
  addProject,
  updateProject,
  deleteProject,
  setLoading,
  setError,
} = projectSlice.actions;

export default projectSlice.reducer;

