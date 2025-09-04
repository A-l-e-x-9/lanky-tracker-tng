import useDonkStore from '@renderer/store'
import { EndingState, endingPhase, PearlRange, RoolRange } from '@renderer/store/common'
import { useShallow } from 'zustand/react/shallow'

import chunkyFace from '../../assets/images/chunky.png'
import diddyFace from '../../assets/images/diddy.png'
import dkFace from '../../assets/images/dk.png'
import lankyFace from '../../assets/images/lanky.png'
import tinyFace from '../../assets/images/tiny.png'
import unknownFace from '../../assets/images/unknown-small.png'
import kroolDK from '../../assets/images/krool-dk.png'
import kroolDiddy from '../../assets/images/krool-diddy.png'
import kroolLanky from '../../assets/images/krool-lanky.png'
import kroolTiny from '../../assets/images/krool-tiny.png'
import kroolChunky from '../../assets/images/krool-chunky.png'
import armyDillo1 from '../../assets/images/army-dillo-1.png'
import dogadon1 from '../../assets/images/dogadon-1.png'
import madJack from '../../assets/images/mad-jack.png'
import puftoss from '../../assets/images/puftoss.png'
import dogadon2 from '../../assets/images/dogadon-2.png'
import armyDillo2 from '../../assets/images/army-dillo-2.png'
import kutOut from '../../assets/images/kutout.png'

type EndingSelectorProps = {
  rootKey: keyof EndingState
}

const currImg = (val: PearlRange): string => {
  switch (val) {
    case 0:
      return unknownFace
    case 1:
      return dkFace
    case 2:
      return diddyFace
    case 3:
      return lankyFace
    case 4:
      return tinyFace
    default:
      return chunkyFace
  }
}

const nextEnd = (val: PearlRange): PearlRange => {
  const target = val + 1
  if (target > 5) {
    return 0
  }
  return target as PearlRange
}

const prevEnd = (val: PearlRange): PearlRange => {
  const target = val - 1
  if (target < 0) {
    return 5
  }
  return target as PearlRange
}

export const EndingSelector: React.FC<EndingSelectorProps> = (props) => {
  const [endingChar, setEnd] = useDonkStore(
    useShallow((state) => [state[props.rootKey] as PearlRange, state.setEnd])
  )

  const handleNext = (): void => {
    setEnd(props.rootKey, nextEnd(endingChar))
  }

  const handlePrev = (e: React.MouseEvent<HTMLImageElement>): void => {
    e.preventDefault()
    setEnd(props.rootKey, prevEnd(endingChar))
  }

  const handleWheel = (e: React.WheelEvent<HTMLImageElement>): void => {
    if (e.deltaY >= 0) {
      setEnd(props.rootKey, nextEnd(endingChar))
    } else {
      setEnd(props.rootKey, prevEnd(endingChar))
    }
  }

  return (
    <>
      <img
        height={24}
        width={24}
        className="simple-icon"
        src={currImg(endingChar)}
        onClick={handleNext}
        onContextMenu={handlePrev}
        onWheel={handleWheel}
      />
    </>
  )
}

type RoolSelectorProps = {
  roolRootKey: keyof endingPhase
}

const currPhaseImg = (val: RoolRange): string => {
  switch (val) {
    case 0:
      return unknownFace
    case 1:
      return kroolDK
    case 2:
      return kroolDiddy
    case 3:
      return kroolLanky
    case 4:
      return kroolTiny
    case 5:
      return kroolChunky
    case 6:
      return armyDillo1
    case 7:
      return dogadon1
    case 8:
      return madJack
    case 9:
      return puftoss
    case 10:
      return dogadon2
    case 11:
      return armyDillo2
    default:
      return kutOut
  }
}

const nextRool = (val: RoolRange): RoolRange => {
  const target = val + 1
  if (target > 11) {
    return 0
  }
  return target as RoolRange
}

const prevRool = (val: RoolRange): RoolRange => {
  const target = val - 1
  if (target < 0) {
    return 11
  }
  return target as RoolRange
}

export const RoolSelector: React.FC<RoolSelectorProps> = (props) => {
  const [endingPhase, setRool] = useDonkStore(
    useShallow((state) => [state[props.roolRootKey] as RoolRange, state.setRool])
  )

  const handleNext = (): void => {
    setRool(props.roolRootKey, nextRool(endingPhase))
  }

  const handlePrev = (e: React.MouseEvent<HTMLImageElement>): void => {
    e.preventDefault()
    setRool(props.roolRootKey, prevRool(endingPhase))
  }

  const handleWheel = (e: React.WheelEvent<HTMLImageElement>): void => {
    if (e.deltaY >= 0) {
      setRool(props.roolRootKey, nextRool(endingPhase))
    } else {
      setRool(props.roolRootKey, prevRool(endingPhase))
    }
  }

  return (
    <>
      <img
        height={24}
        width={24}
        className="simple-icon"
        src={currPhaseImg(endingPhase)}
        onClick={handleNext}
        onContextMenu={handlePrev}
        onWheel={handleWheel}
      />
    </>
  )
}
