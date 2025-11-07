import GBPool from '@renderer/components/pools/GB'
import { useLankyChestGb } from '@renderer/hooks/galleon'
import GalleonCheck from '../../check'

const EnguardeChest: React.FC = () => {
const canDo = useLankyChestGb()
return (
<GBPool>
  <GalleonCheck
    id={4020}
    name="Enguarde's Chest Near the Mermaid"
    region="Lighthouse Area"
    canGetLogic={canDo.in}
    canGetBreak={canDo.out}
  />
  </GBPool>
)
}

export default EnguardeChest
