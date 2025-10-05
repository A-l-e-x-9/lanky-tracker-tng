import { useAnyKong, useCamera } from '@renderer/hooks/kongs'
import IslesCheck from '../check'
import DropPool from '@renderer/components/pools/Drops'

const KremBaseEnemies: React.FC = () => {
const hasFairyCam = useCamera()
return (
  <DropPool>
    <IslesCheck
      id={305}
      name="Enemy at Monkeyport Pad"
      region="K. Rool's Island"
      canGetLogic={useAnyKong()}
    />
    <IslesCheck
      id={405}
      name="Photo of Enemy at Monkeyport Pad"
      region="K. Rool's Island"
      canGetLogic={useAnyKong() && hasFairyCam}
    />
  </DropPool>
  )
}

export default KremBaseEnemies
