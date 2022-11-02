import axios from 'axios'
import { useEffect, useState } from 'react'
import './style.css'
const initialState = {
    bookName: '',
    authorName: '',
    publishYear: '',
    price: ''
}
export default function Edit({ id, setEditVisible }) {
    const [Data, setData] = useState([])
    const [form, setForm] = useState(Data)
    useEffect(() => {
        const fetch = async () => {
            const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/detailBook/${id}`)
            setData(data)
        }
        fetch()
    }, [])
    async function submitForm() {
        const { data } = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/editBook/${id}`,{form})
        console.log(data)
    }
    return (
        <div className='edit_form' onSubmit={() => {
            submitForm()
        }}>
            <div onClick={() => {
                setEditVisible(false)
            }}>close</div>
            <form action="">
                <input type="text" name='bookName' value={Data.bookName} onChange={(e) => {
                    setForm({ ...form, [e.target.name]: e.target.value })
                }} />
                <input type="text" name='authorName' value={Data.authorName} onChange={(e) => {
                    setForm({ ...form, [e.target.name]: e.target.value })
                }} />
                <input type="text" name='publishYear' value={Data.publishYear} onChange={(e) => {
                    setForm({ ...form, [e.target.name]: e.target.value })
                }} />
                <input type="text" name='price' value={Data.price} onChange={(e) => {
                    setForm({ ...form, [e.target.name]: e.target.value })
                }} />
                <button type='submit'> submit</button>
            </form>
        </div>
    )
}
