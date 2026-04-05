import CratePool from '@renderer/components/pools/Crates'
import { useShuffleCrates } from '@renderer/hooks/settings'
import IslesCheck from '../check'
import { usePlayLobby, useAztecLobbyChunky } from '@renderer/hooks/isles'

const Shuffled: React.FC = () => {
const canGetInAztecLobby = usePlayLobby('Angry Aztec')
const canGetInAztecBack = useAztecLobbyChunky()
  return (
    <CratePool>
      <IslesCheck
        id={20046}
        name="Shuffled Melon Crate: In front of DK's Wrinkly Door in Aztec Lobby"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInAztecLobby.in}
        canGetBreak={canGetInAztecLobby.out}
      />
      <IslesCheck
        id={20047}
        name="Shuffled Melon Crate: Right side of the Aztec Lobby back room"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInAztecBack.in}
        canGetBreak={canGetInAztecBack.out}
      />
      <IslesCheck
        id={20048}
        name="Shuffled Melon Crate: Left side of the Aztec Lobby back room"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInAztecBack.in}
        canGetBreak={canGetInAztecBack.out}
      />
    </CratePool>
  )
}

const AztecLobbyCrates: React.FC = () => (useShuffleCrates() ? <Shuffled /> : null)
export default AztecLobbyCrates
