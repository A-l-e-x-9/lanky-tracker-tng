import CratePool from '@renderer/components/pools/Crates'
import VanillaCrate from '@renderer/components/pools/VanillaCrate'
import { useGeneralOutskirts } from '@renderer/hooks/galleon'
import GalleonCheck from '../check'

const CactusCrate: React.FC = () => {
const canDo = useGeneralOutskirts()
return (
  <CratePool>
    <VanillaCrate>
      <GalleonCheck
        id={4060}
        name="Melon Crate in Front of Funky's"
        region="Shipyard Outskirts"
        canGetLogic={canDo.in}
        canGEtBreak={canDo.out}
      />
    </VanillaCrate>
  </CratePool>
)
}

export default CactusCrate
