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
export async function setOption({sessionId, key, value}) {
  return await prisma.options.upsert({
    where: {
      key
    },
    update: {
      value,
    },
    create: {
      store: { connect: { sessionId } },
      key,
      value,
    },
  });
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
      storeId,
      key
    }
  })
  if (option) {
    return option.value
  }
  return null
}