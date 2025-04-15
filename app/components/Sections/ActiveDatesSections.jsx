import { useState, useEffect } from "react";
import DateRangePicker from '../Fields/DateRangePicker';
import { BlockStack, Text, ChoiceList } from "@shopify/polaris";

export default function ActiveDatesSections({ formState, setFormState, timezone }) {
  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const [visible, setVisible] = useState(false);
  const [selectedDates, setSelectedDates] = useState({});

  useEffect(() => {
    if (formState.activeDates === 'specific_dates') {
      setDatePickerVisible(true);

      if (formState?.specificDates) {
        const dates = JSON.parse(formState.specificDates);
        const startDate = new Date(dates.start);
        const endDate = new Date(dates.end);
    
        setSelectedDates({
          start: startDate,
          end: endDate
        });
      }
    }
  }, [])

  return (
    <BlockStack gap={200}>
      <Text as="p" variant="bodyLg" fontWeight="medium">Active dates</Text>
      <BlockStack gap="200">
        <ChoiceList
          choices={[
              {label: 'Always available', value: 'always_available'},
              {label: 'Specific dates', value: 'specific_dates'},
          ]}
          selected={formState?.activeDates}
          onChange={(value) => {
              setFormState({...formState, activeDates: value[0]})
              setDatePickerVisible(value[0] === 'specific_dates');
          }}
        />
        {datePickerVisible && (
          <DateRangePicker
              selectedDates={selectedDates}
              setSelectedDates={setSelectedDates}
              visible={visible}
              setVisible={setVisible}
          />
        )}
      </BlockStack>
    </BlockStack>
  );
}