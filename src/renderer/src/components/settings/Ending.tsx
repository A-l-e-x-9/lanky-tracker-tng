import { useCanDeactivateHelm, useCanFightRool } from '@renderer/src/hooks/helm'
import { EndingSelector, RoolSelector } from './EndingSelector'

const Ending: React.FC = () => {
  const helmLogic = useCanDeactivateHelm()
  const roolLogic = useCanFightRool()

  return (
    <section className="ending">
      <div>
        <span>Helm</span>
        <span className={helmLogic ? 'available' : 'not-available'}>⬤</span>
      </div>
      <section>
        <EndingSelector rootKey="helm1" />
        <EndingSelector rootKey="helm2" />
        <EndingSelector rootKey="helm3" />
        <EndingSelector rootKey="helm4" />
        <EndingSelector rootKey="helm5" />
      </section>
      <div>
        <span>K. Rool</span>
        <span
          className={roolLogic.in ? 'available' : roolLogic.out ? 'logic-break' : 'not-available'}
        >
          ⬤
        </span>
      </div>
      <section>
        <RoolSelector roolRootKey="rool1" />
        <RoolSelector roolRootKey="rool2" />
        <RoolSelector roolRootKey="rool3" />
        <RoolSelector roolRootKey="rool4" />
        <RoolSelector roolRootKey="rool5" />
      </section>
    </section>
  )
}

export default Ending
