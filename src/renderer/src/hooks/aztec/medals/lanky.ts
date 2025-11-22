import { useAnyMusic, useClimbing, useDive, useGrape, useLanky, useRocket, useVine } from '@renderer/hooks/kongs'
import { useShuffleColoredBananas } from '@renderer/hooks/settings'
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
    if (tinyTemple.in && iceMelted && dive.in) {
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
        if (anyMusic && dive.in && gun) {
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

  if (!inStage.out) {
    return 0
  }
  if (!kong) {
    return 0
  }
  if (shuffleBananas) {
    return 100
  }

  let bananas = 0
  if (inStage.out) {
    bananas += 5
    if (tinyTemple.out && iceMelted && dive.out) {
      bananas += 14
    }
    if (aztecBack.out) {
      bananas += 15
      if (hasClimb || hasJetbarrel) {
        bananas+=20
      }
      if (doorTemple.out && gun) {
        bananas += 10
      }
      if (llamaTemple.out) {
        bananas += 11
        if (gun && vine) {
          bananas += 5
        }
        if (anyMusic && dive.out && gun) {
          bananas += 20
        }
      }
    }
  }

  return bananas
}
