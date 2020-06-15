import * as React from "react"
import { Svg } from './styles'

export const ReturnIcon = ({ goBack }) => {
  return (
    <Svg viewBox="0 0 443.52 443.52" onClick={goBack}>
      <path
        d="M143.492 221.863L336.226 29.129c6.663-6.664 6.663-17.468 0-24.132-6.665-6.662-17.468-6.662-24.132 0l-204.8 204.8c-6.662 6.664-6.662 17.468 0 24.132l204.8 204.8c6.78 6.548 17.584 6.36 24.132-.42 6.387-6.614 6.387-17.099 0-23.712L143.492 221.863z" />
    </Svg>
  )
}

export const ListIconTable = ({ traerTabla }) => {
  return (
    <Svg viewBox="0 0 50 50" onClick={traerTabla}>
      <path d="M0 3h50v2H0zm0 14h50v2H0zm0 14h50v2H0zm0 14h50v2H0z" />
    </Svg>
  )
}

export const Add = ({ traerFormulario, display }) => {
  return (
    <Svg
      viewBox="0 0 512 512"
      onClick={traerFormulario}
      display={display}
    >
      <path d="M492 236H276V20c0-11.046-8.954-20-20-20s-20 8.954-20 20v216H20c-11.046 0-20 8.954-20 20s8.954 20 20 20h216v216c0 11.046 8.954 20 20 20s20-8.954 20-20V276h216c11.046 0 20-8.954 20-20s-8.954-20-20-20z" />
    </Svg>
  )
}
