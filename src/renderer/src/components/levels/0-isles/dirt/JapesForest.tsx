import RainbowCoinPool from '@renderer/components/pools/RainbowCoins'
import { useShuffleDirt } from '@renderer/hooks/settings'
import JapesLobbyDirt from './JapesLobby'
import AztecLobbyDirt from './AztecLobby'
import FactoryLobbyDirt from './FactoryLobby'
import GalleonLobbyDirt from './GalleonLobby'
import ForestLobbyDirt from './ForestLobby'

const Shuffled: React.FC = () => {
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

const JapesForestDirt: React.FC = () => (useShuffleDirt() ? <Shuffled /> : null)
export default JapesForestDirt
