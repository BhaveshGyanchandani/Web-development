import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css";

const Form = () => {
    const navigate = useNavigate(); // Correct placement of useNavigate
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        work: "",
        phone: "",
        password: "",
        cpassword: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const PostData = async (e) => {
        e.preventDefault();

        const { name, email, work, phone, password, cpassword } = formData;

        try {
            const res = await fetch("http://localhost:3000/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    work,
                    phone,
                    password,
                    cpassword,
                }),
            });

            const data = await res.json();

            if (res.status === 422 || !data) {
                window.alert("Invalid Registration");
                console.log("Invalid Registration");
            } else {
                window.alert("Registration Successful");
                console.log("Registration Successful");

                navigate("/"); // Use navigate here
            }
        } catch (err) {
            console.error("Error:", err);
        }
    };

    return (
        <div className="form-container">
            <form onSubmit={PostData}>
                <h2>Registration Form</h2>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="work">Work</label>
                <input
                    type="text"
                    id="work"
                    name="work"
                    value={formData.work}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="phone">Phone</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="cpassword">Confirm Password</label>
                <input
                    type="password"
                    id="cpassword"
                    name="cpassword"
                    value={formData.cpassword}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form;
