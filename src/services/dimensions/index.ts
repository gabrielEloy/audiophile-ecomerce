import { dimensions } from "../../foundation/dimensions"

type ICurrentScreenSize = 'desktop' | 'tablet' | 'mobile'

export function getCurrentScreenSize(windowWidth: number): ICurrentScreenSize {
    if(windowWidth >= dimensions.desktop){
        return "desktop"
    }

    if(windowWidth >= dimensions.tablet){
        return "tablet"
    }

    return "mobile"
}