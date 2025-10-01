import { CartStoreActionsType, CartStoreStateType } from '@/types'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware';

const useCartStore = create<CartStoreStateType & CartStoreActionsType>()(
  persist(
    (set) => ({
      cart: [],
      hasHydrated: false,
      addToCart: (product) => set((state) => {
        const existingIndex = state.cart.findIndex(p =>
          p.id === product.id &&
          p.selectedSize === product.selectedSize &&
          p.selectedColor === product.selectedColor
        )
        if (existingIndex !== -1) //Already exist
        {
          const updatedCart = [...state.cart]
          updatedCart[existingIndex].quantity += product.quantity || 1
          return { cart: updatedCart }
        }
        return {
          cart: [
            ...state.cart,
            {
              ...product
            }
          ]
        }

      }),
      removeFromCart: (product) => set((state) => ({
        //to remove item with same id ,size and color  stored in cart only
        cart: state.cart.filter(p =>
          !(p.id === product.id // (!true)=false
            && p.selectedSize === product.selectedSize
            && p.selectedColor === product.selectedColor)
        )
      })),
      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "cart",
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.hasHydrated = true
        }
      },
    }))
export default useCartStore;