import Component from 'inferno-component';
import createElement from 'inferno-create-element';
import {classNameBuilder, getEventHandlerFromProps} from '../common';
import {Colors, Sizes, States, Styles} from '../modifiers';

export enum ButtonTypes {
  Anchor,
  Button,
  Submit,
  Reset,
}

interface ButtonProps {
  children?: any;
  color?: Colors;
  size?: Sizes;
  styles?: Styles | Styles[];
  state?: States;
  type: ButtonTypes;
  disabled?: boolean;
  static?: boolean;

  [x: string]: any;
}

export class Button extends Component<ButtonProps, {}> {
  render () {
    var className = classNameBuilder(['button',
                                      this.props.color,
                                      this.props.size,
                                      this.props.state,
                                      this.props.styles,
                                      (this.props.static ? 'is-static' : ''),
                                    ])
    switch(this.props.type){
      case ButtonTypes.Anchor:
        return (
          <a className={className}
             {...getEventHandlerFromProps(this.props)}>
            {this.props.children}
          </a>
        );
      case ButtonTypes.Submit:
        return (
          <input className={className}
                 type="submit"
                 value={this.props.children}
                 disabled={this.props.disabled}
                 {...getEventHandlerFromProps(this.props)}
                 />
        );
      case ButtonTypes.Reset:
        return (
          <input className={className}
                 type="reset"
                 value={this.props.children}
                 disabled={this.props.disabled}
                 {...getEventHandlerFromProps(this.props)}
                 />
        );
      case ButtonTypes.Button:
      default:
        return (
          <button className={className}
                  disabled={this.props.disabled}
                  {...getEventHandlerFromProps(this.props)}
                  >
            {this.props.children}
          </button>
        );
    }
  }
}
