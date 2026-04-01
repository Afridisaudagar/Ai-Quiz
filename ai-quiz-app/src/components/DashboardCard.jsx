import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const DashboardCard = ({ title, value }) => {
  return (
    <Card style={{ margin: "10px", width: "200px" }}>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="h4">{value}</Typography>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;