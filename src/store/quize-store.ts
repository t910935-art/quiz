import { create } from "zustand";

interface State {
  count: number;
  inc: () => void;
  dec: () => void;
}

const useStore = create<State>((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
  dec: () => set((state) => ({ count: state.count - 1 })),
}));

export default useStore;
