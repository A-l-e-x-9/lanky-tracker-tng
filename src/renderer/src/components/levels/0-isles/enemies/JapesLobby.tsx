import DropPool from '@renderer/components/pools/Drops'
import { usePlayLobby } from '@renderer/hooks/isles'
import { useAnyKong } from '@renderer/hooks/kongs'
import IslesCheck from '../check'

const JapesLobbyEnemies: React.FC = () => {
  const anyKong = useAnyKong()
  const playJapes = usePlayLobby('Jungle Japes')
  return (
    <DropPool>
      <IslesCheck
        id={310}
        name="Japes Lobby Enemy 0"
        region="Japes-Forest Lobbies"
        canGetLogic={anyKong && playJapes.in}
        canGetBreak={anyKong && playJapes.out}
      />
      <IslesCheck
        id={311}
        name="Japes Lobby Enemy 1"
        region="Japes-Forest Lobbies"
        canGetLogic={anyKong && playJapes.in}
        canGetBreak={anyKong && playJapes.out}
      />
    </DropPool>
  )
}

export default JapesLobbyEnemies
