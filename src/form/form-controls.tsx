import Component from 'inferno-component';
import createElement from 'inferno-create-element';
import {classNameBuilder} from '../common';
import {Alignments, Sizes} from '../modifiers';

export enum IconPosition {
  Left = 'has-icons-left',
  Right = 'has-icons-right',
}

export enum FieldStyle {
  Addons = 'has-addons',
  Grouped = 'is-grouped',
}

interface LabelProps {
  children?: any;
}

interface FieldProps {
  children?: any;
  style?: FieldStyle;
  alignment?: Alignments;
  multiline?: boolean;
  horizontal?: boolean;
}

interface FieldLabelProps {
  children?: any;
  size?: Sizes;
}

interface FieldBodyProps {
  children?: any;
}

interface ControlProps {
  children?: any;
  iconPosition?: IconPosition | IconPosition[];
  expanded?: boolean;
}

export class Label extends Component<LabelProps, {}> {
  render () {
    return (
      <div className={classNameBuilder(['label'])}>
        {this.props.children}
      </div>
    );
  }
}

export class Field extends Component<FieldProps, {}> {
  render () {
    var alignment = this.props.style && this.props.alignment ? [this.props.style, this.props.alignment.substr(2)].join('') : this.props.alignment;
    var multiline = this.props.style ? [this.props.style, (this.props.multiline ? '-multiline' : '')].join('') : '';
    return (
      <div className={classNameBuilder(['field',
                                        this.props.style,
                                        alignment,
                                        multiline,
                                        (this.props.horizontal ? 'is-horizontal' : ''),
                                      ])}>
        {this.props.children}
      </div>
    );
  }
}

export class FieldLabel extends Component<FieldLabelProps, {}> {
  render () {
    return (
      <div className={classNameBuilder(['field-label',
                                        this.props.size,
                                      ])}>
        {this.props.children}
      </div>
    );
  }
}

export class FieldBody extends Component<FieldBodyProps, {}> {
  render () {
    return (
      <div className={classNameBuilder(['field-body'])}>
        {this.props.children}
      </div>
    );
  }
}

export class Control extends Component<ControlProps, {}> {
  render () {
    return (
      <div className={classNameBuilder(['control',
                                        this.props.iconPosition,
                                        (this.props.expanded ? 'is-expanded' : ''),
                                      ])}>
        {this.props.children}
      </div>
    );
  }
}
