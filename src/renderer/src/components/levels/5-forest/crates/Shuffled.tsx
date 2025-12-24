import CratePool from '@renderer/components/pools/Crates'
import { useGeneralThing, useArena, useForestBean, useForestDay, useForestNight, useForestMushroomRoof, useForestOwl, useForestMushroomTop, useTinyAntGb, useSlamForest, useForestBarn, useForestSpiderBoss, useLankyMushGb } from '@renderer/hooks/forest'
import { useShuffleCrates } from '@renderer/hooks/settings'
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
    <CratePool>
      <ForestCheck
        id={25000}
        name="Shuffled Melon Crate: Just underneath the top of the Giant Mushroom"
        region="Forest Area 3"
        canGetLogic={canReachVanillaArena.in}
        canGetBreak={canReachVanillaArena.out}
      />
      <ForestCheck
        id={25001}
        name="Shuffled Melon Crate: In front of where The Bean™ is planted"
        region="Forest Area 2"
        canGetLogic={canPlantBean.in}
        canGetBreak={canPlantBean.out}
      />
      <ForestCheck
        id={25002}
        name="Shuffled Melon Crate: Where the infamous Dirt Patch is"
        region="Forest Area 1"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={25003}
        name="Shuffled Melon Crate: Near the well entrance"
        region="Forest Central Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={25004}
        name="Shuffled Melon Crate: Behind the clock"
        region="Forest Central Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={25005}
        name="Shuffled Melon Crate: In front of the clock"
        region="Forest Central Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={25006}
        name="Shuffled Melon Crate: Near the blue tunnel to Area 1"
        region="Forest Central Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={25007}
        name="Shuffled Melon Crate: Near Snide's"
        region="Forest Area 1"
        canGetLogic={isBreathing.in && isDay.in}
        canGetBreak={isBreathing.out && isHinaKagiyama}
      />
      <ForestCheck
        id={25008}
        name="Shuffled Melon Crate: Vanilla Crate 1 (behind Diddy's barn)"
        region="Forest Area 1"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={25009}
        name="Shuffled Melon Crate: To the left of Diddy's barn"
        region="Forest Area 1"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={25010}
        name="Shuffled Melon Crate: Next to the pad to get into Diddy's barn"
        region="Forest Area 1"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={25011}
        name="Shuffled Melon Crate: Behind Lanky's attic"
        region="Forest Area 1"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={25012}
        name="Shuffled Melon Crate: Near Area 1's Tag Barrel"
        region="Forest Area 1"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={25013}
        name="Shuffled Melon Crate: Near Chunky's well exit"
        region="Forest Area 1"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={25014}
        name="Shuffled Melon Crate: Near Diddy's winch"
        region="Forest Area 1"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={25015}
        name="Shuffled Melon Crate: Near the door to the back of the main mill"
        region="Forest Area 1"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={25016}
        name="Shuffled Melon Crate: Next to the output area for DK's conveyor GB"
        region="Forest Area 1"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={25017}
        name="Shuffled Melon Crate: En route to Thornvine"
        region="Forest Area 1"
        canGetLogic={isBreathing.in && isNight.in}
        canGetBreak={isBreathing.out && isNight.out}
      />
      <ForestCheck
        id={25018}
        name="Shuffled Melon Crate: Vanilla Crate 2 (right of Thornvine)"
        region="Forest Area 1"
        canGetLogic={isBreathing.in && isNight.in}
        canGetBreak={isBreathing.out && isNight.out}
      />
      <ForestCheck
        id={25019}
        name="Shuffled Melon Crate: Far right of Thornvine"
        region="Forest Area 1"
        canGetLogic={isBreathing.in && isNight.in}
        canGetBreak={isBreathing.out && isNight.out}
      />
      <ForestCheck
        id={25020}
        name="Shuffled Melon Crate: Behind Thornvine"
        region="Forest Area 1"
        canGetLogic={isBreathing.in && isNight.in}
        canGetBreak={isBreathing.out && isNight.out}
      />
      <ForestCheck
        id={25021}
        name="Shuffled Melon Crate: Far left of Thornvine"
        region="Forest Area 1"
        canGetLogic={isBreathing.in && isNight.in}
        canGetBreak={isBreathing.out && isNight.out}
      />
      <ForestCheck
        id={25022}
        name="Shuffled Melon Crate: Near Thornvine"
        region="Forest Area 1"
        canGetLogic={isBreathing.in && isNight.in}
        canGetBreak={isBreathing.out && isNight.out}
      />
      <ForestCheck
        id={25023}
        name="Shuffled Melon Crate: Area 2's Troff 'n' Scoff"
        region="Forest Area 2"
        canGetLogic={canPlantBean.in && isNight.in}
        canGetBreak={canPlantBean.out && isNight.out}
      />
      <ForestCheck
        id={25024}
        name="Shuffled Melon Crate: On the field where the Apple and Tomatoes are"
        region="Forest Area 2"
        canGetLogic={canPlantBean.in}
        canGetBreak={canPlantBean.out}
      />
      <ForestCheck
        id={25025}
        name="Shuffled Melon Crate: Near Funky's"
        region="Forest Area 2"
        canGetLogic={canPlantBean.in}
        canGetBreak={canPlantBean.out}
      />
      <ForestCheck
        id={25026}
        name="Shuffled Melon Crate: Near entrance to Area 2"
        region="Forest Area 2"
        canGetLogic={canPlantBean.in}
        canGetBreak={canPlantBean.out}
      />
      <ForestCheck
        id={25027}
        name="Shuffled Melon Crate: Near the Beanstalk's field"
        region="Forest Area 2"
        canGetLogic={canPlantBean.in}
        canGetBreak={canPlantBean.out}
      />
      <ForestCheck
        id={25028}
        name="Shuffled Melon Crate: Area 2's Tiny Kong barrel"
        region="Forest Area 2"
        canGetLogic={canPlantBean.in}
        canGetBreak={canPlantBean.out}
      />
      <ForestCheck
        id={25029}
        name="Shuffled Melon Crate: Near the Giant Mushroom"
        region="Forest Area 3"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={25030}
        name="Shuffled Melon Crate: Near the yellow tunnel"
        region="Forest Area 3"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={25031}
        name="Shuffled Melon Crate: At the ladder to DK's Baboon Blast pad"
        region="Forest Area 3"
        canGetLogic={isBreathing.in && (hasClimbing || hasJetbarrel)}
        canGetBreak={isBreathing.out && (hasChunky || isHinaKagiyama)}
      />
      <ForestCheck
        id={25032}
        name="Shuffled Melon Crate: Near DK's Baboon Blast pad"
        region="Forest Area 3"
        canGetLogic={isBreathing.in && hasClimbing}
        canGetBreak={isBreathing.out && hasJetbarrel}
      />
      <ForestCheck
        id={25033}
        name="Shuffled Melon Crate: Above ladder past DK's Baboon Blast pad"
        region="Forest Area 3"
        canGetLogic={isBreathing.in && hasClimbing}
        canGetBreak={isBreathing.out && hasJetbarrel}
      />
      <ForestCheck
        id={25034}
        name="Shuffled Melon Crate: Top of the Giant Mushroom"
        region="Forest Area 3"
        canGetLogic={canReachTopOfShroom.in}
        canGetBreak={canReachTopOfShroom.out}
      />
      <ForestCheck
        id={25035}
        name="Shuffled Melon Crate: Behind the Rabbit"
        region="Forest Area 4"
        canGetLogic={canReachArea4.in}
        canGetBreak={canReachArea4.out}
      />
      <ForestCheck
        id={25036}
        name="Shuffled Melon Crate: Next to the Rabbit's house"
        region="Forest Area 4"
        canGetLogic={canReachArea4.in}
        canGetBreak={canReachArea4.out}
      />
      <ForestCheck
        id={25037}
        name="Shuffled Melon Crate: Under the big tree"
        region="Forest Area 4"
        canGetLogic={canReachArea4.in}
        canGetBreak={canReachArea4.out}
      />
      <ForestCheck
        id={25038}
        name="Shuffled Melon Crate: Also under the big tree"
        region="Forest Area 4"
        canGetLogic={canReachArea4.in}
        canGetBreak={canReachArea4.out}
      />
      <ForestCheck
        id={25039}
        name="Shuffled Melon Crate: Vanilla Crate 3 (near the big tree)"
        region="Forest Area 4"
        canGetLogic={canReachArea4.in}
        canGetBreak={canReachArea4.out}
      />
      <ForestCheck
        id={25040}
        name="Shuffled Melon Crate: Near the big tree's Jetbarrel"
        region="Forest Area 4"
        canGetLogic={canReachArea4.in}
        canGetBreak={canReachArea4.out}
      />
      <ForestCheck
        id={25041}
        name="Shuffled Melon Crate: Grass near the big tree's Jetbarrel"
        region="Forest Area 4"
        canGetLogic={canReachArea4.in}
        canGetBreak={canReachArea4.out}
      />
      <ForestCheck
        id={25042}
        name="Shuffled Melon Crate: Top of the big tree"
        region="Forest Area 4"
        canGetLogic={canReachArea4.in && hasJetbarrel}
        canGetBreak={canReachArea4.out && hasJetbarrel}
      />
      <ForestCheck
        id={25043}
        name="Shuffled Melon Crate: Top of the mill"
        region="Forest Area 1"
        canGetLogic={isBreathing.in && (hasBalloon || hasClimbing)}
        canGetBreak={isBreathing.out && (hasBalloon || hasClimbing)}
      />
      <ForestCheck
        id={25044}
        name="Shuffled Melon Crate: Vanilla Warp 1, central area"
        region="Forest Central Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={25046}
        name="Shuffled Melon Crate: Vanilla Warp 2, central area"
        region="Forest Central Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={25048}
        name="Shuffled Melon Crate: Vanilla Warp 3, central area"
        region="Forest Central Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={25050}
        name="Shuffled Melon Crate: Vanilla Warp 4, central area"
        region="Forest Central Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={25051}
        name="Shuffled Melon Crate: Vanilla Warp 4, at the big tree"
        region="Forest Area 4"
        canGetLogic={canReachArea4.in}
        canGetBreak={canReachArea4.out}
      />
      <ForestCheck
        id={25052}
        name="Shuffled Melon Crate: Vanilla Warp 5, bottom of the Giant Mushroom"
        region="Forest Area 3"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={25054}
        name="Shuffled Melon Crate: Inside the tree stump"
        region="Forest Area 4"
        canGetLogic={canReachStump.in}
        canGetBreak={canReachStump.out}
      />
      <ForestCheck
        id={25055}
        name="Shuffled Melon Crate: Back of the winch room"
        region="Forest Area 1"
        canGetLogic={isBreathing.in && hasClimbing && hasDiddy && hasSlam && isNight.in}
        canGetBreak={isBreathing.out && hasClimbing && hasDiddy && hasSlam && isNight.out}
      />
      <ForestCheck
        id={25056}
        name="Shuffled Melon Crate: Near Thornvine"
        region="Forest Area 1"
        canGetLogic={isBreathing.in && isNight.in}
        canGetBreak={isBreathing.out && isNight.out}
      />
      <ForestCheck
        id={25057}
        name="Shuffled Melon Crate: Inside Thornvine, entrance"
        region="Forest Area 1"
        canGetLogic={canGetInThornvine.in}
        canGetBreak={canGetInThornvine.out}
      />
      <ForestCheck
        id={25058}
        name="Shuffled Melon Crate: Inside Thornvine, near ladder"
        region="Forest Area 1"
        canGetLogic={canGetInThornvine.in}
        canGetBreak={canGetInThornvine.out}
      />
      <ForestCheck
        id={25059}
        name="Shuffled Melon Crate: Inside Thornvine, next to ladder"
        region="Forest Area 1"
        canGetLogic={canGetInThornvine.in}
        canGetBreak={canGetInThornvine.out}
      />
      <ForestCheck
        id={25060}
        name="Shuffled Melon Crate: Vanilla Crate 4 (inside Thornvine, back left)"
        region="Forest Area 1"
        canGetLogic={canGetInThornvine.in}
        canGetBreak={canGetInThornvine.out}
      />
      <ForestCheck
        id={25061}
        name="Shuffled Melon Crate: Inside front mill, at the conveyors"
        region="Forest Area 1"
        canGetLogic={isBreathing.in && isDay.in}
        canGetBreak={isBreathing.out && canReachSpiderBoss.out}
      />
      <ForestCheck
        id={25062}
        name="Shuffled Melon Crate: Inside front mill, at Tiny's barrel"
        region="Forest Area 1"
        canGetLogic={isBreathing.in && isDay.in}
        canGetBreak={isBreathing.out && canReachSpiderBoss.out}
      />
      <ForestCheck
        id={25063}
        name="Shuffled Melon Crate: Inside front mill, near the lever cage"
        region="Forest Area 1"
        canGetLogic={isBreathing.in && isDay.in}
        canGetBreak={isBreathing.out && canReachSpiderBoss.out}
      />
      <ForestCheck
        id={25064}
        name="Shuffled Melon Crate: Inside back mill, where Chunky's coins are in vanilla"
        region="Forest Area 1"
        canGetLogic={isBreathing.in && isDay.in && hasPrimatePunch}
        canGetBreak={isBreathing.out && canReachSpiderBoss.out}
      />
      <ForestCheck
        id={25065}
        name="Shuffled Melon Crate: At switch to Tiny's Bonus Barrel"
        region="Inside the Giant Mushroom"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={25066}
        name="Shuffled Melon Crate: At the gun switches for the Check of Legends"
        region="Inside the Giant Mushroom"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={25067}
        name="Shuffled Melon Crate: At the bottom-most Check of Legends Barrel Cannon"
        region="Inside the Giant Mushroom"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={25068}
        name="Shuffled Melon Crate: Near the vines to the Night Door"
        region="Inside the Giant Mushroom"
        canGetLogic={canGetNearTopOfShroom.in}
        canGetBreak={canGetNearTopOfShroom.out}
      />
      <ForestCheck
        id={25069}
        name="Shuffled Melon Crate: At the second Check of Legends Barrel Cannon"
        region="Inside the Giant Mushroom"
        canGetLogic={canGetNearTopOfShroom.in && isHinaKagiyama}
        canGetBreak={canGetNearTopOfShroom.out && hasDK}
      />
      <ForestCheck
        id={25070}
        name="Shuffled Melon Crate: At the third Check of Legends Barrel Cannon"
        region="Inside the Giant Mushroom"
        canGetLogic={canGetNearTopOfShroom.in}
        canGetBreak={canGetNearTopOfShroom.out}
      />
      <ForestCheck
        id={25071}
        name="Shuffled Melon Crate: At top viney platform"
        region="Inside the Giant Mushroom"
        canGetLogic={canGetNearTopOfShroom.in}
        canGetBreak={canGetNearTopOfShroom.out}
      />
      <ForestCheck
        id={25072}
        name="Shuffled Melon Crate: Near a box in Lanky's attic"
        region="Forest Area 1"
        canGetLogic={isBreathing.in && (hasClimbing || hasBalloon) && isNight.in}
        canGetBreak={isBreathing.out && (hasClimbing || hasBalloon) && isNight.out}
      />
      <ForestCheck
        id={25073}
        name="Shuffled Melon Crate: Back of Lanky's Zinger room"
        region="Inside the Giant Mushroom"
        canGetLogic={canReachLankysShroomTopGBs.in}
        canGetBreak={canReachLankysShroomTopGBs.out}
      />
      <ForestCheck
        id={25074}
        name="Shuffled Melon Crate: Back of Lanky's mushroom slam room"
        region="Inside the Giant Mushroom"
        canGetLogic={canReachLankysShroomTopGBs.in}
        canGetBreak={canReachLankysShroomTopGBs.out}
      />
      <ForestCheck
        id={25075}
        name="Shuffled Melon Crate: At Chunky's face puzzle"
        region="Inside the Giant Mushroom"
        canGetLogic={canGetNearTopOfShroom.in && hasChunky && hasSlam}
        canGetBreak={canGetNearTopOfShroom.out && hasChunky && hasSlam}
      />
      <ForestCheck
        id={25076}
        name="Shuffled Melon Crate: Near thatching in the mill back"
        region="Forest Area 1"
        canGetLogic={isBreathing.in && isDay.in && hasPrimatePunch}
        canGetBreak={canReachSpiderBoss.out}
      />
      <ForestCheck
        id={25077}
        name="Shuffled Melon Crate: Back of the Spider's room"
        region="Forest Area 1"
        canGetLogic={canReachSpiderBoss.in}
        canGetBreak={canReachSpiderBoss.out}
      />
    </CratePool>
  )
}

const ShuffledCrates: React.FC = () => (useShuffleCrates() ? <Shuffled /> : null)
export default ShuffledCrates
