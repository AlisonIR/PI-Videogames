import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setByGenres, postGame } from "../../Redux/actions";
import style from './Form.module.css'

function Create() {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: "",
    img: "",
    description: "",
    platforms: "",
    releaseDate: "",
    rating: "",
    genres: [],
  });

  const [errors, setErrors] = useState({
    name: "",
    img: "",
    description: "",
    platforms: "",
    releaseDate: "",
    rating: "",
    genres: [],
  });

  const allGenres = useSelector((state) => state.allGenres);
  

  useEffect(() => {
    dispatch(setByGenres());
  }, []);

  const validate = (form) => {
    const updatedErrors = {};
    //VALIDACION DEL NOMBRE
    if (!/^[a-zA-Z0-9\s]+$/.test(form.name)) {
      updatedErrors.name = "Sólo puede contener letras y/o números";
    } else {
      updatedErrors.name = "";
    }
    const nameMaxLength = 40; // Reemplaza 100 con el valor máximo admitido por el modelo
    if (form.name.length > nameMaxLength) {
      updatedErrors.name = `El nombre no puede superar los ${nameMaxLength} caracteres.`;
    }
    if (form.name === "") updatedErrors.name = "";
    //VALIDACION DE IMAGEN (URL)
    if (!/^(ftp|http|https):\/\/[^ "]+$/.test(form.img)) {
      updatedErrors.img = "Debe ingresar una URL válida";
    } else {
      updatedErrors.img = "";
    }
    if (form.img === "") updatedErrors.img = "";
    //VALIDACION DE PLATAFORMAS
    if (!/^[a-zA-Z0-9\s!-]+$/.test(form.platforms)) {
      updatedErrors.platforms = "Sólo puede contener texto y números";
    } else {
      updatedErrors.platforms = "";
    }
    if (form.platforms === "") updatedErrors.platforms = "";
    //VALIDACION DE FECHA DE LANZAMIENTO
    if (!/^[0-9/]*$/.test(form.releaseDate)) {
      updatedErrors.releaseDate =
        "Formato de fecha inválido. Utilice solo números y /";
    } else {
      // Verificar la entrada del día
      if (form.releaseDate.length >= 1 && form.releaseDate.length <= 2) {
        const day = parseInt(form.releaseDate);
        if (isNaN(day) || day <= 0 || day > 31) {
          updatedErrors.releaseDate = "Día inválido";
        } else {
          updatedErrors.releaseDate = "";
        }
      }

      // Verificar la entrada del mes
      if (form.releaseDate.length >= 4 && form.releaseDate.length <= 5) {
        const month = parseInt(form.releaseDate.substring(3));
        if (isNaN(month) || month <= 0 || month > 12) {
          updatedErrors.releaseDate = "Mes inválido";
        } else {
          updatedErrors.releaseDate = "";
        }
      }

      // Verificar la entrada del año
      if (form.releaseDate.length >= 7 && form.releaseDate.length <= 8) {
        const year = parseInt(form.releaseDate.substring(6));
        if (isNaN(year)) {
          updatedErrors.releaseDate = "Año inválido";
        } else {
          updatedErrors.releaseDate = "";
        }
      }

      // Verificar el formato completo de la fecha
      if (form.releaseDate.length === 8) {
        if (
          !/^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/\d{2}$/.test(form.releaseDate)
        ) {
          updatedErrors.releaseDate =
            "Formato de fecha inválido. Utilice yyyy/mm/dd";
        } else {
          updatedErrors.releaseDate = "";
        }
      }
    }
    // Validar el rating
    if (!/^([0-5](\.[0-9])?|[0-4]\.)$/.test(form.rating)) {
      updatedErrors.rating = "Ingrese un número válido entre 0 y 5";
    } else {
      updatedErrors.rating = "";
    }

    if (form.rating === "") updatedErrors.rating = "";

    setErrors(updatedErrors);
  };

  const hasErrors = () => {
    const noGenresSelected = form.genres.length === 0;
    return (
      Object.values(errors).some((error) => error !== "") || noGenresSelected
    );
  };
  
  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    
   if (property === "genres") {
      const { checked } = event.target;
      const genre = event.target.value;
     

      if (checked) {
        setForm((form) => ({
          ...form,
          genres: [...form.genres, genre],
        }));
      } else {
        setForm((prevForm) => ({
          ...prevForm,
          genres: prevForm.genres.filter((g) => g !== genre),
        }));
      }
    } else {
      setForm((prevForm) => ({
        ...prevForm,
        [property]: value,
      }));
    }
    
    validate({
      ...form,
      [property]: value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
      dispatch(postGame(form));
      alert("Created Game!");
      setForm({
        name: "",
        img: "",
        description: "",
        platforms: "",
        releaseDate: "",
        rating: "",
        genres: [],
      });
  
  };

  return (
      <section className={style.formsection}>
        <div className={style.formbox}>
          <div className={style.value}>
            <form onSubmit={submitHandler}>
              <div className={style.inputbox}>
                <label>Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={changeHandler}
                  name="name"
                />
                {errors.name && <span>{errors.name}</span>}
              </div>
  
              <div className={style.inputbox}>
                <label>Image</label>
                <input
                  type="text"
                  value={form.img}
                  onChange={changeHandler}
                  name="img"
                />
                {errors.img && <span>{errors.img}</span>}
              </div>
  
              <div className={style.inputbox}>
                <label>Description</label>
                <input
                  type="text"
                  value={form.description}
                  onChange={changeHandler}
                  name="description"
                />
                {errors.description && <span>{errors.description}</span>}
              </div>
  
              <div className={style.inputbox}>
                <label>Platforms</label>
                <input
                  type="text"
                  value={form.platforms}
                  onChange={changeHandler}
                  name="platforms"
                />
                {errors.platforms && <span>{errors.platforms}</span>}
              </div>
  
              <div className={style.inputbox}>
                <label>ReleaseDate</label>
                <input
                  type="text"
                  value={form.releaseDate}
                  onChange={changeHandler}
                  name="releaseDate"
                />
                {errors.releaseDate && <span>{errors.releaseDate}</span>}
              </div>
  
              <div className={style.inputbox}>
                <label>Rating</label>
                <input
                  type="text"
                  value={form.rating}
                  onChange={changeHandler}
                  name="rating"
                />
                {errors.rating && <span>{errors.rating}</span>}
              </div>
  
              <div className={style.genreContainer}>
                {allGenres?.map((genre) => (
                  <div className={style.genreItem} key={genre.id}>
                    <input
                      type="checkbox"
                      name="genres"
                      value={genre.id}
                      onChange={changeHandler}
                    />
                    <label>{genre.name}</label>
                  </div>
                ))}
              </div>
  
              <button className={style.submit} type="submit"
          disabled={
            !Object.values(form).every((value) => value !== "") || hasErrors()
          } >{" "}SUBMIT{" "}
        </button>
            </form>
          </div>
        </div>
      </section>
  );
}

export default Create;