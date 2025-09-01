import AztecLobbyTrombonePad from './AztecLobbyTrombonePad'
import AztecLobbyTrianglePad from './AztecLobbyTrianglePad'
import JapesLobby from './JapesLobby'
import CavesLobby from './CavesLobby'
import CastleLobby from './CastleLobby'

const BoulderLocations: React.FC = () => (
  <>
    <AztecLobbyTrombonePad />
    <AztecLobbyTrianglePad />
    <JapesLobby />
    <CavesLobby />
    <CastleLobby />
  </>
)

export default BoulderLocations
