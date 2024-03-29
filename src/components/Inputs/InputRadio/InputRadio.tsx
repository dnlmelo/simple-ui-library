import { FC } from 'react';
import { Icon } from '../../Icons/Icon';
import './InputRadio.scss';
import {Tooltip} from '../../Tooltip/Tooltip';
import { InputRadioProps } from './InputRadio.types';

export const InputRadio: FC<InputRadioProps> = (props) => {
  const {color, error, label, infoMessage, errorMessage, size, ...res} = props
  const classes = [
    'inputRadio',
    `inputRadio-color--${color}`,
    `inputRadio-size-${size}`,
    `${error? 'inputRadio-error': ''}`
  ].join(' ')

  return (
  <div className={classes} data-testid="InputRadio">
    <input type='radio' {...res} />
    {(label || infoMessage) && <label htmlFor={res.id}>
      {label}
      {infoMessage && 
      <>
        <Icon name='info' size='sm' color="info" id={`info-${res.id}`}></Icon>
        <Tooltip color='info' triggerId={`info-${res.id}`} x={'left'} y={'top'}>{infoMessage}</Tooltip>
      </>
      }
    </label>}
    {errorMessage && error? 
      <div data-testid="errorMsg" className='error-msg'>
        {errorMessage}
      </div> : ""
    }
  </div>
  );
}