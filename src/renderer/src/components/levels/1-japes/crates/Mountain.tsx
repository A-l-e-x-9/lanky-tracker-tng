import CratePool from '@renderer/components/pools/Crates'
import VanillaCrate from '@renderer/components/pools/VanillaCrate'
import { useMtnCrate } from '@renderer/hooks/japes'
import JapesCheck from '../check'

const MountainCrate: React.FC = () => (
  <CratePool>
    <VanillaCrate>
      <JapesCheck
        id={1060}
        name="Japes Crate: Behind the Mountain"
        region="Japes Hillside"
        canGetLogic={useMtnCrate()}
      />
    </VanillaCrate>
  </CratePool>
)

export default MountainCrate
