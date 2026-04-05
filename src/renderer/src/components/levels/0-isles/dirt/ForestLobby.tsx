import RainbowCoinPool from '@renderer/components/pools/RainbowCoins'
import { useShuffleDirt } from '@renderer/hooks/settings'
import IslesCheck from '../check'
import { usePlayLobby } from '@renderer/hooks/isles'
import { useShockwave } from '@renderer/hooks/kongs'

const Shuffled: React.FC = () => {
const canGetInForestLobby = usePlayLobby('Fungi Forest')
const hasShockwave = useShockwave()
return (
    <RainbowCoinPool>
      <IslesCheck
        id={30001}
        name="Shuffled Dirt Patch: Check of Legends 2"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInForestLobby.in && hasShockwave}
        canGetBreak={canGetInForestLobby.out && hasShockwave}
      />
      <IslesCheck
        id={30055}
        name="Shuffled Dirt Patch: On the Tag Barrel crate in Forest Lobby"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInForestLobby.in && hasShockwave}
        canGetBreak={canGetInForestLobby.out && hasShockwave}
      />
    </RainbowCoinPool>
  )
}

const ForestLobbyDirt: React.FC = () => (useShuffleDirt() ? <Shuffled /> : null)
export default ForestLobbyDirt
