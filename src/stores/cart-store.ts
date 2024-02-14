import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"
import { ProductProps } from "@/utils/data/products"
import AsyncStorage from "@react-native-async-storage/async-storage"
import * as cartInMemory from "./helpers/cart-in-memory"

export type ProductCartProps = ProductProps & {
  quantity: number
}

type StateProps = {
  products: ProductCartProps[]
  add: (product: ProductProps) => void
  remove: (product: string) => void
  clear: () => void
}

export const useCartStore = create(
  persist<StateProps>(
    (set) => ({
      products: [],

      add: (product: ProductProps) =>
        set((state) => ({
          products: cartInMemory.add(state.products, product),
        })),

      remove: (product: string) =>
        set((state) => ({
          products: cartInMemory.remove(state.products, product),
        })),

      clear: () => set(() => ({ products: [] })),
    }),
    {
      name: "nlw-expert:cart",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
)
