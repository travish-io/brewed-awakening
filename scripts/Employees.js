import { getEmployees, getOrders } from "./database.js";
const employees = getEmployees();
const orders = getOrders();
let employeeSalesCounter = 0;

document.addEventListener("click", (clickEvent) => {
  let employeeSalesCounter = 0;
  const itemClicked = clickEvent.target;
  if (itemClicked.id.startsWith("employee")) {
    const [, employeeId] = itemClicked.id.split("--");

    for (const employee of employees) {
      if (employee.id === parseInt(employeeId)) {
        window.alert(
          `${employee.name} has sold ${employeeSalesCounter} products`
        );
      }
    }
  }
});

export const Employees = () => {
  let html = "<ul>";

  for (const employee of employees) {
    html += `<li id="employee--${employee.id}">${employee.name}</li>`;
  }

  html += "</ul>";

  return html;
};
