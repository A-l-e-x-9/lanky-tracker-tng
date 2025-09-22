import ArenaPool from '@renderer/src/components/pools/Arenas'
import { useGeneralThing } from '@renderer/src/hooks/forest'
import { useShuffledArenas } from '@renderer/src/hooks/settings'
import ForestCheck from '../check'

const Shuffled: React.FC = () => {
  const thing = useGeneralThing()
  return (
    <ArenaPool>
      <ForestCheck id={5190} name="Forest Arena" canGetLogic={thing} />
    </ArenaPool>
  )
}

const ShuffledArenas: React.FC = () => (!useShuffledArenas() ? null : <Shuffled />)
export default ShuffledArenas
