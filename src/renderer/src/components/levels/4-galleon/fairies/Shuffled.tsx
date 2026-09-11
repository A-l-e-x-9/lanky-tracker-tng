import FairyPool from '@renderer/components/pools/Fairies'
import CavernFairies from './Caverns'
import LighthouseFairies from './Lighthouse'
import OutskirtFairies from './Outskirts'
import ShipFairies from './5DoorShip'
import TreasureFairies from './Treasure'

const ShuffledFairies: React.FC = () => {
  return (
    <FairyPool>
      <CavernFairies />
      <LighthouseFairies />
      <OutskirtFairies />
      <ShipFairies />
      <TreasureFairies />
    </FairyPool>
  )
}

export default ShuffledFairies
