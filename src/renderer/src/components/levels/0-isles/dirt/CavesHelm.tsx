import RainbowCoinPool from '@renderer/components/pools/RainbowCoins'
import CavesLobbyDirt from './CavesLobby'
import CastleLobbyDirt from './CastleLobby'
import HelmLobbyDirt from './HelmLobby'

const CavesHelmDirt: React.FC = () => {
  return (
    <RainbowCoinPool>
      <CavesLobbyDirt />
      <CastleLobbyDirt />
      <HelmLobbyDirt />
    </RainbowCoinPool>
  )
}

export default CavesHelmDirt
