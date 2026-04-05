import CratePool from '@renderer/components/pools/Crates'
import { useShuffleCrates } from '@renderer/hooks/settings'
import IslesCheck from '../check'
import { usePlayLobby } from '@renderer/hooks/isles'

const Shuffled: React.FC = () => {
const canGetInJapesLobby = usePlayLobby('Jungle Japes')
  return (
    <CratePool>
      <IslesCheck
        id={20044}
        name="Shuffled Melon Crate: At Japes Lobby Tag Barrel"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInJapesLobby.in}
        canGetBreak={canGetInJapesLobby.out}
      />
      <IslesCheck
        id={20045}
        name="Shuffled Melon Crate: At Japes Lobby DK Portal"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInJapesLobby.in}
        canGetBreak={canGetInJapesLobby.out}
      />
    </CratePool>
  )
}

const JapesLobbyCrates: React.FC = () => (useShuffledCrate() ? <Shuffled /> : null)
export default JapesLobbyCrates
