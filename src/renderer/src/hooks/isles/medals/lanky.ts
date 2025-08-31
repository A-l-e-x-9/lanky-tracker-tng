import { useDive, useGrape, useLanky, useStand } from '@renderer/hooks/kongs'
import { useShuffleColoredBananas } from '@renderer/hooks/settings'
import { logicBreak } from '@renderer/hooks/world'

export const useLankyMedalInLogic = (): number => {
  const kong = useLanky()
  const gun = useGrape()
  const move = useStand()
  const shuffleBananas = useShuffleColoredBananas()
  let bananas = 0

  if ((kong && gun && move) || (kong && shuffleBananas)) {
    bananas += 100
  }

  return bananas
}

export const useLankyMedalOutLogic = (): number => {
  const kong = useLanky()
  const gun = useGrape()
  const shuffleBananas = useShuffleColoredBananas()
  let bananas = 0

  if (!kong) {
    return 0
  }
  if (shuffleBananas) {
    return 100
  }

  return bananas
}
