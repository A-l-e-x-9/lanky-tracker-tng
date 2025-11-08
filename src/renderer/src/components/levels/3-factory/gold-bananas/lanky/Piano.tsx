import GBPool from '@renderer/components/pools/GB'
import { useLankyPianoGb } from '@renderer/hooks/factory'
import FactoryCheck from '../../check'

const PianoGame: React.FC = () => {
const pressFToPayRespects = useLankyPianoGb()
return (
<GBPool>
  <FactoryCheck
    id={3021}
    name="Lanky's Damn Piano Game"
    region="R&D Room"
    canGetLogic={pressFToPayRespects.in}
    canGetBreak={pressFToPayRespects.out}
  />
  </GBPool>
)
}

export default PianoGame
