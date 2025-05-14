import prisma from "../db.server";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const fetcherData = Object.fromEntries(formData);
  

  if (request.method !== "POST") {
      return null;
  }

  try {
    const updateBundle = await prisma.discountBundle.update({
      where: {
        id: parseInt(fetcherData.bundleId),
      },
      data: {
        active: fetcherData.active === 'true',
      }
    });

    return { updateBundle };
  } catch (error) {
    console.error(error);
  }

  return null;
};
