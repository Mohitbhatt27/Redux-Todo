import { useDispatch } from "react-redux";
import { removeTodo, editTodo } from "../../actions/index";
import { bindActionCreators } from "redux";
import { useState } from "react";

function Todo({ title, id }) {
  const dispatch = useDispatch();
  const actions = bindActionCreators({ removeTodo, editTodo }, dispatch);

  const [isEditting, setIsEditting] = useState(false);
  const [edittedText, setEdittedText] = useState(title);

  function handleEdit() {
    if (isEditting) {
      actions.editTodo({ id: id, title: edittedText }); // Dispatch editTodo action
    }

    setIsEditting(!isEditting);
  }
  

  return (
    <div>
      {isEditting ? (
        <input
          value={edittedText}
          onChange={(e) => setEdittedText(e.target.value)}
        />
      ) : (
        edittedText
      )}

      <button onClick={() => actions.removeTodo(id)}>Delete Todo</button>
      <button onClick={handleEdit}>{isEditting ? "Save" : "Edit"}</button>
    </div>
  );
}

export default Todo;
