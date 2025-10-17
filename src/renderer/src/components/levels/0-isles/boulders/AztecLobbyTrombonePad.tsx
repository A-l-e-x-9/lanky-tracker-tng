import BoulderPool from '@renderer/components/pools/Boulders'
import { useAztecLobbyBoulders } from '@renderer/hooks/isles'
import IslesCheck from '../check'

/*Version 5 of the Randomizer now allows you to have major rewards in the boulders that Chunky can toss. This is for the boulder over the Trombone Pad in between the Aztec and Caves lobbies.*/
const AztecLobbyTrombonePad: React.FC = () => {
const canLiftBoulders = useAztecLobbyBoulders()
  return (
    <BoulderPool>
        <IslesCheck
          id={6}
          name="Boulder on top of the Trombone Pad near Aztec Lobby"
          region="DK Island"
          canGetLogic={useAztecLobbyBoulders.in}
          canGetBreak={useAztecLobbyBoulders.out}
        />
    </BoulderPool>
  )
}

export default AztecLobbyTrombonePad
