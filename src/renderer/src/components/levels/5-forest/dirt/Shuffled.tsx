import RainbowCoinPool from '@renderer/components/pools/RainbowCoins'
import { useGeneralDirt, useArena, useForestBean, useForestDay, useForestNight, useForestMushroomRoof, useForestOwl, useForestMushroomTop, useTinyAntGb, useSlamForest, useForestBarn, useForestSpiderBoss, useLankyMushGb, useBeanDirt } from '@renderer/hooks/forest'
import { useShuffleDirt } from '@renderer/hooks/settings'
import { useShockwave, useTwirl, useClimbing, useRocket, useChunky, useBalloon, useDiddy, usePunch, useDk } from '@renderer/hooks/kongs'
import ForestCheck from '../check'

const Shuffled: React.FC = () => {
const isBreathing = useGeneralDirt()
const hasShockwave = useShockwave()
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
const canDoVanillaDirt1 = useBeanDirt()
  return (
    <RainbowCoinPool>
      <ForestCheck
        id={35000}
        name="Shuffled Dirt Patch: Just under the top of the Giant Mushroom"
        region="Forest Area 3"
        canGetLogic={canReachVanillaArena.in && hasShockwave}
        canGetBreak={canReachVanillaArena.out && hasShockwave}
      />
      <ForestCheck
        id={35001}
        name="Shuffled Dirt Patch: Vanilla Dirt 1 (in front of where The Bean™ is planted)"
        region="Forest Area 2"
        canGetLogic={canDoVanillaDirt1.in}
        canGetBreak={canDoVanillaDirt1.out}
      />
      <ForestCheck
        id={35002}
        name="Shuffled Dirt Patch: Vanilla Dirt 2 (the infamous one that took 17 years to find...)"
        region="Forest Area 1"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={35004}
        name="Shuffled Dirt Patch: Behind the clock"
        region="Forest Central Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={35005}
        name="Shuffled Dirt Patch: In front of the clock"
        region="Forest Central Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={35006}
        name="Shuffled Dirt Patch: Near the blue tunnel to Area 1"
        region="Forest Central Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={35007}
        name="Shuffled Dirt Patch: Near Snide's"
        region="Forest Area 1"
        canGetLogic={isBreathing.in && isDay.in}
        canGetBreak={isBreathing.out && isHinaKagiyama}
      />
      <ForestCheck
        id={35008}
        name="Shuffled Dirt Patch: Behind Diddy's barn"
        region="Forest Area 1"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={35009}
        name="Shuffled Dirt Patch: To the left of Diddy's barn"
        region="Forest Area 1"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={35010}
        name="Shuffled Dirt Patch: Next to the pad to get into Diddy's barn"
        region="Forest Area 1"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={35011}
        name="Shuffled Dirt Patch: Behind Lanky's attic"
        region="Forest Area 1"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={35012}
        name="Shuffled Dirt Patch: Near Area 1's Tag Barrel"
        region="Forest Area 1"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={35013}
        name="Shuffled Dirt Patch: Near Chunky's well exit"
        region="Forest Area 1"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={35014}
        name="Shuffled Dirt Patch: Near Diddy's winch"
        region="Forest Area 1"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={35015}
        name="Shuffled Dirt Patch: Near the door to the back of the main mill"
        region="Forest Area 1"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={35016}
        name="Shuffled Dirt Patch: Next to the output area for DK's conveyor GB"
        region="Forest Area 1"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={35017}
        name="Shuffled Dirt Patch: En route to Thornvine"
        region="Forest Area 1"
        canGetLogic={isBreathing.in && isNight.in}
        canGetBreak={isBreathing.out && isNight.out}
      />
      <ForestCheck
        id={35018}
        name="Shuffled Dirt Patch: Right of Thornvine"
        region="Forest Area 1"
        canGetLogic={isBreathing.in && isNight.in}
        canGetBreak={isBreathing.out && isNight.out}
      />
      <ForestCheck
        id={35019}
        name="Shuffled Dirt Patch: Far right of Thornvine"
        region="Forest Area 1"
        canGetLogic={isBreathing.in && isNight.in}
        canGetBreak={isBreathing.out && isNight.out}
      />
      <ForestCheck
        id={35020}
        name="Shuffled Dirt Patch: Behind Thornvine"
        region="Forest Area 1"
        canGetLogic={isBreathing.in && isNight.in}
        canGetBreak={isBreathing.out && isNight.out}
      />
      <ForestCheck
        id={35021}
        name="Shuffled Dirt Patch: Far left of Thornvine"
        region="Forest Area 1"
        canGetLogic={isBreathing.in && isNight.in}
        canGetBreak={isBreathing.out && isNight.out}
      />
      <ForestCheck
        id={35022}
        name="Shuffled Dirt Patch: Near Thornvine"
        region="Forest Area 1"
        canGetLogic={isBreathing.in && isNight.in}
        canGetBreak={isBreathing.out && isNight.out}
      />
      <ForestCheck
        id={35023}
        name="Shuffled Dirt Patch: Area 2's Troff 'n' Scoff"
        region="Forest Area 2"
        canGetLogic={canPlantBean.in && isNight.in && hasShockwave}
        canGetBreak={canPlantBean.out && isNight.out && hasShockwave}
      />
      <ForestCheck
        id={35024}
        name="Shuffled Dirt Patch: On the field where the Apple and Tomatoes are"
        region="Forest Area 2"
        canGetLogic={canPlantBean.in && hasShockwave}
        canGetBreak={canPlantBean.out && hasShockwave}
      />
      <ForestCheck
        id={35025}
        name="Shuffled Dirt Patch: Near Funky's"
        region="Forest Area 2"
        canGetLogic={canPlantBean.in && hasShockwave}
        canGetBreak={canPlantBean.out && hasShockwave}
      />
      <ForestCheck
        id={35026}
        name="Shuffled Dirt Patch: Near entrance to Area 2"
        region="Forest Area 2"
        canGetLogic={canPlantBean.in && hasShockwave}
        canGetBreak={canPlantBean.out && hasShockwave}
      />
      <ForestCheck
        id={35027}
        name="Shuffled Dirt Patch: Near the Beanstalk's field"
        region="Forest Area 2"
        canGetLogic={canPlantBean.in && hasShockwave}
        canGetBreak={canPlantBean.out && hasShockwave}
      />
      <ForestCheck
        id={35028}
        name="Shuffled Dirt Patch: Area 2's Tiny Kong barrel"
        region="Forest Area 2"
        canGetLogic={canPlantBean.in && hasShockwave}
        canGetBreak={canPlantBean.out && hasShockwave}
      />
      <ForestCheck
        id={35029}
        name="Shuffled Dirt Patch: Near the Giant Mushroom"
        region="Forest Area 3"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={35031}
        name="Shuffled Dirt Patch: At the ladder to DK's Baboon Blast pad"
        region="Forest Area 3"
        canGetLogic={isBreathing.in && (hasClimbing || hasJetbarrel)}
        canGetBreak={isBreathing.out && (hasChunky || isHinaKagiyama)}
      />
      <ForestCheck
        id={35032}
        name="Shuffled Dirt Patch: Near DK's Baboon Blast pad"
        region="Forest Area 3"
        canGetLogic={isBreathing.in && hasClimbing}
        canGetBreak={isBreathing.out && hasJetbarrel}
      />
      <ForestCheck
        id={35033}
        name="Shuffled Dirt Patch: Above ladder past DK's Baboon Blast pad"
        region="Forest Area 3"
        canGetLogic={isBreathing.in && hasClimbing}
        canGetBreak={isBreathing.out && hasJetbarrel}
      />
      <ForestCheck
        id={35034}
        name="Shuffled Dirt Patch: Top of the Giant Mushroom"
        region="Forest Area 3"
        canGetLogic={canReachTopOfShroom.in && hasShockwave}
        canGetBreak={canReachTopOfShroom.out && hasShockwave}
      />
      <ForestCheck
        id={35035}
        name="Shuffled Dirt Patch: Behind the Rabbit"
        region="Forest Area 4"
        canGetLogic={canReachArea4.in && hasShockwave}
        canGetBreak={canReachArea4.out && hasShockwave}
      />
      <ForestCheck
        id={35036}
        name="Shuffled Dirt Patch: Next to the Rabbit's house"
        region="Forest Area 4"
        canGetLogic={canReachArea4.in && hasShockwave}
        canGetBreak={canReachArea4.out && hasShockwave}
      />
      <ForestCheck
        id={35037}
        name="Shuffled Dirt Patch: Under the big tree"
        region="Forest Area 4"
        canGetLogic={canReachArea4.in && hasShockwave}
        canGetBreak={canReachArea4.out && hasShockwave}
      />
      <ForestCheck
        id={35038}
        name="Shuffled Dirt Patch: Also under the big tree"
        region="Forest Area 4"
        canGetLogic={canReachArea4.in && hasShockwave}
        canGetBreak={canReachArea4.out && hasShockwave}
      />
      <ForestCheck
        id={35039}
        name="Shuffled Dirt Patch: Near the big tree"
        region="Forest Area 4"
        canGetLogic={canReachArea4.in && hasShockwave}
        canGetBreak={canReachArea4.out && hasShockwave}
      />
      <ForestCheck
        id={35040}
        name="Shuffled Dirt Patch: Near the big tree's Jetbarrel"
        region="Forest Area 4"
        canGetLogic={canReachArea4.in && hasShockwave}
        canGetBreak={canReachArea4.out && hasShockwave}
      />
      <ForestCheck
        id={35042}
        name="Shuffled Dirt Patch: Top of the big tree"
        region="Forest Area 4"
        canGetLogic={canReachArea4.in && hasJetbarrel && hasShockwave}
        canGetBreak={canReachArea4.out && hasJetbarrel && hasShockwave}
      />
      <ForestCheck
        id={35043}
        name="Shuffled Dirt Patch: Top of the mill"
        region="Forest Area 1"
        canGetLogic={isBreathing.in && (hasBalloon || hasClimbing)}
        canGetBreak={isBreathing.out && (hasBalloon || hasClimbing)}
      />
      <ForestCheck
        id={35044}
        name="Shuffled Dirt Patch: Vanilla Warp 1, central area"
        region="Forest Central Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={35045}
        name="Shuffled Dirt Patch: Vanilla Warp 1, at the mill"
        region="Forest Area 1"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={35046}
        name="Shuffled Dirt Patch: Vanilla Warp 2, central area"
        region="Forest Central Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={35047}
        name="Shuffled Dirt Patch: Vanilla Warp 2, at Funky's"
        region="Forest Area 2"
        canGetLogic={canPlantBean.in && hasShockwave}
        canGetBreak={canPlantBean.out && hasShockwave}
      />
      <ForestCheck
        id={35048}
        name="Shuffled Dirt Patch: Vanilla Warp 3, central area"
        region="Forest Central Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={35049}
        name="Shuffled Dirt Patch: Vanilla Warp 3, bottom of the Giant Mushroom"
        region="Forest Area 3"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={35050}
        name="Shuffled Dirt Patch: Vanilla Warp 4, central area"
        region="Forest Central Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={35051}
        name="Shuffled Dirt Patch: Vanilla Warp 4, at the big tree"
        region="Forest Area 4"
        canGetLogic={canReachArea4.in && hasShockwave}
        canGetBreak={canReachArea4.out && hasShockwave}
      />
      <ForestCheck
        id={35052}
        name="Shuffled Dirt Patch: Vanilla Warp 5, bottom of the Giant Mushroom"
        region="Forest Area 3"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={35053}
        name="Shuffled Dirt Patch: Vanilla Warp 5, top of the Giant Mushroom"
        region="Forest Area 3"
        canGetLogic={canGetNearTopOfShroom.in && hasShockwave}
        canGetBreak={canGetNearTopOfShroom.out && hasShockwave}
      />
      <ForestCheck
        id={35054}
        name="Shuffled Dirt Patch: Inside the tree stump"
        region="Forest Area 4"
        canGetLogic={canReachStump.in && hasShockwave}
        canGetBreak={canReachStump.out && hasShockwave}
      />
      <ForestCheck
        id={35055}
        name="Shuffled Dirt Patch: Back of the winch room"
        region="Forest Area 1"
        canGetLogic={isBreathing.in && hasClimbing && hasDiddy && hasSlam && isNight.in}
        canGetBreak={isBreathing.out && hasClimbing && hasDiddy && hasSlam && isNight.out}
      />
      <ForestCheck
        id={35056}
        name="Shuffled Dirt Patch: Near Thornvine"
        region="Forest Area 1"
        canGetLogic={isBreathing.in && isNight.in}
        canGetBreak={isBreathing.out && isNight.out}
      />
      <ForestCheck
        id={35057}
        name="Shuffled Dirt Patch: Inside Thornvine, entrance"
        region="Forest Area 1"
        canGetLogic={canGetInThornvine.in && hasShockwave}
        canGetBreak={canGetInThornvine.out && hasShockwave}
      />
      <ForestCheck
        id={35058}
        name="Shuffled Dirt Patch: Inside Thornvine, near ladder"
        region="Forest Area 1"
        canGetLogic={canGetInThornvine.in && hasShockwave}
        canGetBreak={canGetInThornvine.out && hasShockwave}
      />
      <ForestCheck
        id={35059}
        name="Shuffled Dirt Patch: Inside Thornvine, next to ladder"
        region="Forest Area 1"
        canGetLogic={canGetInThornvine.in && hasShockwave}
        canGetBreak={canGetInThornvine.out && hasShockwave}
      />
      <ForestCheck
        id={35060}
        name="Shuffled Dirt Patch: Inside Thornvine, back left"
        region="Forest Area 1"
        canGetLogic={canGetInThornvine.in && hasShockwave}
        canGetBreak={canGetInThornvine.out && hasShockwave}
      />
      <ForestCheck
        id={35061}
        name="Shuffled Dirt Patch: Inside front mill, at the conveyors"
        region="Forest Area 1"
        canGetLogic={isBreathing.in && isDay.in}
        canGetBreak={isBreathing.out && canReachSpiderBoss.out}
      />
      <ForestCheck
        id={35062}
        name="Shuffled Dirt Patch: Inside front mill, at Tiny's barrel"
        region="Forest Area 1"
        canGetLogic={isBreathing.in && isDay.in}
        canGetBreak={isBreathing.out && canReachSpiderBoss.out}
      />
      <ForestCheck
        id={35063}
        name="Shuffled Dirt Patch: Inside front mill, near the lever cage"
        region="Forest Area 1"
        canGetLogic={isBreathing.in && isDay.in}
        canGetBreak={isBreathing.out && canReachSpiderBoss.out}
      />
      <ForestCheck
        id={35064}
        name="Shuffled Dirt Patch: Inside back mill, where Chunky's coins are in vanilla"
        region="Forest Area 1"
        canGetLogic={isBreathing.in && isDay.in && hasPrimatePunch}
        canGetBreak={isBreathing.out && canReachSpiderBoss.out}
      />
      <ForestCheck
        id={35065}
        name="Shuffled Dirt Patch: At switch to Tiny's Bonus Barrel"
        region="Inside the Giant Mushroom"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={35066}
        name="Shuffled Dirt Patch: At the gun switches for the Check of Legends"
        region="Inside the Giant Mushroom"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={35067}
        name="Shuffled Dirt Patch: At the bottom-most Check of Legends Barrel Cannon"
        region="Inside the Giant Mushroom"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={35068}
        name="Shuffled Dirt Patch: Near the vines to the Night Door"
        region="Inside the Giant Mushroom"
        canGetLogic={canGetNearTopOfShroom.in && hasShockwave}
        canGetBreak={canGetNearTopOfShroom.out && hasShockwave}
      />
      <ForestCheck
        id={35069}
        name="Shuffled Dirt Patch: At the second Check of Legends Barrel Cannon"
        region="Inside the Giant Mushroom"
        canGetLogic={canGetNearTopOfShroom.in && isHinaKagiyama && hasShockwave}
        canGetBreak={canGetNearTopOfShroom.out && hasDK && hasShockwave}
      />
      <ForestCheck
        id={35070}
        name="Shuffled Dirt Patch: At the third Check of Legends Barrel Cannon"
        region="Inside the Giant Mushroom"
        canGetLogic={canGetNearTopOfShroom.in && hasShockwave}
        canGetBreak={canGetNearTopOfShroom.out && hasShockwave}
      />
      <ForestCheck
        id={35071}
        name="Shuffled Dirt Patch: At top viney platform"
        region="Inside the Giant Mushroom"
        canGetLogic={canGetNearTopOfShroom.in && hasShockwave}
        canGetBreak={canGetNearTopOfShroom.out && hasShockwave}
      />
      <ForestCheck
        id={35072}
        name="Shuffled Dirt Patch: Near a box in Lanky's attic"
        region="Forest Area 1"
        canGetLogic={isBreathing.in && (hasClimbing || hasBalloon) && isNight.in}
        canGetBreak={isBreathing.out && (hasClimbing || hasBalloon) && isNight.out}
      />
      <ForestCheck
        id={35073}
        name="Shuffled Dirt Patch: Back of Lanky's Zinger room"
        region="Inside the Giant Mushroom"
        canGetLogic={canReachLankysShroomTopGBs.in && hasShockwave}
        canGetBreak={canReachLankysShroomTopGBs.out && hasShockwave}
      />
      <ForestCheck
        id={35074}
        name="Shuffled Dirt Patch: Back of Lanky's mushroom slam room"
        region="Inside the Giant Mushroom"
        canGetLogic={canReachLankysShroomTopGBs.in && hasShockwave}
        canGetBreak={canReachLankysShroomTopGBs.out && hasShockwave}
      />
      <ForestCheck
        id={35075}
        name="Shuffled Dirt Patch: At Chunky's face puzzle"
        region="Inside the Giant Mushroom"
        canGetLogic={canGetNearTopOfShroom.in && hasChunky && hasSlam && hasShockwave}
        canGetBreak={canGetNearTopOfShroom.out && hasChunky && hasSlam && hasShockwave}
      />
      <ForestCheck
        id={35076}
        name="Shuffled Dirt Patch: Near thatching in the mill back"
        region="Forest Area 1"
        canGetLogic={isBreathing.in && isDay.in && hasPrimatePunch}
        canGetBreak={canReachSpiderBoss.out && hasShockwave}
      />
      <ForestCheck
        id={35077}
        name="Shuffled Dirt Patch: Back of the Spider's room"
        region="Forest Area 1"
        canGetLogic={canReachSpiderBoss.in && hasShockwave}
        canGetBreak={canReachSpiderBoss.out && hasShockwave}
      />
    </RainbowCoinPool>
  )
}

const ShuffledDirt: React.FC = () => (useShuffleDirt()) ? <Shuffled /> : null)
export default ShuffledDirt
