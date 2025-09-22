import CratePool from '@renderer/src/components/pools/Crates'
import VanillaCrate from '@renderer/src/components/pools/VanillaCrate'
import { useGeneralTest } from '@renderer/src/hooks/factory'
import FactoryCheck from '../check'

const FunkyCrate: React.FC = () => (
  <CratePool>
    <VanillaCrate>
      <FactoryCheck
        id={3061}
        name="Factory Crate: Near Funky"
        region="Testing Area"
        canGetLogic={useGeneralTest()}
      />
    </VanillaCrate>
  </CratePool>
)

export default FunkyCrate
