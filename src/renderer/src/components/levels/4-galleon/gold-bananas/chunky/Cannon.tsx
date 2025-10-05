import { useChunkyCannonGb } from '@renderer/hooks/galleon'
import GalleonCheck from '../../check'

const CannonGame: React.FC = () => {
  const cannonGb = useChunkyCannonGb()
  return (
    <GalleonCheck
      id={4041}
      name="Chunky's Cannon Game"
      region="Galleon Caverns"
      canGetLogic={cannonGb.in}
      canGetBreak={cannonGb.out}
    />
  )
}

export default CannonGame
