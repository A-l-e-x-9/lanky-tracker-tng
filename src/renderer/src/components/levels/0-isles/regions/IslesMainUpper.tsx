import NearAztecEnemies from '../enemies/NearAztec'
import TrombonePadBoulder from '../boulders/AztecLobbyTrombonePad'
import TrianglePadBoulder from '../boulders/AztecLobbyTrianglePad'
import TrianglePad from '../gold-bananas/chunky/TrianglePad'

const IslesMainUpperChecks: React.FC = () => (
  <>
    <TrombonePadBoulder />
    <TrianglePadBoulder />
    <TrianglePad />
    <NearAztecEnemies />
  </>
)

export default IslesMainUpperChecks
