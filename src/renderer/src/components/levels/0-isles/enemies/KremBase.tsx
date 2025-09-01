import { useAnyKong, useCamera } from '@renderer/hooks/kongs'
import IslesCheck from '../check'
import DropPool from '@renderer/components/pools/Drops'

const KremBaseEnemies: React.FC = () => (
  <DropPool>
    <IslesCheck
      id={305}
      name="Isles Enemy: Monkeyport Pad"
      region="Krem Isle"
      canGetLogic={useAnyKong()}
    />
    <IslesCheck
      id={405}
      name="Isles Enemy Photo: Monkeyport Pad"
      region="Krem Isle"
      canGetLogic={useAnyKong() && useCamera()}
    />
  </DropPool>
)

export default KremBaseEnemies
