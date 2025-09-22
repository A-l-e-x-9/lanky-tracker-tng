import FairyPool from '@renderer/src/components/pools/Fairies'
import { useGeneralFairy } from '@renderer/src/hooks/aztec'
import { useShuffleFairies } from '@renderer/src/hooks/settings'
import AztecCheck from '../check'

const Shuffled: React.FC = () => {
  const fairyLogic = useGeneralFairy()

  return (
    <FairyPool>
      <AztecCheck
        id={2280}
        name="Aztec Fairy Location #1"
        canGetLogic={fairyLogic.in}
        canGetBreak={fairyLogic.out}
      />
      <AztecCheck
        id={2281}
        name="Aztec Fairy Location #2"
        canGetLogic={fairyLogic.in}
        canGetBreak={fairyLogic.out}
      />
    </FairyPool>
  )
}

const ShuffledFairies: React.FC = () => (useShuffleFairies() ? <Shuffled /> : null)
export default ShuffledFairies
