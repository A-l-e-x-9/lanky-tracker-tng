import FairyPool from '@renderer/components/pools/Fairies'
import CavernFairies from './Caverns'
import LighthouseFairies from './Lighthouse'
import OutskirtFairies from './Outskirts'
import ShipFairies from './5DoorShip'
import TreasureFairies from './Treasure'

const ShuffledFairies: React.FC = () => {
  const hasCam = useCamera()
  const vanillaFairy2 = useShipFairy()
  const canReachOutskirts = useGalleonOutskirts()
  const canReachLighthouse = useGalleonLighthouseArea()
  const canReachLanky5DS = useLanky5DoorShipGb()
  const canReachTiny2DS = useTiny2DoorShipGb()
  const canReachSub = useTinySubGb()
  const canReachHypeChest = useTinyClams()
  return (
    <FairyPool>
      <CavernFairies />
      <LighthouseFairies />
      <OutskirtFairies />
      <ShipFairies />
      <TreasureFairies />
      <GalleonCheck
        id={44001}
        name="Shuffled Fairy: Vanilla Location #2 (Tiny's 5DS room)"
        region="5 Door Ship"
        canGetLogic={vanillaFairy2.in}
        canGetBreak={vanillaFairy2.out}
      />
      <GalleonCheck
        id={44006}
        name="Shuffled Fairy: Underwater between 5DS and 2DS"
        region="Shipyard Outskirts"
        canGetLogic={canReachOutskirts.in && hasDiving.in && hasCam}
        canGetBreak={canReachOutskirts.out && hasDiving.out && hasCam}
      />
      <GalleonCheck
        id={44007}
        name="Shuffled Fairy: Underwater between 5DS and Candy's"
        region="Shipyard Outskirts"
        canGetLogic={canReachOutskirts.in && hasDiving.in && hasCam}
        canGetBreak={canReachOutskirts.out && hasDiving.out && hasCam}
      />
      <GalleonCheck
        id={44008}
        name="Shuffled Fairy: At the &quot;cactus&quot;"
        region="Shipyard Outskirts"
        canGetLogic={canReachOutskirts.in && hasCam}
        canGetBreak={canReachOutskirts.out && hasCam}
      />
      <GalleonCheck
        id={44013}
        name="Shuffled Fairy: In Lanky's 5DS room"
        region="5 Door Ship"
        canGetLogic={canReachLanky5DS.in && hasCam}
        canGetBreak={canReachLanky5DS.out && hasCam}
      />
      <GalleonCheck
        id={44014}
        name="Shuffled Fairy: In Tiny's 2DS room"
        region="Shipyard Outskirts"
        canGetLogic={canReachTiny2DS.in && hasCam}
        canGetBreak={canReachTiny2DS.out && hasCam}
      />
      <GalleonCheck
        id={44015}
        name="Shuffled Fairy: In the Foghorn"
        region="Shipyard Outskirts"
        canGetLogic={canReachSub.in && hasCam}
        canGetBreak={canReachSub.out && hasCam}
      />
      <GalleonCheck
        id={44016}
        name="Shuffled Fairy: In the Hype Chest"
        region="Treasure Room"
        canGetLogic={canReachHypeChest.in && hasCam}
        canGetBreak={canReachHypeChest.out && hasCam}
      />
    </FairyPool>
  )
}

export default ShuffledFairies
