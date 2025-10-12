import { usePoolKongs } from '@renderer/hooks/settings'

const KongCheck: React.FC<React.PropsWithChildren> = ({ children }) =>
  usePoolKongs() ? <>{children}</> : null

export default KongCheck
