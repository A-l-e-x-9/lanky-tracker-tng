import DropPool from '@renderer/src/components/pools/Drops'
import { useDefeatZinger } from '@renderer/src/hooks/enemies'
import { usePlayLobby } from '@renderer/src/hooks/isles'
import { useAnyKong, useCamera } from '@renderer/src/hooks/kongs'
import IslesCheck from '../check'

const FactoryLobbyEnemies: React.FC = () => {
  const anyKong = useAnyKong()
  const playFactory = usePlayLobby('Frantic Factory')
  const zinger = useDefeatZinger()
  const hasFairyCam = useCamera()
  return (
    <DropPool>
      <IslesCheck
        id={314}
        name="Isles Enemy: Factory Lobby"
        region="Japes-Forest Lobbies"
        canGetLogic={anyKong && playFactory && zinger.in}
        canGetBreak={anyKong && playFactory && zinger.out}
      />
      <IslesCheck
        id={414}
        name="Isles Enemy Photo: Factory Lobby"
        region="Japes-Forest Lobbies"
        canGetLogic={anyKong && playFactory && hasFairyCam}
      />
    </DropPool>
  )
}
export default FactoryLobbyEnemies
