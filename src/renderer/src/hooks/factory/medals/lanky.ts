import { useGrape, useLanky, useStand, useTrombone } from '@renderer/hooks/kongs'
import { useShuffleColoredBananas } from '@renderer/hooks/settings'
import {
  useFactoryProductionEnabled,
  useFactoryProductionTop,
  useFactoryTesting,
  usePlayFactory,
  useFoyerFromStorage
} from '..'

const useLankyMedalCommonLogic = (): number => {
  const testing = useFactoryTesting()
  const production = useFactoryProductionEnabled()
  const prodTop = useFactoryProductionTop()
  const gun = useGrape()
  const music = useTrombone()

  let bananas = 5
  if (testing.in || testing.out) {
    bananas += 15
    if (gun && music) {
      bananas += 10
    }
  }
  if (prodTop.in || prodTop.out) {
    bananas += 15
  }
  if (production.in || production.out) {
    bananas += 20
  }

  return bananas
}

export const useLankyMedalInLogic = (): number => {
  const inStage = usePlayFactory()
  const production = useFactoryProductionEnabled()
  const kong = useLanky()
  const move = useStand()
  const shuffleBananas = useShuffleColoredBananas()
  const canReachFoyerFromStorage = useFoyerFromStorage()
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

  if (move) {
    bananas += 5
    if (production.in) {
      bananas += 25
    }
  }
  
  if (canReachFoyerFromStorage.in) {
    bananas += 5
  }

  return bananas
}

export const useLankyMedalOutLogic = (): number => {
  const inStage = usePlayFactory()
  const kong = useLanky()
  const shuffleBananas = useShuffleColoredBananas()
  const bananas = useLankyMedalCommonLogic()
  const canReachFoyerFromStorage = useFoyerFromStorage()
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

  if (canReachFoyerFromStorage.out) {
    bananas += 5
  }

  return bananas + 30
}
