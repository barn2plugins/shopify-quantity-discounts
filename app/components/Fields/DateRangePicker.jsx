// External libraries and components
import { useState, useEffect } from 'react';
import {
  Box,
  Popover,
  TextField,
  Icon,
  Card,
  DatePicker
} from '@shopify/polaris';
import { CalendarIcon } from '@shopify/polaris-icons';

export default function DateRangePicker({ selectedDates, setSelectedDates, visible, setVisible }){
  const [{ month, year }, setDate] = useState({
    month: selectedDates.start.getMonth(),
    year: selectedDates.start.getFullYear(),
  });

  const formattedValue = `${selectedDates.start.toISOString().slice(0, 10)} - ${selectedDates.end.toISOString().slice(0, 10)}`;

  const handleInputValueChange = () => {};

  const handleOnClose = () => {
    setVisible(false);
  };

  const handleMonthChange = (month, year) => {
    setDate({ month, year });
  };

  const handleDateSelection = ({ start, end }) => {
    const newStart = start || new Date();
    const newEnd = end || start || new Date();
    
    Promise.resolve().then(() => {
      setSelectedDates({
        start: newStart,
        end: newEnd
      });
      setVisible(false);
    });
  };

  useEffect(() => {
    let mounted = true;

    if (selectedDates.start && mounted) {
      setDate({
        month: selectedDates.start.getMonth(),
        year: selectedDates.start.getFullYear(),
      });
    }

    return () => {
      mounted = false;
    };
  }, [selectedDates]);

  return (
    <Box minWidth="276px">
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
          <TextField
            role="combobox"
            prefix={<Icon source={CalendarIcon} />}
            value={formattedValue}
            onFocus={() => setVisible(true)}
            onChange={handleInputValueChange}
            autoComplete="off"
          />
        }
      >
        <Card>
          <DatePicker
            month={month}
            year={year}
            selected={selectedDates}
            onMonthChange={handleMonthChange}
            onChange={handleDateSelection}
            allowRange
          />
        </Card>
      </Popover>
    </Box>
  );
};