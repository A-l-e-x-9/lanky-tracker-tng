import BreakablePool from '@renderer/components/pools/Breakable'
import { useChunkyChestGb } from '@renderer/hooks/galleon'
import GalleonCheck from '../check'

const MiddleChest: React.FC = () => {
const falconPunch = useChunkyChestGb()
  return (
    <BreakablePool>
      <GalleonCheck
        id={46700}
        name="Chunky's middle chest"
        region="Galleon Caves"
        canGetLogic={falconPunch.in}
        canGetBreak={falconPunch.out}
      />
    </BreakablePool>
  )
}

export default MiddleChest
