export const getThirdPartMakers = async () => {
  try {
    const response = await fetch(`${process.env.UI_HOSTNAME}/api/bulk/makers`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: {
        revalidate: 3600,
      },
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.log("Error fetching third party makers:", error);

    return [];
  }
};

export const getThirdPartBodyType = async () => {
  try {
    const response = await fetch(
      `${process.env.UI_HOSTNAME}/api/bulk/body-types`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        next: {
          revalidate: 3600,
        },
      }
    );
    return await response?.json();
  } catch (error) {
    console.log("Error fetching third party body types:", error);

    return [];
  }
};

export const getBodyType = async () => {
  try {
    const response = await fetch(
      `${process.env.UI_HOSTNAME}/api/order/body-types`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        next: {
          revalidate: 3600,
        },
      }
    );
    return await response?.json();
  } catch (error) {
    console.log("Error fetching body types:", error);

    return [];
  }
};

export const getMakers = async () => {
  try {
    const response = await fetch(
      `${process.env.UI_HOSTNAME}/api/order/makers`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        next: {
          revalidate: 3600,
        },
      }
    );
    const data = await response?.json();

    return data;
  } catch (error) {
    console.log("Error fetching makers:", error);

    return [];
  }
};

export const getMaxAndMinPrice = async (endpoint: string) => {
  try {
    // Use a relative endpoint if in the same domain or update base URL

    const URL = `${process.env.UI_HOSTNAME}/api/common/get?endpoint=${endpoint} `;

    const response = await fetch(URL, {
      method: "GET",
      next: {
        revalidate: 3600, // Works only in Next.js `app` directory
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch data from ${endpoint}`);
    }

    const data = await response?.json();

    if (!data?.data?.data?.length) return [];

    // Transform data
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const transformData = data.data.data?.map((ele: any) => ({
      label: ele?.Name,
      value: ele?.Id,
    }));

    return transformData;
  } catch (error) {
    console.error(`Error fetching data from ${endpoint}:`, error);
    return []; // Return empty array on error
  }
};
