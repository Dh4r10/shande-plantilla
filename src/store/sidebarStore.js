import { create } from 'zustand';
import { SIDEBAR_API } from '../api/securityAPI';
import axios from 'axios';

export const useSidebarStore = create((set) => ({
  menuItems: [],
  getMenuItems: async () => {
    const response = await axios.get(SIDEBAR_API);
    set({ menuItems: response.data });
  },
}));
