import CratePool from '@renderer/components/pools/Crates'
import VanillaCrate from '@renderer/components/pools/VanillaCrate'
import { useForestOwl } from '@renderer/hooks/forest'
import ForestCheck from '../check'

const OwlCrate: React.FC = () => {
const canDo = useForestOwl()
return (
  <CratePool>
    <VanillaCrate>
      <ForestCheck
        id={5061}
        name="Melon Crate in grass near big tree"
        region="Forest Area 4"
        canGetLogic={canDo.in}
        canGetBreak={canDo.out}
      />
    </VanillaCrate>
  </CratePool>
)
}

export default OwlCrate
