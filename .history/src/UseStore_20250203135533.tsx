import create from 'zustand';

interface StoreState {
  dataMe: object[];
  setDataMe: (dataMe: object[]) => void;
 
}

const useStore = create<StoreState>((set) => ({

  dataMe: [],
  setDataMe: (dataMe) => set({ dataMe }),
  dataDashboard: [],
  dataDashboardEval: [],

  dataPeriodList: [],
  setDataPeriodList: (dataPeriodList) => set({ dataPeriodList }),
  setDataDashboard: (dataDashboard) => set({ dataDashboard }),
  setDataDashboardEval: (dataDashboardEval) => set({ dataDashboardEval }),

}));

export default useStore;
