import RainbowCoinPool from '@renderer/components/pools/RainbowCoins'
import VanillaDirt from '@renderer/components/pools/VanillaDirt'
import { useShuffleDirt } from '@renderer/hooks/settings'
import { useCastleDirt, usePlayLobby } from '@renderer/hooks/isles'
import { useShockwave } from '@renderer/hooks/kongs'
import IslesCheck from '../check'

const CastleLobby: React.FC = () => {
  const castle = useCastleDirt()
  return (
    <RainbowCoinPool>
      <VanillaDirt>
        <IslesCheck
          id={76}
          name="Dirt in Castle Lobby"
          region="Caves-Helm Lobbies"
          canGetLogic={castle.in}
          canGetBreak={castle.out}
        />
      </VanillaDirt>
    </RainbowCoinPool>
  )
}

const Shuffled: React.FC = () => {
const canDoIslesDirt4 = useCastleDirt()
const canGetInCastleLobby = usePlayLobby('Creepy Castle')
const hasShockwave = useShockwave()
  return (
    <RainbowCoinPool>
      <IslesCheck
        id={30005}
        name="Shuffled Dirt Patch: Vanilla Location 4 (under Lanky's Castle Lobby barrel)"
        region="Caves-Helm Lobbies"
        canGetLogic={canDoIslesDirt4.in}
        canGetBreak={canDoIslesDirt4.out}
      />
      <IslesCheck
        id={30060}
        name="Shuffled Dirt Patch: Behind Castle Lobby entrance"
        region="Caves-Helm Lobbies"
        canGetLogic={canGetInCastleLobby.in && hasShockwave}
        canGetBreak={canGetInCastleLobby.out && hasShockwave}
      />
      <IslesCheck
        id={30061}
        name="Shuffled Dirt Patch: To the right of the Castle Lobby entrance"
        region="Caves-Helm Lobbies"
        canGetLogic={canGetInCastleLobby.in && hasShockwave}
        canGetBreak={canGetInCastleLobby.out && hasShockwave}
      />
      <IslesCheck
        id={30062}
        name="Shuffled Dirt Patch: To the left of the Castle DK Portal"
        region="Caves-Helm Lobbies"
        canGetLogic={canGetInCastleLobby.in && hasShockwave}
        canGetBreak={canGetInCastleLobby.out && hasShockwave}
      />
    </RainbowCoinPool>
  )
}

export const CastleLobbyDirt: React.FC = () => (useShuffleDirt() ? <Shuffled /> : null)
export default CastleLobby
