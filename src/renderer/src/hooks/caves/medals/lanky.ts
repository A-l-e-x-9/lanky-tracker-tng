import { useBalloon, useGrape, useHighGrab, useLanky, useTrombone } from '@renderer/hooks/kongs'
import { useShuffleColoredBananas, useAngryCaves } from '@renderer/hooks/settings'
import { logicBreak } from '@renderer/hooks/world'
import { useCavesIgloo, useCavesPillar, usePlayCaves, useSlamCaves } from '..'

const useLankyMedalCommonLogic = (): number => {
  const canSlam = useSlamCaves()
  const igloo = useCavesIgloo()
  const gun = useGrape()
  const pad = useBalloon()

  let bananas = 15
  if (pad) {
    bananas += 15
  }
  if (gun) {
    bananas += 10
    if (canSlam) {
      bananas += 10
    }
  }
  if (igloo) {
    bananas += 1
    if (gun) {
      bananas += 10
    }
  }
  return bananas
}

export const useLankyMedalInLogic = (): number => {
  const inStage = usePlayCaves()
  const angery = useAngryCaves()
  const canSlam = useSlamCaves()
  const igloo = useCavesIgloo()
  const pillar = useCavesPillar()
  const kong = useLanky()
  const music = useTrombone()
  const pad = useBalloon()
  const shuffleBananas = useShuffleColoredBananas()
  let bananas = useLankyMedalCommonLogic()

  if (!kong) {
    return 0
  }
  if (shuffleBananas) {
    return 100
  }
  if (inStage.in && !angery) {
  if (canSlam && pad) {
    bananas += 15
  }
  if (pillar.in) {
    bananas += 20
  }
  if (igloo && music && pad) {
    bananas += 4
  }

  return bananas
} else {
  return 0
}
}

export const useLankyMedalOutLogic = (): number => {
  const inStage = usePlayCaves()
  const angery = useAngryCaves()
  const canSlam = useSlamCaves()
  const igloo = useCavesIgloo()
  const pillar = useCavesPillar()
  const highGrab = useHighGrab()
  const kong = useLanky()
  const music = useTrombone()
  const shuffleBananas = useShuffleColoredBananas()
  let bananas = useLankyMedalCommonLogic()

  if (!kong) {
    return 0
  }
  if (shuffleBananas) {
    return 100
  }
  if (inStage.out || angery) {
  if (canSlam) {
    bananas += 15
  }
  if (logicBreak(pillar)) {
    bananas += 20
  }
  if (igloo && music && highGrab) {
    bananas += 4
  }

  return bananas
} else {
  return 0
}
}
