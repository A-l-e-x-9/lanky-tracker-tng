import BossPool from '@renderer/src/components/pools/Bosses'
import { usePlayForest } from '@renderer/src/hooks/forest'
import { useAnyKong } from '@renderer/src/hooks/kongs'
import ForestCheck from './check'

const BossCheck: React.FC = () => {
  const inStage = usePlayForest()
  const anyKong = useAnyKong()
  return (
    <BossPool>
      <ForestCheck
        id={5105}
        name="Forest Boss Defeated"
        region="Troff 'N' Scoff"
        canGetLogic={inStage && anyKong}
      />
    </BossPool>
  )
}

export default BossCheck
