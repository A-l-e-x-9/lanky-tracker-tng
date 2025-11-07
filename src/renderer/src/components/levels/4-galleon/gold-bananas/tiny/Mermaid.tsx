import GBPool from '@renderer/components/pools/GB'
import { useTinyMermaidGb } from '@renderer/hooks/galleon'
import GalleonCheck from '../../check'

const MermaidReward: React.FC = () => {
const canDo = useTinyMermaidGb()
return (
<GBPool>
  <GalleonCheck
    id={4030}
    name="The Mermaid's Reward"
    region="Lighthouse Area"
    canGetLogic={canDo.in}
    canGetBreak={canDo.out}
  />
  </GBPool>
  )
}

export default MermaidReward
