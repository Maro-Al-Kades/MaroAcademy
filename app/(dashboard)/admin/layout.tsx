import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Icon } from "@iconify/react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex flex-row items-start gap-10 w-full h-[80vh]">
      <aside className="w-[250px] rounded-xl h-full bg-primary/10 p-4 flex flex-col gap-3">
        <Button
          as={Link}
          href="/admin/dashboard"
          fullWidth
          color="primary"
          className="flex items-center justify-start gap-3"
        >
          <Icon icon="hugeicons:dashboard-square-02" width="20" height="20" />
          Dashboard
        </Button>
        <Button
          as={Link}
          href="/admin/add-course"
          fullWidth
          color="primary"
          className="flex items-center justify-start gap-3"
        >
          <Icon icon="hugeicons:add-circle-half-dot" width="20" height="20" />{" "}
          Add Course
        </Button>
        <Button
          as={Link}
          href="/admin/dashboard"
          fullWidth
          color="primary"
          className="flex items-center justify-start gap-3"
        >
          <Icon icon="hugeicons:course" width="20" height="20" /> My Courses
        </Button>
        <Button
          as={Link}
          href="/admin/students-enrolled"
          fullWidth
          color="primary"
          className="flex items-center justify-start gap-3"
        >
          <Icon icon="hugeicons:students" width="20" height="20" /> Students
          Enrolled
        </Button>
      </aside>
      <main className="flex-1">{children}</main>
    </section>
  );
}
