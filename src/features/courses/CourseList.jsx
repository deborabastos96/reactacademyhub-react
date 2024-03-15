import { useQuery } from "@tanstack/react-query";

import { getCourses } from "../../services/apiCourses";

import Spinner from "../../ui/Spinner";
import CourseRow from "./CourseRow";

function CourseList() {
  const {
    isLoading,
    data: courses,
    error,
  } = useQuery({
    queryKey: ["course"],
    queryFn: getCourses,
  });

  if (isLoading) return <Spinner />;
  console.log(courses);

  return (
    <div>
      {courses.map((course) => (
        <CourseRow key={course.id} />
      ))}
    </div>
  );
}

export default CourseList;
