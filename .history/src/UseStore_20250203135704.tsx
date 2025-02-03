import create from 'zustand';

interface StoreState {
  dataLocation: object[];
  setDataLocation: (dataLocation: object[]) => void;

  dataTemp: object[];
  setDataTemp: (dataTemp: object[]) => void;
}

const useStore = create<StoreState>((set) => ({
  dataLocation: [],
  setDataLocation: (dataLocation) => set({ dataLocation }),

  dataTemp: [],
  setDataLocation: (dataTemp) => set({ dataTemp }),
}));

export default useStore;
