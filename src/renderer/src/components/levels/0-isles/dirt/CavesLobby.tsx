import RainbowCoinPool from '@renderer/components/pools/RainbowCoins'
import { useShuffleDirt } from '@renderer/hooks/settings'
import IslesCheck from '../check'
import { useCavesKasplat, usePlayLobby } from '@renderer/hooks/isles'
import { useStrong, useShockwave, useOrange, useTwirl, useRocket, useBoulderTech } from '@renderer/hooks/kongs'

const Shuffled: React.FC = () => {
const canGetInCavesLobby = usePlayLobby('Crystal Caves')
const canGetInCavesKasplat = useCavesKasplat()
const hasStrongKong = useStrong()
const hasShockwave = useShockwave()
const orangeYourself = useOrange()
const isHinaKagiyama = useTwirl()
const hasJetbarrel = useRocket()
const hasBoulderTech = useBoulderTech()
  return (
    <RainbowCoinPool>
      <IslesCheck
        id={30056}
        name="Shuffled Dirt Patch: Somehow not frying in the Caves Lobby lava room"
        region="Caves-Helm Lobbies"
        canGetLogic={canGetInCavesKasplat.in && hasStrongKong && hasShockwave}
        canGetBreak={canGetInCavesKasplat.out && (orangeYourself || isHinaKagiyama) && hasShockwave}
      />
      <IslesCheck
        id={30057}
        name="Shuffled Dirt Patch: To the right of the Caves DK Portal"
        region="Caves-Helm Lobbies"
        canGetLogic={canGetInCavesLobby.in && hasShockwave}
        canGetBreak={canGetInCavesLobby.out && hasShockwave}
      />
      <IslesCheck
        id={30058}
        name="Shuffled Dirt Patch: Diddy's ledge in Caves Lobby"
        region="Caves-Helm Lobbies"
        canGetLogic={canGetInCavesLobby.in && hasJetbarrel && hasShockwave}
        canGetBreak={canGetInCavesLobby.out && hasBoulderTech && isHinaKagiyama && hasShockwave}
      />
      <IslesCheck
        id={30059}
        name="Shuffled Dirt Patch: Caves Lobby boulder room"
        region="Caves-Helm Lobbies"
        canGetLogic={canGetInCavesKasplat.in && hasShockwave}
        canGetBreak={canGetInCavesKasplat.out && hasShockwave}
      />
    </RainbowCoinPool>
  )
}

const CavesLobbyDirt: React.FC = () => (useShuffleDirt() ? <Shuffled /> : null)
export default CavesLobbyDirt
