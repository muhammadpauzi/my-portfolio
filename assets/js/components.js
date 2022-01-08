export const getSkillsList = ({ title, data } = { title: "", data: [] }) => {
  data = data.map(
    (d) =>
      `<li>${
        d.icon
          ? `<div class="inline-block h-7 w-7 pr-2 items-center"><img class="inline-block" src="${d.icon}"/></div>`
          : ""
      } ${d.name}</li>`
  );
  console.log(data);
  return `<div>
        <h4 class="text-lg text-gray-800 font-semibold mb-4 leading-tight">${title}</h4>
        <ul class="sm:ml-4 space-y-2 text-gray-500 sm:list-disc">
            ${data.join("")}            
        </ul>
    </div>`;
};
