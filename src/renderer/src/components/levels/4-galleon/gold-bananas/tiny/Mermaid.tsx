import { useTinyMermaidGb } from '@renderer/hooks/galleon'
import GalleonCheck from '../../check'

const MermaidReward: React.FC = () => (
  <GalleonCheck
    id={4030}
    name="The Mermaid's Reward"
    region="Lighthouse Area"
    canGetLogic={useTinyMermaidGb()}
  />
)

export default MermaidReward
