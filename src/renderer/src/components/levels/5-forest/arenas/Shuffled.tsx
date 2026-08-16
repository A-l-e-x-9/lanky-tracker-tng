import ArenaPool from '@renderer/components/pools/Arenas'
import { useGeneralThing, useArena, useForestBean, useForestDay, useForestNight, useForestMushroomRoof, useForestOwl, useForestMushroomTop, useTinyAntGb, useSlamForest, useForestBarn, useForestSpiderBoss, useLankyMushGb } from '@renderer/hooks/forest'
import { useShuffledArenas } from '@renderer/hooks/settings'
import { useTwirl, useClimbing, useRocket, useChunky, useBalloon, useDiddy, usePunch, useDk } from '@renderer/hooks/kongs'
import ForestCheck from '../check'
import CenterArenas from './Center'

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
      <CenterArenas />
      <ForestCheck
        id={15000}
        name="Shuffled Battle Arena: Vanilla Arena (at the top of the Giant Mushroom)"
        region="Forest Area 3"
        canGetLogic={canReachVanillaArena.in}
        canGetBreak={canReachVanillaArena.out}
      />
      <ForestCheck
        id={15000}
        name="Shuffled Battle Arena: In front of where The Bean™ is planted"
        region="Forest Area 2"
        canGetLogic={canPlantBean.in}
        canGetBreak={canPlantBean.out}
      />
      <ForestCheck
        id={15000}
        name="Shuffled Battle Arena: Area 2's Troff 'n' Scoff"
        region="Forest Area 2"
        canGetLogic={canPlantBean.in && isNight.in}
        canGetBreak={canPlantBean.out && isNight.out}
      />
      <ForestCheck
        id={15000}
        name="Shuffled Battle Arena: On the field where the Apple and Tomatoes are"
        region="Forest Area 2"
        canGetLogic={canPlantBean.in}
        canGetBreak={canPlantBean.out}
      />
      <ForestCheck
        id={15000}
        name="Shuffled Battle Arena: Near Funky's"
        region="Forest Area 2"
        canGetLogic={canPlantBean.in}
        canGetBreak={canPlantBean.out}
      />
      <ForestCheck
        id={15000}
        name="Shuffled Battle Arena: Near entrance to Area 2"
        region="Forest Area 2"
        canGetLogic={canPlantBean.in}
        canGetBreak={canPlantBean.out}
      />
      <ForestCheck
        id={15000}
        name="Shuffled Battle Arena: Near the Beanstalk's field"
        region="Forest Area 2"
        canGetLogic={canPlantBean.in}
        canGetBreak={canPlantBean.out}
      />
      <ForestCheck
        id={15000}
        name="Shuffled Battle Arena: Area 2's Tiny Kong barrel"
        region="Forest Area 2"
        canGetLogic={canPlantBean.in}
        canGetBreak={canPlantBean.out}
      />
      <ForestCheck
        id={15000}
        name="Shuffled Battle Arena: At the ladder to DK's Baboon Blast pad"
        region="Forest Area 3"
        canGetLogic={isBreathing.in && (hasClimbing || hasJetbarrel)}
        canGetBreak={isBreathing.out && (hasChunky || isHinaKagiyama)}
      />
      <ForestCheck
        id={15000}
        name="Shuffled Battle Arena: Near DK's Baboon Blast pad"
        region="Forest Area 3"
        canGetLogic={isBreathing.in && hasClimbing}
        canGetBreak={isBreathing.out && hasJetbarrel}
      />
      <ForestCheck
        id={15000}
        name="Shuffled Battle Arena: Above ladder past DK's Baboon Blast pad"
        region="Forest Area 3"
        canGetLogic={isBreathing.in && hasClimbing}
        canGetBreak={isBreathing.out && hasJetbarrel}
      />
      <ForestCheck
        id={15000}
        name="Shuffled Battle Arena: Top of the Giant Mushroom"
        region="Forest Area 3"
        canGetLogic={canReachTopOfShroom.in}
        canGetBreak={canReachTopOfShroom.out}
      />
      <ForestCheck
        id={15000}
        name="Shuffled Battle Arena: Behind the Rabbit"
        region="Forest Area 4"
        canGetLogic={canReachArea4.in}
        canGetBreak={canReachArea4.out}
      />
      <ForestCheck
        id={15000}
        name="Shuffled Battle Arena: Next to the Rabbit's house"
        region="Forest Area 4"
        canGetLogic={canReachArea4.in}
        canGetBreak={canReachArea4.out}
      />
      <ForestCheck
        id={15000}
        name="Shuffled Battle Arena: Under the big tree"
        region="Forest Area 4"
        canGetLogic={canReachArea4.in}
        canGetBreak={canReachArea4.out}
      />
      <ForestCheck
        id={15000}
        name="Shuffled Battle Arena: Also under the big tree"
        region="Forest Area 4"
        canGetLogic={canReachArea4.in}
        canGetBreak={canReachArea4.out}
      />
      <ForestCheck
        id={15000}
        name="Shuffled Battle Arena: Near the big tree"
        region="Forest Area 4"
        canGetLogic={canReachArea4.in}
        canGetBreak={canReachArea4.out}
      />
      <ForestCheck
        id={15000}
        name="Shuffled Battle Arena: Near the big tree's Jetbarrel"
        region="Forest Area 4"
        canGetLogic={canReachArea4.in}
        canGetBreak={canReachArea4.out}
      />
      <ForestCheck
        id={15000}
        name="Shuffled Battle Arena: Grass near the big tree's Jetbarrel"
        region="Forest Area 4"
        canGetLogic={canReachArea4.in}
        canGetBreak={canReachArea4.out}
      />
      <ForestCheck
        id={15000}
        name="Shuffled Battle Arena: Top of the big tree"
        region="Forest Area 4"
        canGetLogic={canReachArea4.in && hasJetbarrel}
        canGetBreak={canReachArea4.out && hasJetbarrel}
      />
      <ForestCheck
        id={15000}
        name="Shuffled Battle Arena: Vanilla Warp 2, at Funky's"
        region="Forest Area 2"
        canGetLogic={canPlantBean.in}
        canGetBreak={canPlantBean.out}
      />
      <ForestCheck
        id={15000}
        name="Shuffled Battle Arena: Vanilla Warp 4, at the big tree"
        region="Forest Area 4"
        canGetLogic={canReachArea4.in}
        canGetBreak={canReachArea4.out}
      />
      <ForestCheck
        id={15000}
        name="Shuffled Battle Arena: Vanilla Warp 5, top of the Giant Mushroom"
        region="Forest Area 3"
        canGetLogic={canGetNearTopOfShroom.in}
        canGetBreak={canGetNearTopOfShroom.out}
      />
      <ForestCheck
        id={15000}
        name="Shuffled Battle Arena: Inside the tree stump"
        region="Forest Area 4"
        canGetLogic={canReachStump.in}
        canGetBreak={canReachStump.out}
      />
      <ForestCheck
        id={15000}
        name="Shuffled Battle Arena: Back of the winch room"
        region="Forest Area 1"
        canGetLogic={isBreathing.in && hasClimbing && hasDiddy && hasSlam && isNight.in}
        canGetBreak={isBreathing.out && hasClimbing && hasDiddy && hasSlam && isNight.out}
      />
      <ForestCheck
        id={15000}
        name="Shuffled Battle Arena: Inside Thornvine, entrance"
        region="Forest Area 1"
        canGetLogic={canGetInThornvine.in}
        canGetBreak={canGetInThornvine.out}
      />
      <ForestCheck
        id={15000}
        name="Shuffled Battle Arena: Inside Thornvine, near ladder"
        region="Forest Area 1"
        canGetLogic={canGetInThornvine.in}
        canGetBreak={canGetInThornvine.out}
      />
      <ForestCheck
        id={15000}
        name="Shuffled Battle Arena: Inside Thornvine, next to ladder"
        region="Forest Area 1"
        canGetLogic={canGetInThornvine.in}
        canGetBreak={canGetInThornvine.out}
      />
      <ForestCheck
        id={15000}
        name="Shuffled Battle Arena: Inside Thornvine, back left"
        region="Forest Area 1"
        canGetLogic={canGetInThornvine.in}
        canGetBreak={canGetInThornvine.out}
      />
      <ForestCheck
        id={15000}
        name="Shuffled Battle Arena: Inside back mill, where Chunky's coins are in vanilla"
        region="Forest Area 1"
        canGetLogic={isBreathing.in && isDay.in && hasPrimatePunch}
        canGetBreak={isBreathing.out && canReachSpiderBoss.out}
      />
      <ForestCheck
        id={15000}
        name="Shuffled Battle Arena: Near the vines to the Night Door"
        region="Inside the Giant Mushroom"
        canGetLogic={canGetNearTopOfShroom.in}
        canGetBreak={canGetNearTopOfShroom.out}
      />
      <ForestCheck
        id={15000}
        name="Shuffled Battle Arena: At the second Check of Legends Barrel Cannon"
        region="Inside the Giant Mushroom"
        canGetLogic={canGetNearTopOfShroom.in && isHinaKagiyama}
        canGetBreak={canGetNearTopOfShroom.out && hasDK}
      />
      <ForestCheck
        id={15000}
        name="Shuffled Battle Arena: At the third Check of Legends Barrel Cannon"
        region="Inside the Giant Mushroom"
        canGetLogic={canGetNearTopOfShroom.in}
        canGetBreak={canGetNearTopOfShroom.out}
      />
      <ForestCheck
        id={15000}
        name="Shuffled Battle Arena: At top viney platform"
        region="Inside the Giant Mushroom"
        canGetLogic={canGetNearTopOfShroom.in}
        canGetBreak={canGetNearTopOfShroom.out}
      />
      <ForestCheck
        id={15000}
        name="Shuffled Battle Arena: Back of Lanky's Zinger room"
        region="Inside the Giant Mushroom"
        canGetLogic={canReachLankysShroomTopGBs.in}
        canGetBreak={canReachLankysShroomTopGBs.out}
      />
      <ForestCheck
        id={15000}
        name="Shuffled Battle Arena: Back of Lanky's mushroom slam room"
        region="Inside the Giant Mushroom"
        canGetLogic={canReachLankysShroomTopGBs.in}
        canGetBreak={canReachLankysShroomTopGBs.out}
      />
      <ForestCheck
        id={15000}
        name="Shuffled Battle Arena: At Chunky's face puzzle"
        region="Inside the Giant Mushroom"
        canGetLogic={canGetNearTopOfShroom.in && hasChunky && hasSlam}
        canGetBreak={canGetNearTopOfShroom.out && hasChunky && hasSlam}
      />
      <ForestCheck
        id={15000}
        name="Shuffled Battle Arena: Near thatching in the mill back"
        region="Forest Area 1"
        canGetLogic={isBreathing.in && isDay.in && hasPrimatePunch}
        canGetBreak={canReachSpiderBoss.out}
      />
      <ForestCheck
        id={15000}
        name="Shuffled Battle Arena: Back of the Spider's room"
        region="Forest Area 1"
        canGetLogic={canReachSpiderBoss.in}
        canGetBreak={canReachSpiderBoss.out}
      />
    </ArenaPool>
  )
}

const ShuffledArenas: React.FC = () => (useShuffledArenas() ? <Shuffled /> : null)
export default ShuffledArenas
