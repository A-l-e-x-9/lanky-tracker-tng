import { useShallow } from 'zustand/react/shallow'

import useDonkStore from '@renderer/store'
import { Level, SelectableRegionValues } from '@renderer/store/common'

export type LevelCheckProps = {
  id: number
  name: string
  region?: SelectableRegionValues
  canGetLogic: boolean
  canGetBreak?: boolean
}

type ItemCheckProps = LevelCheckProps & {
  level: Level
  done?: boolean
}

const ItemCheck: React.FC<ItemCheckProps> = (props) => {
  const { id, name, region, done, canGetLogic } = props
  let { canGetBreak } = props
  const [setCheck, foolish, hoard] = useDonkStore(
    useShallow((state) => [state.setCheck, state.foolish, state.hoard])
  )
  const foolishValues = Object.values(foolish)
  const hoardValues = Object.values(hoard)
  const isFoolish = foolishValues.some((f) => f === region)
  const isHoard = hoardValues.some((f) => f === region)
  const isBossCheck = useDonkStore(useShallow((state) => state.settings.allBosses))
  const isKillTheWabbit = useDonkStore(useShallow((state) => state.settings.killTheWabbit))
  if (canGetBreak === undefined) {
    canGetBreak = canGetLogic
  }
  let logicState = 'not-available'
  if (canGetLogic) {
    logicState = 'available'
  } else if (canGetBreak) {
    logicState = 'logic-break'
  }

  const rowNames: string[] = ['check-row']
  if (done) {
    rowNames.push('checked')
  }
  if (isFoolish || (isBossCheck && props.region === 'Bosses') || (isKillTheWabbit && props.id === '6042')) {
    rowNames.push('foolish')
  } else if (isHoard) {
    rowNames.push('woth')
  }
  const classNames = rowNames.join(' ')
  
  const [hideRedChecks, hideYellowChecks] = useDonkStore(
    useShallow((state) => [state.ui.hideRed, state.ui.hideYellow])
  )

if (hideRedChecks && logicState==='not-available' || hideYellowChecks && logicState==='logic-break') {
  return false
} else {
  return (
    <>
      <div className={classNames}>
        <span>{name}</span>
        <span>&nbsp;</span>
        <span className={logicState}>⬤</span>
        <span>&nbsp;</span>
      </div>
      <div className={classNames}>{region}</div>
      <div className={classNames}>
        <input
          key={'checkbox-' + id}
          type="checkbox"
          name={'checkbox-' + id}
          checked={!!done}
          onChange={(e) => setCheck(id, e.target.checked)}
        />
      </div>
    </>
  )
  }
}

export default ItemCheck
