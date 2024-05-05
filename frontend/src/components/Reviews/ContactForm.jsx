import React, { useEffect, useState } from 'react'
import { TextArea } from '../Inputs/TextArea';
import { FormInput } from '../Inputs/FormInput';
import useFetch from '../../hooks/useFetch';
import { message } from 'antd';

export const ContactForm = () => {
    const [msg, setMsg] = useState("");
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [errName, setErrName] = useState("");
    const [errMail, setErrMail] = useState("");
    const fetchURL = `/contact/post_contact`;
    const token = localStorage.getItem("x-auth-token") ? JSON.parse(localStorage.getItem("x-auth-token")) : "";

    const { data, isLoading, error, postData } = useFetch(fetchURL, "POST", token);

    const handleMsg = (value) => {
        setMsg(value);
    }

    const handleName = (value) => {
        setName(value);
    }

    const handleMail = (value) => {
        setMail(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name) {
            setErrName("Please fill in this field")
            return;
        }
        if (!mail) {
            setErrMail("Please fill in this field")
            return;
        }
        if (!msg) {
            setErrMsg("Please fill in this field")
            return;
        }

        const formData = { name: name, mail: mail, msg: msg }

        postData(formData)

        setErrMsg("");
        setErrName("");
        setErrMail("");
    }

    useEffect(() => {
        if (data && data._id) {
            message.success("Your message has been sent.")
            setMsg("");
            setName("");
            setMail("");
        }
        if (error) {
            message.error(error);
        }
    }, [data])

    return (
        <form onSubmit={handleSubmit}>
            <div className="review-form__info">
                <h5 className="text-capitalize fw-normal">Get In Touch</h5>
            </div>
            <div className="review-form__wrapper">
                <div className="col-12">
                    <FormInput validationError={errName}
                        inputName={"Name"}
                        handleInput={handleName}
                        required={true}
                        value={name}
                        text={"Name"}
                    />
                </div>
                <div className="col-12">
                    <FormInput validationError={errMail}
                        inputName={"mail"}
                        handleInput={handleMail}
                        required={true}
                        value={mail}
                        text={"Your Mail"}
                    />
                </div>
                <div className="col-12 my-5">
                    <TextArea validationError={errMsg}
                        inputText={"msg"}
                        value={msg}
                        labelText={"Messeage"}
                        handleInput={handleMsg} />
                </div>
                <button id="addComment" type="submit"
                    className={`text-uppercase button btn-primary w-100`}>
                    Submit
                </button>
            </div>
        </form>
    )
}
