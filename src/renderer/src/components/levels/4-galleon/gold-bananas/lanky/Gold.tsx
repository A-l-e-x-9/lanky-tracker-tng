import GBPool from '@renderer/components/pools/GB'
import { useLankyGoldGb } from '@renderer/hooks/galleon'
import GalleonCheck from '../../check'

const LankyGold: React.FC = () => {
  const goldGb = useLankyGoldGb()
  return (
  <GBPool>
    <GalleonCheck
      id={4021}
      name="Lanky's Gold Tower Barrel"
      region="Treasure Room"
      canGetLogic={goldGb.in}
      canGetBreak={goldGb.out}
    />
    </GBPool>
  )
}

export default LankyGold
