import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Create = () => {
  const [data, setData] = useState({
    auther: "",
    title: "",
    message: ""
  });

  const history = useHistory();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!data.auther.trim() || !data.title.trim() || !data.message.trim()) {
      toast.warn("Please fill out all fields!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
      return;
    }

    axios.post('http://localhost:4000/blogs', data)
      .then(res => {
        toast.success(`AKI CHARO WEWE NI MNOMA`, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });

        setTimeout(()=>{
          history.push('/')
        }, 3000);

      })
      .catch(err => {
        toast.error(`WAAAH HUSKII HAIWEZI`, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
      });
  }

  return (
    <div className="d-flex justify-content-center align-items-center mt-5">
      <Form style={{ width: "50%" }} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label className="text-start w-100">Auther</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" name='auther' value={data.auther} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label className="text-start w-100">Title</Form.Label>
          <Form.Control type="text" placeholder="Enter Title" name='title' value={data.title} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="text-start w-100">Message</Form.Label>
          <Form.Control as="textarea" rows={5} placeholder='Write your Message' name='message' value={data.message} onChange={handleChange} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Post
        </Button>
        <ToastContainer />
      </Form>
    </div>
  );
}

export default Create;
