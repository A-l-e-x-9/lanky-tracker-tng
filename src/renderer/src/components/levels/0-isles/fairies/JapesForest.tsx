import FairyPool from '@renderer/components/pools/Fairies'
import { useShuffleFairies } from '@renderer/hooks/settings'
import AztecLobbyFairies from './AztecLobby'
import FactoryLobbyFairies from './FactoryLobby'
import ForestLobbyFairies from './ForestLobby'

const Shuffled: React.FC = () => {
  return (
    <FairyPool>
      <AztecLobbyFairies />
      <FactoryLobbyFairies />
      <ForestLobbyFairies />
    </FairyPool>
  )
}

const JapesForestFairies: React.FC = () => (useShuffleFairies() ? <Shuffled /> : null)
export default JapesForestFairies
