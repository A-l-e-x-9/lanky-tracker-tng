import RainbowCoinPool from '@renderer/components/pools/RainbowCoins'
import { useShuffleDirt } from '@renderer/hooks/settings'
import IslesCheck from '../check'
import { usePlayLobby, useAztecLobbyChunky } from '@renderer/hooks/isles'
import { useShockwave } from '@renderer/hooks/kongs'

const Shuffled: React.FC = () => {
const canGetInAztecLobby = usePlayLobby('Angry Aztec')
const hasShockwave = useShockwave()
const canGetInAztecBack = useAztecLobbyChunky()
return (
    <RainbowCoinPool>
      <IslesCheck
        id={30046}
        name="Shuffled Dirt Patch: In front of DK's Wrinkly Door in Aztec Lobby"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInAztecLobby.in && hasShockwave}
        canGetBreak={canGetInAztecLobby.out && hasShockwave}
      />
      <IslesCheck
        id={30047}
        name="Shuffled Dirt Patch: Right side of the Aztec Lobby back room"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInAztecBack.in && hasShockwave}
        canGetBreak={canGetInAztecBack.out && hasShockwave}
      />
      <IslesCheck
        id={30048}
        name="Shuffled Dirt Patch: Left side of the Aztec Lobby back room"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInAztecBack.in && hasShockwave}
        canGetBreak={canGetInAztecBack.out && hasShockwave}
      />
    </RainbowCoinPool>
  )
}

const AztecLobbyDirt: React.FC = () => (useShuffleDirt() ? <Shuffled /> : null)
export default AztecLobbyDirt
