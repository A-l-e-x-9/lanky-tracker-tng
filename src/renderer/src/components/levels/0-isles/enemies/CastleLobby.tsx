import DropPool from '@renderer/components/pools/Drops'
import { usePlayLobby } from '@renderer/hooks/isles'
import { useDefeatKosha } from '@renderer/hooks/enemies'
import { useAnyKong, useCamera } from '@renderer/hooks/kongs'
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
        canGetLogic={anyKong && playCastle && kosha}
      />
      <IslesCheck
        id={316}
        name="Isles Enemy: Castle Lobby Near Right"
        region="Caves-Helm Lobbies"
        canGetLogic={anyKong && playCastle && kosha}
      />
      <IslesCheck
        id={317}
        name="Isles Enemy: Castle Lobby Far Right"
        region="Caves-Helm Lobbies"
        canGetLogic={anyKong && playCastle && kosha}
      />
      <IslesCheck
        id={415}
        name="Isles Enemy Photo: Castle Lobby Left"
        region="Caves-Helm Lobbies"
        canGetLogic={anyKong && playCastle && kosha && hasFairyCam}
      />
      <IslesCheck
        id={416}
        name="Isles Enemy Photo: Castle Lobby Near Right"
        region="Caves-Helm Lobbies"
        canGetLogic={anyKong && playCastle && kosha && hasFairyCam}
      />
      <IslesCheck
        id={417}
        name="Isles Enemy Photo: Castle Lobby Far Right"
        region="Caves-Helm Lobbies"
        canGetLogic={anyKong && playCastle && kosha && hasFairyCam}
      />
    </DropPool>
  )
}

export default CastleLobbyEnemies
