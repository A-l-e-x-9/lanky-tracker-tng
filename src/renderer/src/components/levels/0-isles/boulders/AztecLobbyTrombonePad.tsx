import BoulderPool from '@renderer/components/pools/Boulders'
import { useAztecLobbyTrombonePad } from '@renderer/hooks/isles'
import IslesCheck from '../check'

/*Version 5 of the Randomizer now allows you to have major rewards in the boulders that Chunky can toss. This is for the boulder over the Trombone Pad in between the Aztec and Caves lobbies.*/
const AztecLobbyTrombonePad: React.FC = () => {
  return (
    <BoulderPool>
        <IslesCheck
          id={6}
          name="Boulder: On top of the Trombone Pad near Aztec Lobby"
          region="Main Isle"
          canGetLogic={useAztecLobbyTrombonePad()}
        />
    </BoulderPool>
  )
}

export default AztecLobbyTrombonePad
