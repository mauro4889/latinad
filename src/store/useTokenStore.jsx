import { create } from "zustand";



export const useTokenStore = create((set) => ({
    token: '',
    getToken: (token) => set(()=> ({token: token})),
    //cleanToken: () => set(() => ({token: }))
}))