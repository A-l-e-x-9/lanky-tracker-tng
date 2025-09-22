import BoulderPool from '@renderer/components/pools/Boulders'
import { useSatoriKomeiji } from '@renderer/hooks/caves'
import CavesCheck from '../check'

/*Version 5 of the Randomizer now allows you to have major rewards in the boulders that Chunky can toss. This is for the rocks in Crystal Caves.*/
const KooshyKomeiji: React.FC = () => {
  return (
    <BoulderPool>
        <CavesCheck
          id={6008}
          name="Caves Boulder: Small Boulder Near Ice Castle"
          region="Main Caves Area"
          canGetLogic={useSatoriKomeiji()}
        />
    </BoulderPool>
  )
}

export default KooshyKomeiji
