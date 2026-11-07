import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import GalleonSwim from '../gold-bananas/tiny/GalleonSwim'
import ChunkyKasplat from '../kasplats/Chunky'
import GalleonWrinkly from '../wrinkly/GalleonLobby'
import GalleonLobbyArenas from '../arenas/GalleonLobby'
import GalleonLobbyCrates from '../crates/GalleonLobby'
import GalleonLobbyDirt from '../dirt/GalleonLobby'
import GalleonLobbyKasplats from '../kasplats/GalleonLobby'
import { useKRoolKontracts } from '@renderer/hooks/isles'

const GalleonLobbyChecks: React.FC = () => {
const isBlueprintSeed = useKRoolKontracts('Blueprints') ? 'foolish' : ''
const isKRoolChallengeSeed = useDonkStore(useShallow((state) => state.winCondition.kRoolChallenge)) ? 'foolish' : ''
const kasplatsInRotation = useDonkStore(useShallow((state) => state.settings.poolBlueprints)) ? '' : 'foolish'
return (
  <>
  <div className="grid">
    <GalleonSwim />
    <GalleonWrinkly />
  </div>
  <div className={`grid ${((isBlueprintSeed || isKRoolChallengeSeed) && kasplatsInRotation)}`}>
    <ChunkyKasplat />
  </div>
  <div className="grid">
    <GalleonLobbyArenas />
    <GalleonLobbyCrates />
    <GalleonLobbyDirt />
  </div>
  <div className={`grid ${((isBlueprintSeed || isKRoolChallengeSeed) && kasplatsInRotation)}`}>
    <GalleonLobbyKasplats />
  </div>
  </>
)
}

export default GalleonLobbyChecks
