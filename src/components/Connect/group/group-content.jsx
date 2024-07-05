const groups = [
  {
    imgUrl:
      "https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg",
    name: "Transistor",
  },
  {
    imgUrl: "https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg",
    name: "Reform",
  },

  {
    imgUrl: "https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg",
    name: "Tuple",
  },
  {
    imgUrl:
      "https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg",
    name: "SavvyCal",
  },
  {
    imgUrl:
      "https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg",
    name: "Statamic",
  },
];

export default function GroupContent() {
  const GroupInfo = groups.map((group) => (
    <div className="flex flex-col items-center gap-2 ">
      <button>
        <img
          alt="Transistor"
          src={group.imgUrl}
          width={158}
          height={48}
          className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
        />
      </button>

      <p>{group.name}</p>
    </div>
  ));

  return (
    <div className="bg-white py-24 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
          Suggested Groups For You
        </h2>
        <div className=" mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {GroupInfo}
        </div>
      </div>
    </div>
  );
}
