import CratePool from '@renderer/components/pools/Crates'
import VanillaCrate from '@renderer/components/pools/VanillaCrate'
import { useRambiCrate } from '@renderer/hooks/japes'
import JapesCheck from '../check'

const RambiCrate: React.FC = () => (
  <CratePool>
    <VanillaCrate>
      <JapesCheck
        id={1061}
        name="Melon Crate in Rambi's Cave"
        region="Stormy Area"
        canGetLogic={useRambiCrate()}
      />
    </VanillaCrate>
  </CratePool>
)

export default RambiCrate
