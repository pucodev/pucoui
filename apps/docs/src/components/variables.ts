import { Color } from './pucoui/types'

export const colors: Color[] = [
  'primary',
  'info',
  'success',
  'warning',
  'error',
  'white',
]

export const defaultDimen = 16
export const spaces = [0, 0.25, 0.5, 0.75, 1, 1.5, 3]
export const elevations = [1, 2, 3, 4, 5]

export const textSizes = [3, 2.5, 2, 1.5, 1.25, 1, 0.75]

export const fontWeights: { key: string; value: number }[] = [
  {
    key: 'thin',
    value: 100,
  },
  {
    key: 'extra-light',
    value: 200,
  },
  {
    key: 'light',
    value: 300,
  },
  {
    key: 'normal',
    value: 400,
  },
  {
    key: 'medium',
    value: 500,
  },
  {
    key: 'semi-bold',
    value: 600,
  },
  {
    key: 'bold',
    value: 700,
  },
  {
    key: 'extra-bold',
    value: 800,
  },
  {
    key: 'black',
    value: 900,
  },
]

export const fontAlignments = ['left', 'center', 'right', 'justify']

export const imageSizes = [16, 24, 32, 48, 64, 96, 128]
export const imageAspectRatios = [
  [1, 1],
  [5, 4],
  [4, 3],
  [3, 2],
  [5, 3],
  [16, 9],
  [2, 1],
  [3, 1],
  [4, 5],
  [3, 4],
  [2, 3],
  [3, 5],
  [9, 16],
  [1, 2],
  [1, 3],
]

export const breakpoints: {
  name: string
  prefix: string
  dimension_prefix: string
  dimension_rem: number
}[] = [
  {
    name: 'Mobile',
    prefix: '',
    dimension_prefix: '<',
    dimension_rem: 30,
  },
  {
    name: 'Small',
    dimension_prefix: '>',
    prefix: 'sm',
    dimension_rem: 30,
  },
  {
    name: 'Medium',
    prefix: 'md',
    dimension_prefix: '>',
    dimension_rem: 48,
  },
  {
    name: 'Large',
    prefix: 'lg',
    dimension_prefix: '>',
    dimension_rem: 62,
  },
  {
    name: 'Extra large',
    dimension_prefix: '>',
    prefix: 'xl',
    dimension_rem: 80,
  },
  {
    name: 'Extra extra large',
    prefix: 'xxl',
    dimension_prefix: '>',
    dimension_rem: 96,
  },
]
