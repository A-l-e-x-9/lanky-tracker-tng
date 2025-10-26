import GBPool from '@renderer/components/pools/GB'
import { useChunkyCannonGb } from '@renderer/hooks/galleon'
import GalleonCheck from '../../check'

const CannonGame: React.FC = () => {
  const cannonGb = useChunkyCannonGb()
  return (
  <GBPool>
    <GalleonCheck
      id={4041}
      name="Chunky's Cannon Game"
      region="Galleon Caves"
      canGetLogic={cannonGb.in}
      canGetBreak={cannonGb.out}
    />
    </GBPool>
  )
}

export default CannonGame
