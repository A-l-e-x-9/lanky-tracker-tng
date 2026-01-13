import useDonkStore from '../../store'
import { useShallow } from 'zustand/react/shallow'

type SimpleIconProps = {
  storeKey: string
  title: string
  imgUrl: string
  prefix: string
  className?: string
  updateItem: (item: string, val: boolean) => void
}

const SimpleIcon: React.FC<SimpleIconProps> = (props) => {
  const isDKRapSeed = (props.storeKey === 'dk' || props.storeKey === 'coconut' || props.storeKey === 'diddy' || props.storeKey === 'peanut' || props.storeKey === 'guitar' || props.storeKey === 'rocket' || props.storeKey === 'spring' || props.storeKey === 'lanky' || props.storeKey === 'grape' || props.storeKey === 'stand' || props.storeKey === 'sprint' || props.storeKey === 'balloon' || props.storeKey === 'tiny' || props.storeKey === 'twirl' || props.storeKey === 'mini' || props.storeKey === 'chunky' || props.storeKey === 'pineapple' || props.storeKey === 'hunky' || props.storeKey === 'orange' || props.storeKey === 'barrel' || props.storeKey === 'cranky') && useDonkStore(useShallow((state) => state.winCondition.takeItToTheFridge)) ? 'all-bosses' : ''
  const isKRoolChallengeSeed = props.storeKey === 'snide' && useDonkStore(useShallow((state) => state.winCondition.kRoolChallenge)) ? 'all-bosses' : ''
  const value: boolean = useDonkStore((state) => state[props.prefix][props.storeKey])
  const classes = `simple-icon ${props.prefix}-${props.storeKey} ${value ? 'have' : 'have-not'} ${props.className} ${isDKRapSeed} ${isKRoolChallengeSeed}`
  return (
    <div className={classes} onClick={() => props.updateItem(props.storeKey, !value)}>
      <img
        alt={props.title}
        title={props.title}
        width={24}
        height={24}
        src={props.imgUrl}
        style={{ filter: `grayscale(${value ? '0' : '1'})` }}
      />
      <span>{value ? '✓' : '✗'}</span>
    </div>
  )
}

export default SimpleIcon
