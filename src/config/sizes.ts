export type ComponentSize = 'large' | 'small'| 'medium';

export const sidePaddings: {[key in ComponentSize]: number} = {
    large: 30,
    small: 20,
    medium:25
}

export const heights: {[key in ComponentSize]: number} = {
    large: 55,
    
    small: 35,
    medium:25
}