import create from 'zustand';

const useStore = create(set => ({
  count: 0,
  person:"Leslie Alexander",
  imgUrl:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  increaseCount: () => set(state => ({ count: state.count + 1 })),
  decreaseCount: () => set(state => ({ count: state.count - 1 })),
  setPerson: (newPerson) => set({ person: newPerson }),
  setImgUrl: (newUrl) => set({ imgUrl: newUrl }),

}));



export default useStore;