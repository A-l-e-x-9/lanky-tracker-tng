import ArenaPool from '@renderer/components/pools/Arenas'
import CaveArenas from './Cave'
import AztecMainArenas from './AztecMain'
import TTArenas from './TinyTemple'
import LlamaArenas from './LlamaTemple'
import FDTArenas from './5DT'

const ShuffledArenas: React.FC = () => {
  return (
    <ArenaPool>
      <CaveArenas />
      <AztecMainArenas />
      <TTArenas />
      <LlamaArenas />
      <FDTArenas />
    </ArenaPool>
  )
}

export default ShuffledArenas
