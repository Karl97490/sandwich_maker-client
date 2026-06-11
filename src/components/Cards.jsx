import { NavLink } from "react-router-dom";
// import "../styles/Cards.css";

export const Cards = ({ obj, onDelete }) => {
  return (
    <div>
      <NavLink to={`details/${obj.id}`}>
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure className="bg-pink-100">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2IhYauSkWSHOi8sApOhS4324lrXdo10Nh0g&s"
              alt="Sandwich pixel-art"
            />
          </figure>
          <div className="card-body gap-4">
            <h2 className="card-title text-left justify-between">
              {obj.name}
              <div className="badge badge-secondary">New</div>
            </h2>
            <div className="flex flex-col gap-1">
              <h3 className="text-left font-semibold ">Description</h3>
              <p className="text-left line-clamp-2">{obj.description}</p>
            </div>
            <div className="grid grid-cols-[1fr_2.5fr] gap-2 place-items-center py-1">
              <div className="badge badge-neutral font-medium text-neutral-content">
                Ingredients
              </div>
              <div className="flex items-center justify-evenly w-full">
                <div className="badge bg-green-100 border-green-400">
                  {obj.ingredients.lettuce && "🥬"}
                </div>
                <div className="badge bg-red-100 border-red-400">
                  {obj.ingredients.meat && "🥩"}
                </div>
                <div className="badge bg-yellow-100 border-yellow-400">
                  {obj.ingredients.cheese && "🧀"}
                </div>
                <div className="badge bg-orange-100 border-orange-400">
                  {obj.ingredients.vegies && "🥕"}
                </div>
                <div className="badge bg-gray-100 border-black">
                  {obj.ingredients.sauce && "🫙"}
                </div>
              </div>
            </div>
            {/* <div className="card-actions justify-end w-full bg-base-200">
            <button className="btn">Delete</button>
          </div> */}
          </div>
        </div>
      </NavLink>
    </div>
  );
};
