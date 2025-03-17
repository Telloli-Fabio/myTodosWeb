import { n as noop, X as fallback, Y as head, Z as bind_props, _ as stringify, $ as slot, a0 as copy_payload, a1 as assign_payload, S as pop, Q as push, a2 as ensure_array_like } from "../../chunks/index.js";
import { e as escape_html } from "../../chunks/escaping.js";
const replacements = {
  translate: /* @__PURE__ */ new Map([
    [true, "yes"],
    [false, "no"]
  ])
};
function attr(name, value, is_boolean = false) {
  if (value == null || !value && is_boolean || value === "" && name === "class") return "";
  const normalized = name in replacements && replacements[name].get(value) || value;
  const assignment = is_boolean ? "" : `="${escape_html(normalized, true)}"`;
  return ` ${name}${assignment}`;
}
function createEventDispatcher() {
  return noop;
}
function Icon($$payload, $$props) {
  let name = $$props["name"];
  let handler = fallback($$props["handler"], () => {
  });
  let color = fallback($$props["color"], "green");
  head($$payload, ($$payload2) => {
    $$payload2.out += `<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined">`;
  });
  $$payload.out += `<span class="material-icons-outlined icon svelte-y47uu9"${attr("style", `--color:${stringify(color)};`)}>${escape_html(name)}</span>`;
  bind_props($$props, { name, handler, color });
}
function Cell($$payload, $$props) {
  let last = fallback($$props["last"], false);
  $$payload.out += `<div${attr("class", `cell ${stringify(last ? "cell-last" : "")} svelte-ir89wu`)}><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></div>`;
  bind_props($$props, { last });
}
function Priority($$payload, $$props) {
  let prio = fallback($$props["prio"], 3);
  let disable = fallback($$props["disable"], false);
  const prio2str = (prio2) => {
    let map = { 1: "ALTA", 2: "MEDIA", 3: "BASSA" };
    return map[prio2];
  };
  $$payload.out += `<span${attr("class", `${stringify(disable ? "DISABILITATO" : prio2str(prio))} svelte-1je1fxy`)}>${escape_html(prio2str(prio))}</span>`;
  bind_props($$props, { prio, disable });
}
function Todo_item($$payload, $$props) {
  push();
  let todo = $$props["todo"];
  let old_priority = todo.priority;
  const dispatch = createEventDispatcher();
  const toggle_status = () => {
    todo.done = !todo.done;
    item_change("update");
  };
  const item_change = (type) => {
    dispatch("change", { type, id: todo.id });
  };
  {
    if (todo.priority != old_priority) {
      old_priority = todo.priority;
      item_change("update");
    }
  }
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    Cell($$payload2, {
      children: ($$payload3) => {
        $$payload3.out += `<!---->${escape_html(todo.id)}`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> `;
    Cell($$payload2, {
      children: ($$payload3) => {
        if (todo.done == false) {
          $$payload3.out += "<!--[-->";
          Icon($$payload3, {
            name: "circle",
            handler: toggle_status,
            color: "red"
          });
        } else {
          $$payload3.out += "<!--[!-->";
          Icon($$payload3, { name: "task_alt", handler: toggle_status });
        }
        $$payload3.out += `<!--]-->`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> `;
    Cell($$payload2, {
      children: ($$payload3) => {
        $$payload3.out += `<input type="text"${attr("class", `todo-item-input-text ${stringify(todo.done == true ? "text-done" : "")} svelte-vtnw04`)}${attr("id", todo.id)} placeholder="inserisci il nuovo ToDo"${attr("value", todo.task)}>`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> `;
    Cell($$payload2, {
      children: ($$payload3) => {
        Priority($$payload3, {
          disable: todo.done,
          get prio() {
            return todo.priority;
          },
          set prio($$value) {
            todo.priority = $$value;
            $$settled = false;
          }
        });
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> `;
    Cell($$payload2, {
      last: true,
      children: ($$payload3) => {
        Icon($$payload3, {
          name: "delete_forever",
          color: "red",
          handler: () => item_change("delete")
        });
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!---->`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, { todo });
  pop();
}
function Todo_list($$payload, $$props) {
  push();
  let todos = [];
  let last_id = 0;
  const create_todo = async () => {
    let todo = {
      id: ++last_id,
      task: "",
      done: false,
      priority: 1
    };
    console.log("CREATE: ", todo);
    localStorage.setItem("todo" + todo.id, JSON.stringify(todo));
    todos = [...todos, todo];
  };
  const each_array = ensure_array_like(todos);
  $$payload.out += `<h1 class="app-title svelte-1gz8lq9">ToDos</h1> <div class="todo-list svelte-1gz8lq9"><div class="header svelte-1gz8lq9">`;
  Icon($$payload, { name: "tag" });
  $$payload.out += `<!----></div> <div class="header svelte-1gz8lq9">`;
  Icon($$payload, { name: "task_alt" });
  $$payload.out += `<!----></div> <div class="header svelte-1gz8lq9">`;
  Icon($$payload, { name: "list" });
  $$payload.out += `<!----></div> <div class="header svelte-1gz8lq9">`;
  Icon($$payload, { name: "schedule" });
  $$payload.out += `<!----></div> <div class="header header-last svelte-1gz8lq9">`;
  Icon($$payload, { name: "add_box", handler: create_todo });
  $$payload.out += `<!----></div> <!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let todo = each_array[$$index];
    Todo_item($$payload, { todo });
  }
  $$payload.out += `<!--]--></div>`;
  pop();
}
function _page($$payload) {
  $$payload.out += `<main class="svelte-vkletp">`;
  Todo_list($$payload);
  $$payload.out += `<!----></main>`;
}
export {
  _page as default
};
