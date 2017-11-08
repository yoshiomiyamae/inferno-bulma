import Component from 'inferno-component';
import createElement from 'inferno-create-element';
import {classNameBuilder} from '../common';
import {Sizes} from '../modifiers';

interface SectionProps {
  children?: any;
  spacing?: Sizes;
}

export class Section extends Component<SectionProps, {}> {
  render () {
    return (
      <section className={classNameBuilder(['section',
                                            this.props.spacing,
                                          ])}>
        {this.props.children}
      </section>
    );
  }
}
