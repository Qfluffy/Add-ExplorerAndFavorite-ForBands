// "use client"; 
import { courses } from "../data/coursesdata";
import CourseExplorer from "../components/CourseExplorer";
import type { Metadata } from "next"; 
 
export const metadata: Metadata = { 
  title: "รายวิชาทั้งหมด", 
};
 

export default function CoursesPage() {
  return ( 
    <>
      <main>
        <CourseExplorer courses={courses} />
      </main> 

      {/* <div className="p-4">
        {courses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div> */}
    </>
  );
}
