import CratePool from '@renderer/src/components/pools/Crates'
import VanillaCrate from '@renderer/src/components/pools/VanillaCrate'
import { useCrate } from '@renderer/src/hooks/castle'
import CastleCheck from '../check'

const MausoleumCrate: React.FC = () => {
const canDoCheck = useCrate()
return (
  <CratePool>
    <VanillaCrate>
      <CastleCheck
        id={7060}
        name="Castle Crate: Behind Mausoleum Entrance"
        region="Castle Underground"
        canGetLogic={canDoCheck.in}
        canGetBreak={canDoCheck.out}
      />
    </VanillaCrate>
  </CratePool>
)
}

export default MausoleumCrate
