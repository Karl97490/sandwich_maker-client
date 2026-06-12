export const CardsLoading = () => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm relative overflow-hidden">
      <div className="skeleton h-52 w-full"></div>
      <div className="card-body gap-5">
        <div className="flex justify-between items-center">
          <div class="card-title text-left skeleton h-4 w-28"></div>

          <div class="skeleton h-4 w-10"></div>
        </div>
        <div className="flex flex-col gap-3">
          <div class="skeleton h-4 w-15"></div>

          <p className="flex flex-col gap-2">
            <div class="skeleton h-3 w-full"></div>
            <div class="skeleton h-3 w-full"></div>
          </p>
        </div>
        <div className="skeleton h-7 w-full rounded-md"></div>
      </div>
    </div>
  );
};
