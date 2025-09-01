import DropPool from '@renderer/components/pools/Drops'
import { useDefeatZinger } from '@renderer/hooks/enemies'
import { usePlayFactory } from '@renderer/hooks/factory'
import { useAnyKong, useCamera } from '@renderer/hooks/kongs'
import IslesCheck from '../check'

const FactoryLobbyEnemies: React.FC = () => {
  const anyKong = useAnyKong()
  const playFactory = usePlayFactory()
  const zinger = useDefeatZinger()
  const hasFairyCam = useCamera()
  return (
    <DropPool>
      <IslesCheck
        id={314}
        name="Isles Enemy: Factory Lobby"
        region="Japes-Forest Lobbies"
        canGetLogic={anyKong && playFactory && zinger}
      />
      <IslesCheck
        id={414}
        name="Isles Enemy Photo: Factory Lobby"
        region="Japes-Forest Lobbies"
        canGetLogic={anyKong && playFactory && zinger && hasFairyCam}
      />
    </DropPool>
  )
}
export default FactoryLobbyEnemies
