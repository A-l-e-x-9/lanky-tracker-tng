import CratePool from '@renderer/components/pools/Crates'
import VanillaCrate from '@renderer/components/pools/VanillaCrate'
import { useLlamaCrate } from '@renderer/hooks/aztec'
import AztecCheck from '../check'

const LlamaInsideCrate: React.FC = () => {
  const llama = useLlamaCrate()
  return (
    <CratePool>
      <VanillaCrate>
        <AztecCheck
          id={2060}
          name="Melon Crate in the Llama Temple"
          region="Llama Temple"
          canGetLogic={llama.in}
          canGetBreak={llama.out}
        />
      </VanillaCrate>
    </CratePool>
  )
}

export default LlamaInsideCrate
