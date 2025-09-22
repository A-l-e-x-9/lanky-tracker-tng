import { useBarrel, useChunky, useHunky, usePineapple } from '@renderer/hooks/kongs'
import { useShuffleColoredBananas } from '@renderer/hooks/settings'

export const useChunkyMedalInLogic = (): number => {
  const kong = useChunky()
  const barrel = useBarrel()
  const crystal = useHunky()
  const gun = usePineapple()
  const shuffleBananas = useShuffleColoredBananas()
  let bananas = 0

  if ((kong && barrel && gun && crystal) || (kong && shuffleBananas)) {
    bananas += 100
  }

  return bananas
}

export const useChunkyMedalOutLogic = (): number => useChunkyMedalInLogic()
