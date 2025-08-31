import BoulderPool from '@renderer/components/pools/Boulders'
import { useAztecLobbyTrianglePad } from '@renderer/hooks/isles'
import IslesCheck from '../check'

/*Version 5 of the Randomizer now allows you to have major rewards in the boulders that Chunky can toss. This is for the boulder on the Triangle Pad in between the Aztec and Caves lobbies.*/
const AztecLobbyTrianglePad: React.FC = () => {
  return (
    <BoulderPool>
        <IslesCheck
          id={5}
          name="Isles Boulder: On top of the Triangle Pad near Aztec Lobby"
          region="Main Isle"
          canGetLogic={useAztecLobbyTrianglePad()}
        />
    </BoulderPool>
  )
}

export default AztecLobbyTrianglePad
