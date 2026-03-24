import { StateCreator } from 'zustand'
import { AllSlice, PortalSlice, PortalState, donkResetFns } from './common'

export const initialPortal: PortalState = {
  shuffledJapesPortals: {
    vanilla: true,
    portalNearDiddy: false
  },
  shuffledAztecPortals: {
    vanilla: true,
    secondHalfPortal: false
  }
}

const portalSlice: StateCreator<AllSlice, [], [], PortalSlice> = (set) => {
  donkResetFns.add(() => set(initialPortal))
  return {
    ...initialPortal,
    setJapesPortal: (id): void => {
      set((state) => {
        const reset: Record<string, boolean> = {}
        for (const k of Object.keys(state.shuffledJapesPortals)) {
          reset[k] = false
        }
        reset[id] = true
        return {
          ...state,
          shuffledJapesPortals: {
            ...state.shuffledJapesPortals,
            ...reset
          }
        }
        return {
          ...state,
          shuffledJapesPortals: {
            ...state.shuffledJapesPortals,
            [id]: false
          }
        }
      })
    },
    setAztecPortal: (id): void => {
      set((state) => {
        const reset: Record<string, boolean> = {}
        for (const k of Object.keys(state.shuffledAztecPortals)) {
          reset[k] = false
        }
        reset[id] = true
        return {
          ...state,
          shuffledAztecPortals: {
            ...state.shuffledAztecPortals,
            ...reset
          }
        }
        return {
          ...state,
          shuffledAztecPortals: {
            ...state.shuffledAztecPortals,
            [id]: false
          }
        }
      })
    }
  }
}

export default portalSlice
