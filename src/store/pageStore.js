import { create } from 'zustand';
import { SCREENS_API } from '../api/securityAPI';
import axios from 'axios';

export const usePageStore = create((set) => ({
  paths: [],
  getPaths: async () => {
    const response = await axios.get(SCREENS_API);
    set({ paths: response.data });
  },
}));
