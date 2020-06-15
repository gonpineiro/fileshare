import * as React from "react"
import { SvgIcon, SvgTable } from './styles'

export const ReturnIcon = ({ goBack }) => {
  return (
    <SvgIcon viewBox="0 0 443.52 443.52" onClick={goBack} size={25}>
      <path
        d="M143.492 221.863L336.226 29.129c6.663-6.664 6.663-17.468 0-24.132-6.665-6.662-17.468-6.662-24.132 0l-204.8 204.8c-6.662 6.664-6.662 17.468 0 24.132l204.8 204.8c6.78 6.548 17.584 6.36 24.132-.42 6.387-6.614 6.387-17.099 0-23.712L143.492 221.863z" />
    </SvgIcon>
  )
}

export const ListIconTable = ({ traerTabla }) => {
  return (
    <SvgIcon viewBox="0 0 50 50" onClick={traerTabla} size={25}>
      <path d="M0 3h50v2H0zm0 14h50v2H0zm0 14h50v2H0zm0 14h50v2H0z" />
    </SvgIcon>
  )
}

export const Add = ({ traerFormulario, display }) => {
  return (
    <SvgIcon
      viewBox="0 0 512 512"
      onClick={traerFormulario}
      display={display}
      size={20}
    >
      <path d="M492 236H276V20c0-11.046-8.954-20-20-20s-20 8.954-20 20v216H20c-11.046 0-20 8.954-20 20s8.954 20 20 20h216v216c0 11.046 8.954 20 20 20s20-8.954 20-20V276h216c11.046 0 20-8.954 20-20s-8.954-20-20-20z" />
    </SvgIcon>
  )
}

export const Check = ({ display }) => {
  return (
    <SvgTable viewBox="0 0 426.667 426.667" size={20} display={display}>
      <path d="M421.876 56.307c-6.548-6.78-17.352-6.968-24.132-.42-.142.137-.282.277-.42.42L119.257 334.375l-90.334-90.334c-6.78-6.548-17.584-6.36-24.132.42-6.388 6.614-6.388 17.099 0 23.713l102.4 102.4c6.665 6.663 17.468 6.663 24.132 0L421.456 80.44c6.78-6.549 6.968-17.353.42-24.133z" />
    </SvgTable>
  )
}
