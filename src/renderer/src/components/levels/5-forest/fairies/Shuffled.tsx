import FairyPool from '@renderer/src/components/pools/Fairies'
import { useGeneralFairy } from '@renderer/src/hooks/forest'
import { useShuffleFairies } from '@renderer/src/hooks/settings'
import ForestCheck from '../check'

const Shuffled: React.FC = () => {
  const thing = useGeneralFairy()
  return (
    <FairyPool>
      <ForestCheck id={5280} name="Forest Fairy Location #1" canGetLogic={thing} />
      <ForestCheck id={5281} name="Forest Fairy Location #2" canGetLogic={thing} />
    </FairyPool>
  )
}

const ShuffledFairies: React.FC = () => (useShuffleFairies() ? <Shuffled /> : null)
export default ShuffledFairies
