import ToughGoldenBanana from '@renderer/src/components/pools/ToughGoldenBanana'
import { useDkBlastGb } from '@renderer/src/hooks/caves'
import CavesCheck from '../../check'

const CavesBlast: React.FC = () => (
  <ToughGoldenBanana>
    <CavesCheck
      id={6001}
      name="Caves DK Baboon Blast"
      region="Main Caves Area"
      canGetLogic={useDkBlastGb()}
    />
  </ToughGoldenBanana>
)

export default CavesBlast
