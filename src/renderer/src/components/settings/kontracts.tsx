import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'

import TaskSelector from './task-selector'

import t1 from '../../assets/images/1.png'
import t2 from '../../assets/images/2.png'
import t3 from '../../assets/images/3.png'
import t4 from '../../assets/images/4.png'
import t5 from '../../assets/images/5.png'
import t6 from '../../assets/images/6.png'
import t7 from '../../assets/images/7.png'
import t8 from '../../assets/images/8.png'

const Kontracts = (): JSX.Element => {
  const isKontractSeed = useDonkStore(useShallow((state) => state.winCondition.kontracts))
  if (isKontractSeed) {
  return (
    <section className="kontract-section">
    <h3>K. Rool's Kontracts</h3>
      <section className="kontract-list">
        <section className="task1">
          <img src={t1} height={24} />
          <TaskSelector storeKey="task1" />
        </section>
        <section className="task2">
          <img src={t2} height={24} />
          <TaskSelector storeKey="task2" />
        </section>
        <section className="task3">
          <img src={t3} height={24} />
          <TaskSelector storeKey="task3" />
        </section>
        <section className="task4">
          <img src={t4} height={24} />
          <TaskSelector storeKey="task4" />
        </section>
        <section className="task5">
          <img src={t5} height={24} />
          <TaskSelector storeKey="task5" />
        </section>
        <section className="task6">
          <img src={t6} height={24} />
          <TaskSelector storeKey="task6" />
        </section>
        <section className="task7">
          <img src={t7} height={24} />
          <TaskSelector storeKey="task7" />
        </section>
        <section className="task8">
          <img src={t8} height={24} />
          <TaskSelector storeKey="task8" />
        </section>
      </section>
    </section>
  )
  }
}

export default Kontracts
