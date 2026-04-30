import { StateCreator } from 'zustand'
import { AllSlice, PortalSlice, PortalState, donkResetFns } from './common'

export const initialPortal: PortalState = {
  shuffledJapesPortals: {
    vanilla: true,
    portalNearDiddy: false,
    outsidePaintingPortal: false,
    stormyPortal: false,
    hiveOutsidePortal: false,
    portalInDiddyMine: false,
    portalInChunkyMine: false
  },
  shuffledAztecPortals: {
    vanilla: true,
    firstHalfPortal: false,
    tinyTempleIcePortal: false,
    secondHalfPortal: false,
    llamaPortal: false
  },
  shuffledFactoryPortals: {
    vanilla: true,
    portalInRAndD: false,
    storagePortal: false,
    upperProdPortal: false,
    crusherPortal: false,
    arcadePortal: false
  },
  shuffledGalleonPortals: {
    vanilla: true,
    lighthousePortal: false,
    chunkyShipPortal: false
  },
  shuffledForestPortals: {
    vanilla: true,
    frontMillPortal: false,
    backMillPortal: false,
    area2Portal: false,
    shroomTopPortal: false
  },
  shuffledCavesPortals: {
    vanilla: true,
    gonePortal: false,
    bigRockPortal: false,
    tiny5DIPortal: false,
    DK5DCPortal: false,
    diddyUpperCabinPortal: false
  },
  shuffledCastlePortals: {
    vanilla: true,
    treePortal: false,
    treeChunkyPortal: false,
    ballroomPortal: false,
    windTunnelPortal: false
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
    },
    setFactoryPortal: (id): void => {
      set((state) => {
        const reset: Record<string, boolean> = {}
        for (const k of Object.keys(state.shuffledFactoryPortals)) {
          reset[k] = false
        }
        reset[id] = true
        return {
          ...state,
          shuffledFactoryPortals: {
            ...state.shuffledFactoryPortals,
            ...reset
          }
        }
        return {
          ...state,
          shuffledFactoryPortals: {
            ...state.shuffledFactoryPortals,
            [id]: false
          }
        }
      })
    },
    setGalleonPortal: (id): void => {
      set((state) => {
        const reset: Record<string, boolean> = {}
        for (const k of Object.keys(state.shuffledGalleonPortals)) {
          reset[k] = false
        }
        reset[id] = true
        return {
          ...state,
          shuffledGalleonPortals: {
            ...state.shuffledGalleonPortals,
            ...reset
          }
        }
        return {
          ...state,
          shuffledGalleonPortals: {
            ...state.shuffledGalleonPortals,
            [id]: false
          }
        }
      })
    },
    setForestPortal: (id): void => {
      set((state) => {
        const reset: Record<string, boolean> = {}
        for (const k of Object.keys(state.shuffledForestPortals)) {
          reset[k] = false
        }
        reset[id] = true
        return {
          ...state,
          shuffledForestPortals: {
            ...state.shuffledForestPortals,
            ...reset
          }
        }
        return {
          ...state,
          shuffledForestPortals: {
            ...state.shuffledForestPortals,
            [id]: false
          }
        }
      })
    },
    setCavesPortal: (id): void => {
      set((state) => {
        const reset: Record<string, boolean> = {}
        for (const k of Object.keys(state.shuffledCavesPortals)) {
          reset[k] = false
        }
        reset[id] = true
        return {
          ...state,
          shuffledCavesPortals: {
            ...state.shuffledCavesPortals,
            ...reset
          }
        }
        return {
          ...state,
          shuffledCavesPortals: {
            ...state.shuffledCavesPortals,
            [id]: false
          }
        }
      })
    },
    setCastlePortal: (id): void => {
      set((state) => {
        const reset: Record<string, boolean> = {}
        for (const k of Object.keys(state.shuffledCastlePortals)) {
          reset[k] = false
        }
        reset[id] = true
        return {
          ...state,
          shuffledCastlePortals: {
            ...state.shuffledCastlePortals,
            ...reset
          }
        }
        return {
          ...state,
          shuffledCastlePortals: {
            ...state.shuffledCastlePortals,
            [id]: false
          }
        }
      })
    }
  }
}

export default portalSlice
