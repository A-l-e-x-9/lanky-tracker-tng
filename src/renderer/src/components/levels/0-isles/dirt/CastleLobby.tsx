import RainbowCoinPool from '@renderer/src/components/pools/RainbowCoins'
import VanillaDirt from '@renderer/src/components/pools/VanillaDirt'
import { useCastleDirt } from '@renderer/src/hooks/isles'
import IslesCheck from '../check'

const CastleLobby: React.FC = () => {
  const castle = useCastleDirt()
  return (
    <RainbowCoinPool>
      <VanillaDirt>
        <IslesCheck
          id={76}
          name="Isles Dirt: Castle Lobby"
          region="Caves-Helm Lobbies"
          canGetLogic={castle.in}
          canGetBreak={castle.out}
        />
      </VanillaDirt>
    </RainbowCoinPool>
  )
}

export default CastleLobby
