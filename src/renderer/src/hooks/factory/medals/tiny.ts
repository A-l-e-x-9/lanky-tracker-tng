import { useDk, useFeather, useMini, useTiny, useTwirl, useClimbing } from '@renderer/hooks/kongs'
import { useShuffleColoredBananas } from '@renderer/hooks/settings'
import {
  useFactoryProductionTop,
  useFactoryTesting,
  usePlayFactory, useFoyerFromStorage
} from '..'

const useTinyMedalCommonLogic = (): number => {
  const testing = useFactoryTesting()
  const prodTop = useFactoryProductionTop()
  const gun = useFeather()
  const crystal = useMini()
  const hasClimbing = useClimbing()
  const canReachHatch = useFoyerFromStorage()

  let banana = 0
  
  if (canReachHatch) {
    banana += 10 //the two bunches in the hatch to Prod Room
  }
  
  if (hasClimbing) {
    banana += 5 //bunch at Tiny's vent in the Arcade
  }
  
  if (testing.in || testing.out) {
    banana += 25 //10 on path to Testing itself, 15? on path to Car Race
    if (crystal) {
      banana += 5 //bunch at Dartboard
    }
    if (gun) {
      banana += 20 //balloons at Funky's and Snide's
    }
  }

  if (gun) {
    banana += 10 //balloon in Prod Room
  }

  if (prodTop.in || prodTop.out) {
    banana += 20 //bunches up ramps to Tiny's Bonus Barrel
  }

  return banana
}

export const useTinyMedalInLogic = (): number => {
  const inStage = usePlayFactory()
  const prodTop = useFactoryProductionTop()
  const kong = useTiny()
  const move = useTwirl()
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

  if (prodTop.in && move) {
    bananas += 5 //bunch past Tiny's Bonus Barrel
  }

  return bananas
}

export const useTinyMedalOutLogic = (): number => {
  const inStage = usePlayFactory()
  const prodTop = useFactoryProductionTop()
  const kong = useTiny()
  const dk = useDk()
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

  if (prodTop.out && dk) {
    bananas += 5 //bunch past Tiny's Bonus Barrel
  }

  return bananas
}
