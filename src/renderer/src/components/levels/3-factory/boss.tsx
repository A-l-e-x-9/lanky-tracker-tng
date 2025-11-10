import BossPool from '@renderer/components/pools/Bosses'
import { usePlayFactory } from '@renderer/hooks/factory'
import { useAnyKong } from '@renderer/hooks/kongs'
import FactoryCheck from './check'

const BossCheck: React.FC = () => {
  const inStage = usePlayFactory()
  const anyKong = useAnyKong()
  return (
    <BossPool>
      <FactoryCheck
        id={3105}
        name="Factory Boss"
        region="Bosses"
        canGetLogic={inStage.in && anyKong}
        canGetBreak={inStage.out && anyKong}
      />
    </BossPool>
  )
}

export default BossCheck
