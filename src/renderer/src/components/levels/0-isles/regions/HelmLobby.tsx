import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import HelmBarrel from '../gold-bananas/chunky/HelmBarrel'
import DkKasplat from '../kasplats/Dk'

const HelmLobbyChecks: React.FC = () => {
const isKremKaptureSeed = useDonkStore(useShallow((state) => state.winCondition.kremlingKapture)) ? 'foolish' : ''
return (
  <>
  <div className={`grid ${isKremKaptureSeed}`}>
    <DkKasplat />
  </div>
  <div className="grid">
    <HelmBarrel />
  </div>
  </>
)
}

export default HelmLobbyChecks
