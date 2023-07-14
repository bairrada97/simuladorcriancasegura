import React, { ComponentProps, ElementType, HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";

const text = cva("", {
  variants: {
    variant: {
      "title-01": ["font-semibold", "uppercase", "max-w-[400px]"],
      "title-02": ["font-semibold", "uppercase", "text-14", "max-w-[400px]"],
      "highlight-01": ["font-regular", "text-20", "max-w-[400px]"],
      "highlight-02": ["font-bold", "text-20", "max-w-[400px]"],
      "highlight-03": ["font-regular", "text-18", "max-w-[400px]"],
      "highlight-04": ["font-bold", "text-18", "max-w-[400px]"],
      "body-01": ["font-regular", "text-16", "max-w-[400px]"],
      "body-01--semi": ["font-semibold", "text-16", "max-w-[400px]"],
      "body-02": ["font-regular", "text-14", "max-w-[400px]"],
      "body-02--semi": ["font-semibold", "text-14", "max-w-[400px]"],
      "caption-01": ["font-semibold", "text-12", "max-w-[400px]"],
      "caption-02": ["font-regular", "text-12", "max-w-[400px]"],
      "caption-03": ["font-semibold", "text-10", "max-w-[400px]"],
    },
  },
});

export interface TextProps
  extends HTMLAttributes<HTMLElement>,
    VariantProps<typeof text> {
  tag?: ElementType;
}

export const Text = ({
  tag = "p",
  className,
  variant,
  ...props
}: TextProps) => {
  const Text = tag;
  return <Text className={text({ variant, className })} {...props} />;
};
