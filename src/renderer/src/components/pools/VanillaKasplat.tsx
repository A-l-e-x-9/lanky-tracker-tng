import { useShuffleKasplats } from '@renderer/src/hooks/settings'

const VanillaKasplat: React.FC<React.PropsWithChildren> = ({ children }) =>
  useShuffleKasplats() ? null : <>{children}</>

export default VanillaKasplat
