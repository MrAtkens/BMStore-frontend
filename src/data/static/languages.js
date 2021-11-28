import React from "react";
import ReactCountryFlag from "react-country-flag"

const languages = [
    {
        icon: <ReactCountryFlag countryCode="RU" svg/>,
        title: "Русский",
        locale: "ru",
    },
    {
        icon: <ReactCountryFlag countryCode="KZ" svg/>,
        title: "Казакша",
        locale: "kz",
    },
    {
        icon: <ReactCountryFlag countryCode="US" svg/>,
        title: "English",
        locale: "en",
    },
]

export default languages;
