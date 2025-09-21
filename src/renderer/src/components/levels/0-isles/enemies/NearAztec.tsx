import DropPool from '@renderer/src/components/pools/Drops'
import { useDefeatZinger } from '@renderer/src/hooks/enemies'
import { useAnyKong, useCamera } from '@renderer/src/hooks/kongs'
import IslesCheck from '../check'

const NearAztecEnemies: React.FC = () => {
  const anyKong = useAnyKong()
  const zinger = useDefeatZinger()
  const hasFairyCam = useCamera()
  return (
    <DropPool>
      <IslesCheck
        id={307}
        name="Isles Enemy: Near Aztec"
        region="Main Isle"
        canGetLogic={anyKong && zinger.in}
        canGetBreak={anyKong && zinger.out}
      />
      <IslesCheck
        id={407}
        name="Isles Enemy Photo: Near Aztec"
        region="Main Isle"
        canGetLogic={anyKong && hasFairyCam}
      />
    </DropPool>
  )
}

export default NearAztecEnemies
