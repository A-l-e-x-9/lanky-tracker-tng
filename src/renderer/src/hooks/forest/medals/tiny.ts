import { useDive, useFeather, useMini, usePunch, useSax, useTiny, useClimbing } from '@renderer/hooks/kongs'
import { useForestTime, useShuffleColoredBananas } from '@renderer/hooks/settings'
import {
  useForestBean,
  useForestBeanHalf,
  useForestDay,
  useForestNight,
  useForestOwl,
  usePlayForest
} from '..'

const useTinyMedalCommonLogic = (): number => {
  const owl = useForestOwl()
  const bean = useForestBean()
  const half = useForestBeanHalf()
  const gun = useFeather()
  const dive = useDive()
  const hasClimbing = useClimbing()
  let bananas = 10 // two bunches at start
  if (half.in || half.out) {
    bananas += 4 // first bean door
  }
  if (bean.in || bean.out) {
    bananas += 1 // full bean access
    if (hasClimbing) {
      bananas += 15 //the bananas on top of the mushrooms surrounding the Apple
    }
  }
  if (gun) {
    bananas += 10 // balloon in lower mushroom
  }
  if (owl.in || owl.out) {
    bananas += 8 // around anthill
  }
  if (dive.in || dive.out) {
    bananas += 17 // mills water
  }

  return bananas
}

export const useTinyMedalInLogic = (): number => {
  const inStage = usePlayForest()
  const day = useForestDay()
  const night = useForestNight()
  const owl = useForestOwl()
  const punch = usePunch()
  const kong = useTiny()
  const gun = useFeather()
  const music = useSax()
  const crystal = useMini()
  const forestTime = useForestTime()
  const shuffleBananas = useShuffleColoredBananas()
  let bananas = useTinyMedalCommonLogic()

  if (!inStage.in) {
    return 0
  }
  if (!kong) {
    return 0
  }
  if (shuffleBananas) {
    return 100
  }

  if (day.in && crystal) {
    bananas += 10 // two bunches available from day mill
    if (punch) {
      bananas += 5 // box in chunky mill: night not needed due to tunnel in dk mill
    }
  }

  if (owl.in && crystal && music) {
    bananas += 5 // top of anthill
  }
  if (night.in && gun) {
    bananas += 10 // DK barn balloon
  }
  if (crystal && (forestTime == 2 || (night.in && punch))) {
    bananas += 5 // spider boss
  }

  return bananas
}

export const useTinyMedalOutLogic = (): number => {
  const inStage = usePlayForest()
  const day = useForestDay()
  const night = useForestNight()
  const owl = useForestOwl()
  const punch = usePunch()
  const kong = useTiny()
  const gun = useFeather()
  const crystal = useMini()
  const shuffleBananas = useShuffleColoredBananas()
  let bananas = useTinyMedalCommonLogic()

  if (!inStage.out) {
    return 0
  }
  if (!kong) {
    return 0
  }
  if (shuffleBananas) {
    return 100
  }
  if (day.out && crystal) {
    bananas += 10 // two bunches available from day mill
    if (punch) {
      bananas += 5 // box in chunky mill: night not needed due to tunnel in dk mill
    }
  }

  if (owl.out) {
    bananas += 5 // top of anthill
  }
  if (night.out && gun) {
    bananas += 10 // DK barn balloon
  }
  if (crystal && night.out && punch) {
    bananas += 5 // spider boss
  }

  return bananas
}
