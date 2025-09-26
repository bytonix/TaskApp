// import React, { useEffect, useState } from "react";
// import { toast } from "react-toastify";
// import { FiChevronDown, FiChevronUp } from "react-icons/fi"; // icons

// const Task = () => {
//   const [task, setTask] = useState("");
//   const [taskList, setTaskList] = useState([]);
//   const [loaded, setLoaded] = useState(false);
//   const [showCompleted, setShowCompleted] = useState(false); // default hidden
//   const [search, setSearch] = useState("");
//   const [modalTask, setModalTask] = useState(null);

//   // Load tasks from localStorage
//   useEffect(() => {
//     const storedTasks = localStorage.getItem("tasks");
//     if (storedTasks) setTaskList(JSON.parse(storedTasks));
//     setLoaded(true);
//   }, []);

//   // Save tasks to localStorage
//   useEffect(() => {
//     if (loaded) localStorage.setItem("tasks", JSON.stringify(taskList));
//   }, [taskList, loaded]);

//   const addTask = () => {
//     if (!task.trim()) {
//       toast.error("Task cannot be empty");
//       return;
//     }
//     const newTask = { id: Date.now(), text: task, completed: false };
//     setTaskList((prev) => [...prev, newTask]);
//     setTask("");
//     toast.success("Task added successfully");
//   };

//   const toggleComplete = (id) => {
//     setTaskList((prev) =>
//       prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
//     );
//   };

//   const confirmDelete = (task) => {
//     setModalTask(task);
//   };

//   const deleteTask = () => {
//     setTaskList((prev) => prev.filter((t) => t.id !== modalTask.id));
//     toast.info("Task deleted");
//     setModalTask(null);
//   };

//   const filteredTasks = taskList.filter((t) =>
//     t.text.toLowerCase().includes(search.toLowerCase())
//   );

//   const pendingTasks = filteredTasks.filter((t) => !t.completed);
//   const completedTasks = filteredTasks.filter((t) => t.completed);

//   return (
//     <div className="container mt-4">
//       <h1 className="text-center text-primary fw-bold">Task Manager</h1>

//       <div className="input-group mb-3">
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Add a new task..."
//           value={task}
//           onChange={(e) => setTask(e.target.value)}
//         />
//         <button className="btn btn-success" onClick={addTask}>
//           Add Task
//         </button>
//       </div>

//       <div className="mb-3">
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Search tasks..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//       </div>

//       <h4>Pending Tasks</h4>
//       {pendingTasks.length === 0 ? (
//         <p>No pending tasks</p>
//       ) : (
//         pendingTasks.map((t) => (
//           <div
//             key={t.id}
//             className="d-flex justify-content-between align-items-center mb-2 p-2 border rounded"
//           >
//             <span style={{ cursor: "pointer" }} onClick={() => toggleComplete(t.id)}>
//               {t.text}
//             </span>
//             <div>
//               <button
//                 className="btn btn-success btn-sm me-2"
//                 onClick={() => toggleComplete(t.id)}
//               >
//                 Complete
//               </button>
//               <button
//                 className="btn btn-danger btn-sm"
//                 onClick={() => confirmDelete(t)}
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))
//       )}

//       {/* Completed Tasks Accordion */}
//       <div className="mt-3">
//         <div
//           className="d-flex align-items-center gap-2 mb-2"
//           style={{ cursor: "pointer" }}
//           onClick={() => setShowCompleted((prev) => !prev)}
//         >
//           <h4 className="mb-0">Completed Tasks</h4>
//           {showCompleted ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
//         </div>

//         {showCompleted &&
//           (completedTasks.length === 0 ? (
//             <p>No completed tasks</p>
//           ) : (
//             completedTasks.map((t) => (
//               <div
//                 key={t.id}
//                 className="d-flex justify-content-between align-items-center mb-2 p-2 border rounded bg-light"
//               >
//                 <span
//                   style={{ textDecoration: "line-through", cursor: "pointer" }}
//                   onClick={() => toggleComplete(t.id)}
//                 >
//                   {t.text}
//                 </span>
//                 <div>
//                   <button
//                     className="btn btn-warning btn-sm me-2"
//                     onClick={() => toggleComplete(t.id)}
//                   >
//                     Mark Pending
//                   </button>
//                   <button
//                     className="btn btn-danger btn-sm"
//                     onClick={() => confirmDelete(t)}
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             ))
//           ))}
//       </div>

//       {/* Modal */}
//       {modalTask && (
//         <div
//           className="modal d-block"
//           style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
//         >
//           <div
//             className="modal-dialog"
//             style={{ maxWidth: "400px", margin: "100px auto" }}
//           >
//             <div className="modal-content p-3">
//               <h5>Are you sure you want to delete this task?</h5>
//               <p>
//                 <strong>{modalTask.text}</strong>
//               </p>
//               <div className="d-flex justify-content-end gap-2">
//                 <button
//                   className="btn btn-secondary"
//                   onClick={() => setModalTask(null)}
//                 >
//                   Cancel
//                 </button>
//                 <button className="btn btn-danger" onClick={deleteTask}>
//                   Delete
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Task;



import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { FiChevronDown, FiChevronUp, FiTrash2, FiCheckCircle, FiCircle } from "react-icons/fi";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Task = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [showCompleted, setShowCompleted] = useState(false);
  const [search, setSearch] = useState("");
  const [modalTask, setModalTask] = useState(null);

  // Load tasks
  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) setTaskList(JSON.parse(storedTasks));
    setLoaded(true);
  }, []);

  // Save tasks
  useEffect(() => {
    if (loaded) localStorage.setItem("tasks", JSON.stringify(taskList));
  }, [taskList, loaded]);

  const addTask = () => {
    if (!task.trim()) {
      toast.error("Task cannot be empty");
      return;
    }
    const newTask = { id: Date.now(), text: task, completed: false };
    setTaskList((prev) => [...prev, newTask]);
    setTask("");
    toast.success("Task added successfully");
  };

  const toggleComplete = (id) => {
    setTaskList((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const confirmDelete = (task) => setModalTask(task);

  const deleteTask = () => {
    setTaskList((prev) => prev.filter((t) => t.id !== modalTask.id));
    toast.info("Task deleted");
    setModalTask(null);
  };

  const filteredTasks = taskList.filter((t) =>
    t.text.toLowerCase().includes(search.toLowerCase())
  );

  const pendingTasks = filteredTasks.filter((t) => !t.completed);
  const completedTasks = filteredTasks.filter((t) => t.completed);

  // Drag and drop handler
  const onDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(taskList);
    const [reordered] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reordered);
    setTaskList(items);
  };

  const TaskItem = ({ t, index }) => (
    <Draggable draggableId={t.id.toString()} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`d-flex justify-content-between align-items-center mb-2 p-2 border rounded ${
            t.completed ? "bg-light text-muted" : ""
          }`}
        >
          <span
            style={{
              cursor: "pointer",
              textDecoration: t.completed ? "line-through" : "none",
            }}
            onClick={() => toggleComplete(t.id)}
          >
            {t.text}
          </span>
          <div className="d-flex gap-2">
            {t.completed ? (
              <FiCircle
                size={20}
                className="text-warning"
                onClick={() => toggleComplete(t.id)}
                style={{ cursor: "pointer" }}
              />
            ) : (
              <FiCheckCircle
                size={20}
                className="text-success"
                onClick={() => toggleComplete(t.id)}
                style={{ cursor: "pointer" }}
              />
            )}
            <FiTrash2
              size={20}
              className="text-danger"
              onClick={() => confirmDelete(t)}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
      )}
    </Draggable>
  );

  return (
    <div className="container mt-4">
      <h1 className="text-center text-primary fw-bold">Task Manager</h1>

      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Add a new task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="btn btn-success" onClick={addTask}>
          Add Task
        </button>
      </div>

      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="tasks">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              <h4>Pending Tasks</h4>
              {pendingTasks.length === 0 ? (
                <p>No pending tasks</p>
              ) : (
                pendingTasks.map((t, idx) => <TaskItem key={t.id} t={t} index={idx} />)
              )}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      {/* Completed Accordion */}
      <div className="mt-3">
        <div
          className="d-flex align-items-center gap-2 mb-2"
          style={{ cursor: "pointer" }}
          onClick={() => setShowCompleted((prev) => !prev)}
        >
          <h4 className="mb-0">Completed Tasks</h4>
          {showCompleted ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
        </div>

        {showCompleted && (
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="completed-tasks">
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {completedTasks.length === 0 ? (
                    <p>No completed tasks</p>
                  ) : (
                    completedTasks.map((t, idx) => (
                      <TaskItem key={t.id} t={t} index={idx} />
                    ))
                  )}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        )}
      </div>

      {/* Modal */}
      {modalTask && (
        <div
          className="modal d-block"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div
            className="modal-dialog"
            style={{ maxWidth: "400px", margin: "100px auto" }}
          >
            <div className="modal-content p-3">
              <h5>Are you sure you want to delete this task?</h5>
              <p>
                <strong>{modalTask.text}</strong>
              </p>
              <div className="d-flex justify-content-end gap-2">
                <button
                  className="btn btn-secondary"
                  onClick={() => setModalTask(null)}
                >
                  Cancel
                </button>
                <button className="btn btn-danger" onClick={deleteTask}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Task;
