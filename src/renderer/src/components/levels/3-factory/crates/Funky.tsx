import CratePool from '@renderer/components/pools/Crates'
import VanillaCrate from '@renderer/components/pools/VanillaCrate'
import { useGeneralTest } from '@renderer/hooks/factory'
import FactoryCheck from '../check'

const FunkyCrate: React.FC = () => {
const canDo = useGeneralTest()
return (
  <CratePool>
    <VanillaCrate>
      <FactoryCheck
        id={3061}
        name="Crate Near Funky's"
        region="Testing Room"
        canGetLogic={canDo.in}
        canGetBreak={canDo.out}
      />
    </VanillaCrate>
  </CratePool>
)
}

export default FunkyCrate
