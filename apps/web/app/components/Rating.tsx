"use client"
import React, { ComponentProps, ElementType, HTMLAttributes, useEffect, useState } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@lib/utils";


const rating = cva("", {
  variants: { 
    variant: { 
      "veryGood": ["bg-teal"], 
      "good": ["bg-green"], 
      "satisfatory": ["bg-yellow"],
      "sufficient": ["bg-orange"],
      "inadequate": ["bg-red"],

    },
  },
});

export interface RatingProps {
  ratingValue: number
}

export interface CardOptionsItemsProps {
    type: string
  }
 


export const CardOptionsItems = ({type
}: CardOptionsItemsProps) => {


return <div>{type == 'rating' ? <Rating ratingValue={1.1}/> : <span>o</span>}</div>

};

export const Rating = ({ratingValue
}: RatingProps) => {
const [variantName, setVariantName] = useState('')
  useEffect(() => {
console.log(ratingValue)
if(ratingValue > 0 && ratingValue <= 1.5) {
  setVariantName('veryGood')
} else if(ratingValue >= 1.6 && ratingValue <= 2.5) {
  setVariantName('good')
}
else if(ratingValue >= 2.6 && ratingValue <= 3.5) {
  setVariantName('satisfactory')
}
else if(ratingValue >= 3.6 && ratingValue <= 4.5) {
  setVariantName('sufficient')
}
else if (ratingValue >= 4.6 && ratingValue <= 5.5) {
  setVariantName('inadequate')
}
  }, [])
return <span className={cn("text-20 font-medium text-neu-00", rating({variant:variantName}))}>{ratingValue}</span>
};

