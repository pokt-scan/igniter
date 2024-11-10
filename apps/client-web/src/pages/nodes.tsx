import { useGetPoktNodeByUserIdQuery } from "@igniter/graphql";
import Layout from "@/components/layout";
import { ReactElement, useMemo, useState } from "react";
import {
  Table,
  Grid,
  Typography,
  TableContainer,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import PageHeader from "@/components/common/PageHeader";
import { useSession } from "next-auth/react";
import { uPoktConvertionRate } from "@/lib/constants";
import dayjs from "dayjs";

const Page = () => {
  const { data: session, status } = useSession();
  const userId = session?.user?.id;

  const { data } = useGetPoktNodeByUserIdQuery({
    variables: { userId: userId },
  });

  const nodes = useMemo(() => {
    return data?.allPoktNodes?.nodes;
  }, [data?.allPoktNodes?.nodes]);

  return (
    <Grid
      container
      rowSpacing={3}
      columnSpacing={2}
      alignContent={"flex-start"}
      height={1}
      mt={0}
    >
      <PageHeader title="Nodes" />

      <TableContainer component={Paper} sx={{ marginTop: "20px" }}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>Address</TableCell>
              <TableCell>Stake Amount</TableCell>
              <TableCell>Balance</TableCell>
              <TableCell>Chains</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Date Added</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {nodes?.map((row) => (
              <TableRow
                key={row?.address}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row?.address}
                </TableCell>
                <TableCell>{row?.stakeAmount / uPoktConvertionRate}</TableCell>
                <TableCell>{row?.balance / uPoktConvertionRate}</TableCell>
                <TableCell>{row?.chains?.join(", ")}</TableCell>
                <TableCell align="right">{row?.status}</TableCell>
                <TableCell align="right">
                  {dayjs(row?.createdAt).format("MM/DD/YYYY HH:mm")}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
