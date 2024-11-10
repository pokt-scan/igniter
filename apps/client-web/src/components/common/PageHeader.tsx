import { Stack, Typography } from "@mui/material";
import React from "react";

const PageHeader = ({ title }) => {
  return (
    <Stack direction="row" display="flex" justifyContent="space-between">
      <Typography variant="h1">{title}</Typography>
    </Stack>
  );
};

export default PageHeader;
