import { useCoconut, useDk } from '@renderer/hooks/kongs'
import { useShuffleColoredBananas } from '@renderer/hooks/settings'

export const useDkMedalInLogic = (): number => {
  const kong = useDk()
  const gun = useCoconut()
  const shuffleBananas = useShuffleColoredBananas()
  let bananas = 0

  if ((kong && gun) || (kong && shuffleBananas)) {
    bananas += 100
  }
  return bananas
}

export const useDkMedalOutLogic = (): number => useDkMedalInLogic()
