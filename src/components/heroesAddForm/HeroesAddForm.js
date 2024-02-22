import { v4 as uuidv4 } from "uuid";

// Задача для этого компонента:
// Реализовать создание нового героя с введенными данными. Он должен попадать
// в общее состояние и отображаться в списке ✔️ + фильтроваться
// Уникальный идентификатор персонажа можно сгенерировать через uiid ✔️
// Усложненная задача:
// Персонаж создается и в файле json при помощи метода POST ✔️
// Дополнительно:
// Элементы <option></option> желательно сформировать на базе
// данных из фильтров

const HeroesAddForm = () => {
  const handleInput = (name, description, element) => {
    const newHero = {
      name,
      description,
      element,
      id: uuidv4(),
    };
    fetch("http://localhost:3001/heroes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newHero),
    });
  };

  return (
    <form className="border p-4 shadow-lg rounded">
      <div className="mb-3">
        <label htmlFor="name" className="form-label fs-4">
          Имя нового героя
        </label>
        <input
          required
          type="text"
          name="name"
          className="form-control"
          id="name"
          placeholder="Как меня зовут?"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="text" className="form-label fs-4">
          Описание
        </label>
        <textarea
          required
          name="text"
          className="form-control"
          id="text"
          placeholder="Что я умею?"
          style={{ height: "130px" }}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="element" className="form-label">
          Выбрать элемент героя
        </label>
        <select required className="form-select" id="element" name="element">
          <option>Я владею элементом...</option>
          <option value="fire">Огонь</option>
          <option value="water">Вода</option>
          <option value="wind">Ветер</option>
          <option value="earth">Земля</option>
        </select>
      </div>

      <button
        onClick={() =>
          handleInput(
            document.getElementById("name").value,
            document.getElementById("text").value,
            document.getElementById("element").value
          )
        }
        type="submit"
        className="btn btn-primary"
      >
        Создать
      </button>
    </form>
  );
};

export default HeroesAddForm;
