import BoulderPool from '@renderer/components/pools/Boulders'
import { useAztecLobbyBoulders } from '@renderer/hooks/isles'
import IslesCheck from '../check'

/*Version 5 of the Randomizer now allows you to have major rewards in the boulders that Chunky can toss. This is for the boulder on the Triangle Pad in between the Aztec and Caves lobbies.*/
const AztecLobbyTrianglePad: React.FC = () => {
const canLiftBoulders = useAztecLobbyBoulders()
  return (
    <BoulderPool>
        <IslesCheck
          id={5}
          name="Boulder on top of the Triangle Pad near Aztec Lobby"
          region="DK Island"
          canGetLogic={canLiftBoulders.in}
          canGetBreak={canLiftBoulders.out}
        />
    </BoulderPool>
  )
}

export default AztecLobbyTrianglePad
