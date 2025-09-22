import { useCoconut, useClimbing, useDk, useStrong } from '@renderer/src/hooks/kongs'
import { useShuffleColoredBananas } from '@renderer/src/hooks/settings'
import { logicBreak } from '@renderer/src/hooks/world'
import {
  useAztecBack,
  useAztecBackTunnel,
  useAztecFront,
  useAztecFrontKasplat,
  useAztecLlamaTemple
} from '..'

export const useDkMedalInLogic = (): number => {
  const inStage = useAztecFront()
  const kasplat = useAztecFrontKasplat()
  const aztecBack = useAztecBack()
  const llamaTemple = useAztecLlamaTemple()
  const backTunnel = useAztecBackTunnel()
  const kong = useDk()
  const gun = useCoconut()
  const crystal = useStrong()
  const hasClimb = useClimbing()
  const shuffleBananas = useShuffleColoredBananas()

  if (!inStage.in) {
    return 0
  }
  if (!kong) {
    return 0
  }
  if (shuffleBananas) {
    return 100
  }

  let bananas = 0 // Every banana has opposition.
  if (inStage.in) {
    bananas += 3
    if (hasClimb) {
      bananas +=15
    }
    if (kasplat.in) {
      bananas += 10
    }
    if (aztecBack.in) {
      bananas += 7
      if (gun) {
        bananas += 30
      }
      if (llamaTemple.in) {
        bananas += 15
        if (backTunnel.in && crystal) {
          bananas += 20
        }
      }
    }
  }

  return bananas
}

export const useDkMedalOutLogic = (): number => {
  const inStage = useAztecFront()
  const kasplat = useAztecFrontKasplat()
  const aztecBack = useAztecBack()
  const llamaTemple = useAztecLlamaTemple()
  const backTunnel = useAztecBackTunnel()
  const kong = useDk()
  const gun = useCoconut()
  const hasClimb = useClimbing()
  const shuffleBananas = useShuffleColoredBananas()

  if (!logicBreak(inStage)) {
    return 0
  }
  if (!kong) {
    return 0
  }
  if (shuffleBananas) {
    return 100
  }

  let bananas = 0
  if (logicBreak(inStage)) {
    bananas += 3
    if (hasClimb) {
      bananas +=15
    }
    if (logicBreak(kasplat)) {
      bananas += 10
    }
    if (logicBreak(aztecBack)) {
      bananas += 7
      if (gun) {
        bananas += 30
      }
      if (logicBreak(llamaTemple)) {
        bananas += 15
        if (logicBreak(backTunnel)) {
          bananas += 20
        }
      }
    }
  }

  return bananas
}
