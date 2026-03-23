import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import AnthillBanana from './AnthillBanana'
import AnthillBean from './AnthillBean'
import BeanCheck from './BeanCheck'
import MushroomBarrel from './Mushroom'
import SpiderBoss from './Spider'

const TinyBananas: React.FC = () => {
  const isBeanSeed = useDonkStore(useShallow((state) => state.winCondition.theBean)) ? 'foolish' : ''
  return (
  <>
    <div className="grid">
      <MushroomBarrel />
      <AnthillBanana />
    </div>
    <div className={`grid ${isBeanSeed}`}>
      <AnthillBean />
    </div>
    <div className="grid">
      <SpiderBoss />
      <BeanCheck />
    </div>
  </>
  )
}

export default TinyBananas
