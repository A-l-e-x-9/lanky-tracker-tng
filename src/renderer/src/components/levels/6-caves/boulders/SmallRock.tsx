import BoulderPool from '@renderer/components/pools/Boulders'
import { useSatoriKomeiji } from '@renderer/hooks/caves'
import CavesCheck from '../check'

/*Version 5 of the Randomizer now allows you to have major rewards in the boulders that Chunky can toss. This is for the rocks in Crystal Caves.

Also, lol Touhou references, amirite? xD*/
const KooshyKomeiji: React.FC = () => {
const heartThrobbingAdventure = useSatoriKomeiji()
  return (
    <BoulderPool>
        <CavesCheck
          id={6008}
          name="Small Boulder Near Ice Castle"
          region="Crystal Caves Main"
          canGetLogic={heartThrobbingAdventure.in}
          canGetBreak={heartThrobbingAdventure.out}
        />
    </BoulderPool>
  )
}

export default KooshyKomeiji
