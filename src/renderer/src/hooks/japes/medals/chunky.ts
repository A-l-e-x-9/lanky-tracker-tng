import { useBarrel, useChunky, useClimbing, useHunky, usePineapple } from '@renderer/hooks/kongs'
import { useShuffleColoredBananas, useBananaportAll } from '@renderer/hooks/settings'
import {
  useJapesHive,
  useJapesKongGates,
  useJapesRambi,
  useJapesUnderground,
  usePlayJapes
} from '..'

const useChunkyMedalCommonLogic = (): number => {
  const inStage = usePlayJapes()
  const haveRambiCage = useJapesRambi()
  const underground = useJapesUnderground()
  const kong = useChunky()
  const barrel = useBarrel()
  const gun = usePineapple()
  const kongGates = useJapesKongGates()
  const climbing = useClimbing()
  const bananaport = useBananaportAll()
  const shuffleBananas = useShuffleColoredBananas()

  if (!inStage) {
    return 0
  }
  if (!kong) {
    return 0
  }
  if (shuffleBananas) {
    return 100
  }

  let bananas = 5 // by underground (5), Funky's roof (10)
  if (climbing || bananaport) {
    bananas += 10 //Funky's roof (10)
  }
  if (underground) {
    bananas += 15 // visible in underground
  }

  if (kongGates) {
    bananas += 10 //10 regular bananas on path to hive.
    if (climbing) {
      bananas += 5 //one bunch on top of Cranky's
    }
    if (haveRambiCage) {
      if (gun) {
        bananas += 30 // balloons behind Rambi
      }
      if (barrel) {
        bananas += 5 // boulder behind Rambi
      }
    }
  }

  return bananas
}

export const useChunkyMedalInLogic = (): number => {
  const inStage = usePlayJapes()
  const kong = useChunky()
  const hiveGate = useJapesHive()
  const crystal = useHunky()
  const shuffleBananas = useShuffleColoredBananas()
  const climbing = useClimbing()
  let bananas = useChunkyMedalCommonLogic()

  if (!inStage) {
    return 0
  }
  if (!kong) {
    return 0
  }
  if (shuffleBananas) {
    return 100
  }

  if (hiveGate && crystal && climbing) {
    bananas += 20 // big trees
  }

  return bananas
}

export const useChunkyMedalOutLogic = (): number => {
  const inStage = usePlayJapes()
  const kong = useChunky()
  const hiveGate = useJapesHive()
  const crystal = useHunky()
  const shuffleBananas = useShuffleColoredBananas()
  let bananas = useChunkyMedalCommonLogic()

  if (!inStage) {
    return 0
  }
  if (!kong) {
    return 0
  }
  if (shuffleBananas) {
    return 100
  }

  if (hiveGate && crystal) {
    bananas += 20 // big trees
  }

  return bananas
}
