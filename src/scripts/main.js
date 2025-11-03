'use strict';

const listItems = [...document.querySelectorAll('ul li')];

function sortList(items) {
  items.sort((a, b) => {
    const salaryA = Number(
      a.getAttribute('data-salary').split('$').join('').split(',').join(''),
    );
    const salaryB = Number(
      b.getAttribute('data-salary').split('$').join('').split(',').join(''),
    );

    return salaryB - salaryA;
  });

  const list = document.querySelector('ul');

  items.forEach((item) => list.appendChild(item));
}

function getEmployees(items) {
  return items.map((item) => ({
    name: item.textContent.trim(),
    position: item.getAttribute('data-position'),
    salary: Number(
      item.getAttribute('data-salary').split('$').join('').split(',').join(''),
    ),
    age: Number(item.getAttribute('data-age')),
  }));
}

sortList(listItems);
getEmployees(listItems);
