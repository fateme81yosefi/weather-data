import { create } from "zustand";


const useStore = create<>((set) => ({
  dataLocation: [],
  setDataLocation: (dataLocation) => set({ dataLocation }),

  dataTemp: [],
  setDataTemp: (dataTemp) => set({ dataTemp }),
}));

export default useStore;
