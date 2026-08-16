import ArenaPool from '@renderer/components/pools/Arenas'
import { useGeneralThing, useForestMushroomRoof, useForestOwl, useForestMushroomTop, useTinyAntGb, useSlamForest, useForestBarn, useForestSpiderBoss, useLankyMushGb } from '@renderer/hooks/forest'
import { useShuffledArenas } from '@renderer/hooks/settings'
import { useRocket, useChunky, useBalloon, useDiddy, usePunch, useDk } from '@renderer/hooks/kongs'
import ForestCheck from '../check'

const Shuffled: React.FC = () => {
const isBreathing = useGeneralThing()
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
        name="Shuffled Battle Arena: At switch to Tiny's Bonus Barrel"
        region="Inside the Giant Mushroom"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={15000}
        name="Shuffled Battle Arena: At the gun switches for the Check of Legends"
        region="Inside the Giant Mushroom"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={15000}
        name="Shuffled Battle Arena: At the bottom-most Check of Legends Barrel Cannon"
        region="Inside the Giant Mushroom"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
    </ArenaPool>
  )
}

const MushInteriorArenas: React.FC = () => (useShuffledArenas() ? <Shuffled /> : null)
export default MushInteriorArenas
