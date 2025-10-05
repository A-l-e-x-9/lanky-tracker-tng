import { useCheckLankyCastle } from '@renderer/hooks/isles'
import IslesCheck from '../../check'

const CastleBarrel: React.FC = () => {
  const lobby = useCheckLankyCastle()
  return (
    <IslesCheck
      id={23}
      name="Lanky's Barrel in Castle Lobby"
      region="Caves-Helm Lobbies"
      canGetLogic={lobby.in}
      canGetBreak={lobby.out}
    />
  )
}

export default CastleBarrel
