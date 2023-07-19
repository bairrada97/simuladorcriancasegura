'use client';
import React, { ComponentProps, ElementType, HTMLAttributes, useEffect, useState } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@lib/utils';

const rating = cva('', {
  variants: {
    variant: {
      veryGood: ['bg-teal'],
      good: ['bg-green'],
      satisfactory: ['bg-yellow'],
      sufficient: ['bg-orange'],
      inadequate: ['bg-red'],
    },
  },
});

export interface RatingProps extends VariantProps<typeof rating> {
  ratingValue: number;
}

export interface RatingItemProps {
  color: string;
  values: string;
  description: string;
}

export type RatingValuesThreshold = '1.5' | '2.5' | '3.5' | '4.5' | '5.5';

export const Rating = ({ ratingValue }: RatingProps) => {
  const [variantName, setVariantName] = useState<VariantProps<typeof rating>['variant']>('veryGood');

  const variantMapping: Record<RatingValuesThreshold, VariantProps<typeof rating>['variant']> = {
    '1.5': 'veryGood',
    '2.5': 'good',
    '3.5': 'satisfactory',
    '4.5': 'sufficient',
    '5.5': 'inadequate',
  };

  useEffect(() => {
    const foundVariant = Object.keys(variantMapping).find((key) => {
      const rating = parseFloat(key);
      return ratingValue > 0 && ratingValue <= rating;
    }) as RatingValuesThreshold;

    if (foundVariant) {
      setVariantName(variantMapping[foundVariant]);
    }
  }, []);

  return (
    <div className={cn('text-neu-00 text-14 font-medium min-w-[32px] inline-flex justify-center rounded-sm', rating({ variant: variantName }))}>{ratingValue}</div>
  );
};


export const RatingItem = ({color, values, description}: RatingItemProps) => {

  return (
    <div className="inline-flex justify-center items-center gap-8">
      <span className={cn(`w-8 h-8 rounded-lg bg-teal flex bg-${color}`)}></span> 
      <p className='text-14 text-neu-09 font-medium'>{values}</p> 
      <p className='text-14 text-neu-07'>{description}</p>
    </div>
  );
};
