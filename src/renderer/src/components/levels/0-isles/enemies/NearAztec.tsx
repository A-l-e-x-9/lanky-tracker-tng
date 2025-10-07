import DropPool from '@renderer/components/pools/Drops'
import { useDefeatZinger } from '@renderer/hooks/enemies'
import { useAnyKong } from '@renderer/hooks/kongs'
import IslesCheck from '../check'

const NearAztecEnemies: React.FC = () => {
  const anyKong = useAnyKong()
  const zinger = useDefeatZinger()
  return (
    <DropPool>
      <IslesCheck
        id={307}
        name="Enemy Near Aztec Lobby"
        region="DK Island"
        canGetLogic={anyKong && zinger.in}
        canGetBreak={anyKong && zinger.out}
      />
    </DropPool>
  )
}

export default NearAztecEnemies
