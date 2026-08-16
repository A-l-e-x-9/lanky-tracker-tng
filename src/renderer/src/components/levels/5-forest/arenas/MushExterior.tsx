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
        name="Shuffled Battle Arena: Near the Giant Mushroom"
        region="Forest Area 3"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={15000}
        name="Shuffled Battle Arena: Near the yellow tunnel"
        region="Forest Area 3"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={15000}
        name="Shuffled Battle Arena: Vanilla Warp 3, bottom of the Giant Mushroom"
        region="Forest Area 3"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={15000}
        name="Shuffled Battle Arena: Vanilla Warp 5, bottom of the Giant Mushroom"
        region="Forest Area 3"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
    </ArenaPool>
  )
}

const MushExteriorArenas: React.FC = () => (useShuffledArenas() ? <Shuffled /> : null)
export default MushExteriorArenas
