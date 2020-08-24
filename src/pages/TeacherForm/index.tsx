import React, { useState, FormEvent } from 'react'
import Header from '../../components/Header';
import './styles.css';
import Input from '../../components/Input';

import warningIcon from '../../assets/images/icons/warning.svg'
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

function TeacherForm() {
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');
    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');
    const [scheduleItems, setScheduleItems] = useState([
        {
            week_day: 0, 
            from: '', 
            to: '' 
        }
    ])

    function addNewScheduleitem() {
        setScheduleItems([
            ...scheduleItems,
            {
                week_day: 0,
                from: '',
                to: ''
            }
        ])

    }

    function handleCreateClass(e: FormEvent) {
        e.preventDefault();
    }

    return (
        <div id="page-teacher-form" className="container">
            <Header title="Que incrível que você quer dar aulas"
                description="O primeiro passo é preencher esse formulário de inscrição"
            />

            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>Seus Dados</legend>

                        <Input
                            name="name"
                            label="Nome Completo"
                            value={name}
                            onChange={(e) => { setName(e.target.value) }}
                        />
                        <Input
                            name="avatar"
                            label="Avatar"
                            value={avatar}
                            onChange={(e) => { setAvatar(e.target.value) }}
                        />
                        <Input
                            name="whatsapp"
                            label="WhatsApp"
                            value={whatsapp}
                            onChange={(e) => { setWhatsapp(e.target.value) }}
                        />
                        <Textarea
                            name="bio"
                            label="Biografia" value={bio}
                            onChange={(e) => { setBio(e.target.value) }}
                        />

                    </fieldset>
                    <fieldset>
                        <legend>Suas a Aula</legend>

                        <Select
                            name="subject"
                            label="Matéria"
                            value={subject}
                            onChange={(e) => { setSubject(e.target.value) }}
                            options={[
                                { value: 'Artes', label: 'Ates' },
                                { value: 'Matemática', label: 'Matemática' },
                                { value: 'Lingua portuguêsa', label: 'Lingua portuguêsa' },
                                { value: 'História', label: 'História' },
                                { value: 'Ciências', label: 'Ciências' },
                                { value: 'Biologia', label: 'Biologia' },
                                { value: 'Educação Física', label: 'Educação Física' },
                                { value: 'Ensino Religioso', label: 'Ensino Religioso' },
                                { value: 'Filosofia', label: 'Filosofia' },
                                { value: 'Geografia', label: 'Geografia' },
                                { value: 'Química', label: 'Química' },
                            ]}
                        />

                        <Input
                            name="cost"
                            label="Custo da sua hora por aula"
                            value={cost}
                            onChange={(e) => { setCost(e.target.value) }}
                        />
                    </fieldset>
                    <fieldset>
                        <legend>
                            Horários Disponivéis
                            <button type="button" onClick={addNewScheduleitem}>
                                + Novo Horário
                            </button>
                        </legend>

                        {scheduleItems.map(scheduleItems => {
                            return (
                                <div key={scheduleItems.week_day} className="schedule-item">
                                    <Select
                                        name="week_day"
                                        label="Dia da Semana"
                                        options={[
                                            { value: '0', label: 'Domingo' },
                                            { value: '1', label: 'Segunda-Feira' },
                                            { value: '2', label: 'Terça-Feira' },
                                            { value: '3', label: 'Quarta-Feira' },
                                            { value: '4', label: 'Quinta-Feira' },
                                            { value: '5', label: 'Sexta-Feira' },
                                            { value: '6', label: 'Sábado' },

                                        ]}
                                    />

                                    <Input name="from" label="Das" type="time" />
                                    <Input name="to" label="Até" type="time" />
                                </div>
                            )
                        })}
                    </fieldset>

                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso importante" />
                        Importante!
                        <br />
                        Preencha todos os dados
                    </p>
                        <button type="submit">
                            Salvar cadastro
                    </button>
                    </footer>
                </form>
            </main>
        </div>
    )
}

export default TeacherForm;