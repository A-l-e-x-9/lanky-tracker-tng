import ArenaPool from '@renderer/components/pools/Arenas'
import { useGeneralThing, useForestDay, useForestNight, useForestSpiderBoss } from '@renderer/hooks/forest'
import { useShuffledArenas } from '@renderer/hooks/settings'
import { useTwirl, useClimbing, useBalloon } from '@renderer/hooks/kongs'
import ForestCheck from '../check'

const Shuffled: React.FC = () => {
const isBreathing = useGeneralThing()
const isDay = useForestDay()
const isNight = useForestNight()
const isHinaKagiyama = useTwirl()
const hasClimbing = useClimbing()
const hasBalloon = useBalloon()
const canReachSpiderBoss = useForestSpiderBoss()
  return (
    <ArenaPool>
      <ForestCheck
        id={15000}
        name="Shuffled Battle Arena: Where the infamous Dirt Patch is"
        region="Forest Area 1"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={15000}
        name="Shuffled Battle Arena: Near Snide's"
        region="Forest Area 1"
        canGetLogic={isBreathing.in && isDay.in}
        canGetBreak={isBreathing.out && isHinaKagiyama}
      />
      <ForestCheck
        id={15000}
        name="Shuffled Battle Arena: Behind Diddy's barn"
        region="Forest Area 1"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={15000}
        name="Shuffled Battle Arena: To the left of Diddy's barn"
        region="Forest Area 1"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={15000}
        name="Shuffled Battle Arena: Next to the pad to get into Diddy's barn"
        region="Forest Area 1"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={15000}
        name="Shuffled Battle Arena: Behind Lanky's attic"
        region="Forest Area 1"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={15000}
        name="Shuffled Battle Arena: Near Area 1's Tag Barrel"
        region="Forest Area 1"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={15000}
        name="Shuffled Battle Arena: Near Chunky's well exit"
        region="Forest Area 1"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={15000}
        name="Shuffled Battle Arena: Near Diddy's winch"
        region="Forest Area 1"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={15000}
        name="Shuffled Battle Arena: Near the door to the back of the main mill"
        region="Forest Area 1"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={15000}
        name="Shuffled Battle Arena: Next to the output area for DK's conveyor GB"
        region="Forest Area 1"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={15000}
        name="Shuffled Battle Arena: En route to Thornvine"
        region="Forest Area 1"
        canGetLogic={isBreathing.in && isNight.in}
        canGetBreak={isBreathing.out && isNight.out}
      />
      <ForestCheck
        id={15000}
        name="Shuffled Battle Arena: Right of Thornvine"
        region="Forest Area 1"
        canGetLogic={isBreathing.in && isNight.in}
        canGetBreak={isBreathing.out && isNight.out}
      />
      <ForestCheck
        id={15000}
        name="Shuffled Battle Arena: Far right of Thornvine"
        region="Forest Area 1"
        canGetLogic={isBreathing.in && isNight.in}
        canGetBreak={isBreathing.out && isNight.out}
      />
      <ForestCheck
        id={15000}
        name="Shuffled Battle Arena: Behind Thornvine"
        region="Forest Area 1"
        canGetLogic={isBreathing.in && isNight.in}
        canGetBreak={isBreathing.out && isNight.out}
      />
      <ForestCheck
        id={15000}
        name="Shuffled Battle Arena: Far left of Thornvine"
        region="Forest Area 1"
        canGetLogic={isBreathing.in && isNight.in}
        canGetBreak={isBreathing.out && isNight.out}
      />
      <ForestCheck
        id={15000}
        name="Shuffled Battle Arena: Near Thornvine"
        region="Forest Area 1"
        canGetLogic={isBreathing.in && isNight.in}
        canGetBreak={isBreathing.out && isNight.out}
      />
      <ForestCheck
        id={15000}
        name="Shuffled Battle Arena: Top of the mill"
        region="Forest Area 1"
        canGetLogic={isBreathing.in && (hasBalloon || hasClimbing)}
        canGetBreak={isBreathing.out && (hasBalloon || hasClimbing)}
      />
      <ForestCheck
        id={15000}
        name="Shuffled Battle Arena: Vanilla Warp 1, at the mill"
        region="Forest Area 1"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={15000}
        name="Shuffled Battle Arena: Near Thornvine"
        region="Forest Area 1"
        canGetLogic={isBreathing.in && isNight.in}
        canGetBreak={isBreathing.out && isNight.out}
      />
      <ForestCheck
        id={15000}
        name="Shuffled Battle Arena: Inside front mill, at the conveyors"
        region="Forest Area 1"
        canGetLogic={isBreathing.in && isDay.in}
        canGetBreak={isBreathing.out && canReachSpiderBoss.out}
      />
      <ForestCheck
        id={15000}
        name="Shuffled Battle Arena: Inside front mill, at Tiny's barrel"
        region="Forest Area 1"
        canGetLogic={isBreathing.in && isDay.in}
        canGetBreak={isBreathing.out && canReachSpiderBoss.out}
      />
      <ForestCheck
        id={15000}
        name="Shuffled Battle Arena: Inside front mill, near the lever cage"
        region="Forest Area 1"
        canGetLogic={isBreathing.in && isDay.in}
        canGetBreak={isBreathing.out && canReachSpiderBoss.out}
      />
      <ForestCheck
        id={15000}
        name="Shuffled Battle Arena: Near a box in Lanky's attic"
        region="Forest Area 1"
        canGetLogic={isBreathing.in && (hasClimbing || hasBalloon) && isNight.in}
        canGetBreak={isBreathing.out && (hasClimbing || hasBalloon) && isNight.out}
      />
      <ForestCheck
        id={15000}
        name="Shuffled Battle Arena: Back of the winch room"
        region="Forest Area 1"
        canGetLogic={isBreathing.in && hasClimbing && hasDiddy && hasSlam && isNight.in}
        canGetBreak={isBreathing.out && hasClimbing && hasDiddy && hasSlam && isNight.out}
      />
    </ArenaPool>
  )
}

const MillsArenas: React.FC = () => (useShuffledArenas() ? <Shuffled /> : null)
export default MillsArenas
