import { useCoconut, useDk, useVine } from '@renderer/hooks/kongs'
import { useShuffleColoredBananas } from '@renderer/hooks/settings'

export const useDkMedalInLogic = (): number => {
  const kong = useDk()
  const vine = useVine()
  const gun = useCoconut()
  const shuffleBananas = useShuffleColoredBananas()
  let bananas = 0

  if ((kong && gun && vine) || (kong && shuffleBananas)) {
    bananas += 100
  }
  return bananas
}

export const useDkMedalOutLogic = (): number => {
  const kong = useDk()
  const vine = useVine()
  const bananas = useDkMedalInLogic()
  const shuffleBananas = useShuffleColoredBananas()

  if (!kong) {
    return 0
  }
  if (shuffleBananas) {
    return 100
  }
  return vine ? bananas : bananas + 5
}
