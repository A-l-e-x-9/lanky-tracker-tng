import RainbowCoinPool from '@renderer/components/pools/RainbowCoins'
import { useShuffleDirt } from '@renderer/hooks/settings'
import IslesCheck from '../check'
import { usePlayLobby } from '@renderer/hooks/isles'
import { useShockwave } from '@renderer/hooks/kongs'

const Shuffled: React.FC = () => {
const canGetInJapesLobby = usePlayLobby('Jungle Japes')
const hasShockwave = useShockwave()
return (
    <RainbowCoinPool>
      <IslesCheck
        id={30044}
        name="Shuffled Dirt Patch: At Japes Lobby Tag Barrel"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInJapesLobby.in && hasShockwave}
        canGetBreak={canGetInJapesLobby.out && hasShockwave}
      />
      <IslesCheck
        id={30045}
        name="Shuffled Dirt Patch: At Japes Lobby DK Portal"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInJapesLobby.in && hasShockwave}
        canGetBreak={canGetInJapesLobby.out && hasShockwave}
      />
    </RainbowCoinPool>
  )
}

const JapesLobbyDirt: React.FC = () => (useShuffleDirt() ? <Shuffled /> : null)
export default JapesLobbyDirt
