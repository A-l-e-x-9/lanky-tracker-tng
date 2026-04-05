import ArenaPool from '@renderer/components/pools/Arenas'
import { useShuffledArenas } from '@renderer/hooks/settings'
import IslesCheck from '../check'
import { usePlayLobby, useForestArena } from '@renderer/hooks/isles'

const Shuffled: React.FC = () => {
const canDoIslesArena2 = useForestArena()
const canGetInForestLobby = usePlayLobby('Fungi Forest')
  return (
    <ArenaPool>
      <IslesCheck
        id={10001}
        name="Shuffled Battle Arena: Vanilla Arena 2 (Check of Legends 2)"
        region="Japes-Forest Lobbies"
        canGetLogic={canDoIslesArena2.in}
        canGetBreak={canDoIslesArena2.out}
      />
      <IslesCheck
        id={10055}
        name="Shuffled Battle Arena: On the Tag Barrel crate in Forest Lobby"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInForestLobby.in}
        canGetBreak={canGetInForestLobby.out}
      />
    </ArenaPool>
  )
}

const ForestLobbyArenas: React.FC = () => (useShuffledArenas() ? <Shuffled /> : null)
export default ForestLobbyArenas
