import FairyPool from '@renderer/components/pools/Fairies'
import VanillaFairy from '@renderer/components/pools/VanillaFairy'
import { useHelmDoors, useEOHDoor1, useEOHDoor2 } from '@renderer/hooks/helm'
import { useAnyKong, useCamera } from '@renderer/hooks/kongs'
import HelmCheck from '../check'

const EndOfHelmFairies: React.FC = () => {
  const helmDoors = useHelmDoors()
  const canGetPastDoor1 = useEOHDoor1()
  const canGetPastDoor2 = useEOHDoor2()
  const camera = useCamera()
  const anyKong = useAnyKong()
  return (
    <FairyPool>
      <VanillaFairy>
        <HelmCheck
          id={8110}
          name="Fairy 1 in Key 8's room"
          canGetLogic={helmDoors.in && canGetPastDoor1.in && canGetPastDoor2.in && camera && anyKong}
          canGetBreak={helmDoors.out && canGetPastDoor1.out && camera && anyKong}
        />
      </VanillaFairy>
      <VanillaFairy>
        <HelmCheck
          id={8111}
          name="Fairy 2 in Key 8's room"
          canGetLogic={helmDoors.in && canGetPastDoor1.in && canGetPastDoor2.in && camera && anyKong}
          canGetBreak={helmDoors.out && canGetPastDoor1.out && camera && anyKong}
        />
      </VanillaFairy>
    </FairyPool>

  )
}

export default EndOfHelmFairies
