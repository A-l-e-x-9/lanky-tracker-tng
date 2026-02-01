import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import Underground from '../gold-bananas/chunky/Underground'
import ChunkyKasplat from '../kasplats/Chunky'

const UndergroundChecks: React.FC = () => {
const isKremKaptureSeed = useDonkStore(useShallow((state) => state.winCondition.kremlingKapture)) ? 'foolish' : ''
return (
  <>
  <div className="grid">
    <Underground />
  </div>
  <div className={`grid ${isKremKaptureSeed}`}>
    <ChunkyKasplat />
  </div>
  </>
)
}

export default UndergroundChecks
