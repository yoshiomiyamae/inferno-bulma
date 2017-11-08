import Component from 'inferno-component';
import createElement from 'inferno-create-element';
import {classNameBuilder} from '../common';

export enum ImageSize {
  Sixteen = 'is-16x16',
  TwentyFour = 'is-24x24',
  ThirtyTwo = 'is-32x32',
  FortyEight = 'is-48x48',
  SixtyFour = 'is-64x64',
  NintySix = 'is-96x96',
  OneTwentyEight = 'is-128x128',
}

export enum ResponsiveImageWithRatios {
  Square = 'is-square',
  OneByOne = 'is-1by1',
  FourByThree = 'is-4by3',
  ThreeByTwo = 'is-3by2',
  SixteenByNine = 'is-16by9',
  TwoByOne = 'is-2by1',
}

interface ImageProps {
  children?: any;
  size?: ImageSize;
  responsiveImageWithRatios?: ResponsiveImageWithRatios;

  [x: string]: any;
}

export class Image extends Component<ImageProps, {}> {
  render () {
    return (
      <figure className={classNameBuilder(['image',
                                           this.props.size,
                                           this.props.responsiveImageWithRatios,
                                         ])}>
        {this.props.children}
      </figure>
    );
  }
}
