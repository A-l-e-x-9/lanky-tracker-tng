import { useCheckDkCavesLobby } from '@renderer/hooks/isles'
import IslesCheck from '../../check'

const CavesLava: React.FC = () => {
  const cave = useCheckDkCavesLobby()
  return (
    <IslesCheck
      id={4}
      name="DK's Caves Lobby Lava Room"
      region="Caves-Helm Lobbies"
      canGetLogic={cave.in}
      canGetBreak={cave.out}
    />
  )
}

export default CavesLava
