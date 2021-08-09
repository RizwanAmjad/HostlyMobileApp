import React from "react";

import { useFormikContext } from "formik";
import AppButton from "./AppButton";

function AppFormSubmit({ icon, title, style }) {
  const { handleSubmit } = useFormikContext();
  return (
    <AppButton icon={icon} title={title} style={style} onPress={handleSubmit} />
  );
}

export default AppFormSubmit;
