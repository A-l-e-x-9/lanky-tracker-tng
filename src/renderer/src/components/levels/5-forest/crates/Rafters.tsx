import CratePool from '@renderer/components/pools/Crates'
import VanillaCrate from '@renderer/components/pools/VanillaCrate'
import { useGeneralThing } from '@renderer/hooks/forest'
import ForestCheck from '../check'

const RaftersCrate: React.FC = () => {
const canDo = useGeneralThing()
return (
  <CratePool>
    <VanillaCrate>
      <ForestCheck
        id={5060}
        name="Melon Crate behind Diddy's dark rafter barn"
        region="Forest Area 1"
        canGetLogic={canDo.in}
        canGetBreak={canDo.out}
      />
    </VanillaCrate>
  </CratePool>
)

export default RaftersCrate
