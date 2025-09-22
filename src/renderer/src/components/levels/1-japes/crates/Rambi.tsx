import CratePool from '@renderer/src/components/pools/Crates'
import VanillaCrate from '@renderer/src/components/pools/VanillaCrate'
import { useRambiCrate } from '@renderer/src/hooks/japes'
import JapesCheck from '../check'

const RambiCrate: React.FC = () => (
  <CratePool>
    <VanillaCrate>
      <JapesCheck
        id={1061}
        name="Japes Crate: In the Rambi Cave"
        region="Stormy Tunnel Area"
        canGetLogic={useRambiCrate()}
      />
    </VanillaCrate>
  </CratePool>
)

export default RambiCrate
