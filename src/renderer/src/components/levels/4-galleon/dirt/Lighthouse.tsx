import RainbowCoinPool from '@renderer/src/components/pools/RainbowCoins'
import VanillaDirt from '@renderer/src/components/pools/VanillaDirt'
import { useLighthouseDirt } from '@renderer/src/hooks/galleon'
import GalleonCheck from '../check'

const LighthouseDirt: React.FC = () => {
  const dirt = useLighthouseDirt()
  return (
    <RainbowCoinPool>
      <VanillaDirt>
        <GalleonCheck
          id={4070}
          name="Galleon Dirt: Lighthouse"
          region="Lighthouse Area"
          canGetLogic={dirt.in}
          canGetBreak={dirt.out}
        />
      </VanillaDirt>
    </RainbowCoinPool>
  )
}

export default LighthouseDirt
