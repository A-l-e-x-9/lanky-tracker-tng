import { useShallow } from 'zustand/react/shallow'

import useDonkStore from '../../store'

type DoubleIconProps = {
  title: string
  storeLeft: string
  storeRight: string
  imgLeft: string
  imgRight: string
  imgBoth: string
  prefix: string
  setItem: (item: string, val: boolean) => void
}

const DoubleIcon: React.FC<DoubleIconProps> = (props) => {
  const isKremKaptureSeed = props.title === 'Fairy Cam and Shockwave' && useDonkStore(useShallow((state) => state.winCondition.kremlingKapture)) ? 'all-bosses' : ''
  const isDKRapSeed = props.storeRight === 'climbing' && useDonkStore(useShallow((state) => state.winCondition.takeItToTheFridge)) ? 'all-bosses' : ''
  const coCoinSeed = props.storeRight === 'climbing' && useDonkStore(useShallow((state) => state.winCondition.companyCoins)) ? 'all-bosses' : ''
  const [left, right] = useDonkStore(
    useShallow((state) => [
      state[props.prefix][props.storeLeft],
      state[props.prefix][props.storeRight]
    ])
  )
  let url = props.imgBoth
  if (left && !right) {
    url = props.imgLeft
  } else if (!left && right) {
    url = props.imgRight
  }
  return (
    <div className={`double-icon ${props.prefix}-${props.storeLeft} ${isKremKaptureSeed} ${isDKRapSeed} ${coCoinSeed}`}>
      <img
        width={24}
        height={24}
        alt={props.title}
        title={props.title}
        src={url}
        style={{ filter: `grayscale(${left || right ? '0' : '1'})` }}
        onClick={() => props.setItem(props.storeLeft, !left)}
        onContextMenu={(e) => {
          e.preventDefault()
          props.setItem(props.storeRight, !right)
        }}
      />{' '}
    </div>
  )
}

export default DoubleIcon
