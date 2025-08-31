import { useAnyMusic, useClimbing, useDive, useGrape, useLanky, useRocket, useVine } from '@renderer/hooks/kongs'
import { useShuffleColoredBananas } from '@renderer/hooks/settings'
import { logicBreak } from '@renderer/hooks/world'
import {
  useAztec5DoorTemple,
  useAztecBack,
  useAztecFront,
  useAztecLlamaTemple,
  useAztecTinyTemple,
  useTinyTempleIce
} from '..'

export const useLankyMedalInLogic = (): number => {
  const inStage = useAztecFront()
  const tinyTemple = useAztecTinyTemple()
  const iceMelted = useTinyTempleIce()
  const aztecBack = useAztecBack()
  const llamaTemple = useAztecLlamaTemple()
  const doorTemple = useAztec5DoorTemple()
  const anyMusic = useAnyMusic()
  const kong = useLanky()
  const gun = useGrape()
  const vine = useVine()
  const dive = useDive()
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

  let bananas = 0
  if (inStage.in) {
    bananas += 5
    if (tinyTemple.in && iceMelted && dive) {
      bananas += 14
    }
    if (aztecBack.in) {
      bananas += 15
      if (hasClimb) {
        bananas += 20
      }
      if (doorTemple.in && gun) {
        bananas += 10
      }
      if (llamaTemple.in) {
        bananas += 11
        if (gun && vine) {
          bananas += 5
        }
        if (anyMusic && dive && gun) {
          bananas += 20
        }
      }
    }
  }

  return bananas
}

export const useLankyMedalOutLogic = (): number => {
  const inStage = useAztecFront()
  const tinyTemple = useAztecTinyTemple()
  const iceMelted = useTinyTempleIce()
  const aztecBack = useAztecBack()
  const llamaTemple = useAztecLlamaTemple()
  const doorTemple = useAztec5DoorTemple()
  const anyMusic = useAnyMusic()
  const kong = useLanky()
  const gun = useGrape()
  const vine = useVine()
  const dive = useDive()
  const hasClimb = useClimbing()
  const hasJetbarrel = useRocket()
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
    bananas += 5
    if (logicBreak(tinyTemple) && iceMelted && dive) {
      bananas += 14
    }
    if (logicBreak(aztecBack)) {
      bananas += 15
      if (hasClimb || hasJetbarrel) {
        bananas+=20
      }
      if (logicBreak(doorTemple) && gun) {
        bananas += 10
      }
      if (logicBreak(llamaTemple)) {
        bananas += 11
        if (gun && vine) {
          bananas += 5
        }
        if (anyMusic && dive && gun) {
          bananas += 20
        }
      }
    }
  }

  return bananas
}
