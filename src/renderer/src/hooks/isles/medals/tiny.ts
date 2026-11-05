import { useFeather, useMini, useAnyKong } from '@renderer/hooks/kongs'
import { useShuffleColoredBananas } from '@renderer/hooks/settings'

export const useTinyMedalInLogic = (): number => {
  const kong = useAnyKong()
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
