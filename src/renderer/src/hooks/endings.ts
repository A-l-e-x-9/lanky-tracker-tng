import useDonkStore from '@renderer/store'
import {
  useBarrel,
  useBlast,
  useBongos,
  useDk,
  useFeather,
  useGone,
  useGuitar,
  useHunky,
  useMini,
  useOrange,
  usePeanut,
  usePunch,
  useRocket,
  useSax,
  useSlam,
  useSuperSlam,
  useSuperDuperSlam,
  useTriangle,
  useTrombone,
  useTwirl,
  useTiny,
  useAnyKong
} from './kongs'
import { useShallow } from 'zustand/react/shallow'
import { LogicBool } from './world'
import { useBalancedRoolPhase, useChunkySlamLevel } from './settings'

export const useSingleHelmCheck = (val: number): boolean => {
  const dk = useBongos()
  const diddy = useGuitar()
  const hasJetbarrel = useRocket()
  const lanky = useTrombone()
  const tiny = useSax()
  const chunky = useTriangle()
  const check = useDonkStore(useShallow((state) => state['helm' + val]))

  switch (check) {
    case 1:
      return dk
    case 2:
      return diddy && hasJetbarrel
    case 3:
      return lanky
    case 4:
      return tiny
    case 5:
      return chunky
    default:
      return true
  }
}

export const useSingleHelmNum = (val: number): number => {
  const check = useDonkStore(useShallow((state) => state['helm' + val]))
  switch (check) {
    case 1:
      return 1
    case 2:
      return 2
    case 3:
      return 3
    case 4:
      return 4
    case 5:
      return 5
    default:
      return 0
  }
}

export const useSingleRoolCheck = (val: number): LogicBool => {
  const balancedRool = useBalancedRoolPhase()
  const chunkySlam = useChunkySlamLevel()
  const dk = useDk()
  const blast = useBlast()
  const peanut = usePeanut()
  const diddy = useRocket() && peanut
  const barrel = useBarrel()
  const lanky = useTrombone() && barrel
  const mini = useMini()
  const orange = useOrange()
  const feather = useFeather()
  const tiny = feather && mini
  const tinyBreak = orange && mini
  const slam = useSlam()
  const superSlam = useSuperSlam()
  const duperSlam = useSuperDuperSlam()
  const gone = useGone()
  const punch = usePunch()
  const chunky = useHunky() && (chunkySlam <= 1 ? slam 
    : chunkySlam == 2 ? superSlam : duperSlam) && gone && punch
  const hasTwirl = useTwirl()
  const madJackBreak = useTiny()
  const isBreathing = useAnyKong()
  const hunky = useHunky()
  const check = useDonkStore(useShallow((state) => state['rool' + val]))

  switch (check) {
    case 1:
      return {
        in: dk && (!balancedRool || blast),
        out: dk && (!balancedRool || blast)
      }
    case 2:
      return {
        in: diddy,
        out: diddy
      }
    case 3:
      return {
        in: lanky,
        out: lanky
      }
    case 4:
      return {
        in: tiny,
        out: tinyBreak
      }
    case 5:
      return {
        in: chunky,
        out: chunky
      }
    case 6:
      return {
        in: barrel,
        out: barrel
      }
    case 7:
      return {
        in: barrel,
        out: barrel
      }
    case 8:
      return {
        in: hasTwirl,
        out: (dk || madJackBreak)
      }
    case 9:
      return {
        in: isBreathing,
        out: isBreathing
      }
    case 10:
      return {
        in: barrel && hunky,
        out: barrel && hunky
      }
    case 11:
      return {
        in: barrel,
        out: barrel
      }
    case 12:
      return {
        in: isBreathing,
        out: isBreathing
      }
    default:
      return { in: true }
  }
}

export const useSingleRoolNum = (val: number): number => {
  const check = useDonkStore(useShallow((state) => state['rool' + val]))
  switch (check) {
    case 1:
      return 1
    case 2:
      return 2
    case 3:
      return 3
    case 4:
      return 4
    case 5:
      return 5
    case 6:
      return 6
    case 7:
      return 7
    case 8:
      return 8
    case 9:
      return 9
    case 10:
      return 10
    case 11:
      return 11
    case 12:
      return 12
    default:
      return 0
  }
}
