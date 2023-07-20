import { cn } from '@lib/utils';
import { Rating } from './Rating';
import { Icon } from './Icon';
import { ProductTestsNames } from '../../types';

export interface productTestsProps {
  rating?: number;
  text: ProductTestsNames;
  plusTest?: boolean;
}

export const ProductTestsItem = ({ rating, text, plusTest }: productTestsProps) => {
  return (
    <div
      className={cn(
        'flex justify-between rounded-sm pl-16 pr-16 pt-8 pb-8 h-40',
        plusTest ? 'bg-plusTest' : 'bg-neu-02',
      )}
    >
      <span className="text-16 text-neu-09">{text}</span>
      <div className="flex justify-center items-center w-32">
        {rating ? (
          <Rating ratingValue={rating} />
        ) : (
          <Icon icon={plusTest ? 'check_circle' : 'cancel'} color="neu-06" size="24" />
        )}
      </div>
    </div>
  );
};
