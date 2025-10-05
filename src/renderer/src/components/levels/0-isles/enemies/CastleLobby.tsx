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
        name="Castle Lobby Left Enemy"
        region="Caves-Helm Lobbies"
        canGetLogic={anyKong && playCastle && kosha.in}
        canGetBreak={anyKong && playCastle && kosha.out}
      />
      <IslesCheck
        id={316}
        name="Castle Lobby Near Right Enemy"
        region="Caves-Helm Lobbies"
        canGetLogic={anyKong && playCastle && kosha.in}
        canGetBreak={anyKong && playCastle && kosha.out}
      />
      <IslesCheck
        id={317}
        name="Castle Lobby Far Right Enemy"
        region="Caves-Helm Lobbies"
        canGetLogic={anyKong && playCastle && kosha.in}
        canGetBreak={anyKong && playCastle && kosha.out}
      />
      <IslesCheck
        id={415}
        name="Photo of Castle Lobby Left Enemy"
        region="Caves-Helm Lobbies"
        canGetLogic={anyKong && playCastle && hasFairyCam}
      />
      <IslesCheck
        id={416}
        name="Photo of Castle Lobby Near Right Enemy"
        region="Caves-Helm Lobbies"
        canGetLogic={anyKong && playCastle && hasFairyCam}
      />
      <IslesCheck
        id={417}
        name="Photo of Castle Lobby Far Right Enemy"
        region="Caves-Helm Lobbies"
        canGetLogic={anyKong && playCastle && hasFairyCam}
      />
    </DropPool>
  )
}

export default CastleLobbyEnemies
