import DropPool from '@renderer/components/pools/Drops'
import { useDefeatZinger } from '@renderer/hooks/enemies'
import { useAnyKong } from '@renderer/hooks/kongs'
import { useIslesUpper } from '@renderer/hooks/isles'
import IslesCheck from '../check'

const NearAztecEnemies: React.FC = () => {
  const anyKong = useAnyKong()
  const zinger = useDefeatZinger()
  const canReachAztecLobby = useIslesUpper()
  return (
    <DropPool>
      <IslesCheck
        id={307}
        name="Enemy Near Aztec Lobby"
        region="DK Island"
        canGetLogic={anyKong && canReachAztecLobby.in && zinger.in}
        canGetBreak={anyKong && canReachAztecLobby.out && zinger.out}
      />
    </DropPool>
  )
}

export default NearAztecEnemies
