import React from "react"
import ReactDOM from "react-dom"

import SearchForm from "./js/components/container/SearchForm"

const wrapper = document.getElementById("moogle")
wrapper ? ReactDOM.render(<SearchForm />, wrapper) : false
