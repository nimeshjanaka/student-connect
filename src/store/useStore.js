import create from 'zustand';

const useStore = create(set => ({
  count: 0,
  person:"nobody",
  increaseCount: () => set(state => ({ count: state.count + 1 })),
  decreaseCount: () => set(state => ({ count: state.count - 1 })),
  setPerson: (newPerson) => set({ person: newPerson }),

}));



export default useStore;