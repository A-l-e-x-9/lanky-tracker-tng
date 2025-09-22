import BossPool from '@renderer/src/components/pools/Bosses'
import { usePlayFactory } from '@renderer/src/hooks/factory'
import { useAnyKong } from '@renderer/src/hooks/kongs'
import FactoryCheck from './check'

const BossCheck: React.FC = () => {
  const inStage = usePlayFactory()
  const anyKong = useAnyKong()
  return (
    <BossPool>
      <FactoryCheck
        id={3105}
        name="Factory Boss Defeated"
        region="Troff 'N' Scoff"
        canGetLogic={inStage && anyKong}
      />
    </BossPool>
  )
}

export default BossCheck
