// metaHelpers.js

export const getMetaDescriptionByMetaName = (data, metaName) => {
  if (!Array.isArray(data)) return data?.[metaName] || null;
  const foundItem = data?.find((item) => item.meta_name === metaName);
  return foundItem ? foundItem.meta_description : null;
};


export const getMetaValueByMetaName = (data, metaName) => {
  if (!Array.isArray(data)) return data?.[metaName] || null;
  const foundItem = data?.find((item) => item.meta_name === metaName);
  return foundItem ? foundItem.meta_value : null;
};

export const getMetaValueFromExtraFields = (jsonData, metaName) => {
  //console.log(jsonData?.extraFields);
  const foundItem = jsonData?.extraFields?.find((item) => item.meta_name === metaName);
  return foundItem ? foundItem.meta_value : null;
};

export const getMetaValueFromExtra_Fields = (jsonData, metaName) => {
  // console.log("from metaFrom extra:",jsonData, metaName);
  const foundItem = jsonData?.extra_fields?.find((item) => item?.meta_name === metaName);
  return foundItem ? foundItem.meta_value : null;
};

export const getMetaValueFromExtraFieldsNonCapital = (jsonData, metaName) => {
  //console.log(jsonData?.extraFields);
  const foundItem = jsonData?.extra_fields?.find((item) => item.meta_name === metaName);
  return foundItem ? foundItem.meta_value : null;
};

export const getMediaLinkByMetaName = (data, metaName) => {
  if (!data || !metaName) return null;

  if (!Array.isArray(data)) {
    const item = data[metaName];
    if (item?.file_directory && item?.filename) {
      return item.file_directory + item.filename;
    }
    return null;
  }

  const item = data.find(
    (dataItem) => dataItem.meta_name === metaName
  );
  // console.log("from utils", item)
  if (item?.file_directory && item?.filename) {
    return item.file_directory + item.filename;
  }

  return null;
};



export const getImageUrl = (url) => {
  return url;
}

// export const getMediaLinkByMetaName = (data, metaName) => {
//   if (!data || !metaName) return null;

//   const item = data?.find(
//     (dataItem) => dataItem.meta_name === metaName
//   );
// // console.log("from utils", item)
//   if (item?.file_directory && item?.filename) {
//     return item.file_directory + item.filename;
//   }

//   return null;
// };



// {product?.extra_fields.find(field => field.meta_name === "product_model")?.meta_value}