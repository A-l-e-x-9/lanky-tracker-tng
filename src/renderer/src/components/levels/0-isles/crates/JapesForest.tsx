import CratePool from '@renderer/components/pools/Crates'
import { useShuffleCrates } from '@renderer/hooks/settings'
import JapesLobbyCrates from './JapesLobby'
import AztecLobbyCrates from './AztecLobby'
import FactoryLobbyCrates from './FactoryLobby'
import GalleonLobbyCrates from './GalleonLobby'
import ForestLobbyCrates from './ForestLobby'

const Shuffled: React.FC = () => {
  return (
    <CratePool>
      <JapesLobbyCrates />
      <AztecLobbyCrates />
      <FactoryLobbyCrates />
      <GalleonLobbyCrates />
      <ForestLobbyCrates />
    </CratePool>
  )
}

const JapesForestCrates: React.FC = () => (useShuffleCrates() ? <Shuffled /> : null)
export default JapesForestCrates
