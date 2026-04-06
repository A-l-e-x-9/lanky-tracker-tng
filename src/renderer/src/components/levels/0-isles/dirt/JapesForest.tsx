import RainbowCoinPool from '@renderer/components/pools/RainbowCoins'
import JapesLobbyDirt from './JapesLobby'
import AztecLobbyDirt from './AztecLobby'
import FactoryLobbyDirt from './FactoryLobby'
import GalleonLobbyDirt from './GalleonLobby'
import ForestLobbyDirt from './ForestLobby'

const JapesForestDirt: React.FC = () => {
  return (
    <RainbowCoinPool>
      <JapesLobbyDirt />
      <AztecLobbyDirt />
      <FactoryLobbyDirt />
      <GalleonLobbyDirt />
      <ForestLobbyDirt />
    </RainbowCoinPool>
  )
}

export default JapesForestDirt
