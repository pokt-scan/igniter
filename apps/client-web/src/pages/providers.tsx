import { useListProvidersQuery } from "@igniter/graphql";
import { Theme, useTheme } from "@mui/material/styles";
import Layout from "@/components/layout";
import { ReactElement, useMemo } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import PageHeader from "@/components/common/PageHeader";

const Page = () => {
  const theme: Theme = useTheme();

  const { data, error, loading } = useListProvidersQuery();

  const providers = useMemo(() => {
    return data?.allProviders?.nodes || [];
  }, [data?.allProviders?.nodes]);

  return (
    <Grid
      container
      rowSpacing={3}
      columnSpacing={2}
      alignContent={"flex-start"}
      height={1}
      mt={0}
    >
      <Grid
        item
        xs={12}
        sx={{
          paddingTop: "0px !important",
        }}
      >
        <PageHeader title="Providers" />
      </Grid>

      {providers.map((provider, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Card sx={{ display: "flex" }}>
            <CardContent>
              <CardMedia
                component="img"
                height="50"
                image={provider.logo}
                alt={`${provider.name} logo`}
                onClick={() => window.open(provider.website, "_blank")}
                style={{ cursor: "pointer" }}
              />
              <Stack mt="10px">
                <Typography variant="h3" component="div" gutterBottom>
                  {provider.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Revshare: {provider.revShare}
                </Typography>
                <Link
                  href={provider.website}
                  target="_blank"
                  rel="noopener"
                  color="inherit"
                  variant="body1"
                >
                  {provider.website}
                </Link>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
