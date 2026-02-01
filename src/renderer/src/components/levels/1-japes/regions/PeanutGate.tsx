import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import PeanutGateEnemies from '../enemies/PeanutGate'
import PeanutTunnel from '../gold-bananas/diddy/PeanutTunnel'
import GrapeGate from '../gold-bananas/lanky/GrapeGate'
import FeatherGate from '../gold-bananas/tiny/FeatherGate'

const PeanutGateChecks: React.FC = () => {
const isKremKaptureSeed = useDonkStore(useShallow((state) => state.winCondition.kremlingKapture)) ? 'foolish' : ''
return (
  <>
  <div className="grid">
    <PeanutTunnel />
    <GrapeGate />
    <FeatherGate />
  </div>
  <div className={`grid ${isKremKaptureSeed}`}>
    <PeanutGateEnemies />
  </div>
  </>
)
}

export default PeanutGateChecks
