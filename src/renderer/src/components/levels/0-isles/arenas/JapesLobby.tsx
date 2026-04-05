import ArenaPool from '@renderer/components/pools/Arenas'
import { useShuffledArenas } from '@renderer/hooks/settings'
import IslesCheck from '../check'
import { usePlayLobby } from '@renderer/hooks/isles'

const Shuffled: React.FC = () => {
const canGetInJapesLobby = usePlayLobby('Jungle Japes')
  return (
    <ArenaPool>
      <IslesCheck
        id={10044}
        name="Shuffled Battle Arena: At Japes Lobby Tag Barrel"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInJapesLobby.in}
        canGetBreak={canGetInJapesLobby.out}
      />
      <IslesCheck
        id={10045}
        name="Shuffled Battle Arena: At Japes Lobby DK Portal"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInJapesLobby.in}
        canGetBreak={canGetInJapesLobby.out}
      />
    </ArenaPool>
  )
}

const JapesLobby: React.FC = () => (useShuffledArenas() ? <Shuffled /> : null)
export default JapesLobby
