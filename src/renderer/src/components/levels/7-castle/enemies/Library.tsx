import DropPool from '@renderer/components/pools/Drops'
import { usePlayCastle, useSlamCastle } from '@renderer/hooks/castle'
import { useDefeatBat } from '@renderer/hooks/enemies'
import { useDk, useCamera } from '@renderer/hooks/kongs'
import CastleCheck from '../check'

const LibraryEnemies: React.FC = () => {
  const inStage = usePlayCastle()
  const canSlam = useSlamCastle()
  const dk = useDk()
  const bat = useDefeatBat()
  const hasFairyCam = useCamera()
  return (
    <DropPool>
      <CastleCheck
        id={7357}
        name="Castle Enemy: Library Gauntlet Fork Left 0"
        region="Castle Rooms"
        canGetLogic={inStage && dk && canSlam && bat.in}
        canGetBreak={inStage && dk && canSlam && bat.out}
      />
      <CastleCheck
        id={7358}
        name="Castle Enemy: Library Gauntlet Fork Left 1"
        region="Castle Rooms"
        canGetLogic={inStage && dk && canSlam && bat.in}
        canGetBreak={inStage && dk && canSlam && bat.out}
      />
      <CastleCheck
        id={7359}
        name="Castle Enemy: Library Gauntlet Fork Center"
        region="Castle Rooms"
        canGetLogic={inStage && dk && canSlam && bat.in}
        canGetBreak={inStage && dk && canSlam && bat.out}
      />
      <CastleCheck
        id={7360}
        name="Castle Enemy: Library Gauntlet Fork Right"
        region="Castle Rooms"
        canGetLogic={inStage && dk && canSlam && bat.in}
        canGetBreak={inStage && dk && canSlam && bat.out}
      />
      <CastleCheck
        id={7457}
        name="Castle Enemy Photo: Library Gauntlet Fork Left 0"
        region="Castle Rooms"
        canGetLogic={inStage && dk && canSlam && hasFairyCam}
      />
      <CastleCheck
        id={7458}
        name="Castle Enemy Photo: Library Gauntlet Fork Left 1"
        region="Castle Rooms"
        canGetLogic={inStage && dk && canSlam && hasFairyCam}
      />
      <CastleCheck
        id={7459}
        name="Castle Enemy Photo: Library Gauntlet Fork Center"
        region="Castle Rooms"
        canGetLogic={inStage && dk && canSlam && hasFairyCam}
      />
      <CastleCheck
        id={7460}
        name="Castle Enemy Photo: Library Gauntlet Fork Right"
        region="Castle Rooms"
        canGetLogic={inStage && dk && canSlam && hasFairyCam}
      />
      <CastleCheck
        id={7461}
        name="Castle Enemy Photo: Library Book 0"
        region="Castle Rooms"
        canGetLogic={inStage && dk && canSlam && hasFairyCam}
      />
      <CastleCheck
        id={7462}
        name="Castle Enemy Photo: Library Book 1"
        region="Castle Rooms"
        canGetLogic={inStage && dk && canSlam && hasFairyCam}
      />
      <CastleCheck
        id={7463}
        name="Castle Enemy Photo: Library Book 2"
        region="Castle Rooms"
        canGetLogic={inStage && dk && canSlam && hasFairyCam}
      />
      <CastleCheck
        id={7464}
        name="Castle Enemy Photo: Library Book 3"
        region="Castle Rooms"
        canGetLogic={inStage && dk && canSlam && hasFairyCam}
      />
      <CastleCheck
        id={7465}
        name="Castle Enemy Photo: Library Book 4"
        region="Castle Rooms"
        canGetLogic={inStage && dk && canSlam && hasFairyCam}
      />
      <CastleCheck
        id={7466}
        name="Castle Enemy Photo: Library Book 5"
        region="Castle Rooms"
        canGetLogic={inStage && dk && canSlam && hasFairyCam}
      />
    </DropPool>
  )
}

export default LibraryEnemies
