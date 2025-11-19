import { ReactNode } from "react";
import CourseNavigation from "./Navigation";

export default function CoursesLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: any;
}) {
  const { cid } = params;

  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <i className="fa fa-lg fa-dashboard me-4 fs-4 mb-1" />
        Course {cid}
      </h2>
      <hr />

      <div className="d-flex">
        <div>
          <div className="d-none d-md-block">
            <CourseNavigation />
          </div>
        </div>

        <div className="flex-fill">
          {children}
        </div>
      </div>
    </div>
  );
}


