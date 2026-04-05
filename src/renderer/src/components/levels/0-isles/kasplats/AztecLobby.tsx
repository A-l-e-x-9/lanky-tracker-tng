import KasplatPool from '@renderer/components/pools/Kasplats'
import { useShuffleKasplats } from '@renderer/hooks/settings'
import { useAztecLobbyChunky } from '@renderer/hooks/isles'
import IslesCheck from '../check'

const Shuffled: React.FC = () => {
const canReachChunkyWrinklyDoor = useAztecLobbyChunky()
return (
  <KasplatPool>
    <IslesCheck
      id={50012}
      name="Shuffled Kasplat: Aztec Lobby backroom"
      region="Japes-Forest Lobbies"
      canGetLogic={canReachChunkyWrinklyDoor.in}
      canGetBreak={canReachChunkyWrinklyDoor.out}
    />
  </KasplatPool>
)
}

const JapesLobbyKasplats: React.FC = () => (useShuffleKasplats() ? <Shuffled /> : null)
export default JapesLobbyKasplats
