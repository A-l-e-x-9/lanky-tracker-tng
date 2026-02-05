import useDonkStore from '../../store'

type SimpleIconProps = {
  storeKey: string
  title: string
  imgUrl: string
  prefix: string
  className?: string
  updateItem: (id: string, val: boolean) => void
}

const SimpleRadioIcon: React.FC<SimpleIconProps> = (props) => {
  const value: boolean = useDonkStore((state) => state[props.prefix][props.storeKey])
  const classes = `simple-icon ${props.prefix}-${props.storeKey} ${value ? 'have' : 'have-not'} ${props.className}`
  // Radio semantics: selecting sets this option to true (and store will clear the others).
  // Clicking an already-selected option keeps it selected (no toggle off).
  return (
    <div className={classes} onClick={() => props.updateItem(props.storeKey, true)}>
      <img
        alt={props.title}
        title={props.title}
        width={24}
        height={24}
        src={props.imgUrl}
        style={{ filter: `grayscale(${value ? '0' : '1'})` }}
      />
      <span>{value ? '◉' : '○'}</span>
    </div>
  )
}

export default SimpleRadioIcon
