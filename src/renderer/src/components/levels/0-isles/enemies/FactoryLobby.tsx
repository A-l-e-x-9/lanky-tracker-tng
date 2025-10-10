import DropPool from '@renderer/components/pools/Drops'
import { useDefeatZinger } from '@renderer/hooks/enemies'
import { usePlayLobby } from '@renderer/hooks/isles'
import { useAnyKong } from '@renderer/hooks/kongs'
import IslesCheck from '../check'

const FactoryLobbyEnemies: React.FC = () => {
  const anyKong = useAnyKong()
  const playFactory = usePlayLobby('Frantic Factory')
  const zinger = useDefeatZinger()
  return (
    <DropPool>
      <IslesCheck
        id={314}
        name="Factory Lobby Enemy"
        region="Japes-Forest Lobbies"
        canGetLogic={anyKong && playFactory && zinger.in}
        canGetBreak={anyKong && playFactory && zinger.out}
      />
    </DropPool>
  )
}
export default FactoryLobbyEnemies
