import { useDiddy, useDive, useHighGrab, usePeanut } from '@renderer/hooks/kongs'
import { useShuffleColoredBananas } from '@renderer/hooks/settings'

export const useDiddyMedalInLogic = (): number => {
  const kong = useDiddy()
  const gun = usePeanut()
  const shuffleBananas = useShuffleColoredBananas()
  let bananas = 0

  if ((kong && gun) || (kong && shuffleBananas)) {
    bananas += 100
  }
  
  return bananas
}

export const useDiddyMedalOutLogic = (): number => {
  const kong = useDiddy()
  const gun = usePeanut()
  const highGrab = useHighGrab()
  const shuffleBananas = useShuffleColoredBananas()
  let bananas = 0

  if (!kong) {
    return 0
  }
  if (shuffleBananas) {
    return 100
  }

  if (gun && highGrab) {
    bananas += 5 // sequence break
  }

  return bananas
}
