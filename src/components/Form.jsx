import "../styles/Form.css";

export const Form = ({ onChange, stateForm, onSubmit, isLoading }) => {
  return (
    <div className="form-container">
      <form onSubmit={onSubmit} className="sandwich-form">
        <h3>Create Sandwich</h3>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={stateForm.name}
            onChange={onChange}
          />
        </label>

        <label>
          Nickname
          <input
            type="text"
            name="nickname"
            value={stateForm.nickname}
            onChange={onChange}
          />
        </label>

        <label>
          Image URL
          <input
            type="url"
            name="image"
            value={stateForm.image}
            onChange={onChange}
          />
        </label>
        <fieldset>
          <legend>Location</legend>

          <label>
            Country
            <input
              type="text"
              name="country"
              data-section="location"
              value={stateForm.location.country}
              onChange={onChange}
            />
          </label>

          <label>
            City
            <input
              type="text"
              name="city"
              data-section="location"
              value={stateForm.location.city}
              onChange={onChange}
            />
          </label>
        </fieldset>

        <fieldset>
          <legend>Ingredients</legend>

          <label>
            Lettuce
            <select
              name="lettuce"
              data-section="ingredients"
              onChange={onChange}
            >
              <option value="">None</option>
              <option value="salad">Salad</option>
              <option value="endive">Endive</option>
            </select>
          </label>

          <label>
            Cheese
            <select
              name="cheese"
              data-section="ingredients"
              onChange={onChange}
            >
              <option value="">None</option>
              <option value="gruyere">Gruyere</option>
              <option value="emmental">Emmental</option>
            </select>
          </label>

          <label>
            Meat
            <select name="meat" data-section="ingredients" onChange={onChange}>
              <option value="">None</option>
              <option value="beef">Beef</option>
              <option value="chicken">Chicken</option>
            </select>
          </label>

          <label>
            Veggies
            <select
              name="vegies"
              data-section="ingredients"
              onChange={onChange}
            >
              <option value="">None</option>
              <option value="tomato">Tomato</option>
              <option value="carrot">Carrot</option>
            </select>
          </label>

          <label>
            Sauce
            <select name="sauce" data-section="ingredients" onChange={onChange}>
              <option value="">None</option>
              <option value="ketchup">Ketchup</option>
              <option value="mayonnaise">Mayonnaise</option>
            </select>
          </label>
        </fieldset>

        <fieldset>
          <legend>Description</legend>

          <label>
            <textarea
              name="description"
              rows="4"
              value={stateForm.description}
              onChange={onChange}
            />
          </label>
        </fieldset>

        <button type="submit" disabled={isLoading}>
          {isLoading ? <span>Loading...</span> : <span>Create Sandwich</span>}
        </button>
      </form>
    </div>
  );
};
