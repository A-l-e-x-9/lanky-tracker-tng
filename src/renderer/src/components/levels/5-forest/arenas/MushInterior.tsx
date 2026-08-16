import ArenaPool from '@renderer/components/pools/Arenas'
import { useGeneralThing } from '@renderer/hooks/forest'
import { useShuffledArenas } from '@renderer/hooks/settings'
import ForestCheck from '../check'

const Shuffled: React.FC = () => {
const isBreathing = useGeneralThing()
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
