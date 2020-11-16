export const updateObject = (oldObject, updatedPRoperties) => {
  return {
    ...oldObject,
    ...updatedPRoperties,
  };
};
