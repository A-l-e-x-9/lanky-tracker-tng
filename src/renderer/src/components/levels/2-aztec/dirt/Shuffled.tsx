import RainbowCoinPool from '@renderer/components/pools/RainbowCoins'
import CaveDirt from './Cave'
import AztecMainDirt from './AztecMain'
import TTDirt from './TinyTemple'
import LlamaDirt from './LlamaTemple'
import FDTDirt from './5DT'

const ShuffledDirt: React.FC = () => {
  return (
    <RainbowCoinPool>
      <CaveDirt />
      <AztecMainDirt />
      <TTDirt />
      <LlamaDirt />
      <FDTDirt />
    </RainbowCoinPool>
  )
}

export default ShuffledDirt
