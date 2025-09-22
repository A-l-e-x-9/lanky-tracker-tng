import ArenaPool from '@renderer/src/components/pools/Arenas'
import { useGeneralThing } from '@renderer/src/hooks/caves'
import { useShuffledArenas } from '@renderer/src/hooks/settings'
import CavesCheck from '../check'

const Shuffled: React.FC = () => {
  return (
    <ArenaPool>
      <CavesCheck id={6190} name="Caves Arena" canGetLogic={useGeneralThing()} />
    </ArenaPool>
  )
}

const ShuffledArenas: React.FC = () => (!useShuffledArenas() ? null : <Shuffled />)
export default ShuffledArenas
