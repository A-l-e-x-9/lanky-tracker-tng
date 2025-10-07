import DropPool from '@renderer/components/pools/Drops'
import { useDefeatZinger } from '@renderer/hooks/enemies'
import { useIslesKremAscent } from '@renderer/hooks/isles'
import { useAnyKong } from '@renderer/hooks/kongs'
import IslesCheck from '../check'

const KremLiftEnemies: React.FC = () => {
  const anyKong = useAnyKong()
  const kremAscent = useIslesKremAscent()
  const zinger = useDefeatZinger()
  return (
    <DropPool>
      <IslesCheck
        id={306}
        name="Enemy at Upper Factory Path"
        region="K. Rool's Island"
        canGetLogic={anyKong && kremAscent}
      />
      <IslesCheck
        id={308}
        name="Enemy 0 at Lower Factory Path"
        region="K. Rool's Island"
        canGetLogic={anyKong && kremAscent && zinger.in}
        canGetBreak={anyKong && kremAscent && zinger.out}
      />
      <IslesCheck
        id={309}
        name="Enemy 1 at Lower Factory Path"
        region="K. Rool's Island"
        canGetLogic={anyKong && kremAscent && zinger.in}
        canGetBreak={anyKong && kremAscent && zinger.out}
      />
    </DropPool>
  )
}

export default KremLiftEnemies
