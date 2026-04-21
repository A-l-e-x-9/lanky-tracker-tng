import FairyPool from '@renderer/components/pools/Fairies'
import CaveFairies from './Cave'
import AztecMainFairies from './AztecMain'
import TTFairies from './TinyTemple'
import LlamaFairies from './LlamaTemple'
import FDTFairies from './5DT'

const ShuffledFairies: React.FC = () => {
  return (
    <FairyPool>
      <CaveFairies />
      <AztecMainFairies />
      <TTFairies />
      <LlamaFairies />
      <FDTFairies />
    </FairyPool>
  )
}

export default ShuffledFairies
