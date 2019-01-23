import React from 'react';
import { Field } from 'redux-form';
import { Col, FormGroup, Label, Input, Tooltip } from 'reactstrap';

let selectItem = (props, item, i) => {
  const valueKey = props.valueKey || 'id';
  const labelKey = props.labelKey || 'name';
  const labelKeyTwo = props.labelKeyTwo;
  const label = props.includeLabel ?
                `${props.label}# ${item[labelKey]}` :
                labelKeyTwo ? `${item[labelKey]} ${item[labelKeyTwo]}`:
                item[labelKey];

  return (
    <option value={item[valueKey]} key={`${props.name}_${i}`}>{label}</option>
  )
}

class ReduxSelect extends React.Component {
  constructor (props) {
    super(props)
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.tooltipToggle = this.tooltipToggle.bind(this);
  }

  static defaultProps = {
    handleChange: () => {},
    handleFocus: () => {}
  }

  tooltipToggle() {
   this.setState({
     tooltipOpen: !this.state.tooltipOpen
   });
 }

  handleChange (e) {
    this.props.handleChange(e.target.value);
  }

  handleFocus (e) {
    this.props.handleFocus(e.target.value);
  }

  render() {
    const { size = '4', placement = 'top', showLabel = true, placeholder } = this.props;
    const fieldName = this.props.id || this.props.name.replace(/\./g,'_');

    return (
          <Col md={size} style={{ paddingRight: 5, paddingLeft: 5 }}>
            <FormGroup>
              {showLabel && <Label htmlFor={this.props.name}>
                {this.props.label}{' '}
                {this.props.tooltip && <i
                                        className="fa fa-info-circle text-primary"
                                        id={fieldName}
                                        />
                }
              </Label>}
              {this.props.tooltip && <Tooltip
                                      placement={placement}
                                      isOpen={this.state.tooltipOpen}
                                      target={fieldName}
                                      toggle={this.tooltipToggle}>
                                      {this.props.tooltip}
                                    </Tooltip>
              }
              <Input
                tag={Field}
                component="select"
                type="select"
                className={'text-capitalize'}
                name={this.props.name}
                onFocus={this.handleFocus}
                onChange={this.handleChange}
                validate={this.props.validate}>
                <option value="">Select {placeholder}</option>
                {this.props.items && this.props.items.map((e, i)=> selectItem(this.props, e, i))}
          </Input>
            </FormGroup>
          </Col>)
      }
}

export default ReduxSelect
