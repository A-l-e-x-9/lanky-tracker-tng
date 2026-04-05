import CratePool from '@renderer/components/pools/Crates'
import { useShuffleCrates } from '@renderer/hooks/settings'
import IslesCheck from '../check'
import { usePlayLobby } from '@renderer/hooks/isles'

const Shuffled: React.FC = () => {
const canDoIslesArena2 = usePlayLobby('Fungi Forest')
return (
    <CratePool>
      <IslesCheck
        id={20001}
        name="Shuffled Melon Crate: Where the Check of Legends 2 Battle Arena would spawn in vanilla"
        region="Japes-Forest Lobbies"
        canGetLogic={canDoIslesArena2.in}
        canGetBreak={canDoIslesArena2.out}
      />
    </CratePool>
  )
}

const ForestLobbyCrates: React.FC = () => (useShuffleCrates() ? <Shuffled /> : null)
export default ForestLobbyCrates
