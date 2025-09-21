import { useCheckDkCavesLobby } from '@renderer/src/hooks/isles'
import IslesCheck from '../../check'

const CavesLava: React.FC = () => {
  const cave = useCheckDkCavesLobby()
  return (
    <IslesCheck
      id={4}
      name="Isles DK Caves Lava"
      region="Caves-Helm Lobbies"
      canGetLogic={cave.in}
      canGetBreak={cave.out}
    />
  )
}

export default CavesLava
