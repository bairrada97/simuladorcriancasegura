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
    <span className={cn('text-20 text-neu-00  font-medium ', rating({ variant: variantName }))}>{ratingValue}</span>
  );
};
