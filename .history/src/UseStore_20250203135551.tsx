import create from 'zustand';

interface StoreState {
  data: object[];
  setDataMe: (dataMe: object[]) => void;
}

const useStore = create<StoreState>((set) => ({
  dataMe: [],
  setDataMe: (dataMe) => set({ dataMe }),
}));

export default useStore;
