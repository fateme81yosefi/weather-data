import create from 'zustand';

interface StoreState {
  dataLocation: object[];
  setDataLocation: (da: object[]) => void;
}

const useStore = create<StoreState>((set) => ({
  dataMe: [],
  setDataMe: (dataMe) => set({ dataMe }),
}));

export default useStore;
