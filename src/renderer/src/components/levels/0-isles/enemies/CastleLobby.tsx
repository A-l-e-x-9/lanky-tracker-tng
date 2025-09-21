import DropPool from '@renderer/src/components/pools/Drops'
import { usePlayLobby } from '@renderer/src/hooks/isles'
import { useDefeatKosha } from '@renderer/hooks/src/enemies'
import { useAnyKong, useCamera } from '@renderer/src/hooks/kongs'
import IslesCheck from '../check'

const CastleLobbyEnemies: React.FC = () => {
  const playCastle = usePlayLobby('Creepy Castle')
  const anyKong = useAnyKong()
  const kosha = useDefeatKosha()
  const hasFairyCam = useCamera()
  return (
    <DropPool>
      <IslesCheck
        id={315}
        name="Isles Enemy: Castle Lobby Left"
        region="Caves-Helm Lobbies"
        canGetLogic={anyKong && playCastle && kosha.in}
        canGetBreak={anyKong && playCastle && kosha.out}
      />
      <IslesCheck
        id={316}
        name="Isles Enemy: Castle Lobby Near Right"
        region="Caves-Helm Lobbies"
        canGetLogic={anyKong && playCastle && kosha.in}
        canGetBreak={anyKong && playCastle && kosha.out}
      />
      <IslesCheck
        id={317}
        name="Isles Enemy: Castle Lobby Far Right"
        region="Caves-Helm Lobbies"
        canGetLogic={anyKong && playCastle && kosha.in}
        canGetBreak={anyKong && playCastle && kosha.out}
      />
      <IslesCheck
        id={415}
        name="Isles Enemy Photo: Castle Lobby Left"
        region="Caves-Helm Lobbies"
        canGetLogic={anyKong && playCastle && hasFairyCam}
      />
      <IslesCheck
        id={416}
        name="Isles Enemy Photo: Castle Lobby Near Right"
        region="Caves-Helm Lobbies"
        canGetLogic={anyKong && playCastle && hasFairyCam}
      />
      <IslesCheck
        id={417}
        name="Isles Enemy Photo: Castle Lobby Far Right"
        region="Caves-Helm Lobbies"
        canGetLogic={anyKong && playCastle && hasFairyCam}
      />
    </DropPool>
  )
}

export default CastleLobbyEnemies
