import GBPool from '@renderer/components/pools/GB'
import { useDiddyGoldGb } from '@renderer/hooks/galleon'
import GalleonCheck from '../../check'

const DiddyGold: React.FC = () => {
  const goldGb = useDiddyGoldGb()
  return (
  <GBPool>
    <GalleonCheck
      id={4011}
      name="Diddy's Gold Tower Barrel"
      region="Treasure Room"
      canGetLogic={goldGb.in}
      canGetBreak={goldGb.out}
    />
    </GBPool>
  )
}

export default DiddyGold
