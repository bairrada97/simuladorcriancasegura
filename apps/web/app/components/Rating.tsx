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

export type RatingMinValues = '0.6' | '1.6' | '2.6' | '3.6' | '4.6';
export type RatingMaxValues = '1.5' | '2.5' | '3.5' | '4.5' | '5.5';

export type RatingCodes = VariantProps<typeof rating>['variant'];
export type RatingNames = string;
export type RatingContent = {
  code: RatingCodes;
  name: RatingNames;
  values: { min: RatingMinValues; max: RatingMaxValues };
};
export type VariantMapping = Record<RatingMaxValues, RatingContent>;

const variantMapping: VariantMapping = {
  '1.5': {
    code: 'veryGood',
    name: 'Muito Bom',
    values: {
      min: '0.6',
      max: '1.5',
    },
  },
  '2.5': {
    code: 'good',
    name: 'Bom',
    values: {
      min: '1.6',
      max: '2.5',
    },
  },
  '3.5': {
    code: 'satisfactory',
    name: 'Satisfatório',
    values: {
      min: '2.6',
      max: '3.5',
    },
  },

  '4.5': {
    code: 'sufficient',
    name: 'Suficiente',
    values: {
      min: '3.6',
      max: '4.5',
    },
  },
  '5.5': {
    code: 'inadequate',
    name: 'Inadequado',
    values: {
      min: '4.6',
      max: '5.5',
    },
  },
};

export const Rating = ({ ratingValue }: RatingProps) => {
  const [foundRating, setFoundRating] = useState<RatingContent>({
    code: 'veryGood',
    name: 'Muito Bom',
    values: { min: '0.6', max: '1.5' },
  });

  useEffect(() => {
    const foundVariant = Object.keys(variantMapping).find((key) => {
      const rating = parseFloat(key);
      return ratingValue > 0 && ratingValue <= rating;
    }) as RatingMaxValues;

    if (foundVariant) {
      setFoundRating(variantMapping[foundVariant]);
    }
  }, []);

  return (
    <div
      className={rating({
        variant: foundRating.code,
        className: 'text-neu-00 text-14 font-medium min-w-[32px] inline-flex justify-center rounded-sm',
      })}
    >
      {ratingValue}
    </div>
  );
};

export const RatingItem = ({ ratingValue }: RatingProps) => {
  const [foundRating, setFoundRating] = useState<RatingContent>({
    code: 'veryGood',
    name: 'Muito Bom',
    values: { min: '0.6', max: '1.5' },
  });

  useEffect(() => {
    const foundVariant = Object.keys(variantMapping).find((key) => {
      const rating = parseFloat(key);
      return ratingValue > 0 && ratingValue <= rating;
    }) as RatingMaxValues;

    if (foundVariant) {
      setFoundRating(variantMapping[foundVariant]);
    }
  }, []);

  return (
    <li className="inline-flex justify-center items-center gap-8">
      <span className={cn('w-8 h-8 rounded-lg', rating({ variant: foundRating.code }))}></span>
      <span className=" text-neu-09 font-medium min-w-[64px] flex justify-center">
        {foundRating.values.min} - {foundRating.values.max}
      </span>
      <span className="text-14 text-neu-07">{foundRating.name}</span>
    </li>
  );
};