import GBPool from '@renderer/components/pools/GB'
import { useCheckLankyCastle } from '@renderer/hooks/isles'
import IslesCheck from '../../check'

const CastleBarrel: React.FC = () => {
  const lobby = useCheckLankyCastle()
  return (
  <GBPool>
    <IslesCheck
      id={23}
      name="Lanky's Barrel in Castle Lobby"
      region="Caves-Helm Lobbies"
      canGetLogic={lobby.in}
      canGetBreak={lobby.out}
    />
    </GBPool>
  )
}

export default CastleBarrel
