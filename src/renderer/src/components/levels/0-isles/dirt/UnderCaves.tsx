import RainbowCoinPool from '@renderer/components/pools/RainbowCoins'
import VanillaDirt from '@renderer/components/pools/VanillaDirt'
import { useUnderCaveDirt } from '@renderer/hooks/isles'
import IslesCheck from '../check'

const UnderCaves: React.FC = () => {
  const dirt = useUnderCaveDirt()
  return (
    <RainbowCoinPool>
      <VanillaDirt>
        <IslesCheck
          id={73}
          name="Dirt Under Caves Lobby"
          region="DK Island"
          canGetLogic={dirt.in}
          canGetBreak={dirt.out}
        />
      </VanillaDirt>
    </RainbowCoinPool>
  )
}

export default UnderCaves
