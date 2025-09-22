import { useShuffledArenas } from '@renderer/src/hooks/settings'

const VanillaArena: React.FC<React.PropsWithChildren> = ({ children }) =>
  useShuffledArenas() ? null : <>{children}</>

export default VanillaArena
