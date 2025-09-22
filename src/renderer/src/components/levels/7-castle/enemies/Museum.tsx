import DropPool from '@renderer/src/components/pools/Drops'
import { usePlayCastle, useSlamCastle } from '@renderer/src/hooks/castle'
import { useDefeatKosha } from '@renderer/src/hooks/enemies'
import { useChunky, useCamera } from '@renderer/src/hooks/kongs'
import CastleCheck from '../check'

const MuseumEnemies: React.FC = () => {
  const inStage = usePlayCastle()
  const canSlam = useSlamCastle()
  const chunky = useChunky()
  const kosha = useDefeatKosha()
  const hasFairyCam = useCamera()
  return (
    <DropPool>
      <CastleCheck
        id={7361}
        name="Castle Enemy: Museum Start"
        region="Castle Rooms"
        canGetLogic={inStage && chunky && canSlam && kosha.in}
        canGetBreak={inStage && chunky && canSlam && kosha.out}
      />
      <CastleCheck
        id={7362}
        name="Castle Enemy: Museum Main 0"
        region="Castle Rooms"
        canGetLogic={inStage && chunky && canSlam}
      />
      <CastleCheck
        id={7363}
        name="Castle Enemy: Museum Main 1"
        region="Castle Rooms"
        canGetLogic={inStage && chunky && canSlam}
      />
      <CastleCheck
        id={7364}
        name="Castle Enemy: Museum Main 2"
        region="Castle Rooms"
        canGetLogic={inStage && chunky && canSlam}
      />
      <CastleCheck
        id={7365}
        name="Castle Enemy: Museum Main 3"
        region="Castle Rooms"
        canGetLogic={inStage && chunky && canSlam}
      />
      <CastleCheck
        id={7461}
        name="Castle Enemy Photo: Museum Start"
        region="Castle Rooms"
        canGetLogic={inStage && chunky && canSlam && hasFairyCam}
      />
      <CastleCheck
        id={7462}
        name="Castle Enemy Photo: Museum Main 0"
        region="Castle Rooms"
        canGetLogic={inStage && chunky && canSlam && hasFairyCam}
      />
      <CastleCheck
        id={7463}
        name="Castle Enemy Photo: Museum Main 1"
        region="Castle Rooms"
        canGetLogic={inStage && chunky && canSlam && hasFairyCam}
      />
      <CastleCheck
        id={7464}
        name="Castle Enemy Photo: Museum Main 2"
        region="Castle Rooms"
        canGetLogic={inStage && chunky && canSlam && hasFairyCam}
      />
      <CastleCheck
        id={7465}
        name="Castle Enemy Photo: Museum Main 3"
        region="Castle Rooms"
        canGetLogic={inStage && chunky && canSlam && hasFairyCam}
      />
    </DropPool>
  )
}

export default MuseumEnemies
