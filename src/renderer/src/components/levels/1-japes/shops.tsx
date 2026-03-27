import { useShallow } from 'zustand/react/shallow'
import useDonkStore from '@renderer/store'
import ShopGenerator, { SnideGenerator } from '@renderer/components/pools/ShopGenerator'
import ShopPool from '@renderer/components/pools/Shops'
import { useJapesKongGates, usePlayJapes, usePortalNearDiddy, useDiddyMinePortal } from '@renderer/hooks/japes'
import { useBananaportAll } from '@renderer/hooks/settings'
import { useCranky, whatAFunky, useSnide, useClimbing } from '@renderer/hooks/kongs'

const Vanilla: React.FC = () => {
  const playJapes = usePlayJapes()
  const kongGates = useJapesKongGates()
  const climbing = useClimbing()
  const bananaport = useBananaportAll()
  const hasCranky = useCranky()
  const hasFunky = whatAFunky()
  const hasSnide = useSnide()
  const DKPortal = usePortalNearDiddy()
  const DKPortal2 = useDiddyMinePortal()
  const crankyFunky = useDonkStore(useShallow((state) => state.shuffledJapesCranky.japesCrankyFunky))
  const crankySnide = useDonkStore(useShallow((state) => state.shuffledJapesCranky.japesCrankySnide))
  const funkyCranky = useDonkStore(useShallow((state) => state.shuffledJapesFunky.japesFunkyCranky))
  const snideCranky = useDonkStore(useShallow((state) => state.shuffledJapesSnide.japesSnideCranky))

  return (
    <>
      <ShopGenerator
        baseId={1110}
        baseName="Japes Cranky"
        level="Jungle Japes"
        region={crankyFunky || crankySnide ? "Japes Hillside" : "Stormy Area"}
        inLogic={((crankyFunky || crankySnide) ? playJapes.in && (climbing || bananaport || DKPortal || DKPortal2) : kongGates.in) && hasCranky}
        outLogic={((crankyFunky || crankySnide) ? playJapes.out : kongGates.out) && hasCranky}
      />
      <ShopGenerator
        baseId={1120}
        baseName="Japes Funky"
        level="Jungle Japes"
        region={funkyCranky ? "Stormy Area" : "Japes Hillside"}
        inLogic={(funkyCranky ? kongGates.in : playJapes.in && (climbing || bananaport || DKPortal || DKPortal2)) && hasFunky}
        outLogic={(funkyCranky ? kongGates.out : playJapes.out) && hasFunky}
      />
      <SnideGenerator
        baseId={1140}
        baseName="Turn in Japes Blueprint for"
        level="Jungle Japes"
        region={snideCranky ? "Stormy Area" : "Japes Hillside"}
        inLogic={(snideCranky ? kongGates.in : playJapes.in && (climbing || bananaport || DKPortal || DKPortal2)) && hasSnide}
        outLogic={(snideCranky ? kongGates.out : playJapes.out) && hasSnide}
      />
    </>
  )
}

const ShopLocations: React.FC = () => {
  return <ShopPool><Vanilla /></ShopPool>
}

export default ShopLocations
