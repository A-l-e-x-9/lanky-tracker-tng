import GBPool from '@renderer/components/pools/GB'
import { useCheckDkCoconutCage } from '@renderer/hooks/isles'
import IslesCheck from '../../check'

const CoconutCage: React.FC = () => {
  const cage = useCheckDkCoconutCage()
  return (
  <GBPool>
    <IslesCheck id={2} name="DK's Coconut Cage" region="K. Rool's Island" canGetLogic={cage} />
    </GBPool>
  )
}

export default CoconutCage
