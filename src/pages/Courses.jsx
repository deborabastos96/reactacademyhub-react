import Row from "../ui/Row";
import Heading from "../ui/Heading";
import CourseList from "../features/courses/CourseList";

function Courses() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All courses</Heading>
        <div>
          <p>Sort/Filter</p>
          {/* <p>Turn editing on</p> */}
        </div>
      </Row>

      <Row>
        <CourseList />
      </Row>
    </>
  );
}

export default Courses;
