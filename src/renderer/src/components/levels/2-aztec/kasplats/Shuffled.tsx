import KasplatPool from '@renderer/components/pools/Kasplats'
import CaveKasplats from './Cave'
import AztecMainKasplats from './AztecMain'
import TTKasplats from './TinyTemple'
import LlamaKasplats from './LlamaTemple'
import FDTKasplats from './5DT'

const ShuffledKasplats: React.FC = () => {
  return (
    <KasplatPool>
      <CaveKasplats />
      <AztecMainKasplats />
      <TTKasplats />
      <LlamaKasplats />
      <FDTKasplats />
    </KasplatPool>
  )
}

export default ShuffledKasplats
