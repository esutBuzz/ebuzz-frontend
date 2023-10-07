import ToggleButton from "../../ToggleButton/ToggleButton"
import { useContext, useState } from "react"
import { UserContext } from "../../../Context/Context"
import FormInput from "../../FormInput/FormInput"
import './PostEvent.scss'

export default function Event({closeModal, className}) {
    const [formState, setFormState] = useState({
        title: '',
        date: '',
        desc: '',
        from: '',
        to: ''
    })

    function handleChange(e) {
        e.preventDefault();

        const {name, value} = e.target;
        setFormState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    const { addEvent } = useContext(UserContext)

    function handleAddEvent(e) {
        e.preventDefault();
        addEvent(formState);
        closeModal();

        setFormState({
            title:'',date:'',desc:'',from:'',to:''
        });
    }

    return(
        <main id="post-event" className={className}>
            <section>
                <nav>
                    <h1>Add Event</h1>

                    <ToggleButton
                        icon='fa-solid fa-x fa-2x'
                        onClick={closeModal}
                        className='close-btn'
                    />
                </nav>

                <form action="">
                    <FormInput
                        className='f-input'
                        type='text'
                        title='New event title'
                        id='title' 
                        value={formState.title}
                        onChange={handleChange}
                    />

                    <FormInput
                        className='f-input'
                        type='date'
                        icon='fa-regular fa-calendar'
                        title='Date'
                        id='date'
                        value={formState.date}
                        onChange={handleChange}
                    />

                    <FormInput
                        className='f-input'
                        type='text'
                        icon='fa-solid fa-paragraph'
                        title='Description'
                        id='desc'
                        value={formState.desc}
                        onChange={handleChange}
                    />

                    <span>
                        <FormInput
                            className='f-input'
                            type='tel'
                            icon='fa-regular fa-clock'
                            title='From'
                            id='from'
                            value={formState.from}
                            onChange={handleChange}
                            pattern="([01][0-9]|2[0-3]):[0-5][0-9]"
                            maxLength={5}
                        />

                        <i className="fa-solid fa-arrow-right fa-2x"></i>

                        <FormInput
                            className='f-input'
                            type='tel'
                            icon='fa-regular fa-clock'
                            title='To'
                            id='to'
                            value={formState.to}
                            onChange={handleChange}
                            pattern="([01][0-9]|2[0-3]):[0-5][0-9]"
                            maxLength={5}
                        />
                    </span>

                    <span>
                        <ToggleButton
                            text='Cancel'
                            onClick={(e) => closeModal(e.preventDefault())}
                            className='sb-btn close-event'
                        />

                        <ToggleButton
                            type='submit'
                            text='Post'
                            onClick={handleAddEvent}
                            className='sb-btn add-event'
                        /> 
                    </span>
                </form>                
            </section>
        </main>
    )
}