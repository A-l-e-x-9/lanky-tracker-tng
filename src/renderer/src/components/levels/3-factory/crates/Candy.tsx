import CratePool from '@renderer/components/pools/Crates'
import VanillaCrate from '@renderer/components/pools/VanillaCrate'
import { useGeneralThing } from '@renderer/hooks/factory'
import FactoryCheck from '../check'

const CandyCrate: React.FC = () => (
  <CratePool>
    <VanillaCrate>
      <FactoryCheck
        id={3060}
        name="Melon Crate in front of Candy"
        region="Storage and Arcade Area"
        canGetLogic={useGeneralThing()}
      />
    </VanillaCrate>
  </CratePool>
)

export default CandyCrate
