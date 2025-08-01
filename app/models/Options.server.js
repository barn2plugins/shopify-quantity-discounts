import prisma from "../db.server"

/**
 * Creates or updates an option in the database for a specific store
 * 
 * @param {Object} params - The parameters object
 * @param {string} params.sessionId - The session ID of the store
 * @param {string} params.key - The key of the option to set
 * @param {string} params.value - The value to store for the option
 * @returns {Promise<Object>} The created or updated option object
 */
export async function setOption({sessionId, storeId, key, value}) {
  // First, try to find the existing record
  const existingOption = await prisma.options.findUnique({
    where: {
      storeId_key: {
        storeId,
        key
      }
    }
  });

  if (existingOption) {
    // Update the existing record
    return await prisma.options.update({
      where: {
        storeId_key: {
          storeId,
          key
        }
      },
      data: {
        value,
      }
    });
  } else {
    // Create a new record
    return await prisma.options.create({
      data: {
        store: { connect: { sessionId } },
        key,
        value,
      }
    });
  }
}

/**
 * Retrieves an option value from the database for a specific store
 * 
 * @param {Object} params - The parameters object
 * @param {number} params.storeId - The ID of the store
 * @param {string} params.key - The key of the option to retrieve
 * @returns {Promise<string|null>} The option value if found, null otherwise
 */
export async function getOption({storeId, key}) {
  const option = await prisma.options.findUnique({
    where: {
      storeId_key: {
        storeId,
        key
      }
    }
  })
  if (option) {
    return option.value
  }
  return null
}

/**
 * Retrieves an option value from the database for a specific store and date range
 * 
 * @param {Object} params - The parameters object
 * @param {number} params.storeId - The ID of the store
 * @param {string} params.key - The key of the option to retrieve
 * @param {Date} params.startDate - The start date of the date range
 * @param {Date} params.endDate - The end date of the date range
 * @returns {Promise<string|null>} The option value if found, null otherwise
 */
export async function getOptionForDateRange({storeId, key, startDate, endDate}) {
  const option = await prisma.options.findFirst({
    where: {
      storeId,
      key,
      updatedAt: {
        gte: startDate,
        lte: endDate
      }
    }
  })
  if (option) {
    return option.value
  }
  return null
}
