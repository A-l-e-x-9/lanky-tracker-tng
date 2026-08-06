import { useShallow } from 'zustand/react/shallow'
import useDonkStore from '@renderer/store'
import ItemCheck, { LevelCheckProps } from '../ItemCheck'

const KKCheck: React.FC<LevelCheckProps> = (props) => {
  const checks = useDonkStore(useShallow((state) => state.checks))
  return (
    <>
      <ItemCheck
        id={props.id}
        name={props.name}
        level="Krem Kapture"
        region="Krem Kapture"
        canGetLogic={props.canGetLogic}
        done={checks[props.id]}
      />
    </>
  )
}

export default KKCheck
