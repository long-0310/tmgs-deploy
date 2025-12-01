"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Badge } from "@/components/ui/badge";
import { Pencil } from "lucide-react";

type Blog = {
  id: number;
  title: string;
  category: string;
  status: BlogStatus;
  createdAt: string;
};

type BlogStatus = "draft" | "published" | "archived";

const STATUS_CONFIG: Record<
  BlogStatus,
  {
    label: string;
    variant: "outline" | "secondary" | "default" | "destructive";
  }
> = {
  draft: {
    label: "Draft",
    variant: "outline",
  },
  published: {
    label: "Published",
    variant: "secondary",
  },
  archived: {
    label: "Archived",
    variant: "destructive",
  },
};

function StatusBadge({ status }: { status: BlogStatus }) {
  const config = STATUS_CONFIG[status];

  return (
    <Badge
      variant={config.variant}
      className="rounded-full px-2.5 py-0.5 text-[11px] font-medium capitalize"
    >
      {config.label}
    </Badge>
  );
}

const MOCK_DATA: Blog[] = [
  {
    id: 1,
    title: "Intro to Next.js",
    category: "Next.js",
    status: "published",
    createdAt: "2024-11-01",
  },
  {
    id: 2,
    title: "Shadcn UI cơ bản",
    category: "UI",
    status: "draft",
    createdAt: "2024-11-02",
  },
  {
    id: 3,
    title: "Deploy với Vercel",
    category: "DevOps",
    status: "published",
    createdAt: "2024-11-03",
  },
  {
    id: 4,
    title: "Tailwind nâng cao",
    category: "CSS",
    status: "archived",
    createdAt: "2024-11-04",
  },
  {
    id: 5,
    title: "Authentication",
    category: "Security",
    status: "published",
    createdAt: "2024-11-05",
  },
  {
    id: 6,
    title: "API Routes",
    category: "Backend",
    status: "draft",
    createdAt: "2024-11-06",
  },
  {
    id: 7,
    title: "Caching",
    category: "Performance",
    status: "published",
    createdAt: "2024-11-07",
  },
  {
    id: 1,
    title: "Intro to Next.js",
    category: "Next.js",
    status: "published",
    createdAt: "2024-11-01",
  },
  {
    id: 2,
    title: "Shadcn UI cơ bản",
    category: "UI",
    status: "draft",
    createdAt: "2024-11-02",
  },
  {
    id: 3,
    title: "Deploy với Vercel",
    category: "DevOps",
    status: "published",
    createdAt: "2024-11-03",
  },
  {
    id: 4,
    title: "Tailwind nâng cao",
    category: "CSS",
    status: "archived",
    createdAt: "2024-11-04",
  },
  {
    id: 5,
    title: "Authentication",
    category: "Security",
    status: "published",
    createdAt: "2024-11-05",
  },
  {
    id: 6,
    title: "API Routes",
    category: "Backend",
    status: "draft",
    createdAt: "2024-11-06",
  },
  {
    id: 7,
    title: "Caching",
    category: "Performance",
    status: "published",
    createdAt: "2024-11-07",
  },
  {
    id: 8,
    title: "Middleware",
    category: "Backend",
    status: "published",
    createdAt: "2024-11-08",
  },
  {
    id: 9,
    title: "UI Patterns",
    category: "UI",
    status: "archived",
    createdAt: "2024-11-09",
  },
  {
    id: 10,
    title: "SEO cho Next.js",
    category: "SEO",
    status: "published",
    createdAt: "2024-11-10",
  },
];

export function BlogTable() {
  const [search, setSearch] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState<BlogStatus | "all">(
    "all"
  );
  const [page, setPage] = React.useState(1);

  // Lọc + search
  const filteredData = React.useMemo(() => {
    return MOCK_DATA.filter((item) => {
      const q = search.toLowerCase();
      const matchSearch =
        item.title.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q);

      const matchStatus =
        statusFilter === "all" ? true : item.status === statusFilter;

      return matchSearch && matchStatus;
    });
  }, [search, statusFilter]);

  const pageCount = Math.max(1, Math.ceil(filteredData.length / 10));

  // Reset về page 1 nếu filter/search/pageSize thay đổi
  React.useEffect(() => {
    setPage(1);
  }, [search, statusFilter, 10]);

  const startIndex = (page - 1) * 10;
  const paginatedData = filteredData.slice(startIndex, startIndex + 10);

  const handleCreate = () => {
    // TODO: mở modal / đi tới trang tạo mới
    console.log("Tạo mới blog");
  };

  const handleEdit = (item: Blog) => {
    // TODO: mở modal edit / điều hướng sang trang chi tiết
    console.log("Edit blog", item.id);
  };

  // Tạo list page number cho Pagination
  const pageNumbers = React.useMemo(() => {
    const items: (number | "ellipsis")[] = [];

    if (pageCount <= 7) {
      for (let i = 1; i <= pageCount; i++) items.push(i);
      return items;
    }

    // luôn có trang 1
    items.push(1);

    // hiển thị trang 2-4 nếu đang ở rất đầu
    if (page <= 3) {
      items.push(2, 3, 4);
      items.push("ellipsis");
      items.push(pageCount);
      return items;
    }

    // nếu ở gần cuối
    if (page >= pageCount - 2) {
      items.push("ellipsis");
      items.push(pageCount - 3, pageCount - 2, pageCount - 1, pageCount);
      return items;
    }

    // ở giữa
    items.push("ellipsis");
    items.push(page - 1, page, page + 1);
    items.push("ellipsis");
    items.push(pageCount);

    return items;
  }, [page, pageCount]);

  return (
    <div className="space-y-4 mt-8">
      {/* Thanh action */}
      <div className="flex flex-col mb-8 gap-2 md:flex-row md:items-center md:justify-between">
        {/* Tìm kiếm */}
        <div className="flex items-center gap-2 md:w-1/2">
          <Input
            placeholder="Tìm theo tiêu đề hoặc category..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-9"
          />
        </div>

        {/* Tạo mới + Lọc */}
        <div className="flex items-center gap-2">
          <Select
            value={statusFilter}
            onValueChange={(v) => setStatusFilter(v as BlogStatus | "all")}
          >
            <SelectTrigger className="h-9 w-[140px]">
              <SelectValue placeholder="Lọc trạng thái" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tất cả</SelectItem>
              <SelectItem value="draft">Draft</SelectItem>
              <SelectItem value="published">Published</SelectItem>
              <SelectItem value="archived">Archived</SelectItem>
            </SelectContent>
          </Select>

          <Button className="h-9" onClick={handleCreate}>
            + Tạo mới
          </Button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white/80 shadow-sm">
        <Table>
          <TableHeader className="bg-slate-50/80">
            <TableRow className="[&>th]:h-10 [&>th]:px-3 [&>th]:py-2 [&>th]:text-xs [&>th]:font-semibold [&>th]:uppercase [&>th]:tracking-wide [&>th]:text-slate-500">
              <TableHead className="w-[60px]">ID</TableHead>
              <TableHead>Tiêu đề</TableHead>
              <TableHead className="hidden md:table-cell">Category</TableHead>
              <TableHead>Trạng thái</TableHead>
              <TableHead className="hidden md:table-cell">Ngày tạo</TableHead>
              <TableHead className="w-[100px] text-right">Action</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {paginatedData.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={6}
                  className="py-8 text-center text-sm text-slate-500"
                >
                  Không có dữ liệu.
                </TableCell>
              </TableRow>
            ) : (
              paginatedData.map((item, idx) => (
                <TableRow
                  key={item.id}
                  className="group border-b last:border-0 hover:bg-slate-50/80 transition-colors"
                >
                  <TableCell className="px-3 py-2 text-xs font-medium text-slate-500">
                    {item.id}
                  </TableCell>

                  <TableCell className="max-w-[260px] px-3 py-2 text-sm font-medium text-slate-800">
                    <span className="line-clamp-1">{item.title}</span>
                  </TableCell>

                  <TableCell className="hidden px-3 py-2 text-xs text-slate-600 md:table-cell">
                    <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-medium">
                      {item.category}
                    </span>
                  </TableCell>

                  <TableCell className="px-3 py-2">
                    <StatusBadge status={item.status} />
                  </TableCell>

                  <TableCell className="hidden px-3 py-2 text-xs text-slate-500 md:table-cell">
                    {item.createdAt}
                  </TableCell>

                  <TableCell className="px-3 py-2 text-right">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 gap-1 px-2 text-xs text-slate-600 hover:text-slate-900"
                      onClick={() => handleEdit(item)}
                    >
                      <Pencil className="h-3.5 w-3.5" />
                      <span className="hidden sm:inline">Edit</span>
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* Info + Pagination + Page size */}
      <div className="flex flex-col items-center justify-end gap-3 text-sm text-slate-600 md:flex-row">
        <Pagination className="m-0 w-fit">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                aria-disabled={page === 1}
                className={page === 1 ? "pointer-events-none opacity-50" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  if (page > 1) setPage(page - 1);
                }}
              />
            </PaginationItem>

            {pageNumbers.map((item, idx) =>
              item === "ellipsis" ? (
                <PaginationItem key={`ellipsis-${idx}`}>
                  <PaginationEllipsis />
                </PaginationItem>
              ) : (
                <PaginationItem key={item}>
                  <PaginationLink
                    href="#"
                    isActive={item === page}
                    onClick={(e) => {
                      e.preventDefault();
                      setPage(item);
                    }}
                  >
                    {item}
                  </PaginationLink>
                </PaginationItem>
              )
            )}

            <PaginationItem>
              <PaginationNext
                href="#"
                aria-disabled={page === pageCount}
                className={
                  page === pageCount ? "pointer-events-none opacity-50" : ""
                }
                onClick={(e) => {
                  e.preventDefault();
                  if (page < pageCount) setPage(page + 1);
                }}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
