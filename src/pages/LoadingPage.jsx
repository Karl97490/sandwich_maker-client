import { Search } from "../components/Search";
import { Filter } from "../components/Filter";
import { Sort } from "../components/Sort";
import { CardsLoading } from "../components/CardsLoading";

export const LoadingPage = () => {
  return (
    <div className="w-full pb-10">
      <h2>This is LoadingPage component...</h2>
      <fieldset
        className="fieldset flex flex-row justify-center w-[95%] m-auto p-4"
        disabled
      >
        <button type="reset" className="btn btn-ghost bg-base-100">
          Reset
        </button>
        <Search />
        <Sort />
        <Filter />
      </fieldset>
      <section className="mx-5 rounded-4xl border-4 grid grid-cols-[repeat(auto-fit,24rem)] gap-y-4 gap-x-10 justify-center py-10 bg-base-100">
        <CardsLoading />
        <CardsLoading />
        <CardsLoading />
        <CardsLoading />
        <CardsLoading />
        <CardsLoading />
      </section>
    </div>
  );
};
