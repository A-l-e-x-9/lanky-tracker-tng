import DropPool from '@renderer/components/pools/Drops'
import { usePlayLobby } from '@renderer/hooks/isles'
import { useDefeatKosha } from '@renderer/hooks/enemies'
import { useAnyKong } from '@renderer/hooks/kongs'
import IslesCheck from '../check'

const CastleLobbyEnemies: React.FC = () => {
  const playCastle = usePlayLobby('Creepy Castle')
  const anyKong = useAnyKong()
  const kosha = useDefeatKosha()
  return (
    <DropPool>
      <IslesCheck
        id={315}
        name="Castle Lobby Left Enemy"
        region="Caves-Helm Lobbies"
        canGetLogic={anyKong && playCastle.in && kosha.in}
        canGetBreak={anyKong && playCastle.out && kosha.out}
      />
      <IslesCheck
        id={316}
        name="Castle Lobby Near Right Enemy"
        region="Caves-Helm Lobbies"
        canGetLogic={anyKong && playCastle.in && kosha.in}
        canGetBreak={anyKong && playCastle.out && kosha.out}
      />
      <IslesCheck
        id={317}
        name="Castle Lobby Far Right Enemy"
        region="Caves-Helm Lobbies"
        canGetLogic={anyKong && playCastle.in && kosha.in}
        canGetBreak={anyKong && playCastle.out && kosha.out}
      />
    </DropPool>
  )
}

export default CastleLobbyEnemies
