import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import Oimport TinyStartEnemies from '../enemies/TinyStart'
import ChunkyKlaptrap from '../gold-bananas/chunky/Klaptrap'

const TinyStartChecks: React.FC = () => {
const isKremKaptureSeed = useDonkStore(useShallow((state) => state.winCondition.kremlingKapture)) ? 'foolish' : ''
return (
  <div className={`grid ${isKremKaptureSeed}`}>
    <ChunkyKlaptrap />
    <TinyStartEnemies />
  </div>
)
}

export default TinyStartChecks
