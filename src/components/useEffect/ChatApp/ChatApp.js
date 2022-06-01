import { useEffect, useState } from "react";

const lesson = [
  {
    id: 1,
    name: "Lesson 1",
  },
  {
    id: 2,
    name: "Lesson 2",
  },
  {
    id: 3,
    name: "Lesson 3",
  },
];

function ChatApp() {
  const [lessonId, setLessonId] = useState(1);
  useEffect(() => {
    const handleCommnet = ({ detail }) => {
      console.log(detail);
    };
    window.addEventListener(`lesson-${lessonId}`, handleCommnet);
    return () => {
      window.removeEventListener(`lesson-${lessonId}`, handleCommnet);
    };
  }, [lessonId]);
  return (
    <div>
      <ul>
        {lesson.map((lesson) => (
          <li
            key={lesson.id}
            style={{ color: lessonId === lesson.id ? "red" : "#333" }}
            onClick={() => setLessonId(lesson.id)}
          >
            {lesson.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ChatApp;
