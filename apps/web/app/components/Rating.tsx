import React, { ComponentProps, ElementType, HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@lib/utils";


const rating = cva("", {
  variants: {
    variant: {
      "veryGood": ["bg-m-01--light-04"],
      "good": ["bg-m-01"],
      "satisfatory": ["bg-m-01"],

    },
  },
});

export interface RatingProps {
  ratingValue: number
}

export interface CardOptionsProps {
    type: string
  }
 


export const CardOptions = ({type
}: CardOptionsProps) => {
return <div>{type == 'rating' ? <Rating ratingValue={1.1}/> : <span>o</span>}</div>
};

export const Rating = ({ratingValue
}: RatingProps) => {
return <span className={cn("text-20 font-medium md:text-12", rating({variant:"veryGood"}))}>{ratingValue}</span>
};
