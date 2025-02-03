import {
  Button,
  ColorPicker,
  Popover,
  Box,
  TextField
} from '@shopify/polaris';
import { useEffect, useState } from 'react';
import { hexToRgba, rgbaToHsb, parseRgba, hsbToRgba, rgbaToHex } from '../../utils/utils';

export default function ColorField({ onChange, value, field }) {
  const [visible, setVisible] = useState(false);
  
  const [color, setColor] = useState(() => {
    if (value && value.startsWith('#')) {
      const rgba = hexToRgba(value);
      if (rgba) {
        return rgbaToHsb(rgba.r, rgba.g, rgba.b);
      }
    }
    return {
      hue: 120,
      brightness: 1,
      saturation: 1,
    };
  });

  const [colorFormat, setColorFormat] = useState('hex');

  const handleOnClose = () => {
    setVisible(false);
  };

  const handleColorInput = (value) => {
    if (!value) {
      setColor({
        hue: 0,
        brightness: 0,
        saturation: 0
      });
      return;
    }
  
    // Handle hex color input
    if (value.startsWith('#')) {
      const rgba = hexToRgba(value);
      if (rgba) {
        const hsb = rgbaToHsb(rgba.r, rgba.g, rgba.b);
        setColor(hsb);
        setColorFormat('hex');
      }
      return;
    }

    // Handle rgba color input
    if (value.startsWith('rgba') || value.startsWith('rgb')) {
      const rgba = parseRgba(value);
      if (rgba) {
        const hsb = rgbaToHsb(rgba.r, rgba.g, rgba.b);
        setColor(hsb);
        setColorFormat('rgba');
      }
      return;
    }
  };

  const getDisplayColor = () => {
    const rgba = hsbToRgba(color.hue, color.saturation, color.brightness);
    return colorFormat === 'hex' 
      ? rgbaToHex(rgba)
      : `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})`;
  };

  const colorPrefix = () => {
    const rgba = hsbToRgba(color.hue, color.saturation, color.brightness);
    return <div style={{
      width: '20px', 
      height: '20px', 
      outline: `1px solid rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})`,
      border: '1px solid white',
      backgroundColor: `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})`
    }}></div>;
  };

  useEffect(() => {
    if (value !== undefined) {
      handleColorInput(value);
    }
  }, [value]);

  useEffect(() => {
    if (onChange) {
      onChange({
        field: field,
        color: getDisplayColor()
      });
    }
  }, [color, colorFormat]);

  return (
    <div>
      <Popover
        active={visible}
        autofocusTarget="none"
        preferredAlignment="left"
        fullWidth
        preferInputActivator={false}
        preferredPosition="below"
        preventCloseOnChildOverlayClick
        onClose={handleOnClose}
        activator={
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <TextField
              type="text"
              onFocus={() => setVisible(!visible)}
              onChange={(value) => handleColorInput(value)}
              prefix={colorPrefix()}
              autoComplete="off"
              value={getDisplayColor()}
              label="Color"
              labelHidden
            />
          </div>
        }
      >
        <ColorPicker onChange={setColor} color={color}/>
      </Popover>
    </div>
  );
}