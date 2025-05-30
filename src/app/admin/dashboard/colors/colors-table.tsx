"use client";
import { deleteColorAction } from "@/actions/colors";
import type { IColor, PaginatedResultApi } from "@/api/server-api/types";
import DeleteAlertDialog from "@/components/DeleteAlertDialog";
import AITable from "@/components/admin/tables/AITable";
import { Delete, Edit } from "@mui/icons-material";
import { Box, IconButton, Stack, Tooltip } from "@mui/material";
import Link from "next/link";

export function ColorsTable({
  colors,
}: {
  colors: PaginatedResultApi<IColor>;
}) {
  return (
    <AITable
      data={colors}
      actions={(p) => (
        <Stack direction="row">
          <Tooltip title="ویرایش">
            <IconButton
              color="secondary"
              component={Link}
              href={"/admin/dashboard/colors/update/" + p.id}
            >
              <Edit />
            </IconButton>
          </Tooltip>
          <Tooltip title="حذف">
            <DeleteAlertDialog onConfirm={async () => deleteColorAction(p.id)}>
              <IconButton color="error">
                <Delete />
              </IconButton>
            </DeleteAlertDialog>
          </Tooltip>
        </Stack>
      )}
      schema={[
        {
          title: "شناسه",
          render: (row) => row.id,
        },
        {
          title: "نام",
          render: (row) => row.title,
        },
        {
          title: " رنگ",
          render: (row) => (
            <Box sx={{ bgcolor: row.hexCode, height: 20, width: 20 }} />
          ),
        },
        {
          title: "کد رنگ",
          render: (row) => row.hexCode,
        },
        {
          title: "بروزرسانی",
          render: (row) => new Date(row.updatedAt).toLocaleDateString("fa"),
        },
      ]}
    />
  );
}
