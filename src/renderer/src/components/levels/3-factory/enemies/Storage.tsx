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
        name="Factory Enemy: Shops 0"
        region="Storage And Arcade"
        canGetLogic={inStage && anyKong}
      />
      <FactoryCheck
        id={3301}
        name="Factory Enemy: Shops 1"
        region="Storage And Arcade"
        canGetLogic={inStage && anyKong}
      />
      <FactoryCheck
        id={3304}
        name="Factory Enemy: Storage Room"
        region="Storage And Arcade"
        canGetLogic={inStage && zinger}
      />
      <FactoryCheck
        id={3317}
        name="Factory Enemy: Dark Room 0"
        region="Storage And Arcade"
        canGetLogic={inStage && punch && zinger}
      />
      <FactoryCheck
        id={3318}
        name="Factory Enemy: Dark Room 1"
        region="Storage And Arcade"
        canGetLogic={inStage && punch && zinger}
      />
      <FactoryCheck
        id={3400}
        name="Factory Enemy Photo: Shops 0"
        region="Storage And Arcade"
        canGetLogic={inStage && anyKong && hasFairyCam}
      />
      <FactoryCheck
        id={3401}
        name="Factory Enemy Photo: Shops 1"
        region="Storage And Arcade"
        canGetLogic={inStage && anyKong && hasFairyCam}
      />
      <FactoryCheck
        id={3404}
        name="Factory Enemy Photo: Storage Room"
        region="Storage And Arcade"
        canGetLogic={inStage && zinger && hasFairyCam}
      />
      <FactoryCheck
        id={3417}
        name="Factory Enemy Photo: Dark Room 0"
        region="Storage And Arcade"
        canGetLogic={inStage && punch && zinger && hasFairyCam}
      />
      <FactoryCheck
        id={3418}
        name="Factory Enemy Photo: Dark Room 1"
        region="Storage And Arcade"
        canGetLogic={inStage && punch && zinger && hasFairyCam}
      />
    </DropPool>
  )
}

export default StorageEnemies
