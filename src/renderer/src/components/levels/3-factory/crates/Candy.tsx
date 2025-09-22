import CratePool from '@renderer/src/components/pools/Crates'
import VanillaCrate from '@renderer/src/components/pools/VanillaCrate'
import { useGeneralThing } from '@renderer/src/hooks/factory'
import FactoryCheck from '../check'

const CandyCrate: React.FC = () => (
  <CratePool>
    <VanillaCrate>
      <FactoryCheck
        id={3060}
        name="Factory Crate: Near Candy"
        region="Storage And Arcade"
        canGetLogic={useGeneralThing()}
      />
    </VanillaCrate>
  </CratePool>
)

export default CandyCrate
