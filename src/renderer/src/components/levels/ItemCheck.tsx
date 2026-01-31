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
  const [isBossCheck, isKillTheWabbit, isBonusSeed, isKRoolsChallenge] = useDonkStore(useShallow((state) => [state.winCondition.bosses, state.winCondition.killTheWabbit, state.winCondition.bonuses, state.winCondition.kRoolChallenge]))
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
  if (isFoolish
  || (isBossCheck && props.region === 'Bosses')
  || (isKillTheWabbit && props.id === 6042)
  || ((isBonusSeed || isKRoolsChallenge) && (props.id === 10
    || props.id === 12
    || props.id === 23
    || props.id === 32
    || props.id === 43
    || props.id === 1021
    || props.id === 1022
    || props.id === 1031
    || props.id === 1042
    || props.id === 2002
    || props.id === 2021
    || props.id === 2022
    || props.id === 2042
    || props.id === 2043
    || props.id === 3010
    || props.id === 3012
    || props.id === 3020
    || props.id === 3033
    || props.id === 3042
    || props.id === 4004
    || props.id === 4011
    || props.id === 4013
    || props.id === 4021
    || props.id === 4031
    || props.id === 4032
    || props.id === 4043
    || props.id === 5001
    || props.id === 5004
    || props.id === 5010
    || props.id === 5011
    || props.id === 5021
    || props.id === 5030
    || props.id === 6001
    || props.id === 6010
    || props.id === 6030
    || props.id === 6043
    || props.id === 7010
    || props.id === 7011
    || props.id === 7020
    || props.id === 7023
    || props.id === 7033
    || props.id === 7040
    || props.id === 7043
    || props.id === 8100
    || props.id === 8101
    || props.id === 8102
    || props.id === 8103
    || props.id === 8104))) {
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
