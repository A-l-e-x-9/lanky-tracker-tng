import CratePool from '@renderer/components/pools/Crates'
import CavernCrates from './Caverns'
import LighthouseCrates from './Lighthouse'
import OutskirtCrates from './Outskirts'
import TreasureCrates from './Treasure'

const ShuffledCrates: React.FC = () => {
  return (
    <CratePool>
      <CavernCrates />
      <LighthouseCrates />
      <OutskirtCrates />
      <TreasureCrates />
    </CratePool>
  )
}

export default ShuffledCrates
