import RainbowCoinPool from '@renderer/components/pools/RainbowCoins'
import { useShuffleDirt } from '@renderer/hooks/settings'
import IslesCheck from '../check'
import { usePlayLobby, useFactoryLobbyUpper } from '@renderer/hooks/isles'
import { useShockwave } from '@renderer/hooks/kongs'

const Shuffled: React.FC = () => {
const canGetInFactoryLobby = usePlayLobby('Frantic Factory')
const hasShockwave = useShockwave()
const canGetInFactoryUpper = useFactoryLobbyUpper()
return (
    <RainbowCoinPool>
      <IslesCheck
        id={30049}
        name="Shuffled Dirt Patch: Near the Grab lever in Factory Lobby"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInFactoryLobby.in && hasShockwave}
        canGetBreak={canGetInFactoryLobby.out && hasShockwave}
      />
      <IslesCheck
        id={30050}
        name="Shuffled Dirt Patch: On a Factory Lobby high platform"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInFactoryUpper.in && hasShockwave}
        canGetBreak={canGetInFactoryUpper.out && hasShockwave}
      />
      <IslesCheck
        id={30051}
        name="Shuffled Dirt Patch: Over the Factory DK Portal"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInFactoryUpper.in && hasShockwave}
        canGetBreak={canGetInFactoryUpper.out && hasShockwave}
      />
    </RainbowCoinPool>
  )
}

const FactoryLobbyDirt: React.FC = () => (useShuffleDirt() ? <Shuffled /> : null)
export default FactoryLobbyDirt
