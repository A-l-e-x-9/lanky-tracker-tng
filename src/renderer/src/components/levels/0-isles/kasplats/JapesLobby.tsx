import KasplatPool from '@renderer/components/pools/Kasplats'
import { useShuffleKasplats } from '@renderer/hooks/settings'
import { useJapesLobbyGeneric } from '@renderer/hooks/isles'
import IslesCheck from '../check'

const Shuffled: React.FC = () => {
const canReachJapesLobby = useJapesLobbyGeneric()
return (
  <KasplatPool>
    <IslesCheck
      id={50014}
      name="Shuffled Kasplat: Japes Lobby"
      region="Japes-Forest Lobbies"
      canGetLogic={canReachJapesLobby.in}
      canGetBreak={canReachJapesLobby.out}
    />
  </KasplatPool>
)
}

const JapesLobbyKasplats: React.FC = () => (useShuffleKasplats() ? <Shuffled /> : null)
export default JapesLobbyKasplats
