import { 
  Popover, 
  ColorPicker,
  TextField
} from "@shopify/polaris";
import {useState, useEffect, useCallback} from 'react';

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

  // Convert HSB to Hex
  const hsbToHex = (hsb) => {
    const { hue, saturation, brightness } = hsb;
    let h = hue / 360;
    let s = saturation;
    let v = brightness;
    
    let r, g, b;
    
    let i = Math.floor(h * 6);
    let f = h * 6 - i;
    let p = v * (1 - s);
    let q = v * (1 - f * s);
    let t = v * (1 - (1 - f) * s);
    
    switch (i % 6) {
      case 0: r = v; g = t; b = p; break;
      case 1: r = q; g = v; b = p; break;
      case 2: r = p; g = v; b = t; break;
      case 3: r = p; g = q; b = v; break;
      case 4: r = t; g = p; b = v; break;
      case 5: r = v; g = p; b = q; break;
    }
    
    r = Math.round(r * 255);
    g = Math.round(g * 255);
    b = Math.round(b * 255);
    
    const toHex = (x) => {
      const hex = x.toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    };
    
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  };

  // Convert Hex to HSB
  const hexToHsb = (hex) => {
    // Remove # if present
    hex = hex.replace('#', '');
    
    // Convert to RGB
    const r = parseInt(hex.substring(0, 2), 16) / 255;
    const g = parseInt(hex.substring(2, 4), 16) / 255;
    const b = parseInt(hex.substring(4, 6), 16) / 255;
    
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const delta = max - min;
    
    let h = 0;
    let s = max === 0 ? 0 : delta / max;
    let v = max;
    
    if (delta !== 0) {
      if (max === r) {
        h = ((g - b) / delta) % 6;
      } else if (max === g) {
        h = (b - r) / delta + 2;
      } else {
        h = (r - g) / delta + 4;
      }
      
      h = Math.round(h * 60);
      if (h < 0) h += 360;
    }
    
    return {
      hue: h,
      saturation: s,
      brightness: v
    };
  };

  const handleColorInput = (value) => {
    // Store the raw input value without validation
    // This allows user to type freely
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