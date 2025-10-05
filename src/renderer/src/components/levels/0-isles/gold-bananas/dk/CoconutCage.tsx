import { useCheckDkCoconutCage } from '@renderer/hooks/isles'
import IslesCheck from '../../check'

const CoconutCage: React.FC = () => {
  const cage = useCheckDkCoconutCage()
  return (
    <IslesCheck id={2} name="DK's Coconut Cage" region="K. Rool's Island" canGetLogic={cage} />
  )
}

export default CoconutCage
