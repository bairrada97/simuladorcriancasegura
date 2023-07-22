import { cn } from '@lib/utils';

export interface IconProps {
  icon: string;
  color: string;
  size: string;
}

export const Icon = ({ icon, color, size }: IconProps) => {
  return (
    <div className={cn(`material-symbols-outlined text-${color}`)}>
      <span className={cn(`text-${size}`)}>{icon}</span>
    </div>
  );
};
