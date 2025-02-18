"use client";
import { deleteBadgeAction } from "@/actions/badges";
import type { IBadge, PaginatedResultApi } from "@/api/server-api/types";
import AlertDialog from "@/components/DeleteAlertDialog";
import AITable from "@/components/admin/tables/AITable";
import { Edit, Delete } from "@mui/icons-material";
import {
  Stack,
  Tooltip,
  IconButton,
  Box,
  Link as MuiLink,
} from "@mui/material";
import Link from "next/link";
import { use } from "react";

export function BadgesTable({
  badges,
}: {
  badges: Promise<PaginatedResultApi<IBadge>>;
}) {
  const allBadges = use(badges);
  return (
    <>
      <AITable
        data={allBadges}
        actions={(p) => (
          <Stack direction="row">
            <Tooltip title="ویرایش">
              <IconButton
                color="secondary"
                component={Link}
                href={"/admin/dashboard/badges/update/" + p.id}
              >
                <Edit />
              </IconButton>
            </Tooltip>
            <Tooltip title="حذف">
              <AlertDialog onConfirm={async () => deleteBadgeAction(p.id)}>
                <IconButton color="error">
                  <Delete />
                </IconButton>
              </AlertDialog>
            </Tooltip>
          </Stack>
        )}
        schema={[
          {
            title: "شناسه",
            render: (row) => row.id,
          },
          {
            title: "عنوان",
            render: (row) => row.title,
          },
          {
            title: "icon",
            render: (row) => (
              <MuiLink
                href={row.icon}
                target="_blank"
                rel="noopener noreferrer"
                underline="none"
              >
                <Box
                  component="img"
                  src={row.icon}
                  alt="Badge Icon"
                  sx={{
                    width: 50,
                    height: 50,
                    objectFit: "cover",
                    borderRadius: 1,
                  }}
                />
              </MuiLink>
            ),
          },
          {
            title: "بروزرسانی",
            render: (row) => new Date(row.updatedAt).toLocaleDateString("fa"),
          },
        ]}
      />
    </>
  );
}
