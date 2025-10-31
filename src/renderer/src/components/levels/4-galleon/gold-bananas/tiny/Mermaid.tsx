import GBPool from '@renderer/components/pools/GB'
import { useTinyMermaidGb } from '@renderer/hooks/galleon'
import GalleonCheck from '../../check'

const MermaidReward: React.FC = () => (
<GBPool>
  <GalleonCheck
    id={4030}
    name="The Mermaid's Reward"
    region="Lighthouse Area"
    canGetLogic={useTinyMermaidGb()}
  />
  </GBPool>
)

export default MermaidReward
