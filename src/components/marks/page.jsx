import Gpa from "../gpa/Gpa";

const people = [
  {
    name: "Marks",
    marks: "58",

    module: "software development practice",
  },
  {
    name: "Marks",
    marks: "74",

    module: "Programming ",
  },
  {
    name: "Marks",
    marks: "95",

    module: "Mobile Application development",
  },
  {
    name: "Marks",
    marks: "88",

    module: "Invijdual Project",
  },
];

export default function Marks() {
  return (
    <div>
      <Gpa />
      <ul name="list" className="divide-y divide-gray-100">
        {people.map((person) => (
          <li key={person.email} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <div className="min-w-0 flex-auto">
                <h2 className="mt-4 truncate text-lg leading-5 text-gray-500">
                  {person.module}
                </h2>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                  {person.email}
                </p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-gray-900">{person.name}</p>
              {person.marks ? (
                <p className="mt-1 text-xs leading-5 text-gray-500">
                  marks <time dateTime={person.marks}>{person.marks}</time>
                </p>
              ) : (
                <div className="mt-1 flex items-center gap-x-1.5">
                  <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </div>
                  <p className="text-xs leading-5 text-gray-500">Online</p>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
