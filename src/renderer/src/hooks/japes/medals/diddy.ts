import { useCharge, useClimbing, useDiddy, useDive, useHighGrab, usePeanut } from '@renderer/hooks/kongs'
import { useShuffleColoredBananas, useBananaportAll } from '@renderer/hooks/settings'
import { useJapesKongGates, useJapesRambi, useJapesSideArea, usePlayJapes, useSlamJapes } from '..'

const useDiddyMedalCommonLogic = (): number => {
  const haveRambiCage = useJapesRambi()
  const sideArea = useJapesSideArea()
  const canSlam = useSlamJapes()
  const gun = usePeanut()
  const dive = useDive()
  const kongGates = useJapesKongGates()
  const climbing = useClimbing()
  const bananaport = useBananaportAll()

  let bananas = 5 // start (5)
  if (climbing) {
    bananas += 20 //tree bunches (20)
  }
  if (climbing || bananaport) {
    bananas += 7 //around mine (7)
  }
  if (dive.in || dive.out) {
    bananas += 10 // bunches in water (10)
  }
  if ((sideArea.in || sideArea.out) && gun) {
    bananas += 10 // initial side tunnel (normally peanut locked)
  }
  if (gun && (climbing || bananaport)) {
    bananas += 20 // balloon on top of mountain (10), free bananas in mines (10)
    if (canSlam) {
      bananas += 15 // conveyor belt + balloon nearby (15)
    }
  }

  if (kongGates.in || kongGates.out) {
    bananas += 3 // freebies by Kasplat
    if (haveRambiCage.in || haveRambiCage.out) {
      bananas += 5 // in hut
    }
  }

  return bananas
}

export const useDiddyMedalInLogic = (): number => {
  const inStage = usePlayJapes()
  const canSlam = useSlamJapes()
  const kong = useDiddy()
  const gun = usePeanut()
  const move = useCharge()
  const shuffleBananas = useShuffleColoredBananas()
  const climbing = useClimbing()
  const bananaport = useBananaportAll()
  let bananas = useDiddyMedalCommonLogic()

  if (!inStage.in) {
    return 0
  }
  if (!kong) {
    return 0
  }
  if (shuffleBananas) {
    return 100
  }

  if ((climbing || bananaport) && gun && canSlam && move) {
    bananas += 5 // by mine cart
  }

  return bananas
}

export const useDiddyMedalOutLogic = (): number => {
  const inStage = usePlayJapes()
  const kong = useDiddy()
  const gun = usePeanut()
  const highGrab = useHighGrab()
  const shuffleBananas = useShuffleColoredBananas()
  const climbing = useClimbing()
  const bananaport = useBananaportAll()
  let bananas = useDiddyMedalCommonLogic()

  if (!inStage.out) {
    return 0
  }
  if (!kong) {
    return 0
  }
  if (shuffleBananas) {
    return 100
  }

  if ((climbing || bananaport) && gun && highGrab) {
    bananas += 5 // sequence break
  }

  return bananas
}
