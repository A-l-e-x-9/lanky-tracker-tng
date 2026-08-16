import ArenaPool from '@renderer/components/pools/Arenas'
import { useGeneralThing, useArena, useForestBean, useForestDay, useForestNight, useForestMushroomRoof, useForestOwl, useForestMushroomTop, useTinyAntGb, useSlamForest, useForestBarn, useForestSpiderBoss, useLankyMushGb } from '@renderer/hooks/forest'
import { useShuffledArenas } from '@renderer/hooks/settings'
import { useTwirl, useClimbing, useRocket, useChunky, useBalloon, useDiddy, usePunch, useDk } from '@renderer/hooks/kongs'
import ForestCheck from '../check'

const Shuffled: React.FC = () => {
const isBreathing = useGeneralThing()
const canReachVanillaArena = useArena()
const canPlantBean = useForestBean()
const isDay = useForestDay()
const isNight = useForestNight()
const isHinaKagiyama = useTwirl()
const hasClimbing = useClimbing()
const hasJetbarrel = useRocket()
const hasChunky = useChunky()
const canReachTopOfShroom = useForestMushroomRoof()
const canReachArea4 = useForestOwl()
const hasBalloon = useBalloon()
const canGetNearTopOfShroom = useForestMushroomTop()
const canReachStump = useTinyAntGb()
const hasDiddy = useDiddy()
const hasSlam = useSlamForest()
const canGetInThornvine = useForestBarn()
const canReachSpiderBoss = useForestSpiderBoss()
const hasPrimatePunch = usePunch()
const hasDK = useDk()
const canReachLankysShroomTopGBs = useLankyMushGb()
  return (
    <ArenaPool>
      <ForestCheck
        id={15000}
        name="Shuffled Battle Arena: Near the well entrance"
        region="Forest Central Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={15000}
        name="Shuffled Battle Arena: Behind the clock"
        region="Forest Central Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={15000}
        name="Shuffled Battle Arena: In front of the clock"
        region="Forest Central Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={15000}
        name="Shuffled Battle Arena: Near the blue tunnel to Area 1"
        region="Forest Central Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={15000}
        name="Shuffled Battle Arena: Vanilla Warp 1, central area"
        region="Forest Central Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={15000}
        name="Shuffled Battle Arena: Vanilla Warp 2, central area"
        region="Forest Central Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={15000}
        name="Shuffled Battle Arena: Vanilla Warp 3, central area"
        region="Forest Central Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={15000}
        name="Shuffled Battle Arena: Vanilla Warp 4, central area"
        region="Forest Central Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
    </ArenaPool>
  )
}

const CenterArenas: React.FC = () => (useShuffledArenas() ? <Shuffled /> : null)
export default CenterArenas
