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
        name="Isles Enemy: Near Aztec"
        region="Main Isle"
        canGetLogic={anyKong && zinger}
      />
      <IslesCheck
        id={407}
        name="Isles Enemy Photo: Near Aztec"
        region="Main Isle"
        canGetLogic={anyKong && zinger && hasFairyCam}
      />
    </DropPool>
  )
}

export default NearAztecEnemies
