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
        name="Shuffled Battle Arena: Vanilla Arena (at the top of the Giant Mushroom)"
        region="Forest Area 3"
        canGetLogic={canReachVanillaArena.in}
        canGetBreak={canReachVanillaArena.out}
      />
      <ForestCheck
        id={15001}
        name="Shuffled Battle Arena: In front of where The Bean™ is planted"
        region="Forest Area 2"
        canGetLogic={canPlantBean.in}
        canGetBreak={canPlantBean.out}
      />
      <ForestCheck
        id={15002}
        name="Shuffled Battle Arena: Where the infamous Dirt Patch is"
        region="Forest Area 1"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={15003}
        name="Shuffled Battle Arena: Near the well entrance"
        region="Forest Central Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={15004}
        name="Shuffled Battle Arena: Behind the clock"
        region="Forest Central Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={15005}
        name="Shuffled Battle Arena: In front of the clock"
        region="Forest Central Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={15006}
        name="Shuffled Battle Arena: Near the blue tunnel to Area 1"
        region="Forest Central Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={15007}
        name="Shuffled Battle Arena: Near Snide's"
        region="Forest Area 1"
        canGetLogic={isBreathing.in && isDay.in}
        canGetBreak={isBreathing.out && isHinaKagiyama}
      />
      <ForestCheck
        id={15008}
        name="Shuffled Battle Arena: Behind Diddy's barn"
        region="Forest Area 1"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={15009}
        name="Shuffled Battle Arena: To the left of Diddy's barn"
        region="Forest Area 1"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={15010}
        name="Shuffled Battle Arena: Next to the pad to get into Diddy's barn"
        region="Forest Area 1"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={15011}
        name="Shuffled Battle Arena: Behind Lanky's attic"
        region="Forest Area 1"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={15012}
        name="Shuffled Battle Arena: Near Area 1's Tag Barrel"
        region="Forest Area 1"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={15013}
        name="Shuffled Battle Arena: Near Chunky's well exit"
        region="Forest Area 1"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={15014}
        name="Shuffled Battle Arena: Near Diddy's winch"
        region="Forest Area 1"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={15015}
        name="Shuffled Battle Arena: Near the door to the back of the main mill"
        region="Forest Area 1"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={15016}
        name="Shuffled Battle Arena: Next to the output area for DK's conveyor GB"
        region="Forest Area 1"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={15017}
        name="Shuffled Battle Arena: En route to Thornvine"
        region="Forest Area 1"
        canGetLogic={isBreathing.in && isNight.in}
        canGetBreak={isBreathing.out && isNight.out}
      />
      <ForestCheck
        id={15018}
        name="Shuffled Battle Arena: Right of Thornvine"
        region="Forest Area 1"
        canGetLogic={isBreathing.in && isNight.in}
        canGetBreak={isBreathing.out && isNight.out}
      />
      <ForestCheck
        id={15019}
        name="Shuffled Battle Arena: Far right of Thornvine"
        region="Forest Area 1"
        canGetLogic={isBreathing.in && isNight.in}
        canGetBreak={isBreathing.out && isNight.out}
      />
      <ForestCheck
        id={15020}
        name="Shuffled Battle Arena: Behind Thornvine"
        region="Forest Area 1"
        canGetLogic={isBreathing.in && isNight.in}
        canGetBreak={isBreathing.out && isNight.out}
      />
      <ForestCheck
        id={15021}
        name="Shuffled Battle Arena: Far left of Thornvine"
        region="Forest Area 1"
        canGetLogic={isBreathing.in && isNight.in}
        canGetBreak={isBreathing.out && isNight.out}
      />
      <ForestCheck
        id={15022}
        name="Shuffled Battle Arena: Near Thornvine"
        region="Forest Area 1"
        canGetLogic={isBreathing.in && isNight.in}
        canGetBreak={isBreathing.out && isNight.out}
      />
      <ForestCheck
        id={15023}
        name="Shuffled Battle Arena: Area 2's Troff 'n' Scoff"
        region="Forest Area 2"
        canGetLogic={canPlantBean.in && isNight.in}
        canGetBreak={canPlantBean.out && isNight.out}
      />
      <ForestCheck
        id={15024}
        name="Shuffled Battle Arena: On the field where the Apple and Tomatoes are"
        region="Forest Area 2"
        canGetLogic={canPlantBean.in}
        canGetBreak={canPlantBean.out}
      />
      <ForestCheck
        id={15025}
        name="Shuffled Battle Arena: Near Funky's"
        region="Forest Area 2"
        canGetLogic={canPlantBean.in}
        canGetBreak={canPlantBean.out}
      />
      <ForestCheck
        id={15026}
        name="Shuffled Battle Arena: Near entrance to Area 2"
        region="Forest Area 2"
        canGetLogic={canPlantBean.in}
        canGetBreak={canPlantBean.out}
      />
      <ForestCheck
        id={15027}
        name="Shuffled Battle Arena: Near the Beanstalk's field"
        region="Forest Area 2"
        canGetLogic={canPlantBean.in}
        canGetBreak={canPlantBean.out}
      />
      <ForestCheck
        id={15028}
        name="Shuffled Battle Arena: Area 2's Tiny Kong barrel"
        region="Forest Area 2"
        canGetLogic={canPlantBean.in}
        canGetBreak={canPlantBean.out}
      />
      <ForestCheck
        id={15029}
        name="Shuffled Battle Arena: Near the Giant Mushroom"
        region="Forest Area 3"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={15030}
        name="Shuffled Battle Arena: Near the yellow tunnel"
        region="Forest Area 3"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={15031}
        name="Shuffled Battle Arena: At the ladder to DK's Baboon Blast pad"
        region="Forest Area 3"
        canGetLogic={isBreathing.in && (hasClimbing || hasJetbarrel)}
        canGetBreak={isBreathing.out && (hasChunky || isHinaKagiyama)}
      />
      <ForestCheck
        id={15032}
        name="Shuffled Battle Arena: Near DK's Baboon Blast pad"
        region="Forest Area 3"
        canGetLogic={isBreathing.in && hasClimbing}
        canGetBreak={isBreathing.out && hasJetbarrel}
      />
      <ForestCheck
        id={15033}
        name="Shuffled Battle Arena: Above ladder past DK's Baboon Blast pad"
        region="Forest Area 3"
        canGetLogic={isBreathing.in && hasClimbing}
        canGetBreak={isBreathing.out && hasJetbarrel}
      />
      <ForestCheck
        id={15034}
        name="Shuffled Battle Arena: Top of the Giant Mushroom"
        region="Forest Area 3"
        canGetLogic={canReachTopOfShroom.in}
        canGetBreak={canReachTopOfShroom.out}
      />
      <ForestCheck
        id={15035}
        name="Shuffled Battle Arena: Behind the Rabbit"
        region="Forest Area 4"
        canGetLogic={canReachArea4.in}
        canGetBreak={canReachArea4.out}
      />
      <ForestCheck
        id={15036}
        name="Shuffled Battle Arena: Next to the Rabbit's house"
        region="Forest Area 4"
        canGetLogic={canReachArea4.in}
        canGetBreak={canReachArea4.out}
      />
      <ForestCheck
        id={15037}
        name="Shuffled Battle Arena: Under the big tree"
        region="Forest Area 4"
        canGetLogic={canReachArea4.in}
        canGetBreak={canReachArea4.out}
      />
      <ForestCheck
        id={15038}
        name="Shuffled Battle Arena: Also under the big tree"
        region="Forest Area 4"
        canGetLogic={canReachArea4.in}
        canGetBreak={canReachArea4.out}
      />
      <ForestCheck
        id={15039}
        name="Shuffled Battle Arena: Near the big tree"
        region="Forest Area 4"
        canGetLogic={canReachArea4.in}
        canGetBreak={canReachArea4.out}
      />
      <ForestCheck
        id={15040}
        name="Shuffled Battle Arena: Near the big tree's Jetbarrel"
        region="Forest Area 4"
        canGetLogic={canReachArea4.in}
        canGetBreak={canReachArea4.out}
      />
      <ForestCheck
        id={15041}
        name="Shuffled Battle Arena: Grass near the big tree's Jetbarrel"
        region="Forest Area 4"
        canGetLogic={canReachArea4.in}
        canGetBreak={canReachArea4.out}
      />
      <ForestCheck
        id={15042}
        name="Shuffled Battle Arena: Top of the big tree"
        region="Forest Area 4"
        canGetLogic={canReachArea4.in && hasJetbarrel}
        canGetBreak={canReachArea4.out && hasJetbarrel}
      />
      <ForestCheck
        id={15043}
        name="Shuffled Battle Arena: Top of the mill"
        region="Forest Area 1"
        canGetLogic={isBreathing.in && (hasBalloon || hasClimbing)}
        canGetBreak={isBreathing.out && (hasBalloon || hasClimbing)}
      />
      <ForestCheck
        id={15044}
        name="Shuffled Battle Arena: Vanilla Warp 1, central area"
        region="Forest Central Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={15045}
        name="Shuffled Battle Arena: Vanilla Warp 1, at the mill"
        region="Forest Area 1"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={15046}
        name="Shuffled Battle Arena: Vanilla Warp 2, central area"
        region="Forest Central Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={15047}
        name="Shuffled Battle Arena: Vanilla Warp 2, at Funky's"
        region="Forest Area 2"
        canGetLogic={canPlantBean.in}
        canGetBreak={canPlantBean.out}
      />
      <ForestCheck
        id={15048}
        name="Shuffled Battle Arena: Vanilla Warp 3, central area"
        region="Forest Central Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={15049}
        name="Shuffled Battle Arena: Vanilla Warp 3, bottom of the Giant Mushroom"
        region="Forest Area 3"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={15050}
        name="Shuffled Battle Arena: Vanilla Warp 4, central area"
        region="Forest Central Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={15051}
        name="Shuffled Battle Arena: Vanilla Warp 4, at the big tree"
        region="Forest Area 4"
        canGetLogic={canReachArea4.in}
        canGetBreak={canReachArea4.out}
      />
      <ForestCheck
        id={15052}
        name="Shuffled Battle Arena: Vanilla Warp 5, bottom of the Giant Mushroom"
        region="Forest Area 3"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={15053}
        name="Shuffled Battle Arena: Vanilla Warp 5, top of the Giant Mushroom"
        region="Forest Area 3"
        canGetLogic={canGetNearTopOfShroom.in}
        canGetBreak={canGetNearTopOfShroom.out}
      />
      <ForestCheck
        id={15054}
        name="Shuffled Battle Arena: Inside the tree stump"
        region="Forest Area 4"
        canGetLogic={canReachStump.in}
        canGetBreak={canReachStump.out}
      />
      <ForestCheck
        id={15055}
        name="Shuffled Battle Arena: Back of the winch room"
        region="Forest Area 1"
        canGetLogic={isBreathing.in && hasClimbing && hasDiddy && hasSlam && isNight.in}
        canGetBreak={isBreathing.out && hasClimbing && hasDiddy && hasSlam && isNight.out}
      />
      <ForestCheck
        id={15056}
        name="Shuffled Battle Arena: Near Thornvine"
        region="Forest Area 1"
        canGetLogic={isBreathing.in && isNight.in}
        canGetBreak={isBreathing.out && isNight.out}
      />
      <ForestCheck
        id={15057}
        name="Shuffled Battle Arena: Inside Thornvine, entrance"
        region="Forest Area 1"
        canGetLogic={canGetInThornvine.in}
        canGetBreak={canGetInThornvine.out}
      />
      <ForestCheck
        id={15058}
        name="Shuffled Battle Arena: Inside Thornvine, near ladder"
        region="Forest Area 1"
        canGetLogic={canGetInThornvine.in}
        canGetBreak={canGetInThornvine.out}
      />
      <ForestCheck
        id={15059}
        name="Shuffled Battle Arena: Inside Thornvine, next to ladder"
        region="Forest Area 1"
        canGetLogic={canGetInThornvine.in}
        canGetBreak={canGetInThornvine.out}
      />
      <ForestCheck
        id={15060}
        name="Shuffled Battle Arena: Inside Thornvine, back left"
        region="Forest Area 1"
        canGetLogic={canGetInThornvine.in}
        canGetBreak={canGetInThornvine.out}
      />
      <ForestCheck
        id={15061}
        name="Shuffled Battle Arena: Inside front mill, at the conveyors"
        region="Forest Area 1"
        canGetLogic={isBreathing.in && isDay.in}
        canGetBreak={isBreathing.out && canReachSpiderBoss.out}
      />
      <ForestCheck
        id={15062}
        name="Shuffled Battle Arena: Inside front mill, at Tiny's barrel"
        region="Forest Area 1"
        canGetLogic={isBreathing.in && isDay.in}
        canGetBreak={isBreathing.out && canReachSpiderBoss.out}
      />
      <ForestCheck
        id={15063}
        name="Shuffled Battle Arena: Inside front mill, near the lever cage"
        region="Forest Area 1"
        canGetLogic={isBreathing.in && isDay.in}
        canGetBreak={isBreathing.out && canReachSpiderBoss.out}
      />
      <ForestCheck
        id={15064}
        name="Shuffled Battle Arena: Inside back mill, where Chunky's coins are in vanilla"
        region="Forest Area 1"
        canGetLogic={isBreathing.in && isDay.in && hasPrimatePunch}
        canGetBreak={isBreathing.out && canReachSpiderBoss.out}
      />
      <ForestCheck
        id={15065}
        name="Shuffled Battle Arena: At switch to Tiny's Bonus Barrel"
        region="Inside the Giant Mushroom"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={15066}
        name="Shuffled Battle Arena: At the gun switches for the Check of Legends"
        region="Inside the Giant Mushroom"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={15067}
        name="Shuffled Battle Arena: At the bottom-most Check of Legends Barrel Cannon"
        region="Inside the Giant Mushroom"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={15068}
        name="Shuffled Battle Arena: Near the vines to the Night Door"
        region="Inside the Giant Mushroom"
        canGetLogic={canGetNearTopOfShroom.in}
        canGetBreak={canGetNearTopOfShroom.out}
      />
      <ForestCheck
        id={15069}
        name="Shuffled Battle Arena: At the second Check of Legends Barrel Cannon"
        region="Inside the Giant Mushroom"
        canGetLogic={canGetNearTopOfShroom.in && isHinaKagiyama}
        canGetBreak={canGetNearTopOfShroom.out && hasDK}
      />
      <ForestCheck
        id={15070}
        name="Shuffled Battle Arena: At the third Check of Legends Barrel Cannon"
        region="Inside the Giant Mushroom"
        canGetLogic={canGetNearTopOfShroom.in}
        canGetBreak={canGetNearTopOfShroom.out}
      />
      <ForestCheck
        id={15071}
        name="Shuffled Battle Arena: At top viney platform"
        region="Inside the Giant Mushroom"
        canGetLogic={canGetNearTopOfShroom.in}
        canGetBreak={canGetNearTopOfShroom.out}
      />
      <ForestCheck
        id={15072}
        name="Shuffled Battle Arena: Near a box in Lanky's attic"
        region="Forest Area 1"
        canGetLogic={isBreathing.in && (hasClimbing || hasBalloon) && isNight.in}
        canGetBreak={isBreathing.out && (hasClimbing || hasBalloon) && isNight.out}
      />
      <ForestCheck
        id={15073}
        name="Shuffled Battle Arena: Back of Lanky's Zinger room"
        region="Inside the Giant Mushroom"
        canGetLogic={canReachLankysShroomTopGBs.in}
        canGetBreak={canReachLankysShroomTopGBs.out}
      />
      <ForestCheck
        id={15074}
        name="Shuffled Battle Arena: Back of Lanky's mushroom slam room"
        region="Inside the Giant Mushroom"
        canGetLogic={canReachLankysShroomTopGBs.in}
        canGetBreak={canReachLankysShroomTopGBs.out}
      />
      <ForestCheck
        id={15075}
        name="Shuffled Battle Arena: At Chunky's face puzzle"
        region="Inside the Giant Mushroom"
        canGetLogic={canGetNearTopOfShroom.in && hasChunky && hasSlam}
        canGetBreak={canGetNearTopOfShroom.out && hasChunky && hasSlam}
      />
      <ForestCheck
        id={15076}
        name="Shuffled Battle Arena: Near thatching in the mill back"
        region="Forest Area 1"
        canGetLogic={isBreathing.in && isDay.in && hasPrimatePunch}
        canGetBreak={canReachSpiderBoss.out}
      />
      <ForestCheck
        id={15077}
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
