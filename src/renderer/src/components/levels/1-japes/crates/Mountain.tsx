import CratePool from '@renderer/components/pools/Crates'
import VanillaCrate from '@renderer/components/pools/VanillaCrate'
import { useMtnCrate } from '@renderer/hooks/japes'
import JapesCheck from '../check'

const MountainCrate: React.FC = () => {
const canDo = useMtnCrate()
return (
  <CratePool>
    <VanillaCrate>
      <JapesCheck
        id={1060}
        name="Melon Crate Behind the Mountain"
        region="Japes Hillside"
        canGetLogic={canDo.in}
        canGetBreak={canDo.out}
      />
    </VanillaCrate>
  </CratePool>
)
}

export default MountainCrate
