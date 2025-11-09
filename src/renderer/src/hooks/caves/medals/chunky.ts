import {
  useBoulderTech,
  useChunky,
  useGone,
  useHunky,
  useMini,
  usePineapple,
  usePunch,
  useSlam,
  useTriangle
} from '@renderer/hooks/kongs'
import { useBananaportAll, useShuffleColoredBananas, useAngryCaves } from '@renderer/hooks/settings'
import { useCavesIgloo, usePlayCaves, useIceWalls } from '..'

export const useChunkyMedalInLogic = (): number => {
  const inStage = usePlayCaves()
  const angery = useAngryCaves()
  const igloo = useCavesIgloo()
  const boulderTech = useBoulderTech()
  const slam = useSlam()
  const warpAll = useBananaportAll()
  const kong = useChunky()
  const gun = usePineapple()
  const music = useTriangle()
  const move = usePunch()
  const crystal = useHunky()
  const pad = useGone()
  const mini = useMini()
  const shuffleBananas = useShuffleColoredBananas()
  const prePunched = useIceWalls()

  if (!kong) {
    return 0
  }
  if (shuffleBananas) {
    return 100
  }
  if (inStage.in && !angery) {
  let bananas = 18
  if (boulderTech) {
    bananas += 5
  }
  if (move || prePunched) {
    bananas += 11
    if (gun) {
      bananas += 10
    }
    if (boulderTech) {
      bananas += 6
      if (crystal) {
        bananas += 10
      }
    }
  }
  if (gun && (warpAll || mini)) {
    bananas += 10
  }
  if (gun && igloo.in && music) {
    bananas += 10
  }
  if (music && slam && pad) {
    bananas += 20
  }
  return bananas
  }
}

export const useChunkyMedalOutLogic = (): number => {
  const inStage = usePlayCaves()
  const angery = useAngryCaves()
  const igloo = useCavesIgloo()
  const boulderTech = useBoulderTech()
  const slam = useSlam()
  const warpAll = useBananaportAll()
  const kong = useChunky()
  const gun = usePineapple()
  const music = useTriangle()
  const move = usePunch()
  const crystal = useHunky()
  const pad = useGone()
  const mini = useMini()
  const shuffleBananas = useShuffleColoredBananas()
  const prePunched = useIceWalls()

  if (!kong) {
    return 0
  }
  if (shuffleBananas) {
    return 100
  }
  if (inStage.out || angery) {
  let bananas = 18
  if (boulderTech) {
    bananas += 5
  }
  if (move || prePunched) {
    bananas += 11
    if (gun) {
      bananas += 10
    }
    if (boulderTech) {
      bananas += 6
      if (crystal) {
        bananas += 10
      }
    }
  }
  if (gun && (warpAll || mini)) {
    bananas += 10
  }
  if (gun && igloo.out && music) {
    bananas += 10
  }
  if (music && slam && pad) {
    bananas += 20
  }
  return bananas
  }
}
