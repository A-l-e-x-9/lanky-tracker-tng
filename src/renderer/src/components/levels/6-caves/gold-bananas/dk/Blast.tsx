import GBPool from '@renderer/components/pools/GB'
//import ToughGoldenBanana from '@renderer/components/pools/ToughGoldenBanana'
import { useDkBlastGb } from '@renderer/hooks/caves'
import CavesCheck from '../../check'

const CavesBlast: React.FC = () => (
//  <ToughGoldenBanana>
<GBPool>
    <CavesCheck
      id={6001}
      name="Baboon Blast Barrel"
      region="Crystal Caves Main"
      canGetLogic={useDkBlastGb()}
    />
    </GBPool>
//  </ToughGoldenBanana>
)

export default CavesBlast
