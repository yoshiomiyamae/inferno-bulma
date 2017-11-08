import Component from 'inferno-component';
import createElement from 'inferno-create-element';
import {classNameBuilder} from '../common';
import {Colors, Sizes} from '../modifiers';

  interface HeroProps {
    children?: any;
    color?: Colors;
    size?: Sizes;
  }
  interface HeroHeadProps {
    children?: any;
  }
  interface HeroBodyProps {
    children?: any;
  }
  interface HeroFootProps {
    children?: any;
  }

  export class Hero extends Component<HeroProps, {}> {
    render () {
      return (
        <section className={classNameBuilder(['hero',
                                              this.props.color,
                                              this.props.size,
                                            ])}>
          {this.props.children}
        </section>
      );
    }
  }

  export class HeroHead extends Component<HeroHeadProps, {}> {
    render () {
      return (
        <div className={classNameBuilder(['hero-head'])}>
          {this.props.children}
        </div>
      );
    }
  }

  export class HeroBody extends Component<HeroBodyProps, {}> {
    render () {
      return (
        <div className={classNameBuilder(['hero-body'])}>
          {this.props.children}
        </div>
      );
    }
  }

  export class HeroFoot extends Component<HeroFootProps, {}> {
    render () {
      return (
        <div className={classNameBuilder(['hero-foot'])}>
          {this.props.children}
        </div>
      );
    }
  }
