import { useDiddy, useDive, usePeanut, useRocket } from '@renderer/hooks/kongs'
import { useShuffleColoredBananas } from '@renderer/hooks/settings'
import {
  useAztec5DoorTemple,
  useAztecBack,
  useAztecBackTunnel,
  useAztecFront,
  useAztecTinyTemple,
  useSlamAztec,
  useTinyTempleIce
} from '..'

export const useDiddyMedalInLogic = (): number => {
  const inStage = useAztecFront()
  const tinyTemple = useAztecTinyTemple()
  const iceMelted = useTinyTempleIce()
  const aztecBack = useAztecBack()
  const doorTemple = useAztec5DoorTemple()
  const backTunnel = useAztecBackTunnel()
  const canSlam = useSlamAztec()
  const kong = useDiddy()
  const gun = usePeanut()
  const crystal = useRocket()
  const dive = useDive()
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
    if (gun) {
      bananas += 10
    }
    if (tinyTemple.in) {
      if (canSlam) {
        bananas += 3
        if (gun) {
          bananas += 15
        }
      }
      if (iceMelted && dive) {
        bananas += 7
      }
    }
    if (aztecBack.in) {
      bananas += 30
      if (crystal) {
        bananas += 10
      }
      if (doorTemple.in && gun) {
        bananas += 10
      }
      if (backTunnel.in && gun) {
        bananas += 10
      }
    }
  }

  return bananas
}

export const useDiddyMedalOutLogic = (): number => {
  const inStage = useAztecFront()
  const tinyTemple = useAztecTinyTemple()
  const iceMelted = useTinyTempleIce()
  const aztecBack = useAztecBack()
  const doorTemple = useAztec5DoorTemple()
  const backTunnel = useAztecBackTunnel()
  const canSlam = useSlamAztec()
  const kong = useDiddy()
  const gun = usePeanut()
  const crystal = useRocket()
  const dive = useDive()
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
    if (gun) {
      bananas += 10
    }
    if (tinyTemple.out) {
      if (canSlam) {
        bananas += 8
        if (gun) {
          bananas += 10
        }
      }
      if (iceMelted && dive) {
        bananas += 7
      }
    }
    if (aztecBack.out) {
      bananas += 30
      if (crystal) {
        bananas += 10
      }
      if (doorTemple.out && gun) {
        bananas += 10
      }
      if (backTunnel.out && gun) {
        bananas += 10
      }
    }
  }

  return bananas
}
