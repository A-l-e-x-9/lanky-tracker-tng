import { useShallow } from 'zustand/react/shallow'

import ItemCheck, { LevelCheckProps } from '@renderer/src/components/levels/ItemCheck'
import useDonkStore from '@renderer/src/store'

const CavesCheck: React.FC<LevelCheckProps> = (props) => {
  const checks = useDonkStore(useShallow((state) => state.checks))
  return (
    <>
      <ItemCheck
        id={props.id}
        name={props.name}
        level="Crystal Caves"
        region={props.region}
        canGetLogic={props.canGetLogic}
        canGetBreak={props.canGetBreak}
        done={checks[props.id]}
      />
    </>
  )
}

export default CavesCheck
