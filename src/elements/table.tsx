import Component from 'inferno-component';
import createElement from 'inferno-create-element';
import {classNameBuilder} from '../common';

interface TableProps {
  children?: any;
  bordered?: boolean;
  striped?: boolean;
  narrow?: boolean;
  hoverable?: boolean;
  fullwidth?: boolean;

  [x: string]: any;
}

interface TableRowProps {
  children?: any;
  seleted?: boolean;

  [x: string]: any;
}

export class Table extends Component<TableProps, {}> {
  render () {
    return (
      <table className={classNameBuilder(['table',
                                          (this.props.bordered ? 'is-bordered' : ''),
                                          (this.props.striped ? 'is-striped' : ''),
                                          (this.props.narrow ? 'is-narrow' : ''),
                                          (this.props.hoverable ? 'is-hoverable' : ''),
                                          (this.props.fullwidth ? 'is-fullwidth' : ''),
                                        ])}>
        {this.props.children}
      </table>
    );
  }
}

export class TableRow extends Component<TableRowProps, {}> {
  render () {
    return (
      <tr className={classNameBuilder([(this.props.seleted ? 'is-selected' : '')])}>
        {this.props.children}
      </tr>
    );
  }
}
