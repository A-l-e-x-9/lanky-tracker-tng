import ArenaPool from '@renderer/components/pools/Arenas'
import { useGeneralThing } from '@renderer/hooks/caves'
import { useShuffledArenas } from '@renderer/hooks/settings'
import CavesCheck from '../check'

const Shuffled: React.FC = () => {
const isBreathing = useGeneralThing()
  return (
    <ArenaPool>
      <CavesCheck
        id={16006}
        name="Shuffled Battle Arena: Under igloo area's Tag Barrel"
        region="Caves Igloo"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={16041}
        name="Shuffled Battle Arena: Vanilla Warp 1 at igloos"
        region="Caves Igloo"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={16044}
        name="Shuffled Battle Arena: Vanilla Warp 3 at igloos"
        region="Caves Igloo"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
    </ArenaPool>
  )
}

const IglooArenas: React.FC = () => (useShuffledArenas() ? <Shuffled /> : null)
export default IglooArenas
