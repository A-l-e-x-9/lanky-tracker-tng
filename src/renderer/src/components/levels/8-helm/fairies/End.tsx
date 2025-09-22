import FairyPool from '@renderer/components/pools/Fairies'
import VanillaFairy from '@renderer/components/pools/VanillaFairy'
import { useHelmDoors } from '@renderer/hooks/helm'
import { useAnyKong, useCamera } from '@renderer/hooks/kongs'
import HelmCheck from '../check'

const EndOfHelmFairies: React.FC = () => {
  const helmDoors = useHelmDoors()
  const camera = useCamera()
  const anyKong = useAnyKong()
  return (
    <FairyPool>
      <VanillaFairy>
        <HelmCheck
          id={8110}
          name="Helm Fairy 1 (Key 8 room)"
          canGetLogic={helmDoors.in && camera && anyKong}
          canGetBreak={helmDoors.out && camera && anyKong}
        />
      </VanillaFairy>
      <VanillaFairy>
        <HelmCheck
          id={8111}
          name="Helm Fairy 2 (Key 8 room)"
          canGetLogic={helmDoors.in && camera && anyKong}
          canGetBreak={helmDoors.out && camera && anyKong}
        />
      </VanillaFairy>
    </FairyPool>

  )
}

export default EndOfHelmFairies
