import CratePool from '@renderer/components/pools/Crates'
import VanillaCrate from '@renderer/components/pools/VanillaCrate'
import { useLlamaOutsideCrate } from '@renderer/hooks/aztec'
import AztecCheck from '../check'

const LlamaOutsideCrate: React.FC = () => {
  const outside = useLlamaOutsideCrate()
  return (
    <CratePool>
      <VanillaCrate>
        <AztecCheck
          id={2061}
          name="Crate on top of the Llama Temple"
          region="Aztec Main Area"
          canGetLogic={outside.in}
          canGetBreak={outside.out}
        />
      </VanillaCrate>
    </CratePool>
  )
}

export default LlamaOutsideCrate
