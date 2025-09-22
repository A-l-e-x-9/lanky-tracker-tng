import ArenaPool from '@renderer/src/components/pools/Arenas'
import { useGeneralThing } from '@renderer/src/hooks/factory'
import { useShuffledArenas } from '@renderer/src/hooks/settings'
import FactoryCheck from '../check'

const Shuffled: React.FC = () => {
  return (
    <ArenaPool>
      <FactoryCheck id={3190} name="Factory Arena" canGetLogic={useGeneralThing()} />
    </ArenaPool>
  )
}

const ShuffledArenas: React.FC = () => (!useShuffledArenas() ? null : <Shuffled />)
export default ShuffledArenas
