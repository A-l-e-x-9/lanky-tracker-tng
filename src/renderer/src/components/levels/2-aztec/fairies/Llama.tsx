import FairyPool from '@renderer/components/pools/Fairies'
import VanillaFairy from '@renderer/components/pools/VanillaFairy'
import { useLlamaFairy } from '@renderer/hooks/aztec'
import AztecCheck from '../check'

const LlamaFairy: React.FC = () => {
  const llama = useLlamaFairy()
  return (
    <FairyPool>
      <VanillaFairy>
        <AztecCheck
          id={2080}
          name="That Damn Methed-Out Llama Temple Fairy"
          region="Llama Temple"
          canGetLogic={llama.in}
          canGetBreak={llama.out}
        />
      </VanillaFairy>
    </FairyPool>
  )
}

export default LlamaFairy
