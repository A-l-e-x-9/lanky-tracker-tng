import GBPool from '@renderer/components/pools/GB'
import { useCheckChunkyCage } from '@renderer/hooks/isles'
import IslesCheck from '../../check'

const PineappleCage: React.FC = () => {
  const cage = useCheckChunkyCage()
  return (
  <GBPool>
    <IslesCheck id={40} name="Chunky's Pineapple Cage" region="DK Island" canGetLogic={cage} />
    </GBPool>
  )
}

export default PineappleCage
