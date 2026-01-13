import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import CastleLobby from '../dirt/CastleLobby'
import CastleLobbyEnemies from '../enemies/CastleLobby'
import CastleBarrel from '../gold-bananas/lanky/CastleBarrel'
import DiddyKasplat from '../kasplats/Diddy'
import CastleLobbyBoulder from '../boulders/CastleLobby'
import CastleLobbyDK from '../wrinkly/CastleLobbyDK'
import CastleLobbyDiddy from '../wrinkly/CastleLobbyDiddy'
import CastleLobbyLanky from '../wrinkly/CastleLobbyLanky'
import CastleLobbyTiny from '../wrinkly/CastleLobbyTiny'
import CastleLobbyChunky from '../wrinkly/CastleLobbyChunky'

const CastleLobbyChecks: React.FC = () => {
const isKremKaptureSeed = useDonkStore(useShallow((state) => state.winCondition.kremlingKapture)) ? 'foolish' : ''
return (
  <>
  <div className="grid">
    <CastleBarrel />
    <CastleLobby />
    <CastleLobbyBoulder />
    <CastleLobbyDK />
    <CastleLobbyDiddy />
    <CastleLobbyLanky />
    <CastleLobbyTiny />
    <CastleLobbyChunky />
  </div>
  <div className={`grid ${isKremKaptureSeed}`}>
    <DiddyKasplat />
    <CastleLobbyEnemies />
  </div>
  </>
)
}

export default CastleLobbyChecks
