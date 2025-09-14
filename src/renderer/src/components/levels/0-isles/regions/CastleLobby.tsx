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

const CastleLobbyChecks: React.FC = () => (
  <>
    <CastleBarrel />
    <DiddyKasplat />
    <CastleLobby />
    <CastleLobbyBoulder />
    <CastleLobbyDK />
    <CastleLobbyDiddy />
    <CastleLobbyLanky />
    <CastleLobbyTiny />
    <CastleLobbyChunky />
    <CastleLobbyEnemies />
  </>
)

export default CastleLobbyChecks
