import React, { useState } from 'react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Reservation = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [phone, setPhone] = useState("")
    const navigate = useNavigate()

    const handleReservation = async (e) => {
        e.preventDefault();

        if (!firstName || !lastName || !email || !date || !time || !phone) {
    toast.error("Please fill in all fields.");
    return;
  }

        try {
            const response = await axios.post("http://localhost:3000/api/v1/reservation/send", {
                firstName,
                lastName,
                email,
                date,
                time,
                phone
            }, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });

            toast.success(response.data.message);
            setFirstName("");
            setLastName("");
            setEmail("");
            setDate("");
            setTime("");
            setPhone(0);
            navigate("/success");

        } catch (error) {
            console.error("Error making reservation:", error);
            toast.error(error.response?.data?.message || "An error occurred while making the reservation.");
        }
    }

    return (
        <section className='reservation' id='reservation'>
            <div className="container">
                <div className="banner">
                    <img src='./reservation.png' alt='Reservation Banner' />
                </div>
                <div className="banner">
                    <div className="reservation_form_box">
                        <h1>Make a Reservation</h1>
                        <p>For further questions, please call</p>
                        <form onSubmit={handleReservation}>
                            <div>
                                <input type="text" placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                                <input type="text" placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                            </div>
                            <div>
                                <input type="time" placeholder='Time' value={time} onChange={(e) => setTime(e.target.value)} />
                                <input type="date" placeholder='Date' value={date} onChange={(e) => setDate(e.target.value)} />
                            </div>
                            <div>
                                <input type="email" placeholder='Email' className='email_tag' value={email} onChange={(e) => setEmail(e.target.value)} />
                                <input type="tel" placeholder='Phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
                            </div>
                            <button type='submit'>
                                RESERVE NOW
                                <span>
                                    <HiOutlineArrowNarrowRight /> 
                                </span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Reservation
