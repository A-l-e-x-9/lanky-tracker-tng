import { useGrape, useLanky, useRocket, useStand, useTiny } from '@renderer/hooks/kongs'
import { useShuffleColoredBananas } from '@renderer/hooks/settings'
import {
  useForestMushroomTop,
  useForestNight,
  useForestOwl,
  usePlayForest,
  useSlamForest
} from '..'

const useLankyMedalCommonLogic = (): number => {
  const top = useForestMushroomTop()
  const owl = useForestOwl()
  const gun = useGrape()

  let bananas = 32 // warp 1 (5), base of mushroom (15), outside mill (12)
  if (gun) {
    bananas += 10 // COL balloon bottom
  }
  if ((top.in || top.out) && gun) {
    bananas += 10 // COL balloon top
  }
  if (owl.in || owl.out) {
    bananas += 18 // path to owl tree (10), that damn rabbit (8)
  }

  return bananas
}

export const useLankyMedalInLogic = (): number => {
  const inStage = usePlayForest()
  const canSlam = useSlamForest()
  const night = useForestNight()
  const top = useForestMushroomTop()
  const kong = useLanky()
  const move = useStand()
  const shuffleBananas = useShuffleColoredBananas()
  let bananas = useLankyMedalCommonLogic()

  if (!inStage.in) {
    return 0
  }
  if (!kong) {
    return 0
  }
  if (shuffleBananas) {
    return 100
  }

  if (top.in && move) {
    bananas += 5 // top of mushroom
    if (canSlam) {
      bananas += 15 // zinger room (10), mushroom room (5)
    }
  }
  if (night.in) {
    bananas += 10 // mills attic
  }
  return bananas
}

export const useLankyMedalOutLogic = (): number => {
  const inStage = usePlayForest()
  const canSlam = useSlamForest()
  const night = useForestNight()
  const top = useForestMushroomTop()
  const kong = useLanky()
  const rocket = useRocket()
  const tiny = useTiny()
  const shuffleBananas = useShuffleColoredBananas()
  let bananas = useLankyMedalCommonLogic()

  if (!inStage.out) {
    return 0
  }
  if (!kong) {
    return 0
  }
  if (shuffleBananas) {
    return 100
  }

  if (top.out && (tiny || rocket)) {
    bananas += 5 // top of mushroom
    if (canSlam) {
      bananas += 15 // zinger room (10), mushroom room (5)
    }
  }
  if (night.out) {
    bananas += 10 // mills attic
  }
  return bananas
}
