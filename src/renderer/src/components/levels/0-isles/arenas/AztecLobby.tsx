import ArenaPool from '@renderer/components/pools/Arenas'
import { useShuffledArenas } from '@renderer/hooks/settings'
import IslesCheck from '../check'
import { usePlayLobby, useAztecLobbyChunky } from '@renderer/hooks/isles'

const Shuffled: React.FC = () => {
const canGetInAztecLobby = usePlayLobby('Angry Aztec')
const canGetInAztecBack = useAztecLobbyChunky()
  return (
    <ArenaPool>
      <IslesCheck
        id={10046}
        name="Shuffled Battle Arena: In front of DK's Wrinkly Door in Aztec Lobby"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInAztecLobby.in}
        canGetBreak={canGetInAztecLobby.out}
      />
      <IslesCheck
        id={10047}
        name="Shuffled Battle Arena: Right side of the Aztec Lobby back room"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInAztecBack.in}
        canGetBreak={canGetInAztecBack.out}
      />
      <IslesCheck
        id={10048}
        name="Shuffled Battle Arena: Left side of the Aztec Lobby back room"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInAztecBack.in}
        canGetBreak={canGetInAztecBack.out}
      />
    </ArenaPool>
  )
}

const AztecLobbyArenas: React.FC = () => (useShuffledArenas() ? <Shuffled /> : null)
export default AztecLobbyArenas
