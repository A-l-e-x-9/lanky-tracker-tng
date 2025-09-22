/*Version 5 of the DK64 Randomizer, currently in the Dev Branch, allows you to take pictures of enemies to complete checks. This file accounts for some enemies that only have these checks and can't be killed normally for Dropsanity.*/
import DropPool from '@renderer/src/components/pools/Drops'
import { useGalleonOutskirts, useDk5DoorShipGb, useDiddy5DoorShipGb, useLanky5DoorShipGb, useTiny5DoorShipGb, useChunky5DoorShipGb, useTiny2DoorShipGb, useTinySubGb } from '@renderer/src/hooks/galleon'
import { useCamera, useDive } from '@renderer/src/hooks/kongs'
import GalleonCheck from '../check'

const UnderwaterEnemies: React.FC = () => {
  const hasFairyCam = useCamera()
  const canReachShips = useGalleonOutskirts()
  const hasDiving = useDive()
  const canReachDK5DS = useDk5DoorShipGb()
  const canReachDiddy5DS = useDiddy5DoorShipGb()
  const canReachLanky5DS = useLanky5DoorShipGb()
  const canReachTiny5DS = useTiny5DoorShipGb()
  const canReachChunky5DS = useChunky5DoorShipGb()
  const canReach2DS = useTiny2DoorShipGb()
  const canReachSub = useTinySubGb()
  return (
    <DropPool>
      <GalleonCheck
        id={4409}
        name="Galleon Enemy Photo: In front of sub and Tiny barrel"
        region="Shipyard Outskirts"
        canGetLogic={hasFairyCam && canReachShips && hasDiving}
      />
      <GalleonCheck
        id={4410}
        name="Galleon Enemy Photo: Around bottom of 5-Door Ship 0"
        region="Shipyard Outskirts"
        canGetLogic={hasFairyCam && canReachShips && hasDiving}
      />
      <GalleonCheck
        id={4411}
        name="Galleon Enemy Photo: Around bottom of 5-Door Ship 1"
        region="Shipyard Outskirts"
        canGetLogic={hasFairyCam && canReachShips && hasDiving}
      />
      <GalleonCheck
        id={4412}
        name="Galleon Enemy Photo: Inside DK's 5-Door Ship room 0"
        region="5 Door Ship"
        canGetLogic={hasFairyCam && canReachDK5DS}
      />
      <GalleonCheck
        id={4413}
        name="Galleon Enemy Photo: Inside DK's 5-Door Ship room 1"
        region="5 Door Ship"
        canGetLogic={hasFairyCam && canReachDK5DS}
      />
      <GalleonCheck
        id={4414}
        name="Galleon Enemy Photo: Inside DK's 5-Door Ship room 2"
        region="5 Door Ship"
        canGetLogic={hasFairyCam && canReachDK5DS}
      />
      <GalleonCheck
        id={4415}
        name="Galleon Enemy Photo: Inside Diddy's 5-Door Ship room"
        region="5 Door Ship"
        canGetLogic={hasFairyCam && canReachDiddy5DS}
      />
      <GalleonCheck
        id={4416}
        name="Galleon Enemy Photo: Inside Lanky's 5-Door Ship room"
        region="5 Door Ship"
        canGetLogic={hasFairyCam && canReachLanky5DS}
      />
      <GalleonCheck
        id={4417}
        name="Galleon Enemy Photo: Inside Tiny's 5-Door Ship room, in the GB cage"
        region="5 Door Ship"
        canGetLogic={hasFairyCam && canReachTiny5DS}
      />
      <GalleonCheck
        id={4418}
        name="Galleon Enemy Photo: Inside Tiny's 5-Door Ship room, on the bed"
        region="5 Door Ship"
        canGetLogic={hasFairyCam && canReachTiny5DS}
      />
      <GalleonCheck
        id={4419}
        name="Galleon Enemy Photo: Inside Chunky's 5-Door Ship room"
        region="5 Door Ship"
        canGetLogic={hasFairyCam && canReachChunky5DS}
      />
      <GalleonCheck
        id={4420}
        name="Galleon Enemy Photo: Inside Tiny's 2-Door Ship room, near entrance"
        region="Shipyard Outskirts"
        canGetLogic={hasFairyCam && canReach2DS}
      />
      <GalleonCheck
        id={4421}
        name="Galleon Enemy Photo: Inside Tiny's 2-Door Ship room, near Bonus Barrel"
        region="Shipyard Outskirts"
        canGetLogic={hasFairyCam && canReach2DS}
      />
      <GalleonCheck
        id={4422}
        name="Galleon Enemy Photo: Inside Tiny's sub, near entrance left"
        region="Shipyard Outskirts"
        canGetLogic={hasFairyCam && canReachSub}
      />
      <GalleonCheck
        id={4423}
        name="Galleon Enemy Photo: Inside Tiny's sub, near entrance right"
        region="Shipyard Outskirts"
        canGetLogic={hasFairyCam && canReachSub}
      />
      <GalleonCheck
        id={4424}
        name="Galleon Enemy Photo: Inside Tiny's sub, near Bonus Barrel left"
        region="Shipyard Outskirts"
        canGetLogic={hasFairyCam && canReachSub}
      />
      <GalleonCheck
        id={4425}
        name="Galleon Enemy Photo: Inside Tiny's sub, near Bonus Barrel right"
        region="Shipyard Outskirts"
        canGetLogic={hasFairyCam && canReachSub}
      />
    </DropPool>
  )
}

export default UnderwaterEnemies
