import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import HiveTunnelEnemies from '../enemies/HiveTunnel'
import DkKasplat from '../kasplats/Dk'
import TinyKasplat from '../kasplats/Tiny'

const HiveTunnelChecks: React.FC = () => {
const isKremKaptureSeed = useDonkStore(useShallow((state) => state.winCondition.kremlingKapture)) ? 'foolish' : ''
return (
  <div className={`grid ${isKremKaptureSeed}`}>
    <DkKasplat />
    <TinyKasplat />
    <HiveTunnelEnemies />
  </div>
)
}

export default HiveTunnelChecks
