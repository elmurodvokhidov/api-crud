import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

export const ContextData = React.createContext();


function Context({ children }) {

    // Ract Hooks
    const [info, setInfo] = useState([]);
    const [modal, setModal] = useState(false);
    const [spinner, setSpinner] = useState(true);
    const [input, setInput] = useState({
        name: '',
        id: '',
        // slug: '',
    });

    // API dan kelgan ma'lumot
    function refresh() {
        axios({
            method: "get",
            url: "https://ijarauz.pythonanywhere.com/product/region/"
        })
            .then((foo) => {
                setInfo(foo.data);
                setSpinner(false);
            })
    };

    useEffect(() => {
        refresh();
    }, []);

    // Add function
    function add() {
        setModal(!modal);
    };

    // Inputdan ma'lumot to'plovchi function
    function collectHandle(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    };

    // Delete funksiyasi
    function deleteFunc(a) {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios({
                    method: "delete",
                    url: `https://ijarauz.pythonanywhere.com/product/region/${a.slug}/`,
                })
                    .then(() => {
                        refresh();
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        );
                    })
                    .catch(err => console.log(err.message));
            }
        })
    };

    // Ma'lumotlarni tahrirlash funksiyasi
    function edit(a) {
        setModal(!modal);
        setInput(a)
    }

    // Yangi ma'lumot qo'shish funksiyasi
    function sendFunction(e) {
        e.preventDefault();
        // Yangi ma'lumot qo'shish
        if (input.id === '') {
            axios({
                method: "post",
                url: "https://ijarauz.pythonanywhere.com/product/region/",
                data: input
            })
                .then(() => {
                    refresh();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }).catch(err => console.log(err.message));
        }
        // Ma'lumotlarni tahrirlash
        else {
            axios({
                method: 'put',
                url: `https://ijarauz.pythonanywhere.com/product/region/${input.slug}/`,
                data: input
            })
                .then(() => {
                    refresh();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }).catch((err) => console.log(err.message))
        }

        setModal(!modal);
        setInput({
            name: '',
        })
    }

    return (
        <ContextData.Provider value={{
            info,
            add,
            modal,
            setModal,
            collectHandle,
            sendFunction,
            input,
            deleteFunc,
            edit,
            spinner,
            setSpinner,
        }}>
            {children}
        </ContextData.Provider>
    );
}

export default Context;