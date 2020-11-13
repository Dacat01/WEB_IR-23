const BASE_URL = "http://localhost:3000";
const RESOURSE_URL = `${BASE_URL}/`; 

export const baseRequest = async ({ urlPath = "", method = "GET", body = null }) => {
  try {
    const reqParams = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (body) {
      reqParams.body = JSON.stringify(body);
    }

    return  await fetch(`${RESOURSE_URL}${urlPath}`, reqParams);
  } 
  catch (error) {
    console.error("HTTP ERROR: ", error);
  }
 
};

// public functionality

export const getAllZoos = async (id) => {
  const rawResponse = await baseRequest({ urlPath: `${id}`, method: "GET"});
  return await rawResponse.json();
};

export const postZoo= (body) =>baseRequest({ method: "POST", body });

export const updateZoo = (body) =>
  baseRequest({method: "PUT", body });   


export const deleteZoo = (id) =>
  baseRequest({ urlPath: `${id}`, method: "DELETE" });   
