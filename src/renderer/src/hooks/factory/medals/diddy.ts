import { useDiddy, useGuitar, useHighGrab, usePeanut, useSpring, useClimbing } from '@renderer/hooks/kongs'
import { useShuffleColoredBananas } from '@renderer/hooks/settings'
import { useFactoryProductionEnabled, useFactoryTesting, usePlayFactory } from '..'

const useDiddyMedalCommonLogic = (): number => {
  const testing = useFactoryTesting()
  const production = useFactoryProductionEnabled()
  const gun = usePeanut()
  const music = useGuitar()
  const climbing = useClimbing()

  let bananas = 12 // 12 on prod floor
  if (climbing) {
    bananas += 10 //10 in arcade area
  }
  if (production.in || production.out) {
    bananas += 15
  }
  if (testing.in || testing.out) {
    bananas += 13 // 8 by Funky, 5 via backflip at bottom of block tower
    if (music && gun) {
      bananas += 30 // enemy code room balloons
    }
  }

  return bananas
}

export const useDiddyMedalInLogic = (): number => {
  const inStage = usePlayFactory()
  const testing = useFactoryTesting()
  const kong = useDiddy()
  const pad = useSpring()
  const shuffleBananas = useShuffleColoredBananas()
  let bananas = useDiddyMedalCommonLogic()

  if (!inStage.in) {
    return 0
  }
  if (!kong) {
    return 0
  }
  if (shuffleBananas) {
    return 100
  }

  if (testing.in && pad) {
    bananas += 20
  }

  return bananas
}

export const useDiddyMedalOutLogic = (): number => {
  const inStage = usePlayFactory()
  const testing = useFactoryTesting()
  const kong = useDiddy()
  const highGrab = useHighGrab()
  const shuffleBananas = useShuffleColoredBananas()
  let bananas = useDiddyMedalCommonLogic()

  if (!inStage.out) {
    return 0
  }
  if (!kong) {
    return 0
  }
  if (shuffleBananas) {
    return 100
  }

  if (testing.out && highGrab) {
    bananas += 20
  }

  return bananas
}
