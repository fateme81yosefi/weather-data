import create from 'zustand';

interface StoreState {
  dataLocation: object[];
  setDataLocation: (dataLocation: object[]) => void;
}

const useStore = create<StoreState>((set) => ({
  dataLocation: [],
  setDataMe: (dataMe) => set({ dataMe }),
}));

export default useStore;
