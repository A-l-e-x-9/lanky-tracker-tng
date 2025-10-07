import { useAnyKong } from '@renderer/hooks/kongs'
import IslesCheck from '../check'
import DropPool from '@renderer/components/pools/Drops'

const KremBaseEnemies: React.FC = () => {
return (
  <DropPool>
    <IslesCheck
      id={305}
      name="Enemy at Monkeyport Pad"
      region="K. Rool's Island"
      canGetLogic={useAnyKong()}
    />
  </DropPool>
  )
}

export default KremBaseEnemies
