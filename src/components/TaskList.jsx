import {TaskCard} from "./TaskCard";
export const TaskList = (props) => {
    const {list} = props

    return (
        <div>
          {list.map(task =>
            <TaskCard name={task.name}/>
          )}
        </div>
      );
}