import { useClimbing, useDive, useFeather, useMini, useTiny, useTwirl } from '@renderer/src/hooks/kongs'
import { useShuffleColoredBananas } from '@renderer/src/hooks/settings'
import { logicBreak } from '@renderer/src/hooks/world'
import {
  useAztecBack,
  useAztecFront,
  useAztecLlamaLava,
  useAztecLlamaTemple,
  useAztecTinyTemple,
  useSlamAztec,
  useTinyTempleIce
} from '..'

export const useTinyMedalInLogic = (): number => {
  const inStage = useAztecFront()
  const aztecBack = useAztecBack()
  const tinyTemple = useAztecTinyTemple()
  const iceMelted = useTinyTempleIce()
  const llamaTemple = useAztecLlamaTemple()
  const lava = useAztecLlamaLava()
  const canSlam = useSlamAztec()
  const kong = useTiny()
  const gun = useFeather()
  const crystal = useMini()
  const move = useTwirl()
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
    if (tinyTemple.in && iceMelted && dive) {
      if (gun) {
        bananas += 20
      }
      if (crystal) {
        bananas += 5
      }
    }
    if (aztecBack.in) {
      bananas += 30
      if (hasClimb) {
        bananas +=20
      }
    }
    if (llamaTemple.in) {
      bananas += 3
      if (gun) {
        bananas += 10
      }
      if (lava.in) {
        bananas += 2
        if (move || canSlam) {
          bananas += 10
        }
      }
    }
  }

  return bananas
}

export const useTinyMedalOutLogic = (): number => {
  const inStage = useAztecFront()
  const aztecBack = useAztecBack()
  const iceMelted = useTinyTempleIce()
  const tinyTemple = useAztecTinyTemple()
  const llamaTemple = useAztecLlamaTemple()
  const lava = useAztecLlamaLava()
  const kong = useTiny()
  const gun = useFeather()
  const crystal = useMini()
  const dive = useDive()
  const kuruKuru = useTwirl()
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
    if (logicBreak(tinyTemple) && iceMelted && dive) {
      if (gun) {
        bananas += 20
      }
      if (crystal) {
        bananas += 5
      }
    }
    if (logicBreak(aztecBack)) {
      bananas += 40
      if (kuruKuru) {
        bananas += 10
      }
    }
    if (logicBreak(llamaTemple)) {
      bananas += 3
      if (gun) {
        bananas += 10
      }
      if (logicBreak(lava)) {
        bananas += 12
      }
    }
  }

  return bananas
}
