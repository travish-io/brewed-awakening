import { getEmployees, getOrders } from "./database.js";
const employees = getEmployees();
const orders = getOrders();

// create counter variable to keep count of employeeId
// iterate thru products to get employeeId and update counter
// iterate thru employees and window alert when ids match

export const Employees = () => {
  let html = "<ul>";

  for (const employee of employees) {
    html += `<li id="employee--${employee.Id}">${employee.name}</li>`;
  }

  html += "</ul>";

  return html;
};
