import { MouseEvent, WheelEvent } from 'react'
import { useShallow } from 'zustand/react/shallow'
import useDonkStore from '@renderer/store'
import CountSelector from './CountSelector'
import { useHelmItem1, useHelmItem2, useHelmItemNum1, useHelmItemNum2 } from '@renderer/hooks/settings'
import alreadyOpenedIcon from '../../assets/images/unknown-small.png'
import gbIcon from '../../assets/images/GB.png'
import blueprintIcon from '../../assets/images/lanky_bp.png'
import coCoinIcon from '../../assets/images/n64rw_coin.png'
import keyIcon from '../../assets/images/key.png'
import medalIcon from '../../assets/images/bananamedal.png'
import crownIcon from '../../assets/images/crown.png'
import fairyIcon from '../../assets/images/fairy.png'
import rainbowCoinIcon from '../../assets/images/rainbowcoin.png'
import beanIcon from '../../assets/images/bean.png'
import pearlIcon from '../../assets/images/pearl.png'

const itemToIcon = (num: IntRange<0, 11>): string => {
  return num == 1 ? gbIcon : num == 2 ? blueprintIcon : num == 3 ? coCoinIcon : num == 4 ? keyIcon : num == 5 ? medalIcon : num == 6 ? crownIcon : num == 7 ? fairyIcon : num == 8 ? rainbowCoinIcon : num == 9 ? beanIcon : num == 10 ? pearlIcon : alreadyOpenedIcon
}

const clamp = (num: number): number => Math.min(Math.max(num, 0), 10)

const nextItem = (num: number): number => clamp(num + 1)

const prevItem = (num: number): number => clamp(num - 1)

export const HelmDoorSelector1: React.FC = () => {
  const helmItem1 = useHelmItem1()
  const [setSetting] = useDonkStore(useShallow((state) => [state.setSetting]))

  const handleNextItem = (): void => {
    setSetting('helmItem1', nextItem(helmItem1))
  }

  const handlePrevItem = (e: MouseEvent<HTMLImageElement>): void => {
    e.preventDefault()
    setSetting('helmItem1', prevItem(helmItem1))
  }

  const handleWheel = (e: WheelEvent<HTMLImageElement>): void => {
    if (e.deltaY >= 0) {
      setSetting('helmItem1', nextItem(helmItem1))
    } else {
      setSetting('helmItem1', prevItem(helmItem1))
    }
  }

  return (
    <div>
      <img
        className="simple-icon"
        height={24}
        title={helmItem1 == 1 ? 'Golden Bananas' : helmItem1 == 2 ? 'Blueprints' : helmItem1 == 3 ? 'Company Coins' : helmItem1 == 4 ? 'Keys' : helmItem1 == 5 ? 'Banana Medals' : helmItem1 == 6 ? 'Battle Arena Crowns' : helmItem1 == 7 ? 'Banana Fairies' : helmItem1 == 8 ? 'Rainbow Coins' : helmItem1 == 9 ? 'THE BEAN' : helmItem1 == 10 ? 'Pearls' : 'Door already opened'}
        src={itemToIcon(helmItem1)}
        onClick={handleNextItem}
        onContextMenu={handlePrevItem}
        onWheel={handleWheel}
        style={{ filter: `grayscale(${helmItem1 != 0 ? '0' : '1'})` }}
      />
      <CountSelector
        imgUrl={itemToIcon(helmItem1)}
        title="Number of the indicated item you need to open the first door at the end of Helm and go into K. Rool's throne room."
        storeKey="helmItemNum1"
        prefix="settings"
        setCount={setSetting}
        maxValue={201}
      />
    </div>
  )
}

export const HelmDoorSelector2: React.FC = () => {
  const helmItem2 = useHelmItem2()
  const [setSetting] = useDonkStore(useShallow((state) => [state.setSetting]))

  const handleNextItem = (): void => {
    setSetting('helmItem2', nextItem(helmItem2))
  }

  const handlePrevItem = (e: MouseEvent<HTMLImageElement>): void => {
    e.preventDefault()
    setSetting('helmItem2', prevItem(helmItem2))
  }

  const handleWheel = (e: WheelEvent<HTMLImageElement>): void => {
    if (e.deltaY >= 0) {
      setSetting('helmItem2', nextItem(helmItem2))
    } else {
      setSetting('helmItem2', prevItem(helmItem2))
    }
  }

  return (
    <div>
      <img
        className="simple-icon"
        height={24}
        title={helmItem2 == 1 ? 'Golden Bananas' : helmItem2 == 2 ? 'Blueprints' : helmItem2 == 3 ? 'Company Coins' : helmItem2 == 4 ? 'Keys' : helmItem2 == 5 ? 'Banana Medals' : helmItem2 == 6 ? 'Battle Arena Crowns' : helmItem2 == 7 ? 'Banana Fairies' : helmItem2 == 8 ? 'Rainbow Coins' : helmItem2 == 9 ? 'THE BEAN' : helmItem2 == 10 ? 'Pearls' : 'Door already opened'}
        src={itemToIcon(helmItem2)}
        onClick={handleNextItem}
        onContextMenu={handlePrevItem}
        onWheel={handleWheel}
        style={{ filter: `grayscale(${helmItem2 != 0 ? '0' : '1'})` }}
      />
      <CountSelector
        imgUrl={itemToIcon(helmItem2)}
        title="Number of the indicated item you need to open the second door at the end of Helm and get Key 8."
        storeKey="helmItemNum2"
        prefix="settings"
        setCount={setSetting}
        maxValue={201}
      />
    </div>
  )
}
