import DropPool from '@renderer/components/pools/Drops'
import { useDefeatZinger } from '@renderer/hooks/enemies'
import { useIslesKremAscent } from '@renderer/hooks/isles'
import { useAnyKong, useCamera } from '@renderer/hooks/kongs'
import IslesCheck from '../check'

const KremLiftEnemies: React.FC = () => {
  const anyKong = useAnyKong()
  const kremAscent = useIslesKremAscent()
  const zinger = useDefeatZinger()
  const hasFairyCam = useCamera()
  return (
    <DropPool>
      <IslesCheck
        id={306}
        name="Isles Enemy: Upper Factory Path"
        region="Krem Isle"
        canGetLogic={anyKong && kremAscent}
      />
      <IslesCheck
        id={308}
        name="Isles Enemy: Lower Factory Path 0"
        region="Krem Isle"
        canGetLogic={anyKong && kremAscent && zinger.in}
        canGetBreak={anyKong && kremAscent && zinger.out}
      />
      <IslesCheck
        id={309}
        name="Isles Enemy: Lower Factory Path 1"
        region="Krem Isle"
        canGetLogic={anyKong && kremAscent && zinger.in}
        canGetBreak={anyKong && kremAscent && zinger.out}
      />
      <IslesCheck
        id={406}
        name="Isles Enemy Photo: Upper Factory Path"
        region="Krem Isle"
        canGetLogic={anyKong && kremAscent && hasFairyCam}
      />
      <IslesCheck
        id={408}
        name="Isles Enemy Photo: Lower Factory Path 0"
        region="Krem Isle"
        canGetLogic={anyKong && kremAscent && zinger.out && hasFairyCam}
      />
      <IslesCheck
        id={409}
        name="Isles Enemy Photo: Lower Factory Path 1"
        region="Krem Isle"
        canGetLogic={anyKong && kremAscent && zinger.out && hasFairyCam}
      />
    </DropPool>
  )
}

export default KremLiftEnemies
