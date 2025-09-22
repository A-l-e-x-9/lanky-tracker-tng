import CratePool from '@renderer/src/components/pools/Crates'
import VanillaCrate from '@renderer/src/components/pools/VanillaCrate'
import { useForestOwl } from '@renderer/src/hooks/forest'
import ForestCheck from '../check'

const OwlCrate: React.FC = () => (
  <CratePool>
    <VanillaCrate>
      <ForestCheck
        id={5061}
        name="Forest Crate: Near Owl Tree"
        region="Owl Tree"
        canGetLogic={useForestOwl()}
      />
    </VanillaCrate>
  </CratePool>
)

export default OwlCrate
