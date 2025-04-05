import prisma from "../db.server";

/**
 * Retrieves a store record from the database using the session ID
 * 
 * @param {string} sessionId - The session ID of the store to retrieve
 * @param {Object} params - Object specifying which fields to select from the store record
 * @returns {Promise<Object|null>} The store record with selected fields or null if not found
 */
export async function getStoreBySessionId(sessionId, params) {
  return await prisma.store.findUnique({
    where: {
      sessionId
    },
    select: params
  });
}

/**
 * Updates a store record in the database using the session ID
 * 
 * @param {string} sessionId - The session ID of the store to update
 * @param {Object} data - The data to update the store with
 * @returns {Promise<Object>} The updated store record
 */
export async function updateStoreBySessionId(sessionId, data) {
  return await prisma.store.update({
    where: {
      sessionId
    },
    data
  });
}