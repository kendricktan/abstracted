import React from 'react'
import { useTheme } from '@zeit-ui/react'

export const LogoIcon: React.FC<React.SVGAttributes<any>> = ({ ...props }) => {
    const theme = useTheme()
    return (
        <svg id="intersect" enable-background="new 0 0 300 300" height="25" viewBox="0 0 300 300" width="25" fill="none" {...props}>
            <g fill={theme.palette.foreground}>
            <path d="m99.265 114c8.824 0 16-7.176 16-16s-7.176-16-16-16-16 7.176-16 16 7.175 16 16 16zm0-24c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.589-8 8-8z"/>
            <path d="m117.265 64.529c2.501 0 4.529-2.028 4.529-4.529 0-2.502-2.028-4.53-4.529-4.53s-4.529 2.028-4.529 4.53c-.001 2.501 2.027 4.529 4.529 4.529z"/>
            <path d="m45.265 115.47c-2.501 0-4.529 2.028-4.529 4.53 0 2.501 2.028 4.529 4.529 4.529s4.529-2.028 4.529-4.529c0-2.502-2.028-4.53-4.529-4.53z"/>
            <path d="m255.265 50h-52.719c-26.07 0-47.281 21.211-47.281 47.281v48.719h-48.719c-26.07 0-47.281 21.211-47.281 47.281v52.719c0 2.211 1.789 4 4 4h52.719c26.07 0 47.281-21.211 47.281-47.281v-48.719h48.719c26.07 0 47.281-21.211 47.281-47.281v-52.719c0-2.211-1.789-4-4-4zm-100 152.719c0 21.66-17.621 39.281-39.281 39.281h-48.719v-48.719c0-21.66 17.621-39.281 39.281-39.281h48.719zm96-96c0 21.66-17.621 39.281-39.281 39.281h-48.719v-48.719c0-21.66 17.621-39.281 39.281-39.281h48.719z"/>
            </g>
            <style jsx>{`
        svg {
          cursor: pointer;
          user-select: none;
        }
      `}</style>


        </svg>
    )
}

export default React.memo(LogoIcon)