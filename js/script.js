{
    const tasks = [];
  
    const addNewTask = (newTaskContent) => {
      tasks.push({
        content: newTaskContent,
      });
  
      render();
    };
  
    const removeTask = (taskIndex) => {
      tasks.splice(taskIndex, 1);
  
      render();
    };
  
    const toggleTaskDone = (taskIndex) => {
      tasks[taskIndex].done = !tasks[taskIndex].done;
  
      render();
    };
  
    bindEvents = () => {
      const removeButtons = document.querySelectorAll(".js-remove");
  
      removeButtons.forEach((removeButton, index) => {
        removeButton.addEventListener("click", () => {
          removeTask(index);
        });
      });
  
      const toggleDoneButtons = document.querySelectorAll(".js-toggleDone");
  
      toggleDoneButtons.forEach((toggleDoneButton, index) => {
        toggleDoneButton.addEventListener("click", () => {
          toggleTaskDone(index);
        });
      });
    };
  
    const render = () => {
      let htmlString = "";
  
      for (const task of tasks)
        htmlString += `
      <li class="task__items">
          <button class="task__button task__button--toggleDone js-toggleDone">
            ${task.done ? "✓" : ""}
          </button>
          <span class="task__text ${task.done ? "task__text--done" : ""}">
            ${task.content}
          </span>
          <button class="task__button task__button--remove js-remove">🗑</button>
      </li>
  `;
  
      document.querySelector(".js-tasks").innerHTML = htmlString;
  
      bindEvents();
    };
  
    const onFormSubmit = (event) => {
      event.preventDefault();
  
      const newTaskInput = document.querySelector(".js-newTask");
      const newTaskContent = newTaskInput.value.trim();
  
      if (newTaskContent !== "") {
        addNewTask(newTaskContent);
      }
  
      newTaskInput.value = "";
      newTaskInput.focus();
    };
  
    const init = () => {
      render();
  
      const form = document.querySelector(".js-form");
  
      form.addEventListener("submit", onFormSubmit);
    };
  
    init();
  }