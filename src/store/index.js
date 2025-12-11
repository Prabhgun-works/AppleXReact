import {create} from 'zustand'

const useMacbookStore = create((set) => ({
    color : '#555551',
    setColor: (color) => set({color}),

    scale : 0.08, 
    setScale:(scale) => set({scale}) , 

    reset: () => set({ color: '#555551' , scale : 0.80}),
}))
export default useMacbookStore;