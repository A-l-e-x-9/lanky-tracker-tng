import DropPool from '@renderer/components/pools/Drops'
import { useDefeatZinger } from '@renderer/hooks/enemies'
import { usePlayFactory } from '@renderer/hooks/factory'
import { useAnyKong, usePunch } from '@renderer/hooks/kongs'
import FactoryCheck from '../check'

const StorageEnemies: React.FC = () => {
  const inStage = usePlayFactory()
  const punch = usePunch()
  const anyKong = useAnyKong()
  const zinger = useDefeatZinger()
  return (
    <DropPool>
      <FactoryCheck
        id={3300}
        name="Enemy 0 in front of Cranky/Candy"
        region="Storage and Arcade Area"
        canGetLogic={inStage.in && anyKong}
        canGetBreak={inStage.out && anyKong}
      />
      <FactoryCheck
        id={3301}
        name="Enemy 1 in front of Cranky/Candy"
        region="Storage and Arcade Area"
        canGetLogic={inStage.in && anyKong}
        canGetBreak={inStage.out && anyKong}
      />
      <FactoryCheck
        id={3304}
        name="Enemy patrolling Chunky's Cage"
        region="Storage and Arcade Area"
        canGetLogic={inStage.in && zinger.in}
        canGetBreak={inStage.out && zinger.out}
      />
      <FactoryCheck
        id={3317}
        name="Dark Room Enemy 0"
        region="Storage and Arcade Area"
        canGetLogic={inStage.in && punch && zinger.in}
        canGetBreak={inStage.out && punch && zinger.out}
      />
      <FactoryCheck
        id={3318}
        name="Dark Room Enemy 1"
        region="Storage and Arcade Area"
        canGetLogic={inStage.in && punch && zinger.in}
        canGetBreak={inStage.out && punch && zinger.out}
      />
    </DropPool>
  )
}

export default StorageEnemies
