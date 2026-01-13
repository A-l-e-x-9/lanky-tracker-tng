import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'

import SimpleKey from '@renderer/components/settings/SimpleKey'
import LevelSelector from './LevelSelector'
import CountSelector from './CountSelector'

import l1 from '../../assets/images/1.png'
import l2 from '../../assets/images/2.png'
import l3 from '../../assets/images/3.png'
import l4 from '../../assets/images/4.png'
import l5 from '../../assets/images/5.png'
import l6 from '../../assets/images/6.png'
import l7 from '../../assets/images/7.png'
import l8 from '../../assets/images/8.png'
import bLocker from '../../assets/images/GB.png'

const LevelTable = (): JSX.Element => {
  const [setBLocker] = useDonkStore(useShallow((state) => [state.setBLocker]))
  const key3And8Seed = useDonkStore(useShallow((state) => state.winCondition.key3And8)) ? 'all-bosses' : ''
  const key8Seed = useDonkStore(useShallow((state) => state.winCondition.key8)) ? 'all-bosses' : ''
  return (
    <section className="level-section">
    <h3>Level Order, Keys, and B. Locker Requirements</h3>
      <section className="level-list">
        <section className="level1">
          <img src={l1} height={24} />
          <LevelSelector storeKey="level1" />
          <SimpleKey keyNum={1} />
          <CountSelector
            storeKey="bLocker1"
            title="Bananas required for Level 1"
            imgUrl={bLocker}
            prefix="bLocker"
            setCount={setBLocker}
            maxValue={201}
          />
        </section>
        <section className="level2">
          <img src={l2} height={24} />
          <LevelSelector storeKey="level2" />
          <SimpleKey keyNum={2} />
          <CountSelector
            storeKey="bLocker2"
            title="Bananas required for Level 2"
            imgUrl={bLocker}
            prefix="bLocker"
            setCount={setBLocker}
            maxValue={201}
          />
        </section>
        <section className={`level3 ${key3And8Seed}`}>
          <img src={l3} height={24} />
          <LevelSelector storeKey="level3" />
          <SimpleKey keyNum={3} />
          <CountSelector
            storeKey="bLocker3"
            title="Bananas required for Level 3"
            imgUrl={bLocker}
            prefix="bLocker"
            setCount={setBLocker}
            maxValue={201}
          />
        </section>
        <section className="level4">
          <img src={l4} height={24} />
          <LevelSelector storeKey="level4" />
          <SimpleKey keyNum={4} />
          <CountSelector
            storeKey="bLocker4"
            title="Bananas required for Level 4"
            imgUrl={bLocker}
            prefix="bLocker"
            setCount={setBLocker}
            maxValue={201}
          />
        </section>
        <section className="level5">
          <img src={l5} height={24} />
          <LevelSelector storeKey="level5" />
          <SimpleKey keyNum={5} />
          <CountSelector
            storeKey="bLocker5"
            title="Bananas required for Level 5"
            imgUrl={bLocker}
            prefix="bLocker"
            setCount={setBLocker}
            maxValue={201}
          />
        </section>
        <section className="level6">
          <img src={l6} height={24} />
          <LevelSelector storeKey="level6" />
          <SimpleKey keyNum={6} />
          <CountSelector
            storeKey="bLocker6"
            title="Bananas required for Level 6"
            imgUrl={bLocker}
            prefix="bLocker"
            setCount={setBLocker}
            maxValue={201}
          />
        </section>
        <section className="level7">
          <img src={l7} height={24} />
          <LevelSelector storeKey="level7" />
          <SimpleKey keyNum={7} />
          <CountSelector
            storeKey="bLocker7"
            title="Bananas required for Level 7"
            imgUrl={bLocker}
            prefix="bLocker"
            setCount={setBLocker}
            maxValue={201}
          />
        </section>
        <section className={`level8 ${key3And8Seed || key8Seed}`}>
          <img src={l8} height={24} />
          <LevelSelector storeKey="level8" />
          <SimpleKey keyNum={8} />
          <CountSelector
            storeKey="bLocker8"
            title="Bananas required for Level 8"
            imgUrl={bLocker}
            prefix="bLocker"
            setCount={setBLocker}
            maxValue={201}
          />
        </section>
      </section>
    </section>
  )
}

export default LevelTable
