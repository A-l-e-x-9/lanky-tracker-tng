import BossSelector from './BossSelector'
import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'

import l1 from '../../assets/images/1.png'
import l2 from '../../assets/images/2.png'
import l3 from '../../assets/images/3.png'
import l4 from '../../assets/images/4.png'
import l5 from '../../assets/images/5.png'
import l6 from '../../assets/images/6.png'
import l7 from '../../assets/images/7.png'

const Bosses = (): JSX.Element => {
const allBosses = useDonkStore(useShallow((state) => state.winCondition.bosses)) ? 'all-bosses' : ''
  return (
    <section className="boss-section" id={allBosses}>
    <h3>Bosses</h3>
      <section className="boss-list">
        <section className="boss1">
          <img src={l1} height={24} />
          <BossSelector storeKey="boss1" />
        </section>
        <section className="boss2">
          <img src={l2} height={24} />
          <BossSelector storeKey="boss2" />
        </section>
        <section className="boss3">
          <img src={l3} height={24} />
          <BossSelector storeKey="boss3" />
        </section>
        <section className="boss4">
          <img src={l4} height={24} />
          <BossSelector storeKey="boss4" />
        </section>
        <section className="boss5">
          <img src={l5} height={24} />
          <BossSelector storeKey="boss5" />
        </section>
        <section className="boss6">
          <img src={l6} height={24} />
          <BossSelector storeKey="boss6" />
        </section>
        <section className="boss7">
          <img src={l7} height={24} />
          <BossSelector storeKey="boss7" />
        </section>
      </section>
    </section>
  )
}

export default Bosses
