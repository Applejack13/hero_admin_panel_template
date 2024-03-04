import { useState } from "react";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import store from "../../store";

import { selectAll } from "../heroesFilters/filtersSlice";
import { useCreateHeroMutation } from "../../api/apiSlice";

const HeroesAddForm = () => {
  const [heroName, setHeroName] = useState("");
  const [heroDescr, setHeroDescr] = useState("");
  const [heroElement, setHeroElement] = useState("");

  const [createHero, { isLoading }] = useCreateHeroMutation();

  const { filtersLoadingStatus } = useSelector((state) => state.filters);
  const filters = selectAll(store.getState());

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newHero = {
      id: uuidv4(),
      name: heroName,
      description: heroDescr,
      element: heroElement,
    };

    createHero(newHero).unwrap();

    setHeroName("");
    setHeroDescr("");
    setHeroElement("");
  };

  const renderFilters = (filters, status) => {
    if (isLoading) {
      return <option>Загрузка элементов</option>;
    } else if (status === "error") {
      return <option>Ошибка загрузки</option>;
    }

    if (filters && filters.length > 0) {
      return filters.map(({ name, label }) => {
        // eslint-disable-next-line
        if (name === "all") return;

        return (
          <option key={name} value={name}>
            {label}
          </option>
        );
      });
    }
  };

  return (
    <form className='border p-4 shadow-lg rounded' onSubmit={onSubmitHandler}>
      <div className='mb-3'>
        <label htmlFor='name' className='form-label fs-4'>
          New heroe's name
        </label>
        <input
          required
          type='text'
          name='name'
          className='form-control'
          id='name'
          placeholder="What's my name?"
          value={heroName}
          onChange={(e) => setHeroName(e.target.value)}
        />
      </div>

      <div className='mb-3'>
        <label htmlFor='text' className='form-label fs-4'>
          Description
        </label>
        <textarea
          required
          name='text'
          className='form-control'
          id='text'
          placeholder='What can I do?'
          style={{ height: "130px" }}
          value={heroDescr}
          onChange={(e) => setHeroDescr(e.target.value)}
        />
      </div>

      <div className='mb-3'>
        <label htmlFor='element' className='form-label'>
          Chose heroe's element
        </label>
        <select
          required
          className='form-select'
          id='element'
          name='element'
          value={heroElement}
          onChange={(e) => setHeroElement(e.target.value)}
        >
          <option value=''>I've an element...</option>
          {renderFilters(filters, filtersLoadingStatus)}
        </select>
      </div>

      <button type='submit' className='btn btn-primary'>
        Create
      </button>
    </form>
  );
};

export default HeroesAddForm;
