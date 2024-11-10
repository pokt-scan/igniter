import { useTheme } from "@mui/material/styles";
import {
  Box,
  Button,
  ButtonProps,
  Card,
  CardContent,
  CardHeader,
  CardProps,
  Divider,
  Skeleton,
  Stack,
  SxProps,
  Theme,
  Typography,
} from "@mui/material";
import { ReactNode, useMemo } from "react";

export interface ButtonItemProps extends ButtonProps {
  onClick: () => void;
  label: React.ReactNode;
}

export interface CustomCardProps extends Omit<CardProps, "title"> {
  title?: ReactNode;
  subtitle?: ReactNode;
  actions?: ButtonItemProps[];
  actionColumns?: Array<number>;
  launchUrl?: string;
  containerSx?: SxProps<Theme>;
  cardSx?: SxProps<Theme>;
  loading?: boolean;
}

const CustomTitleComponent = ({
  title,
  subtitle,
}: {
  title?: ReactNode;
  subtitle?: ReactNode;
}) => {
  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
        {title}
      </Typography>
      <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
        {subtitle}
      </Typography>
    </Box>
  );
};

const DashboardCard: React.FC<CustomCardProps> = ({
  title,
  subtitle,
  actions,
  actionColumns,
  launchUrl,
  children,
  cardSx,
  containerSx,
  loading,
  ...other
}) => {
  const theme: Theme = useTheme();

  const buttons = useMemo(() => {
    if (!actions?.length) return null;

    const columns = actionColumns || [actions.length];
    let start = 0;
    return columns.map((col, index) => {
      const end = start + col;
      const columnActions = actions.slice(start, end);
      start = end;
      return (
        <Stack
          key={index}
          direction="row"
          spacing={1}
          justifyContent="flex-end"
          flexWrap="wrap"
          rowGap="5px"
        >
          {columnActions.map((action, index) => (
            <Button key={index} {...action} sx={{ height: "30px" }}>
              {action.label}
            </Button>
          ))}
        </Stack>
      );
    });
  }, [actions, actionColumns]);

  if (loading) return <Skeleton height={296} />;

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100%",
        paddingRight: "10px",
        paddingLeft: "10px",
        justifyContent: "space-between",
        boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.08)",
        borderRadius: "7px",
        ...cardSx,
      }}
      variant="outlined"
    >
      <CardHeader
        title={title}
        titleTypographyProps={{ fontWeight: "500", fontSize: "14px" }}
        sx={{ padding: "19px 14px 6px 14px" }}
      />

      <CardContent sx={{ height: 1 }}>
        <Box display="flex" flexDirection="column" sx={{ ...containerSx }}>
          {children}
        </Box>
      </CardContent>

      {actions && (
        <>
          <Divider
            style={{
              color: theme.palette.divider,
              marginLeft: "-10px",
              marginRight: "-10px",
              width: "105%",
            }}
          />

          <CardContent
            sx={{ padding: "12px 0 12px 0 !important", minHeight: "56px" }}
          >
            <Stack
              direction="row-reverse"
              justifyContent="space-between"
              flexWrap="wrap"
              alignItems="flex-end"
            >
              {buttons}
            </Stack>
          </CardContent>
        </>
      )}
    </Card>
  );
};

export default DashboardCard;
