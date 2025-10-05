import DropPool from '@renderer/components/pools/Drops'
import { useDefeatZinger } from '@renderer/hooks/enemies'
import { useAnyKong, useCamera } from '@renderer/hooks/kongs'
import IslesCheck from '../check'

const NearAztecEnemies: React.FC = () => {
  const anyKong = useAnyKong()
  const zinger = useDefeatZinger()
  const hasFairyCam = useCamera()
  return (
    <DropPool>
      <IslesCheck
        id={307}
        name="Enemy Near Aztec Lobby"
        region="DK Island"
        canGetLogic={anyKong && zinger.in}
        canGetBreak={anyKong && zinger.out}
      />
      <IslesCheck
        id={407}
        name="Photo of Enemy Near Aztec Lobby"
        region="DK Island"
        canGetLogic={anyKong && hasFairyCam}
      />
    </DropPool>
  )
}

export default NearAztecEnemies
