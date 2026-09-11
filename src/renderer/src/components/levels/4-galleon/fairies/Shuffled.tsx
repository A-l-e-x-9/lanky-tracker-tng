import FairyPool from '@renderer/components/pools/Fairies'
import CavernFairies from './Caverns'
import LighthouseFairies from './Lighthouse'
import OutskirtFairies from './Outskirts'
import ShipFairies from './5DoorShip'
import TreasureFairies from './Treasure'

const ShuffledFairies: React.FC = () => {
  const canReachHypeChest = useTinyClams()
  return (
    <FairyPool>
      <CavernFairies />
      <LighthouseFairies />
      <OutskirtFairies />
      <ShipFairies />
      <TreasureFairies />
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
