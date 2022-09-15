import { useEffect, useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import { InputMask } from 'primereact/inputmask';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';

const App = () => {
  const [name, setName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [country, setCountry] = useState<any>({});
  const [nationalTeamDebutDate, setNationalTeamDebutDate] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  const countries = [
    {
      "name": "Afghanistan",
      "dialCode": "+93",
      "code": "AF"
    },
    {
      "name": "Aland Islands",
      "dialCode": "+358",
      "code": "AX"
    },
    {
      "name": "Albania",
      "dialCode": "+355",
      "code": "AL"
    },
    {
      "name": "Algeria",
      "dialCode": "+213",
      "code": "DZ"
    },
    {
      "name": "AmericanSamoa",
      "dialCode": "+1684",
      "code": "AS"
    },
    {
      "name": "Andorra",
      "dialCode": "+376",
      "code": "AD"
    },
    {
      "name": "Angola",
      "dialCode": "+244",
      "code": "AO"
    },
    {
      "name": "Anguilla",
      "dialCode": "+1264",
      "code": "AI"
    },
    {
      "name": "Antarctica",
      "dialCode": "+672",
      "code": "AQ"
    },
    {
      "name": "Antigua and Barbuda",
      "dialCode": "+1268",
      "code": "AG"
    },
    {
      "name": "Argentina",
      "dialCode": "+54",
      "code": "AR"
    },
    {
      "name": "Armenia",
      "dialCode": "+374",
      "code": "AM"
    },
    {
      "name": "Aruba",
      "dialCode": "+297",
      "code": "AW"
    },
    {
      "name": "Australia",
      "dialCode": "+61",
      "code": "AU"
    },
    {
      "name": "Austria",
      "dialCode": "+43",
      "code": "AT"
    },
    {
      "name": "Azerbaijan",
      "dialCode": "+994",
      "code": "AZ"
    },
    {
      "name": "Bahamas",
      "dialCode": "+1242",
      "code": "BS"
    },
    {
      "name": "Bahrain",
      "dialCode": "+973",
      "code": "BH"
    },
    {
      "name": "Bangladesh",
      "dialCode": "+880",
      "code": "BD"
    },
    {
      "name": "Barbados",
      "dialCode": "+1246",
      "code": "BB"
    },
    {
      "name": "Belarus",
      "dialCode": "+375",
      "code": "BY"
    },
    {
      "name": "Belgium",
      "dialCode": "+32",
      "code": "BE"
    },
    {
      "name": "Belize",
      "dialCode": "+501",
      "code": "BZ"
    },
    {
      "name": "Benin",
      "dialCode": "+229",
      "code": "BJ"
    },
    {
      "name": "Bermuda",
      "dialCode": "+1441",
      "code": "BM"
    },
    {
      "name": "Bhutan",
      "dialCode": "+975",
      "code": "BT"
    },
    {
      "name": "Bolivia, Plurinational State of",
      "dialCode": "+591",
      "code": "BO"
    },
    {
      "name": "Bosnia and Herzegovina",
      "dialCode": "+387",
      "code": "BA"
    },
    {
      "name": "Botswana",
      "dialCode": "+267",
      "code": "BW"
    },
    {
      "name": "Brazil",
      "dialCode": "+55",
      "code": "BR"
    },
    {
      "name": "British Indian Ocean Territory",
      "dialCode": "+246",
      "code": "IO"
    },
    {
      "name": "Brunei Darussalam",
      "dialCode": "+673",
      "code": "BN"
    },
    {
      "name": "Bulgaria",
      "dialCode": "+359",
      "code": "BG"
    },
    {
      "name": "Burkina Faso",
      "dialCode": "+226",
      "code": "BF"
    },
    {
      "name": "Burundi",
      "dialCode": "+257",
      "code": "BI"
    },
    {
      "name": "Cambodia",
      "dialCode": "+855",
      "code": "KH"
    },
    {
      "name": "Cameroon",
      "dialCode": "+237",
      "code": "CM"
    },
    {
      "name": "Canada",
      "dialCode": "+1",
      "code": "CA"
    },
    {
      "name": "Cape Verde",
      "dialCode": "+238",
      "code": "CV"
    },
    {
      "name": "Cayman Islands",
      "dialCode": "+ 345",
      "code": "KY"
    },
    {
      "name": "Central African Republic",
      "dialCode": "+236",
      "code": "CF"
    },
    {
      "name": "Chad",
      "dialCode": "+235",
      "code": "TD"
    },
    {
      "name": "Chile",
      "dialCode": "+56",
      "code": "CL"
    },
    {
      "name": "China",
      "dialCode": "+86",
      "code": "CN"
    },
    {
      "name": "Christmas Island",
      "dialCode": "+61",
      "code": "CX"
    },
    {
      "name": "Cocos (Keeling) Islands",
      "dialCode": "+61",
      "code": "CC"
    },
    {
      "name": "Colombia",
      "dialCode": "+57",
      "code": "CO"
    },
    {
      "name": "Comoros",
      "dialCode": "+269",
      "code": "KM"
    },
    {
      "name": "Congo",
      "dialCode": "+242",
      "code": "CG"
    },
    {
      "name": "Congo, The Democratic Republic of the Congo",
      "dialCode": "+243",
      "code": "CD"
    },
    {
      "name": "Cook Islands",
      "dialCode": "+682",
      "code": "CK"
    },
    {
      "name": "Costa Rica",
      "dialCode": "+506",
      "code": "CR"
    },
    {
      "name": "Cote d'Ivoire",
      "dialCode": "+225",
      "code": "CI"
    },
    {
      "name": "Croatia",
      "dialCode": "+385",
      "code": "HR"
    },
    {
      "name": "Cuba",
      "dialCode": "+53",
      "code": "CU"
    },
    {
      "name": "Cyprus",
      "dialCode": "+357",
      "code": "CY"
    },
    {
      "name": "Czech Republic",
      "dialCode": "+420",
      "code": "CZ"
    },
    {
      "name": "Denmark",
      "dialCode": "+45",
      "code": "DK"
    },
    {
      "name": "Djibouti",
      "dialCode": "+253",
      "code": "DJ"
    },
    {
      "name": "Dominica",
      "dialCode": "+1767",
      "code": "DM"
    },
    {
      "name": "Dominican Republic",
      "dialCode": "+1849",
      "code": "DO"
    },
    {
      "name": "Ecuador",
      "dialCode": "+593",
      "code": "EC"
    },
    {
      "name": "Egypt",
      "dialCode": "+20",
      "code": "EG"
    },
    {
      "name": "El Salvador",
      "dialCode": "+503",
      "code": "SV"
    },
    {
      "name": "Equatorial Guinea",
      "dialCode": "+240",
      "code": "GQ"
    },
    {
      "name": "Eritrea",
      "dialCode": "+291",
      "code": "ER"
    },
    {
      "name": "Estonia",
      "dialCode": "+372",
      "code": "EE"
    },
    {
      "name": "Ethiopia",
      "dialCode": "+251",
      "code": "ET"
    },
    {
      "name": "Falkland Islands (Malvinas)",
      "dialCode": "+500",
      "code": "FK"
    },
    {
      "name": "Faroe Islands",
      "dialCode": "+298",
      "code": "FO"
    },
    {
      "name": "Fiji",
      "dialCode": "+679",
      "code": "FJ"
    },
    {
      "name": "Finland",
      "dialCode": "+358",
      "code": "FI"
    },
    {
      "name": "France",
      "dialCode": "+33",
      "code": "FR"
    },
    {
      "name": "French Guiana",
      "dialCode": "+594",
      "code": "GF"
    },
    {
      "name": "French Polynesia",
      "dialCode": "+689",
      "code": "PF"
    },
    {
      "name": "Gabon",
      "dialCode": "+241",
      "code": "GA"
    },
    {
      "name": "Gambia",
      "dialCode": "+220",
      "code": "GM"
    },
    {
      "name": "Georgia",
      "dialCode": "+995",
      "code": "GE"
    },
    {
      "name": "Germany",
      "dialCode": "+49",
      "code": "DE"
    },
    {
      "name": "Ghana",
      "dialCode": "+233",
      "code": "GH"
    },
    {
      "name": "Gibraltar",
      "dialCode": "+350",
      "code": "GI"
    },
    {
      "name": "Greece",
      "dialCode": "+30",
      "code": "GR"
    },
    {
      "name": "Greenland",
      "dialCode": "+299",
      "code": "GL"
    },
    {
      "name": "Grenada",
      "dialCode": "+1473",
      "code": "GD"
    },
    {
      "name": "Guadeloupe",
      "dialCode": "+590",
      "code": "GP"
    },
    {
      "name": "Guam",
      "dialCode": "+1671",
      "code": "GU"
    },
    {
      "name": "Guatemala",
      "dialCode": "+502",
      "code": "GT"
    },
    {
      "name": "Guernsey",
      "dialCode": "+44",
      "code": "GG"
    },
    {
      "name": "Guinea",
      "dialCode": "+224",
      "code": "GN"
    },
    {
      "name": "Guinea-Bissau",
      "dialCode": "+245",
      "code": "GW"
    },
    {
      "name": "Guyana",
      "dialCode": "+595",
      "code": "GY"
    },
    {
      "name": "Haiti",
      "dialCode": "+509",
      "code": "HT"
    },
    {
      "name": "Holy See (Vatican City State)",
      "dialCode": "+379",
      "code": "VA"
    },
    {
      "name": "Honduras",
      "dialCode": "+504",
      "code": "HN"
    },
    {
      "name": "Hong Kong",
      "dialCode": "+852",
      "code": "HK"
    },
    {
      "name": "Hungary",
      "dialCode": "+36",
      "code": "HU"
    },
    {
      "name": "Iceland",
      "dialCode": "+354",
      "code": "IS"
    },
    {
      "name": "India",
      "dialCode": "+91",
      "code": "IN"
    },
    {
      "name": "Indonesia",
      "dialCode": "+62",
      "code": "ID"
    },
    {
      "name": "Iran, Islamic Republic of Persian Gulf",
      "dialCode": "+98",
      "code": "IR"
    },
    {
      "name": "Iraq",
      "dialCode": "+964",
      "code": "IQ"
    },
    {
      "name": "Ireland",
      "dialCode": "+353",
      "code": "IE"
    },
    {
      "name": "Isle of Man",
      "dialCode": "+44",
      "code": "IM"
    },
    {
      "name": "Israel",
      "dialCode": "+972",
      "code": "IL"
    },
    {
      "name": "Italy",
      "dialCode": "+39",
      "code": "IT"
    },
    {
      "name": "Jamaica",
      "dialCode": "+1876",
      "code": "JM"
    },
    {
      "name": "Japan",
      "dialCode": "+81",
      "code": "JP"
    },
    {
      "name": "Jersey",
      "dialCode": "+44",
      "code": "JE"
    },
    {
      "name": "Jordan",
      "dialCode": "+962",
      "code": "JO"
    },
    {
      "name": "Kazakhstan",
      "dialCode": "+77",
      "code": "KZ"
    },
    {
      "name": "Kenya",
      "dialCode": "+254",
      "code": "KE"
    },
    {
      "name": "Kiribati",
      "dialCode": "+686",
      "code": "KI"
    },
    {
      "name": "Korea, Democratic People's Republic of Korea",
      "dialCode": "+850",
      "code": "KP"
    },
    {
      "name": "Korea, Republic of South Korea",
      "dialCode": "+82",
      "code": "KR"
    },
    {
      "name": "Kuwait",
      "dialCode": "+965",
      "code": "KW"
    },
    {
      "name": "Kyrgyzstan",
      "dialCode": "+996",
      "code": "KG"
    },
    {
      "name": "Laos",
      "dialCode": "+856",
      "code": "LA"
    },
    {
      "name": "Latvia",
      "dialCode": "+371",
      "code": "LV"
    },
    {
      "name": "Lebanon",
      "dialCode": "+961",
      "code": "LB"
    },
    {
      "name": "Lesotho",
      "dialCode": "+266",
      "code": "LS"
    },
    {
      "name": "Liberia",
      "dialCode": "+231",
      "code": "LR"
    },
    {
      "name": "Libyan Arab Jamahiriya",
      "dialCode": "+218",
      "code": "LY"
    },
    {
      "name": "Liechtenstein",
      "dialCode": "+423",
      "code": "LI"
    },
    {
      "name": "Lithuania",
      "dialCode": "+370",
      "code": "LT"
    },
    {
      "name": "Luxembourg",
      "dialCode": "+352",
      "code": "LU"
    },
    {
      "name": "Macao",
      "dialCode": "+853",
      "code": "MO"
    },
    {
      "name": "Macedonia",
      "dialCode": "+389",
      "code": "MK"
    },
    {
      "name": "Madagascar",
      "dialCode": "+261",
      "code": "MG"
    },
    {
      "name": "Malawi",
      "dialCode": "+265",
      "code": "MW"
    },
    {
      "name": "Malaysia",
      "dialCode": "+60",
      "code": "MY"
    },
    {
      "name": "Maldives",
      "dialCode": "+960",
      "code": "MV"
    },
    {
      "name": "Mali",
      "dialCode": "+223",
      "code": "ML"
    },
    {
      "name": "Malta",
      "dialCode": "+356",
      "code": "MT"
    },
    {
      "name": "Marshall Islands",
      "dialCode": "+692",
      "code": "MH"
    },
    {
      "name": "Martinique",
      "dialCode": "+596",
      "code": "MQ"
    },
    {
      "name": "Mauritania",
      "dialCode": "+222",
      "code": "MR"
    },
    {
      "name": "Mauritius",
      "dialCode": "+230",
      "code": "MU"
    },
    {
      "name": "Mayotte",
      "dialCode": "+262",
      "code": "YT"
    },
    {
      "name": "Mexico",
      "dialCode": "+52",
      "code": "MX"
    },
    {
      "name": "Micronesia, Federated States of Micronesia",
      "dialCode": "+691",
      "code": "FM"
    },
    {
      "name": "Moldova",
      "dialCode": "+373",
      "code": "MD"
    },
    {
      "name": "Monaco",
      "dialCode": "+377",
      "code": "MC"
    },
    {
      "name": "Mongolia",
      "dialCode": "+976",
      "code": "MN"
    },
    {
      "name": "Montenegro",
      "dialCode": "+382",
      "code": "ME"
    },
    {
      "name": "Montserrat",
      "dialCode": "+1664",
      "code": "MS"
    },
    {
      "name": "Morocco",
      "dialCode": "+212",
      "code": "MA"
    },
    {
      "name": "Mozambique",
      "dialCode": "+258",
      "code": "MZ"
    },
    {
      "name": "Myanmar",
      "dialCode": "+95",
      "code": "MM"
    },
    {
      "name": "Namibia",
      "dialCode": "+264",
      "code": "NA"
    },
    {
      "name": "Nauru",
      "dialCode": "+674",
      "code": "NR"
    },
    {
      "name": "Nepal",
      "dialCode": "+977",
      "code": "NP"
    },
    {
      "name": "Netherlands",
      "dialCode": "+31",
      "code": "NL"
    },
    {
      "name": "New Caledonia",
      "dialCode": "+687",
      "code": "NC"
    },
    {
      "name": "New Zealand",
      "dialCode": "+64",
      "code": "NZ"
    },
    {
      "name": "Nicaragua",
      "dialCode": "+505",
      "code": "NI"
    },
    {
      "name": "Niger",
      "dialCode": "+227",
      "code": "NE"
    },
    {
      "name": "Nigeria",
      "dialCode": "+234",
      "code": "NG"
    },
    {
      "name": "Niue",
      "dialCode": "+683",
      "code": "NU"
    },
    {
      "name": "Norfolk Island",
      "dialCode": "+672",
      "code": "NF"
    },
    {
      "name": "Northern Mariana Islands",
      "dialCode": "+1670",
      "code": "MP"
    },
    {
      "name": "Norway",
      "dialCode": "+47",
      "code": "NO"
    },
    {
      "name": "Oman",
      "dialCode": "+968",
      "code": "OM"
    },
    {
      "name": "Pakistan",
      "dialCode": "+92",
      "code": "PK"
    },
    {
      "name": "Palau",
      "dialCode": "+680",
      "code": "PW"
    },
    {
      "name": "Palestinian Territory, Occupied",
      "dialCode": "+970",
      "code": "PS"
    },
    {
      "name": "Panama",
      "dialCode": "+507",
      "code": "PA"
    },
    {
      "name": "Papua New Guinea",
      "dialCode": "+675",
      "code": "PG"
    },
    {
      "name": "Paraguay",
      "dialCode": "+595",
      "code": "PY"
    },
    {
      "name": "Peru",
      "dialCode": "+51",
      "code": "PE"
    },
    {
      "name": "Philippines",
      "dialCode": "+63",
      "code": "PH"
    },
    {
      "name": "Pitcairn",
      "dialCode": "+872",
      "code": "PN"
    },
    {
      "name": "Poland",
      "dialCode": "+48",
      "code": "PL"
    },
    {
      "name": "Portugal",
      "dialCode": "+351",
      "code": "PT"
    },
    {
      "name": "Puerto Rico",
      "dialCode": "+1939",
      "code": "PR"
    },
    {
      "name": "Qatar",
      "dialCode": "+974",
      "code": "QA"
    },
    {
      "name": "Romania",
      "dialCode": "+40",
      "code": "RO"
    },
    {
      "name": "Russia",
      "dialCode": "+7",
      "code": "RU"
    },
    {
      "name": "Rwanda",
      "dialCode": "+250",
      "code": "RW"
    },
    {
      "name": "Reunion",
      "dialCode": "+262",
      "code": "RE"
    },
    {
      "name": "Saint Barthelemy",
      "dialCode": "+590",
      "code": "BL"
    },
    {
      "name": "Saint Kitts and Nevis",
      "dialCode": "+1869",
      "code": "KN"
    },
    {
      "name": "Saint Lucia",
      "dialCode": "+1758",
      "code": "LC"
    },
    {
      "name": "Saint Martin",
      "dialCode": "+590",
      "code": "MF"
    },
    {
      "name": "Saint Pierre and Miquelon",
      "dialCode": "+508",
      "code": "PM"
    },
    {
      "name": "Saint Vincent and the Grenadines",
      "dialCode": "+1784",
      "code": "VC"
    },
    {
      "name": "Samoa",
      "dialCode": "+685",
      "code": "WS"
    },
    {
      "name": "San Marino",
      "dialCode": "+378",
      "code": "SM"
    },
    {
      "name": "Sao Tome and Principe",
      "dialCode": "+239",
      "code": "ST"
    },
    {
      "name": "Saudi Arabia",
      "dialCode": "+966",
      "code": "SA"
    },
    {
      "name": "Senegal",
      "dialCode": "+221",
      "code": "SN"
    },
    {
      "name": "Serbia",
      "dialCode": "+381",
      "code": "RS"
    },
    {
      "name": "Seychelles",
      "dialCode": "+248",
      "code": "SC"
    },
    {
      "name": "Sierra Leone",
      "dialCode": "+232",
      "code": "SL"
    },
    {
      "name": "Singapore",
      "dialCode": "+65",
      "code": "SG"
    },
    {
      "name": "Slovakia",
      "dialCode": "+421",
      "code": "SK"
    },
    {
      "name": "Slovenia",
      "dialCode": "+386",
      "code": "SI"
    },
    {
      "name": "Solomon Islands",
      "dialCode": "+677",
      "code": "SB"
    },
    {
      "name": "Somalia",
      "dialCode": "+252",
      "code": "SO"
    },
    {
      "name": "South Africa",
      "dialCode": "+27",
      "code": "ZA"
    },
    {
      "name": "South Sudan",
      "dialCode": "+211",
      "code": "SS"
    },
    {
      "name": "South Georgia and the South Sandwich Islands",
      "dialCode": "+500",
      "code": "GS"
    },
    {
      "name": "Spain",
      "dialCode": "+34",
      "code": "ES"
    },
    {
      "name": "Sri Lanka",
      "dialCode": "+94",
      "code": "LK"
    },
    {
      "name": "Sudan",
      "dialCode": "+249",
      "code": "SD"
    },
    {
      "name": "Suriname",
      "dialCode": "+597",
      "code": "SR"
    },
    {
      "name": "Swaziland",
      "dialCode": "+268",
      "code": "SZ"
    },
    {
      "name": "Sweden",
      "dialCode": "+46",
      "code": "SE"
    },
    {
      "name": "Switzerland",
      "dialCode": "+41",
      "code": "CH"
    },
    {
      "name": "Syrian Arab Republic",
      "dialCode": "+963",
      "code": "SY"
    },
    {
      "name": "Taiwan",
      "dialCode": "+886",
      "code": "TW"
    },
    {
      "name": "Tajikistan",
      "dialCode": "+992",
      "code": "TJ"
    },
    {
      "name": "Tanzania, United Republic of Tanzania",
      "dialCode": "+255",
      "code": "TZ"
    },
    {
      "name": "Thailand",
      "dialCode": "+66",
      "code": "TH"
    },
    {
      "name": "Timor-Leste",
      "dialCode": "+670",
      "code": "TL"
    },
    {
      "name": "Togo",
      "dialCode": "+228",
      "code": "TG"
    },
    {
      "name": "Tokelau",
      "dialCode": "+690",
      "code": "TK"
    },
    {
      "name": "Tonga",
      "dialCode": "+676",
      "code": "TO"
    },
    {
      "name": "Trinidad and Tobago",
      "dialCode": "+1868",
      "code": "TT"
    },
    {
      "name": "Tunisia",
      "dialCode": "+216",
      "code": "TN"
    },
    {
      "name": "Turkey",
      "dialCode": "+90",
      "code": "TR"
    },
    {
      "name": "Turkmenistan",
      "dialCode": "+993",
      "code": "TM"
    },
    {
      "name": "Turks and Caicos Islands",
      "dialCode": "+1649",
      "code": "TC"
    },
    {
      "name": "Tuvalu",
      "dialCode": "+688",
      "code": "TV"
    },
    {
      "name": "Uganda",
      "dialCode": "+256",
      "code": "UG"
    },
    {
      "name": "Ukraine",
      "dialCode": "+380",
      "code": "UA"
    },
    {
      "name": "United Arab Emirates",
      "dialCode": "+971",
      "code": "AE"
    },
    {
      "name": "United Kingdom",
      "dialCode": "+44",
      "code": "GB"
    },
    {
      "name": "United States",
      "dialCode": "+1",
      "code": "US"
    },
    {
      "name": "Uruguay",
      "dialCode": "+598",
      "code": "UY"
    },
    {
      "name": "Uzbekistan",
      "dialCode": "+998",
      "code": "UZ"
    },
    {
      "name": "Vanuatu",
      "dialCode": "+678",
      "code": "VU"
    },
    {
      "name": "Venezuela, Bolivarian Republic of Venezuela",
      "dialCode": "+58",
      "code": "VE"
    },
    {
      "name": "Vietnam",
      "dialCode": "+84",
      "code": "VN"
    },
    {
      "name": "Virgin Islands, British",
      "dialCode": "+1284",
      "code": "VG"
    },
    {
      "name": "Virgin Islands, U.S.",
      "dialCode": "+1340",
      "code": "VI"
    },
    {
      "name": "Wallis and Futuna",
      "dialCode": "+681",
      "code": "WF"
    },
    {
      "name": "Yemen",
      "dialCode": "+967",
      "code": "YE"
    },
    {
      "name": "Zambia",
      "dialCode": "+260",
      "code": "ZM"
    },
    {
      "name": "Zimbabwe",
      "dialCode": "+263",
      "code": "ZW"
    }
  ];

  useEffect(() => {
    onCountryChange(countries.find(country => country.code == 'AR'));
  }, [])

  const onCountryChange = (e: any) => {
    setCountry(e);
  }

  const selectedCountryTemplate = (option: any) => {
    if (option) {
      return (
        <div className="flex gap-2">
          <img alt={option.name} src={`assets/flags/${option.code.toLowerCase()}.svg`} className='w-6' draggable={false} />
          <div className='font-medium text-md leading-normal text-black'>{option.name}</div>
        </div>
      );
    }
  }

  const countryOptionTemplate = (option: any) => {
    return (
      <div className="flex gap-2">
        <img alt={option.name} src={`assets/flags/${option.code.toLowerCase()}.svg`} className='w-6' draggable={false} />
        <div className='font-medium text-sm'>{option.name}</div>
      </div>
    );
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-96 text-center p-4 border-2 border-gray-900 rounded-tl-md rounded-bl-md">
        <h1 className="text-center text-4xl">Ajustes</h1>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <label className="text-left font-semibold">Nombre</label>
            <input value={name} onChange={(e) => setName(e.target.value.toUpperCase())} placeholder="Lionel Messi" className="bg-[#f8f9fa] p-2 rounded-lg" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-left font-semibold">Fecha de nacimiento</label>
            <InputMask mask="99/99/9999" placeholder="24/06/1987" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.value)} className="bg-[#f8f9fa] p-2 rounded-lg border-none"></InputMask>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-left font-semibold">Pais</label>
            <Dropdown emptyFilterMessage='No se encontró un país con ese nombre' resetFilterOnHide showFilterClear className='w-100 flex items-center rounded-lg border-none bg-[#f8f9fa] active:!shadow-none h-10' value={country} options={countries} onChange={(e: any) => onCountryChange(e.value)} optionLabel="name" filter filterBy="name" placeholder="Pais"
              valueTemplate={selectedCountryTemplate} itemTemplate={countryOptionTemplate} />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-left font-semibold">Debut en la seleccion</label>
            <InputMask mask="9999" placeholder="2005" value={nationalTeamDebutDate} onChange={(e) => setNationalTeamDebutDate(e.value)} className="bg-[#f8f9fa] p-2 rounded-lg border-none"></InputMask>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-left font-semibold">Altura</label>
            <InputMask mask="9,99" placeholder="1,70" value={height} onChange={(e) => setHeight(e.value)} className="bg-[#f8f9fa] p-2 rounded-lg border-none"></InputMask>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-left font-semibold">Peso</label>
            <InputMask mask="999" placeholder="72" value={weight} onChange={(e) => setWeight(e.value)} className="bg-[#f8f9fa] p-2 rounded-lg border-none"></InputMask>
          </div>
        </div>
      </div>
      <div className="w-96 text-center p-4 border-2 border-gray-900 border-l-0 rounded-tr-md rounded-br-md">
        <h1 className="text-center text-4xl">Previsualización</h1>
        <div className="border-2 border-gray-900 bg-[#d53618] p-5 relative">
          <div className="flex justify-between">
            <div>
              <img alt="logo-qatar" src={`assets/qatar-logo.png`} style={{ 'width': '6rem' }} draggable={false} />
              <h6>Cancha</h6>
            </div>
            <div>
              <div className="bg-white">
                <h6 className="font-bold text-[#7a1d32]" style={{ 'fontSize': '1.2rem', 'lineHeight': '0.9' }}>{country.code}</h6>
                <img alt={country.name} src={`assets/flags/${country.code?.toLowerCase()}.svg`} className='w-100' style={{ 'padding': '0.1rem' }} draggable={false} />
              </div>
              <h6 className="font-bold text-white">{nationalTeamDebutDate}</h6>
              <div className="flex gap-2 mt-2">
                <div className="flex flex-col items-center">
                  <div className="h-8">
                    <img alt='height' src={`assets/height.png`} className='w-8' style={{ 'filter': 'invert(1)' }} draggable={false} />
                  </div>
                  <h6 className="font-bold text-white">{height}</h6>
                </div>
                <div className="flex flex-col items-center">
                  <div className="h-8">
                    <img alt='height' src={`assets/weight.png`} className='w-6' style={{ 'filter': 'invert(1)', 'marginTop': '0.2rem' }} draggable={false} />
                  </div>
                  <h6 className="font-bold text-white">{weight}</h6>
                </div>
              </div>
            </div>
          </div>
          <div style={{ 'width': '200px', 'height': '200px', 'marginBottom': '-1.5rem' }}>
            <div className="absolute top-4 left-0">
              <img src="https://www.pngkey.com/png/full/161-1619094_lionel-messi-fue-seleccionado-como-el-mximo-goleador.png" style={{ 'clipPath': 'polygon(8% 54%, 33% 27%, 33% 0, 68% 0, 68% 27%, 93% 54%, 93% 96%, 8% 96%)', 'width': '350px', 'maxWidth': '350px', 'height': '350px', 'marginLeft': '-0.2rem', 'filter': 'drop-shadow(10px 5px 1px #222)' }}></img>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="bg-[#e8e2d2]">
              <h6 className="text-xl font-extrabold text-[#7a1d32]" style={{ 'boxShadow': '0px 8px 3px 0px' }}>{name}</h6>
            </div>
            <div className="flex justify-center items-center -mt-2">
              <div className="bg-[#7a1d32] w-fit px-5 relative">
                <div className="bg-[#7a1d32] w-3 h-2 absolute" style={{ 'top': '0.6rem', 'left': '-0.7rem' }}></div>
                <h6 className="font-bold text-sm py-1 text-[#e8e2d2]">{dateOfBirth}</h6>
                <div className="bg-[#7a1d32] w-3 h-2 absolute" style={{ 'top': '0.6rem', 'right': '-0.7rem' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
