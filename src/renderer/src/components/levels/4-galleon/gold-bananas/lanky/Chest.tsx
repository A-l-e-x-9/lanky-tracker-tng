import GBPool from '@renderer/components/pools/GB'
import { useLankyChestGb } from '@renderer/hooks/galleon'
import GalleonCheck from '../../check'

const EnguardeChest: React.FC = () => (
<GBPool>
  <GalleonCheck
    id={4020}
    name="Enguarde's Chest Near the Mermaid"
    region="Lighthouse Area"
    canGetLogic={useLankyChestGb()}
  />
  </GBPool>
)

export default EnguardeChest
