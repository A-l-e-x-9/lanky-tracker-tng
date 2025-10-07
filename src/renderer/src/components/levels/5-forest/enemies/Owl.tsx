import DropPool from '@renderer/components/pools/Drops'
import { useDefeatKlump, useDefeatZinger } from '@renderer/hooks/enemies'
import { useForestOwl } from '@renderer/hooks/forest'
import { useMini, useSax } from '@renderer/hooks/kongs'
import ForestCheck from '../check'

const OwlEnemies: React.FC = () => {
  const owlTree = useForestOwl()
  const klump = useDefeatKlump()
  const zinger = useDefeatZinger()
  const mini = useMini()
  const sax = useSax()
  return (
    <DropPool>
      <ForestCheck
        id={5342}
        name="Enemy 1 in the Yellow Tunnel"
        region="Forest Area 4"
        canGetLogic={owlTree && zinger.in}
        canGetBreak={owlTree && zinger.out}
      />
      <ForestCheck
        id={5343}
        name="Enemy 2 in the Yellow Tunnel"
        region="Forest Area 4"
        canGetLogic={owlTree && zinger.in}
        canGetBreak={owlTree && zinger.out}
      />
      <ForestCheck
        id={5344}
        name="Enemy 3 in the Yellow Tunnel"
        region="Forest Area 4"
        canGetLogic={owlTree && klump}
      />
      <ForestCheck
        id={5345}
        name="Enemy 0 surrounding the big tree"
        region="Forest Area 4"
        canGetLogic={owlTree && klump}
      />
      <ForestCheck
        id={5346}
        name="Enemy 1 surrounding the big tree"
        region="Forest Area 4"
        canGetLogic={owlTree && klump}
      />
      <ForestCheck
        id={5347}
        name="Enemy at exit of yellow tunnel"
        region="Forest Area 4"
        canGetLogic={owlTree && zinger.in}
        canGetBreak={owlTree && zinger.out}
      />
      <ForestCheck
        id={5348}
        name="Enemy 0 at Melon Crate"
        region="Forest Area 4"
        canGetLogic={owlTree && zinger.in}
        canGetBreak={owlTree && zinger.out}
      />
      <ForestCheck
        id={5349}
        name="Enemy 1 at Melon Crate"
        region="Forest Area 4"
        canGetLogic={owlTree && zinger.in}
        canGetBreak={owlTree && zinger.out}
      />
      <ForestCheck
        id={5350}
        name="Enemy 2 at Melon Crate"
        region="Forest Area 4"
        canGetLogic={owlTree && zinger.in}
        canGetBreak={owlTree && zinger.out}
      />
      <ForestCheck
        id={5351}
        name="Enemy 0 in the tree stump's gauntlet"
        region="Forest Area 4"
        canGetLogic={owlTree && mini && sax}
      />
      <ForestCheck
        id={5352}
        name="Enemy 1 in the tree stump's gauntlet"
        region="Forest Area 4"
        canGetLogic={owlTree && mini && sax}
      />
      <ForestCheck
        id={5353}
        name="Enemy 2 in the tree stump's gauntlet"
        region="Forest Area 4"
        canGetLogic={owlTree && mini && sax}
      />
      <ForestCheck
        id={5354}
        name="Enemy 3 in the tree stump's gauntlet"
        region="Forest Area 4"
        canGetLogic={owlTree && mini && sax}
      />
    </DropPool>
  )
}

export default OwlEnemies
