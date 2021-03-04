import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom"
import ClassList from "./ClassList";
import "./SearchBar.css";
import * as yup from "yup";
import { Button } from "reactstrap";

import { classContext } from '../contexts';

function SearchBar() {
    const [classes, fetchClasses, instructorAddNewClass, setClasses] = useContext(classContext);

    const [searchD, setSearchD] = useState(classes)
    const [formState, setFormState] = useState({
        searchclass: ""
    })
    const [errors, setErrors] = useState({
        searchclass: ""
    })

    const formSchema = yup.object().shape({
        searchclass: yup.string().required("Please Insert Class Name")
    })


    const validate = e => {
        yup
        .reach(formSchema, e.target.name)
        .validate(e.target.value)
        .then((validate) => {
            setErrors({...errors, [e.target.name]: ""})
        })
        .catch((error) => {
            setErrors({...errors, [e.target.name]: error.errors[0]})
        })
    }

    const inputChange = e => {
        e.persist();
        const newFormState = {...formState, [e.target.name]: e.target.value};
        validate(e);
        setFormState(newFormState);
    }

    const submitSearch = e => {
        e.preventDefault();
        // want to amend this to say, if the filter gives you data then setSearchD to filtered data, if not then setSearchD is props. classesD
        setSearchD(searchD.filter(classList => 
            classList.name.toLowerCase().includes(formState.searchclass)))
        if (formState.searchclass === "") {
            setSearchD(classes);
        }
    } 

    return (
        <>
        <div className="search-bar-wrapper">
            <form className="search-form" onSubmit={submitSearch}>
                <label htmlFor="search-class">
                Search Class
                    <input
                    id="search-class"
                    type="text"
                    name="searchclass"
                    value={formState.searchtext}
                    onChange={inputChange}
                    placeholder="Search Classess.."
                />
                { errors.searchclass.length > 0 ? <p>{errors.searchclass}</p> : null }
                </label>
                <Button color="primary" size="sm" type="submit">Search Classes</Button>
            </form>

        </div>
        {/* need to add logic here that filters through classes depending on search  */}
        <ClassList classesD={searchD} />
        {console.log(searchD)}
        </>
    )
}

export default SearchBar;

// needs to include an input form for the search
// search should allow you to filter classes in ClassList and only display matching classes
// should move the NAV bar here - NAV and search should be on same component 
// Should move App's Title / Logo here as well