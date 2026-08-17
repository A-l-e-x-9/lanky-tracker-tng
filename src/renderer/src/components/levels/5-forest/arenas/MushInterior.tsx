import ArenaPool from '@renderer/components/pools/Arenas'
import { useGeneralThing, useForestMushroomTop, useLankyMushGb } from '@renderer/hooks/forest'
import { useShuffledArenas } from '@renderer/hooks/settings'
import ForestCheck from '../check'
import { useTwirl, useDk } from '@renderer/hooks/kongs'

const Shuffled: React.FC = () => {
const isBreathing = useGeneralThing()
const canGetNearTopOfShroom = useForestMushroomTop()
const isHinaKagiyama = useTwirl()
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
    </ArenaPool>
  )
}

const MushInteriorArenas: React.FC = () => (useShuffledArenas() ? <Shuffled /> : null)
export default MushInteriorArenas
