import { getOption, getOptionForDateRange } from "../models/Options.server"
import { setOption } from "../models/Options.server";

export async function setOrUpdateOption(params) {
  try {
    return await await setOption(params);
  } catch (error) {
    console.log(error.message);
    return { 
      success: false,
      error: error.message,
      displayError: 'Could not retrieve option'
    };
  }
}

export async function getOptionValue({storeId, key}) {
  try {
    return await getOption({storeId, key})
  } catch (error) {
    console.log(error.message);
    return { 
      success: false,
      error: error.message,
      displayError: 'Could not retrieve option'
    };
  }
}

export async function getOptionValueForDateRange(params) {
  try {
    return await getOptionForDateRange(params)
  } catch (error) {
    console.log(error.message);
    return { 
      success: false,
      error: error.message,
      displayError: 'Could not retrieve option'
    };
  } 
}