import BossPool from '@renderer/components/pools/Bosses'
import { usePlayCastle } from '@renderer/hooks/castle'
import { useAnyKong } from '@renderer/hooks/kongs'
import CastleCheck from './check'

const BossCheck: React.FC = () => {
  const inStage = usePlayCastle()
  const anyKong = useAnyKong()
  return (
    <BossPool>
      <CastleCheck
        id={7105}
        name="Castle Boss"
        region="Bosses"
        canGetLogic={inStage.in && anyKong}
        canGetBreak={inStage.out && anyKong}
      />
    </BossPool>
  )
}

export default BossCheck
