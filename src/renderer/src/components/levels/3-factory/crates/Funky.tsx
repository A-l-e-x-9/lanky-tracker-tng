import CratePool from '@renderer/components/pools/Crates'
import VanillaCrate from '@renderer/components/pools/VanillaCrate'
import { useGeneralTest } from '@renderer/hooks/factory'
import FactoryCheck from '../check'

const FunkyCrate: React.FC = () => (
  <CratePool>
    <VanillaCrate>
      <FactoryCheck
        id={3061}
        name="Crate Near Funky's"
        region="Testing Room"
        canGetLogic={useGeneralTest()}
      />
    </VanillaCrate>
  </CratePool>
)

export default FunkyCrate
