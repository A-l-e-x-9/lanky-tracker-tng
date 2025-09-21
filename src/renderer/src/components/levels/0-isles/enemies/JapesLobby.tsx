import DropPool from '@renderer/src/components/pools/Drops'
import { usePlayLobby } from '@renderer/src/hooks/isles'
import { useAnyKong, useCamera } from '@renderer/src/hooks/kongs'
import IslesCheck from '../check'

const JapesLobbyEnemies: React.FC = () => {
  const anyKong = useAnyKong()
  const playJapes = usePlayLobby('Jungle Japes')
  const hasFairyCam = useCamera()
  return (
    <DropPool>
      <IslesCheck
        id={310}
        name="Isles Enemy: Japes Lobby 0"
        region="Japes-Forest Lobbies"
        canGetLogic={anyKong && playJapes}
      />
      <IslesCheck
        id={311}
        name="Isles Enemy: Japes Lobby 1"
        region="Japes-Forest Lobbies"
        canGetLogic={anyKong && playJapes}
      />
      <IslesCheck
        id={410}
        name="Isles Enemy Photo: Japes Lobby 0"
        region="Japes-Forest Lobbies"
        canGetLogic={anyKong && playJapes && hasFairyCam}
      />
      <IslesCheck
        id={411}
        name="Isles Enemy Photo: Japes Lobby 1"
        region="Japes-Forest Lobbies"
        canGetLogic={anyKong && playJapes && hasFairyCam}
      />
    </DropPool>
  )
}

export default JapesLobbyEnemies
