import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { heros } from "../../redux/selectors";
import {
  Button,
  ImageList,
  ImageListItem,
  Paper,
  TextField,
} from "@mui/material";

import axios from "../../axios-queries";

export const AddHero = () => {
  const { id } = useParams();
  const isEdit = id ? true : false;
  const navigate = useNavigate();
  const items = useSelector(heros);
  console.log(id);
  const [nickname, setNickname] = useState("");
  const [real_name, setRealName] = useState("");
  const [origin_description, setDesc] = useState("");
  const [superpowers, setSuper] = useState("");
  const [catch_phrase, setCatch] = useState("");
  const [images, setImages] = useState("");

  useEffect(() => {
    if (id) {
      const hero = items.find((item) => item._id === id);
      if (hero) {
        setNickname(hero.nickname);
        setRealName(hero.real_name);
        setDesc(hero.origin_description);
        setSuper(hero.superpowers);
        setCatch(hero.catch_phrase);
        setImages(hero.images);
      }
    }
  }, []);

  const imgRef = useRef(null);

  const handleChangeFile = async (e) => {
    try {
      const formData = new FormData();
      const file = e.target.files[0];
      formData.append("image", file);
      const { data } = await axios.post("/upload", formData);
      setImages(data.url);
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  const onClickRemoveImage = () => {
    setImages("");
  };

  const handleSubmitForm = async () => {
    try {
      const fields = {
        nickname,
        real_name,
        origin_description,
        superpowers,
        catch_phrase,
        images,
      };
      const { data } = isEdit
        ? await axios.patch(`/hero/${id}`, fields)
        : await axios.post("/hero", fields);
      const ID = isEdit ? id : data._id;
      navigate(`/`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Paper style={{ padding: 30 }}>
      <Button
        onClick={(e) => imgRef.current.click()}
        variant="outlined"
        size="large"
      >
        Завантажити фото
      </Button>
      <input ref={imgRef} multiple  type="file" onChange={handleChangeFile} hidden />
      {images && (
        <>
          <Button variant="contained" color="error" onClick={onClickRemoveImage}>
            Видалити
          </Button>
          <img  src={`http://localhost:5000${images}`} alt="Uploaded" />
        </>
      )}
      <br />
      <br />
      <TextField
        variant="standard"
        placeholder="Заголовок статті..."
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
        fullWidth
      />
      <TextField
        variant="standard"
        placeholder="Заголовок статті..."
        value={real_name}
        onChange={(e) => setRealName(e.target.value)}
        fullWidth
      />
      <TextField
        variant="standard"
        placeholder="Заголовок статті..."
        value={origin_description}
        onChange={(e) => setDesc(e.target.value)}
        fullWidth
      />
      <TextField
        variant="standard"
        placeholder="Заголовок статті..."
        value={superpowers}
        onChange={(e) => setSuper(e.target.value)}
        fullWidth
      />
      <TextField
        variant="standard"
        placeholder="Заголовок статті..."
        value={catch_phrase}
        onChange={(e) => setCatch(e.target.value)}
        fullWidth
      />
      <div>
        <Button
          type="submit"
          onClick={handleSubmitForm}
          size="large"
          variant="contained"
        >
          {isEdit ? "Редактувати" : "Публікувати"}
        </Button>
        <Link to="/">
          <Button size="large">Повернутися на головну</Button>
        </Link>
      </div>
    </Paper>
  );
};
