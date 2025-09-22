import FairyPool from '@renderer/src/components/pools/Fairies'
import VanillaFairy from '@renderer/src/components/pools/VanillaFairy'
import { useLlamaFairy } from '@renderer/src/hooks/aztec'
import AztecCheck from '../check'

const LlamaFairy: React.FC = () => {
  const llama = useLlamaFairy()
  return (
    <FairyPool>
      <VanillaFairy>
        <AztecCheck
          id={2080}
          name="Aztec Fairy (Llama Temple)"
          region="Llama Temple"
          canGetLogic={llama.in}
          canGetBreak={llama.out}
        />
      </VanillaFairy>
    </FairyPool>
  )
}

export default LlamaFairy
