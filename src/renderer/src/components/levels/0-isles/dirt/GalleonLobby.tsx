import RainbowCoinPool from '@renderer/components/pools/RainbowCoins'
import { useShuffleDirt } from '@renderer/hooks/settings'
import IslesCheck from '../check'
import { usePlayLobby, useCheckTinyGalleonLobby } from '@renderer/hooks/isles'
import { useShockwave } from '@renderer/hooks/kongs'

const Shuffled: React.FC = () => {
const canGetInGalleonLobby = usePlayLobby('Gloomy Galleon')
const hasShockwave = useShockwave()
const canGetInGalleonTiny = useCheckTinyGalleonLobby()
return (
    <RainbowCoinPool>
      <IslesCheck
        id={30052}
        name="Shuffled Dirt Patch: To the right of the Galleon DK Portal"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInGalleonLobby.in && hasShockwave}
        canGetBreak={canGetInGalleonLobby.out && hasShockwave}
      />
      <IslesCheck
        id={30053}
        name="Shuffled Dirt Patch: To the left of the Galleon DK Portal"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInGalleonLobby.in && hasShockwave}
        canGetBreak={canGetInGalleonLobby.out && hasShockwave}
      />
      <IslesCheck
        id={30054}
        name="Shuffled Dirt Patch: Galleon Lobby Mini Monkey room"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInGalleonTiny.in && hasShockwave}
        canGetBreak={canGetInGalleonTiny.out && hasShockwave}
      />
    </RainbowCoinPool>
  )
}

const GalleonLobbyDirt: React.FC = () => (useShuffleDirt() ? <Shuffled /> : null)
export default GalleonLobbyDirt
