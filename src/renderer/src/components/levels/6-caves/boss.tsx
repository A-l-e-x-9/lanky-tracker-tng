import BossPool from '@renderer/components/pools/Bosses'
import { usePlayCaves } from '@renderer/hooks/caves'
import { useAnyKong } from '@renderer/hooks/kongs'
import { useAngryCaves } from '@renderer/hooks/settings'
import CavesCheck from './check'

const BossCheck: React.FC = () => {
  const inStage = usePlayCaves()
  const anyKong = useAnyKong()
  const angery = useAngryCaves()
  return (
    <BossPool>
      <CavesCheck
        id={6105}
        name="Caves Boss"
        region="Bosses"
        canGetLogic={inStage.in && !angery && anyKong}
        canGetBreak={(inStage.out || angery) && anyKong}
      />
    </BossPool>
  )
}

export default BossCheck
