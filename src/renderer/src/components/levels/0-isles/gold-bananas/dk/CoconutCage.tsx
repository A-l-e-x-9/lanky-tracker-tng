import { useCheckDkCoconutCage } from '@renderer/src/hooks/isles'
import IslesCheck from '../../check'

const CoconutCage: React.FC = () => {
  const cage = useCheckDkCoconutCage()
  return (
    <IslesCheck id={2} name="Isles DK Coconut Cage" region="Krem Isle" canGetLogic={cage} />
  )
}

export default CoconutCage
