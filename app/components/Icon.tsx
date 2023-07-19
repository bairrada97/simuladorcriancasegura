import { cn } from "@/lib/utils"
import { HTMLAttributes } from "react"

export interface IconProps extends HTMLAttributes<HTMLElement> {
  icon: string
  classNames: string
}

export const Icon = ({ icon, classNames }: IconProps) => {
  return <i className={`material-symbols-outlined ${classNames}`}>{icon}</i>
}
