import React, { MouseEvent, WheelEvent, useState, useRef, useEffect, KeyboardEvent } from 'react'
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
  const [bpWinCondition, kRoolWinCondition] = useDonkStore(useShallow((state) => [state.winCondition.blueprints, state.winCondition.kRoolChallenge]))
  const bananaSeed = props.storeKey === 'goldBananas' && useDonkStore(useShallow((state) => state.winCondition.goldBananas)) ? 'all-bosses' : ''
  const bpSeed = (props.storeKey === 'dkBp' || props.storeKey === 'diddyBp' || props.storeKey === 'lankyBp' || props.storeKey === 'tinyBp' || props.storeKey === 'chunkyBp') && (bpWinCondition || kRoolWinCondition) ? 'all-bosses' : ''
  const medalSeed = props.storeKey === 'bananaMedals' && useDonkStore(useShallow((state) => state.winCondition.bananaMedals)) ? 'all-bosses' : ''
  const crownSeed = props.storeKey === 'crowns' && useDonkStore(useShallow((state) => state.winCondition.crowns)) ? 'all-bosses' : ''
  const fairySeed = props.storeKey === 'fairies' && useDonkStore(useShallow((state) => state.winCondition.fairies)) ? 'all-bosses' : ''
  const rainbowCoinSeed = props.storeKey === 'rainbowCoins' && useDonkStore(useShallow((state) => state.winCondition.rainbowCoins)) ? 'all-bosses' : ''
  const pearlSeed = props.storeKey === 'pearls' && useDonkStore(useShallow((state) => state.winCondition.pearls)) ? 'all-bosses' : ''

  const clamp = (num: number): number => Math.min(Math.max(num, 0), maxValue)

  const nextCount = (num: number): number => clamp(num + 1)

  const prevCount = (num: number): number => clamp(num - 1)

  // editing state
  const [editing, setEditing] = useState(false)
  const [inputVal, setInputVal] = useState<string>(String(num))
  const prevValRef = useRef<number>(num)
  const inputRef = useRef<HTMLInputElement | null>(null)
  const clickTimeoutRef = useRef<number | null>(null)

  useEffect(() => {
    // keep input in sync when not editing
    if (!editing) setInputVal(String(num))
  }, [num, editing])

  useEffect(() => {
    if (editing && inputRef.current) inputRef.current.focus()
  }, [editing])

  const handleNextLevel = (): void => {
    if (editing) return
    props.setCount(storeKey, nextCount(num))
  }

  const handlePrevLevel = (e: MouseEvent<HTMLImageElement>): void => {
    e.preventDefault()
    if (editing) return
    props.setCount(storeKey, prevCount(num))
  }

  const handleWheel = (e: WheelEvent<HTMLImageElement>): void => {
    if (editing) return
    if (e.deltaY >= 0) {
      props.setCount(storeKey, nextCount(num))
    } else {
      props.setCount(storeKey, prevCount(num))
    }
  }

  // avoid single-click firing when double-clicking by using a short timeout
  const handleClick = (): void => {
    if (editing) return
    if (clickTimeoutRef.current) {
      window.clearTimeout(clickTimeoutRef.current)
      clickTimeoutRef.current = null
    }
    // delay single-click action to detect double-click
    clickTimeoutRef.current = window.setTimeout(() => {
      props.setCount(storeKey, nextCount(num))
      clickTimeoutRef.current = null
    }, 200)
  }

  const handleDoubleClick = (): void => {
    // cancel pending single-click
    if (clickTimeoutRef.current) {
      window.clearTimeout(clickTimeoutRef.current)
      clickTimeoutRef.current = null
    }
    prevValRef.current = num
    setInputVal(String(num))
    setEditing(true)
  }

  const commitEdit = (): void => {
    const parsed = parseInt(inputVal, 10)
    if (!isNaN(parsed) && parsed >= 0 && parsed <= maxValue) {
      props.setCount(storeKey, parsed)
    } else {
      // invalid -> revert to previous value
      props.setCount(storeKey, prevValRef.current)
      setInputVal(String(prevValRef.current))
    }
    setEditing(false)
  }

  const cancelEdit = (): void => {
    setInputVal(String(prevValRef.current))
    setEditing(false)
  }

  const handleInputKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      commitEdit()
    } else if (e.key === 'Escape') {
      cancelEdit()
    }
  }

  const handleInputChange = (val: string): void => {
    // allow empty (user deleting) or digits only
    if (val === '' || /^\d+$/.test(val)) {
      // prevent leading zeros except "0"
      if (/^0\d+/.test(val)) {
        // strip leading zeros
        setInputVal(String(parseInt(val, 10)))
      } else {
        setInputVal(val)
      }
    }
  }

  return (
    <div
      className={`count-icon ${props.prefix}-${props.storeKey} ${bananaSeed} ${bpSeed} ${medalSeed} ${crownSeed} ${fairySeed} ${rainbowCoinSeed} ${pearlSeed}`}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      onContextMenu={handlePrevLevel}
      onWheel={handleWheel}
    >
      {editing ? (
        <input
          ref={inputRef}
          type="text"
          inputMode="numeric"
          pattern="\\d*"
          value={inputVal}
          onChange={(e) => handleInputChange(e.target.value)}
          onKeyDown={handleInputKeyDown}
          onBlur={commitEdit}
          style={{ width: `${Math.max(2, String(maxValue).length + 1)}ch` }}
          title={props.title}
        />
      ) : (
        <>
          <img height={24} alt={props.title} title={props.title} src={imgUrl} style={{ filter: `grayscale(${num != 0 ? '0' : '1'})` }} />
          <span>{num}</span>
        </>
      )}
    </div>
  )
}

export default CountSelector
