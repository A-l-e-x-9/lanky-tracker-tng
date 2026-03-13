import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import HelmBarrel from '../gold-bananas/chunky/HelmBarrel'
import DkKasplat from '../kasplats/Dk'

const HelmLobbyChecks: React.FC = () => {
const isKremKaptureSeed = useDonkStore(useShallow((state) => state.winCondition.kremlingKapture)) ? 'foolish' : ''
const isBlueprintSeed = useDonkStore(useShallow((state) => state.winCondition.blueprints)) ? 'foolish' : ''
const isKRoolChallengeSeed = useDonkStore(useShallow((state) => state.winCondition.kRoolChallenge)) ? 'foolish' : ''
const kasplatsInRotation = useDonkStore(useShallow((state) => state.settings.poolBlueprints)) ? '' : 'foolish'
return (
  <>
  <div className={`grid ${isKremKaptureSeed} ${((isBlueprintSeed || isKRoolChallengeSeed) && kasplatsInRotation)}`}>
    <DkKasplat />
  </div>
  <div className="grid">
    <HelmBarrel />
  </div>
  </>
)
}

export default HelmLobbyChecks
