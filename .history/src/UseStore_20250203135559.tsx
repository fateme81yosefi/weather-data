import create from 'zustand';

interface StoreState {
  dataLocation: object[];
  setData: (dataMe: object[]) => void;
}

const useStore = create<StoreState>((set) => ({
  dataMe: [],
  setDataMe: (dataMe) => set({ dataMe }),
}));

export default useStore;
