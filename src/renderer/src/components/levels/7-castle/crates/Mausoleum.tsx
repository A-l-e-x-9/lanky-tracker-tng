import CratePool from '@renderer/components/pools/Crates'
import VanillaCrate from '@renderer/components/pools/VanillaCrate'
import { useCrate } from '@renderer/hooks/castle'
import CastleCheck from '../check'

const MausoleumCrate: React.FC = () => {
const canDoCheck = useCrate()
return (
  <CratePool>
    <VanillaCrate>
      <CastleCheck
        id={7060}
        name="Melon Crate Behind Mausoleum"
        region="Castle Crypt and Dungeon"
        canGetLogic={canDoCheck.in}
        canGetBreak={canDoCheck.out}
      />
    </VanillaCrate>
  </CratePool>
)
}

export default MausoleumCrate
