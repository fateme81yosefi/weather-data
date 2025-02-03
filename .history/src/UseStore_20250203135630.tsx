import create from 'zustand';

interface StoreState {
  dataLocation: object[];
  setDataLocation: (dataLocation: object[]) => void;

  dataLocation: object[];
  setDataLocation: (dataLocation: object[]) => void;
}

const useStore = create<StoreState>((set) => ({
  dataLocation: [],
  setDataLocation: (dataLocation) => set({ dataLocation }),
}));

export default useStore;
