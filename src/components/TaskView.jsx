import { useParams, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function TaskView() {
  const { taskName } = useParams();
  const id = useLocation().state;

  const currentTask = useSelector((state) => state.tasks[id]);
  const { completed, date } = currentTask;
  console.log(completed);
  return (
    <div className="parent">
      <div className="space"> </div>
      <div className="taskview">
        {" "}
        <h1> {taskName} </h1>
        <div>
          {" "}
          <bold>
            {" "}
            <span className="tasktext"> Date added: </span>{" "}
          </bold>{" "}
          {date}{" "}
        </div>
        <div>
          {" "}
          <span className="tasktext"> Status: </span>
          <span className={completed ? "green" : "red"}>
            {" "}
            {completed ? "Completed" : "Not Completed"}{" "}
          </span>{" "}
        </div>
      </div>
    </div>
  );
}

export default TaskView;
