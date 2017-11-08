import {Float, Other, Spacing} from './helpers';
import {Hide, Show} from './responsive-helpers';
import {ResponsiveSize, ResponsiveTextAlignment, Size, TextAlignment, TextColors, TextTransformation, TextWeight} from './typography-helpers';

export {Float, Other, Spacing, Hide, Show, ResponsiveSize, ResponsiveTextAlignment, Size, TextAlignment, TextColors, TextTransformation, TextWeight}

export enum Colors {
    White = 'is-white',
    Black = 'is-black',
    Light = 'is-light',
    Dark = 'is-dark',
    Primary = 'is-primary',
    Link = 'is-link',
    Info = 'is-info',
    Success = 'is-success',
    Warning = 'is-warning',
    Danger = 'is-danger',
}

export enum Sizes {
    Normal = 'is-normal',
    Small = 'is-small',
    Medium = 'is-medium',
    Large = 'is-large',
}

export enum Styles {
    Outlined = 'is-outlined',
    Inverted = 'is-inverted',
}

export enum States {
    Normal = '',
    Hover = 'is-hovered',
    Focus = 'is-focused',
    Active = 'is-active',
    Loading = 'is-loading',
}

export enum Alignments {
    Centered = 'is-centered',
    Right = 'is-right',
}

export enum Breakpoints {
    Mobile = 'is-mobile',
    Widescreen = 'is-widescreen',
    Fullhd = 'is-fullhd',
}
