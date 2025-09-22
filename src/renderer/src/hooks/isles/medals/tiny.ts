import { useFeather, useMini, useTiny } from '@renderer/src/hooks/kongs'
import { useShuffleColoredBananas } from '@renderer/src/hooks/settings'

export const useTinyMedalInLogic = (): number => {
  const kong = useTiny()
  const gun = useFeather()
  const mini = useMini()
  const shuffleBananas = useShuffleColoredBananas()
  let bananas = 0

  if ((kong && gun && mini) || (kong && shuffleBananas)) {
    bananas += 100
  }

  return bananas
}

export const useTinyMedalOutLogic = (): number => useTinyMedalInLogic()
