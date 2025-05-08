import { 
  Popover, 
  ColorPicker,
  TextField
} from "@shopify/polaris";
import {useState, useEffect, useCallback} from 'react';

import { hexToHsb, hsbToHex } from '../../utils/utils'; 

export default function ColorField({ onChange, value, field }) {
  const [popoverActive, setPopoverActive] = useState(false);
  const [rawInput, setRawInput] = useState('');
  const [color, setColor] = useState({
    hue: 120,
    brightness: 1,
    saturation: 1,
  });

  const togglePopoverActive = useCallback(
    () => setPopoverActive((popoverActive) => !popoverActive),
    [],
  );

  const handleColorInput = (value) => {
    setRawInput(value);
  };

  const handleInputBlur = () => {
    // On blur, validate and convert the input
    const hexRegex = /^#?([A-Fa-f0-9]{6})$/;
    if (hexRegex.test(rawInput)) {
      // Convert hex to HSB and update color
      const hsbColor = hexToHsb(rawInput);
      setColor(hsbColor);
    } else {
      // If invalid, revert to current color's hex value
      setRawInput(hsbToHex(color));
    }

    onChange({
      field: field,
      color: hsbToHex(color)
    });
  };

  const handleColorPickerChange = (newColor) => {
    setColor(newColor);
    // Update the raw input with the new hex value
    setRawInput(hsbToHex(newColor));
  };

  const colorPrefix = () => {
    return <div style={{
      width: '15px', 
      height: '15px', 
      backgroundColor: hsbToHex(color),
      boxShadow: '0 0 0 1px rgba(227, 227, 227, 1)	',
      borderRadius: '3px',
    }}></div>;
  };

  const handlePopoverClose = () => {
    setPopoverActive(false);
    // Handle any additional logic you need when popover closes
    onChange({
      field: field,
      color: hsbToHex(color)
    });
  };

  useEffect(() => {
      setRawInput(value);
      setColor(hexToHsb(value));
  }, []);

  const activator = (
    <TextField 
      onFocus={togglePopoverActive} 
      onBlur={handleInputBlur}
      value={rawInput || hsbToHex(color)}
      onChange={handleColorInput}
      prefix={colorPrefix()}
    />
  );

  return (
    <Popover
      active={popoverActive}
      activator={activator}
      autofocusTarget="first-node"
      preferredAlignment="left"
      preferredPosition="below"
      onClose={handlePopoverClose}
    >
      <ColorPicker onChange={handleColorPickerChange} color={color}/>
    </Popover>
  )
}