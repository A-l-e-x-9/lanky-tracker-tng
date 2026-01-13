import { MouseEvent, WheelEvent } from 'react'
import { useShallow } from 'zustand/react/shallow'

import useDonkStore from '@renderer/store'

type CountSelectorProps = {
  title: string
  imgUrl: string
  storeKey: string
  prefix: string
  setCount: (item: string, val: number) => void
  maxValue: number
}

const CountSelector: React.FC<CountSelectorProps> = (props) => {
  const { storeKey, imgUrl, maxValue } = props
  const [num] = useDonkStore(useShallow((state) => [state[props.prefix][storeKey]]))
  const bananaSeed = props.storeKey === 'goldBananas' && useDonkStore(useShallow((state) => state.winCondition.goldBananas)) ? 'all-bosses' : ''
  const bpSeed = (props.storeKey === 'dkBp' && props.storeKey === 'diddyBp' && props.storeKey === 'lankyBp' && props.storeKey === 'tinyBp' && props.storeKey === 'chunkyBp') && (useDonkStore(useShallow((state) => state.winCondition.goldBananas)) || useDonkStore(useShallow((state) => state.winCondition.kRoolChallenge))) ? 'all-bosses' : ''
  const medalSeed = props.storeKey === 'bananaMedals' && useDonkStore(useShallow((state) => state.winCondition.bananaMedals)) ? 'all-bosses' : ''
  const crownSeed = props.storeKey === 'crowns' && useDonkStore(useShallow((state) => state.winCondition.crowns)) ? 'all-bosses' : ''
  const fairySeed = props.storeKey === 'fairies' && useDonkStore(useShallow((state) => state.winCondition.fairies)) ? 'all-bosses' : ''
  const rainbowCoinSeed = props.storeKey === 'rainbowCoins' && useDonkStore(useShallow((state) => state.winCondition.rainbowCoins)) ? 'all-bosses' : ''
  const pearlSeed = props.storeKey === 'pearls' && useDonkStore(useShallow((state) => state.winCondition.pearls)) ? 'all-bosses' : ''

  const clamp = (num: number): number => Math.min(Math.max(num, 0), maxValue)

  const nextCount = (num: number): number => clamp(num + 1)

  const prevCount = (num: number): number => clamp(num - 1)

  const handleNextLevel = (): void => {
    props.setCount(storeKey, nextCount(num))
  }

  const handlePrevLevel = (e: MouseEvent<HTMLImageElement>): void => {
    e.preventDefault()
    props.setCount(storeKey, prevCount(num))
  }

  const handleWheel = (e: WheelEvent<HTMLImageElement>): void => {
    if (e.deltaY >= 0) {
      props.setCount(storeKey, nextCount(num))
    } else {
      props.setCount(storeKey, prevCount(num))
    }
  }

  return (
    <div
      className={`count-icon ${props.prefix}-${props.storeKey} ${bananaSeed} ${bpSeed} ${medalSeed} ${crownSeed} ${fairySeed} ${rainbowCoinSeed} ${pearlSeed}`}
      onClick={handleNextLevel}
      onContextMenu={handlePrevLevel}
      onWheel={handleWheel}
    >
      <img height={24} alt={props.title} title={props.title} src={imgUrl} style={{ filter: `grayscale(${num != 0 ? '0' : '1'})` }} />
      <span>{num}</span>
    </div>
  )
}

export default CountSelector
