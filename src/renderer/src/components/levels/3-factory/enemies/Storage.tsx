import DropPool from '@renderer/components/pools/Drops'
import { useDefeatZinger } from '@renderer/hooks/enemies'
import { usePlayFactory } from '@renderer/hooks/factory'
import { useAnyKong, usePunch, useCamera } from '@renderer/hooks/kongs'
import FactoryCheck from '../check'

const StorageEnemies: React.FC = () => {
  const inStage = usePlayFactory()
  const punch = usePunch()
  const anyKong = useAnyKong()
  const zinger = useDefeatZinger()
  const hasFairyCam = useCamera()
  return (
    <DropPool>
      <FactoryCheck
        id={3300}
        name="Enemy 0 in front of Cranky/Candy"
        region="Storage and Arcade Area"
        canGetLogic={inStage && anyKong}
      />
      <FactoryCheck
        id={3301}
        name="Enemy 1 in front of Cranky/Candy"
        region="Storage and Arcade Area"
        canGetLogic={inStage && anyKong}
      />
      <FactoryCheck
        id={3304}
        name="Enemy patrolling Chunky's Cage"
        region="Storage and Arcade Area"
        canGetLogic={inStage && zinger.in}
        canGetBreak={inStage && zinger.out}
      />
      <FactoryCheck
        id={3317}
        name="Dark Room Enemy 0"
        region="Storage and Arcade Area"
        canGetLogic={inStage && punch && zinger.in}
        canGetBreak={inStage && punch && zinger.out}
      />
      <FactoryCheck
        id={3318}
        name="Dark Room Enemy 1"
        region="Storage and Arcade Area"
        canGetLogic={inStage && punch && zinger.in}
        canGetBreak={inStage && punch && zinger.out}
      />
      <FactoryCheck
        id={3400}
        name="Photo of Enemy 0 in front of Cranky/Candy"
        region="Storage and Arcade Area"
        canGetLogic={inStage && anyKong && hasFairyCam}
      />
      <FactoryCheck
        id={3401}
        name="Photo of Enemy 1 in front of Cranky/Candy"
        region="Storage and Arcade Area"
        canGetLogic={inStage && anyKong && hasFairyCam}
      />
      <FactoryCheck
        id={3404}
        name="Photo of enemy patrolling Chunky's Cage"
        region="Storage and Arcade Area"
        canGetLogic={inStage && zinger && hasFairyCam}
      />
      <FactoryCheck
        id={3417}
        name="Photo of Dark Room Enemy 0"
        region="Storage and Arcade Area"
        canGetLogic={inStage && punch && hasFairyCam}
      />
      <FactoryCheck
        id={3418}
        name="Photo of Dark Room Enemy 1"
        region="Storage and Arcade Area"
        canGetLogic={inStage && punch && hasFairyCam}
      />
    </DropPool>
  )
}

export default StorageEnemies
