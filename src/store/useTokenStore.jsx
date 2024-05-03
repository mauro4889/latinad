import { create } from "zustand";
import { persist } from "zustand/middleware";



export const useTokenStore = create((set) => ({
    token: '',
    getToken: (token) => set(()=> ({token: token})),
    //cleanToken: () => set(() => ({token: }))
}))

export const useUserStore = create(
    persist(
    (set) => ({
    firstName: '',
    getName: (value) => set(()=> ({firstName: value}))
}),
{
    name: 'user-storage'
}))