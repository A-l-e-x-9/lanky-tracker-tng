import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import GuitarPad from '../gold-bananas/diddy/GuitarPad'
import CavesLava from '../gold-bananas/dk/CavesLava'
import LankyKasplat from '../kasplats/Lanky'
import CavesLobbyDK from '../wrinkly/CavesLobbyDK'
import CavesLobbyDiddy from '../wrinkly/CavesLobbyDiddy'
import CavesLobbyLanky from '../wrinkly/CavesLobbyLanky'
import CavesLobbyTiny from '../wrinkly/CavesLobbyTiny'
import CavesLobbyChunky from '../wrinkly/CavesLobbyChunky'
import CavesLobbyBoulder from '../boulders/CavesLobby'

const CavesLobbyChecks: React.FC = () => {
const isKremKaptureSeed = useDonkStore(useShallow((state) => state.winCondition.kremlingKapture)) ? 'foolish' : ''
const isBlueprintSeed = useDonkStore(useShallow((state) => state.winCondition.blueprints)) ? 'foolish' : ''
const isKRoolChallengeSeed = useDonkStore(useShallow((state) => state.winCondition.kRoolChallenge)) ? 'foolish' : ''
const kasplatsInRotation = useDonkStore(useShallow((state) => state.settings.poolBlueprints)) ? '' : 'foolish'
return (
  <>
  <div className="grid">
    <CavesLava />
    <GuitarPad />
    <CavesLobbyBoulder />
    <CavesLobbyDK />
    <CavesLobbyDiddy />
    <CavesLobbyLanky />
    <CavesLobbyTiny />
    <CavesLobbyChunky />
  </div>
  <div className={`grid ${isKremKaptureSeed} ${isBlueprintSeed && kasplatsInRotation} ${isKRoolChallengeSeed && kasplatsInRotation}`}>
    <LankyKasplat />
  </div>
  </>
)
}

export default CavesLobbyChecks
