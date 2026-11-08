import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import AnthillBanana from './AnthillBanana'
import AnthillBean from './AnthillBean'
import BeanCheck from './BeanCheck'
import MushroomBarrel from './Mushroom'
import SpiderBoss from './Spider'
import { useKRoolKontracts } from '@renderer/hooks/isles'

const TinyBananas: React.FC = () => {
  const isBeanSeed = useKRoolKontracts('The Bean™') ? 'foolish' : ''
  const beanInRotation = useDonkStore(useShallow((state) => state.settings.poolBean)) ? '' : 'foolish'
  return (
  <>
    <div className="grid">
      <MushroomBarrel />
      <AnthillBanana />
    </div>
    <div className={`grid ${isBeanSeed && beanInRotation}`}>
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
