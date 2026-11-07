import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import CastleLobby, { CastleLobbyDirt } from '../dirt/CastleLobby'
import CastleLobbyEnemies from '../enemies/CastleLobby'
import CastleBarrel from '../gold-bananas/lanky/CastleBarrel'
import DiddyKasplat from '../kasplats/Diddy'
import CastleLobbyBoulder from '../boulders/CastleLobby'
import CastleWrinkly from '../wrinkly/CastleLobby'
import CastleLobbyArenas from '../arenas/CastleLobby'
import CastleLobbyCrates from '../crates/CastleLobby'
import CastleLobbyFairies from '../fairies/CastleLobby'
import CastleLobbyKasplats from '../kasplats/CastleLobby'
import { useKRoolKontracts } from '@renderer/hooks/isles'

const CastleLobbyChecks: React.FC = () => {
const isFairySeed = useKRoolKontracts('Fairies') ? 'foolish' : ''
const isBlueprintSeed = useKRoolKontracts('Blueprints') ? 'foolish' : ''
const isKRoolChallengeSeed = useDonkStore(useShallow((state) => state.winCondition.kRoolChallenge)) ? 'foolish' : ''
const fairiesInRotation = useDonkStore(useShallow((state) => state.settings.poolFairies)) ? '' : 'foolish'
const kasplatsInRotation = useDonkStore(useShallow((state) => state.settings.poolBlueprints)) ? '' : 'foolish'
return (
  <>
  <div className="grid">
    <CastleBarrel />
    <CastleLobby />
    <CastleLobbyBoulder />
    <CastleWrinkly />
  </div>
  <div className={`grid ${((isBlueprintSeed || isKRoolChallengeSeed) && kasplatsInRotation)}`}>
     <DiddyKasplat />
  </div>
  <div className="grid">
    <CastleLobbyEnemies />
    <CastleLobbyArenas />
    <CastleLobbyCrates />
    <CastleLobbyDirt />
  </div>
  <div className={`grid ${isFairySeed && fairiesInRotation}`}>
    <CastleLobbyFairies />
  </div>
  <div className={`grid ${((isBlueprintSeed || isKRoolChallengeSeed) && kasplatsInRotation)}`}>
    <CastleLobbyKasplats />
  </div>
  </>
)
}

export default CastleLobbyChecks
