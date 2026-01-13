import useDonkStore from '../../store'

import keyIcon from '../../assets/images/key.png'

type SimpleIconProps = {
  keyNum: number
}

const SimpleKey: React.FC<SimpleIconProps> = (props) => {
  const value: boolean = useDonkStore((state) => state['key' + props.keyNum])
  const setKey = useDonkStore((state) => state.setKey)
  const keysRequired = useDonkStore((state) => state.winCondition.bossKeys)
  const kRoolsChallenge = useDonkStore((state) => state.winCondition.kRoolChallenge)
  return (
    <>
      <img
        height={24}
        src={keyIcon}
        style={{ filter: `grayscale(${value ? '0' : '1'})`, background: `${keysRequired ? '#800000' : kRoolsChallenge ? '#800000' : 'none'}` }}
        onClick={() => setKey(props.keyNum, !value)}
      />
    </>
  )
}

export default SimpleKey
