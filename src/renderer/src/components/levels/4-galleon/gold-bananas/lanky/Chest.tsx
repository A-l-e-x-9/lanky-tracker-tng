import { useLankyChestGb } from '@renderer/hooks/galleon'
import GalleonCheck from '../../check'

const EnguardeChest: React.FC = () => (
  <GalleonCheck
    id={4020}
    name="Enguarde's Chest Near the Mermaid"
    region="Lighthouse Area"
    canGetLogic={useLankyChestGb()}
  />
)

export default EnguardeChest
