import GBPool from '@renderer/components/pools/GB'
import { useLankyPianoGb } from '@renderer/hooks/factory'
import FactoryCheck from '../../check'

const PianoGame: React.FC = () => (
<GBPool>
  <FactoryCheck
    id={3021}
    name="Lanky's Piano Game"
    region="R&D Room"
    canGetLogic={useLankyPianoGb()}
  />
  </GBPool>
)

export default PianoGame
