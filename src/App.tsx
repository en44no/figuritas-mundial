import { useEffect, useRef, useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { InputMask } from 'primereact/inputmask';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
// @ts-ignore
import { saveAsPng } from 'save-html-as-image';
import { TabView, TabPanel } from 'primereact/tabview';
import { Slider } from 'primereact/slider';
import { SelectButton } from 'primereact/selectbutton';

const App = () => {
  const [name, setName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [country, setCountry] = useState<any>({});
  const [nationalTeamDebutDate, setNationalTeamDebutDate] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [courtPosition, setCourtPosition] = useState<any>();
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [photoHorizontalPosition, setPhotoHorizontalPosition] = useState<any>(0);
  const [photoVerticalPosition, setPhotoVerticalPosition] = useState<any>(0);
  const [photoWidth, setPhotoWidth] = useState<any>(370);
  const [photoHeight, setPhotoHeight] = useState<any>(420);
  const [stickerVariant, setStickerVariant] = useState<any>('orange');

  let contentToDownload = document.getElementById("div-to-download");

  const countries = [
    {
      "alpha2": "DZ",
      "alpha3": "DZA",
      "code": "012",
      "name": "Algeria"
    },
    {
      "alpha2": "AO",
      "alpha3": "AGO",
      "code": "024",
      "name": "Angola"
    },
    {
      "alpha2": "BJ",
      "alpha3": "BEN",
      "code": "204",
      "name": "Benin"
    },
    {
      "alpha2": "BW",
      "alpha3": "BWA",
      "code": "072",
      "name": "Botswana"
    },
    {
      "alpha2": "BF",
      "alpha3": "BFA",
      "code": "854",
      "name": "Burkina Faso"
    },
    {
      "alpha2": "BI",
      "alpha3": "BDI",
      "code": "108",
      "name": "Burundi"
    },
    {
      "alpha2": "CM",
      "alpha3": "CMR",
      "code": "120",
      "name": "Cameroon"
    },
    {
      "alpha2": "CV",
      "alpha3": "CPV",
      "code": "132",
      "name": "Cape Verde"
    },
    {
      "alpha2": "CF",
      "alpha3": "CAF",
      "code": "140",
      "name": "Central African Republic"
    },
    {
      "alpha2": "TD",
      "alpha3": "TCD",
      "code": "148",
      "name": "Chad"
    },
    {
      "alpha2": "KM",
      "alpha3": "COM",
      "code": "174",
      "name": "Comoros"
    },
    {
      "alpha2": "CG",
      "alpha3": "COG",
      "code": "178",
      "name": "Congo"
    },
    {
      "alpha2": "CD",
      "alpha3": "COD",
      "code": "180",
      "name": "Congo, the Democratic Republic of the"
    },
    {
      "alpha2": "CI",
      "alpha3": "CIV",
      "code": "384",
      "name": "Cote D'Ivoire"
    },
    {
      "alpha2": "DJ",
      "alpha3": "DJI",
      "code": "262",
      "name": "Djibouti"
    },
    {
      "alpha2": "EG",
      "alpha3": "EGY",
      "code": "818",
      "name": "Egypt"
    },
    {
      "alpha2": "GQ",
      "alpha3": "GNQ",
      "code": "226",
      "name": "Equatorial Guinea"
    },
    {
      "alpha2": "ER",
      "alpha3": "ERI",
      "code": "232",
      "name": "Eritrea"
    },
    {
      "alpha2": "ET",
      "alpha3": "ETH",
      "code": "231",
      "name": "Ethiopia"
    },
    {
      "alpha2": "GA",
      "alpha3": "GAB",
      "code": "266",
      "name": "Gabon"
    },
    {
      "alpha2": "GM",
      "alpha3": "GMB",
      "code": "270",
      "name": "Gambia"
    },
    {
      "alpha2": "GH",
      "alpha3": "GHA",
      "code": "288",
      "name": "Ghana"
    },
    {
      "alpha2": "GN",
      "alpha3": "GIN",
      "code": "324",
      "name": "Guinea"
    },
    {
      "alpha2": "GW",
      "alpha3": "GNB",
      "code": "624",
      "name": "Guinea-Bissau"
    },
    {
      "alpha2": "KE",
      "alpha3": "KEN",
      "code": "404",
      "name": "Kenya"
    },
    {
      "alpha2": "LS",
      "alpha3": "LSO",
      "code": "426",
      "name": "Lesotho"
    },
    {
      "alpha2": "LR",
      "alpha3": "LBR",
      "code": "430",
      "name": "Liberia"
    },
    {
      "alpha2": "LY",
      "alpha3": "LBY",
      "code": "434",
      "name": "Libyan Arab Jamahiriya"
    },
    {
      "alpha2": "MG",
      "alpha3": "MDG",
      "code": "450",
      "name": "Madagascar"
    },
    {
      "alpha2": "MW",
      "alpha3": "MWI",
      "code": "454",
      "name": "Malawi"
    },
    {
      "alpha2": "ML",
      "alpha3": "MLI",
      "code": "466",
      "name": "Mali"
    },
    {
      "alpha2": "MR",
      "alpha3": "MRT",
      "code": "478",
      "name": "Mauritania"
    },
    {
      "alpha2": "MU",
      "alpha3": "MUS",
      "code": "480",
      "name": "Mauritius"
    },
    {
      "alpha2": "YT",
      "alpha3": "MYT",
      "code": "175",
      "name": "Mayotte"
    },
    {
      "alpha2": "MA",
      "alpha3": "MAR",
      "code": "504",
      "name": "Morocco"
    },
    {
      "alpha2": "MZ",
      "alpha3": "MOZ",
      "code": "508",
      "name": "Mozambique"
    },
    {
      "alpha2": "NA",
      "alpha3": "NAM",
      "code": "516",
      "name": "Namibia"
    },
    {
      "alpha2": "NE",
      "alpha3": "NER",
      "code": "562",
      "name": "Niger"
    },
    {
      "alpha2": "NG",
      "alpha3": "NGA",
      "code": "566",
      "name": "Nigeria"
    },
    {
      "alpha2": "RE",
      "alpha3": "REU",
      "code": "638",
      "name": "Reunion"
    },
    {
      "alpha2": "RW",
      "alpha3": "RWA",
      "code": "646",
      "name": "Rwanda"
    },
    {
      "alpha2": "SH",
      "alpha3": "SHN",
      "code": "654",
      "name": "Saint Helena"
    },
    {
      "alpha2": "ST",
      "alpha3": "STP",
      "code": "678",
      "name": "Sao Tome and Principe"
    },
    {
      "alpha2": "SN",
      "alpha3": "SEN",
      "code": "686",
      "name": "Senegal"
    },
    {
      "alpha2": "SC",
      "alpha3": "SYC",
      "code": "690",
      "name": "Seychelles"
    },
    {
      "alpha2": "SL",
      "alpha3": "SLE",
      "code": "694",
      "name": "Sierra Leone"
    },
    {
      "alpha2": "SO",
      "alpha3": "SOM",
      "code": "706",
      "name": "Somalia"
    },
    {
      "alpha2": "ZA",
      "alpha3": "ZAF",
      "code": "710",
      "name": "South Africa"
    },
    {
      "alpha2": "SS",
      "alpha3": "SSD",
      "code": "728",
      "name": "South Sudan"
    },
    {
      "alpha2": "SD",
      "alpha3": "SDN",
      "code": "729",
      "name": "Sudan"
    },
    {
      "alpha2": "SZ",
      "alpha3": "SWZ",
      "code": "748",
      "name": "Swaziland"
    },
    {
      "alpha2": "TZ",
      "alpha3": "TZA",
      "code": "834",
      "name": "Tanzania, United Republic of"
    },
    {
      "alpha2": "TG",
      "alpha3": "TGO",
      "code": "768",
      "name": "Togo"
    },
    {
      "alpha2": "TN",
      "alpha3": "TUN",
      "code": "788",
      "name": "Tunisia"
    },
    {
      "alpha2": "UG",
      "alpha3": "UGA",
      "code": "800",
      "name": "Uganda"
    },
    {
      "alpha2": "EH",
      "alpha3": "ESH",
      "code": "732",
      "name": "Western Sahara"
    },
    {
      "alpha2": "ZM",
      "alpha3": "ZMB",
      "code": "894",
      "name": "Zambia"
    },
    {
      "alpha2": "ZW",
      "alpha3": "ZWE",
      "code": "716",
      "name": "Zimbabwe"
    },
    {
      "alpha2": "AF",
      "alpha3": "AFG",
      "code": "004",
      "name": "Afghanistan"
    },
    {
      "alpha2": "AM",
      "alpha3": "ARM",
      "code": "051",
      "name": "Armenia"
    },
    {
      "alpha2": "AZ",
      "alpha3": "AZE",
      "code": "031",
      "name": "Azerbaijan"
    },
    {
      "alpha2": "BH",
      "alpha3": "BHR",
      "code": "048",
      "name": "Bahrain"
    },
    {
      "alpha2": "BD",
      "alpha3": "BGD",
      "code": "050",
      "name": "Bangladesh"
    },
    {
      "alpha2": "BT",
      "alpha3": "BTN",
      "code": "064",
      "name": "Bhutan"
    },
    {
      "alpha2": "IO",
      "alpha3": "IOT",
      "code": "086",
      "name": "British Indian Ocean Territory"
    },
    {
      "alpha2": "BN",
      "alpha3": "BRN",
      "code": "096",
      "name": "Brunei Darussalam"
    },
    {
      "alpha2": "KH",
      "alpha3": "KHM",
      "code": "116",
      "name": "Cambodia"
    },
    {
      "alpha2": "CN",
      "alpha3": "CHN",
      "code": "156",
      "name": "China"
    },
    {
      "alpha2": "CX",
      "alpha3": "CXR",
      "code": "162",
      "name": "Christmas Island"
    },
    {
      "alpha2": "CC",
      "alpha3": "CCK",
      "code": "166",
      "name": "Cocos (Keeling) Islands"
    },
    {
      "alpha2": "GE",
      "alpha3": "GEO",
      "code": "268",
      "name": "Georgia"
    },
    {
      "alpha2": "HK",
      "alpha3": "HKG",
      "code": "344",
      "name": "Hong Kong"
    },
    {
      "alpha2": "IN",
      "alpha3": "IND",
      "code": "356",
      "name": "India"
    },
    {
      "alpha2": "ID",
      "alpha3": "IDN",
      "code": "360",
      "name": "Indonesia"
    },
    {
      "alpha2": "IR",
      "alpha3": "IRN",
      "code": "364",
      "name": "Iran, Islamic Republic of"
    },
    {
      "alpha2": "IQ",
      "alpha3": "IRQ",
      "code": "368",
      "name": "Iraq"
    },
    {
      "alpha2": "JP",
      "alpha3": "JPN",
      "code": "392",
      "name": "Japan"
    },
    {
      "alpha2": "JO",
      "alpha3": "JOR",
      "code": "400",
      "name": "Jordan"
    },
    {
      "alpha2": "KZ",
      "alpha3": "KAZ",
      "code": "398",
      "name": "Kazakhstan"
    },
    {
      "alpha2": "KP",
      "alpha3": "PRK",
      "code": "408",
      "name": "North Korea"
    },
    {
      "alpha2": "KR",
      "alpha3": "KOR",
      "code": "410",
      "name": "South Korea"
    },
    {
      "alpha2": "KW",
      "alpha3": "KWT",
      "code": "414",
      "name": "Kuwait"
    },
    {
      "alpha2": "KG",
      "alpha3": "KGZ",
      "code": "417",
      "name": "Kyrgyzstan"
    },
    {
      "alpha2": "LB",
      "alpha3": "LBN",
      "code": "422",
      "name": "Lebanon"
    },
    {
      "alpha2": "MO",
      "alpha3": "MAC",
      "code": "446",
      "name": "Macao"
    },
    {
      "alpha2": "MY",
      "alpha3": "MYS",
      "code": "458",
      "name": "Malaysia"
    },
    {
      "alpha2": "MV",
      "alpha3": "MDV",
      "code": "462",
      "name": "Maldives"
    },
    {
      "alpha2": "MN",
      "alpha3": "MNG",
      "code": "496",
      "name": "Mongolia"
    },
    {
      "alpha2": "MM",
      "alpha3": "MMR",
      "code": "104",
      "name": "Myanmar"
    },
    {
      "alpha2": "NP",
      "alpha3": "NPL",
      "code": "524",
      "name": "Nepal"
    },
    {
      "alpha2": "OM",
      "alpha3": "OMN",
      "code": "512",
      "name": "Oman"
    },
    {
      "alpha2": "PK",
      "alpha3": "PAK",
      "code": "586",
      "name": "Pakistan"
    },
    {
      "alpha2": "PS",
      "alpha3": "PSE",
      "code": "275",
      "name": "Palestinian Territory, Occupied"
    },
    {
      "alpha2": "PH",
      "alpha3": "PHL",
      "code": "608",
      "name": "Philippines"
    },
    {
      "alpha2": "QA",
      "alpha3": "QAT",
      "code": "634",
      "name": "Qatar"
    },
    {
      "alpha2": "SA",
      "alpha3": "SAU",
      "code": "682",
      "name": "Saudi Arabia"
    },
    {
      "alpha2": "SG",
      "alpha3": "SGP",
      "code": "702",
      "name": "Singapore"
    },
    {
      "alpha2": "LK",
      "alpha3": "LKA",
      "code": "144",
      "name": "Sri Lanka"
    },
    {
      "alpha2": "SY",
      "alpha3": "SYR",
      "code": "760",
      "name": "Syrian Arab Republic"
    },
    {
      "alpha2": "TW",
      "alpha3": "TWN",
      "code": "158",
      "name": "Taiwan"
    },
    {
      "alpha2": "TJ",
      "alpha3": "TJK",
      "code": "762",
      "name": "Tajikistan"
    },
    {
      "alpha2": "TH",
      "alpha3": "THA",
      "code": "764",
      "name": "Thailand"
    },
    {
      "alpha2": "TR",
      "alpha3": "TUR",
      "code": "792",
      "name": "Turkey"
    },
    {
      "alpha2": "TM",
      "alpha3": "TKM",
      "code": "795",
      "name": "Turkmenistan"
    },
    {
      "alpha2": "AE",
      "alpha3": "ARE",
      "code": "784",
      "name": "United Arab Emirates"
    },
    {
      "alpha2": "UZ",
      "alpha3": "UZB",
      "code": "860",
      "name": "Uzbekistan"
    },
    {
      "alpha2": "VN",
      "alpha3": "VNM",
      "code": "704",
      "name": "Viet Nam"
    },
    {
      "alpha2": "YE",
      "alpha3": "YEM",
      "code": "887",
      "name": "Yemen"
    },
    {
      "alpha2": "AX",
      "alpha3": "ALA",
      "code": "248",
      "name": "Åland Islands"
    },
    {
      "alpha2": "AL",
      "alpha3": "ALB",
      "code": "008",
      "name": "Albania"
    },
    {
      "alpha2": "AD",
      "alpha3": "AND",
      "code": "020",
      "name": "Andorra"
    },
    {
      "alpha2": "AT",
      "alpha3": "AUT",
      "code": "040",
      "name": "Austria"
    },
    {
      "alpha2": "BY",
      "alpha3": "BLR",
      "code": "112",
      "name": "Belarus"
    },
    {
      "alpha2": "BE",
      "alpha3": "BEL",
      "code": "056",
      "name": "Belgium"
    },
    {
      "alpha2": "BA",
      "alpha3": "BIH",
      "code": "070",
      "name": "Bosnia and Herzegovina"
    },
    {
      "alpha2": "BG",
      "alpha3": "BGR",
      "code": "100",
      "name": "Bulgaria"
    },
    {
      "alpha2": "HR",
      "alpha3": "HRV",
      "code": "191",
      "name": "Croatia"
    },
    {
      "alpha2": "CY",
      "alpha3": "CYP",
      "code": "196",
      "name": "Cyprus"
    },
    {
      "alpha2": "CZ",
      "alpha3": "CZE",
      "code": "203",
      "name": "Czech Republic"
    },
    {
      "alpha2": "DK",
      "alpha3": "DNK",
      "code": "208",
      "name": "Denmark"
    },
    {
      "alpha2": "EE",
      "alpha3": "EST",
      "code": "233",
      "name": "Estonia"
    },
    {
      "alpha2": "FO",
      "alpha3": "FRO",
      "code": "234",
      "name": "Faroe Islands"
    },
    {
      "alpha2": "FI",
      "alpha3": "FIN",
      "code": "246",
      "name": "Finland"
    },
    {
      "alpha2": "FR",
      "alpha3": "FRA",
      "code": "250",
      "name": "France"
    },
    {
      "alpha2": "GE",
      "alpha3": "GEO",
      "code": "268",
      "name": "Georgia"
    },
    {
      "alpha2": "DE",
      "alpha3": "DEU",
      "code": "276",
      "name": "Germany"
    },
    {
      "alpha2": "GI",
      "alpha3": "GIB",
      "code": "292",
      "name": "Gibraltar"
    },
    {
      "alpha2": "GR",
      "alpha3": "GRC",
      "code": "300",
      "name": "Greece"
    },
    {
      "alpha2": "VA",
      "alpha3": "VAT",
      "code": "336",
      "name": "Holy See (Vatican City State)"
    },
    {
      "alpha2": "HU",
      "alpha3": "HUN",
      "code": "348",
      "name": "Hungary"
    },
    {
      "alpha2": "IS",
      "alpha3": "ISL",
      "code": "352",
      "name": "Iceland"
    },
    {
      "alpha2": "IE",
      "alpha3": "IRL",
      "code": "372",
      "name": "Ireland"
    },
    {
      "alpha2": "IL",
      "alpha3": "ISR",
      "code": "376",
      "name": "Israel"
    },
    {
      "alpha2": "IT",
      "alpha3": "ITA",
      "code": "380",
      "name": "Italy"
    },
    {
      "alpha2": "LV",
      "alpha3": "LVA",
      "code": "428",
      "name": "Latvia"
    },
    {
      "alpha2": "LI",
      "alpha3": "LIE",
      "code": "438",
      "name": "Liechtenstein"
    },
    {
      "alpha2": "LT",
      "alpha3": "LTU",
      "code": "440",
      "name": "Lithuania"
    },
    {
      "alpha2": "LU",
      "alpha3": "LUX",
      "code": "442",
      "name": "Luxembourg"
    },
    {
      "alpha2": "MK",
      "alpha3": "MKD",
      "code": "807",
      "name": "Macedonia, the Former Yugoslav Republic of"
    },
    {
      "alpha2": "MT",
      "alpha3": "MLT",
      "code": "470",
      "name": "Malta"
    },
    {
      "alpha2": "MD",
      "alpha3": "MDA",
      "code": "498",
      "name": "Moldova, Republic of"
    },
    {
      "alpha2": "MC",
      "alpha3": "MCO",
      "code": "492",
      "name": "Monaco"
    },
    {
      "alpha2": "ME",
      "alpha3": "MNE",
      "code": "499",
      "name": "Montenegro"
    },
    {
      "alpha2": "NL",
      "alpha3": "NLD",
      "code": "528",
      "name": "Netherlands"
    },
    {
      "alpha2": "NO",
      "alpha3": "NOR",
      "code": "578",
      "name": "Norway"
    },
    {
      "alpha2": "PL",
      "alpha3": "POL",
      "code": "616",
      "name": "Poland"
    },
    {
      "alpha2": "PT",
      "alpha3": "PRT",
      "code": "620",
      "name": "Portugal"
    },
    {
      "alpha2": "RO",
      "alpha3": "ROU",
      "code": "642",
      "name": "Romania"
    },
    {
      "alpha2": "RU",
      "alpha3": "RUS",
      "code": "643",
      "name": "Russian Federation"
    },
    {
      "alpha2": "SM",
      "alpha3": "SMR",
      "code": "674",
      "name": "San Marino"
    },
    {
      "alpha2": "RS",
      "alpha3": "SRB",
      "code": "688",
      "name": "Serbia"
    },
    {
      "alpha2": "SK",
      "alpha3": "SVK",
      "code": "703",
      "name": "Slovakia"
    },
    {
      "alpha2": "SI",
      "alpha3": "SVN",
      "code": "705",
      "name": "Slovenia"
    },
    {
      "alpha2": "ES",
      "alpha3": "ESP",
      "code": "724",
      "name": "Spain"
    },
    {
      "alpha2": "SE",
      "alpha3": "SWE",
      "code": "752",
      "name": "Sweden"
    },
    {
      "alpha2": "CH",
      "alpha3": "CHE",
      "code": "756",
      "name": "Switzerland"
    },
    {
      "alpha2": "TR",
      "alpha3": "TUR",
      "code": "792",
      "name": "Turkey"
    },
    {
      "alpha2": "UA",
      "alpha3": "UKR",
      "code": "804",
      "name": "Ukraine"
    },
    {
      "alpha2": "GB",
      "alpha3": "GBR",
      "code": "826",
      "name": "United Kingdom"
    },
    {
      "alpha2": "AI",
      "alpha3": "AIA",
      "code": "660",
      "name": "Anguilla"
    },
    {
      "alpha2": "AG",
      "alpha3": "ATG",
      "code": "028",
      "name": "Antigua and Barbuda"
    },
    {
      "alpha2": "AW",
      "alpha3": "ABW",
      "code": "533",
      "name": "Aruba"
    },
    {
      "alpha2": "BS",
      "alpha3": "BHS",
      "code": "044",
      "name": "Bahamas"
    },
    {
      "alpha2": "BB",
      "alpha3": "BRB",
      "code": "052",
      "name": "Barbados"
    },
    {
      "alpha2": "BZ",
      "alpha3": "BLZ",
      "code": "084",
      "name": "Belize"
    },
    {
      "alpha2": "BM",
      "alpha3": "BMU",
      "code": "060",
      "name": "Bermuda"
    },
    {
      "alpha2": "VG",
      "alpha3": "VGB",
      "code": "092",
      "name": "Virgin Islands, British"
    },
    {
      "alpha2": "CA",
      "alpha3": "CAN",
      "code": "124",
      "name": "Canada"
    },
    {
      "alpha2": "KY",
      "alpha3": "CYM",
      "code": "136",
      "name": "Cayman Islands"
    },
    {
      "alpha2": "CR",
      "alpha3": "CRI",
      "code": "188",
      "name": "Costa Rica"
    },
    {
      "alpha2": "CU",
      "alpha3": "CUB",
      "code": "192",
      "name": "Cuba"
    },
    {
      "alpha2": "DM",
      "alpha3": "DMA",
      "code": "212",
      "name": "Dominica"
    },
    {
      "alpha2": "DO",
      "alpha3": "DOM",
      "code": "214",
      "name": "Dominican Republic"
    },
    {
      "alpha2": "SV",
      "alpha3": "SLV",
      "code": "222",
      "name": "El Salvador"
    },
    {
      "alpha2": "GL",
      "alpha3": "GRL",
      "code": "304",
      "name": "Greenland"
    },
    {
      "alpha2": "GD",
      "alpha3": "GRD",
      "code": "308",
      "name": "Grenada"
    },
    {
      "alpha2": "GP",
      "alpha3": "GLP",
      "code": "312",
      "name": "Guadeloupe"
    },
    {
      "alpha2": "GT",
      "alpha3": "GTM",
      "code": "320",
      "name": "Guatemala"
    },
    {
      "alpha2": "HT",
      "alpha3": "HTI",
      "code": "332",
      "name": "Haiti"
    },
    {
      "alpha2": "HN",
      "alpha3": "HND",
      "code": "340",
      "name": "Honduras"
    },
    {
      "alpha2": "JM",
      "alpha3": "JAM",
      "code": "388",
      "name": "Jamaica"
    },
    {
      "alpha2": "MQ",
      "alpha3": "MTQ",
      "code": "474",
      "name": "Martinique"
    },
    {
      "alpha2": "MX",
      "alpha3": "MEX",
      "code": "484",
      "name": "Mexico"
    },
    {
      "alpha2": "NI",
      "alpha3": "NIC",
      "code": "558",
      "name": "Nicaragua"
    },
    {
      "alpha2": "PA",
      "alpha3": "PAN",
      "code": "591",
      "name": "Panama"
    },
    {
      "alpha2": "PR",
      "alpha3": "PRI",
      "code": "630",
      "name": "Puerto Rico"
    },
    {
      "alpha2": "KN",
      "alpha3": "KNA",
      "code": "659",
      "name": "Saint Kitts and Nevis"
    },
    {
      "alpha2": "LC",
      "alpha3": "LCA",
      "code": "662",
      "name": "Saint Lucia"
    },
    {
      "alpha2": "PM",
      "alpha3": "SPM",
      "code": "666",
      "name": "Saint Pierre and Miquelon"
    },
    {
      "alpha2": "VC",
      "alpha3": "VCT",
      "code": "670",
      "name": "Saint Vincent and the Grenadines"
    },
    {
      "alpha2": "BL",
      "alpha3": "BLM",
      "code": "652",
      "name": "Saint Barthélemy"
    },
    {
      "alpha2": "TT",
      "alpha3": "TTO",
      "code": "780",
      "name": "Trinidad and Tobago"
    },
    {
      "alpha2": "TC",
      "alpha3": "TCA",
      "code": "796",
      "name": "Turks and Caicos Islands"
    },
    {
      "alpha2": "US",
      "alpha3": "USA",
      "code": "840",
      "name": "United States of America"
    },
    {
      "alpha2": "VI",
      "alpha3": "VIR",
      "code": "850",
      "name": "Virgin Islands, U.S."
    },
    {
      "alpha2": "AS",
      "alpha3": "ASM",
      "code": "016",
      "name": "American Samoa"
    },
    {
      "alpha2": "AU",
      "alpha3": "AUS",
      "code": "036",
      "name": "Australia"
    },
    {
      "alpha2": "CK",
      "alpha3": "COK",
      "code": "184",
      "name": "Cook Islands"
    },
    {
      "alpha2": "FJ",
      "alpha3": "FJI",
      "code": "242",
      "name": "Fiji"
    },
    {
      "alpha2": "PF",
      "alpha3": "PYF",
      "code": "258",
      "name": "French Polynesia"
    },
    {
      "alpha2": "GU",
      "alpha3": "GUM",
      "code": "316",
      "name": "Guam"
    },
    {
      "alpha2": "KI",
      "alpha3": "KIR",
      "code": "296",
      "name": "Kiribati"
    },
    {
      "alpha2": "MH",
      "alpha3": "MHL",
      "code": "584",
      "name": "Marshall Islands"
    },
    {
      "alpha2": "FM",
      "alpha3": "FSM",
      "code": "583",
      "name": "Micronesia, Federated States of"
    },
    {
      "alpha2": "NR",
      "alpha3": "NRU",
      "code": "520",
      "name": "Nauru"
    },
    {
      "alpha2": "NC",
      "alpha3": "NCL",
      "code": "540",
      "name": "New Caledonia"
    },
    {
      "alpha2": "NZ",
      "alpha3": "NZL",
      "code": "554",
      "name": "New Zealand"
    },
    {
      "alpha2": "NU",
      "alpha3": "NIU",
      "code": "570",
      "name": "Niue"
    },
    {
      "alpha2": "NF",
      "alpha3": "NFK",
      "code": "574",
      "name": "Norfolk Island"
    },
    {
      "alpha2": "MP",
      "alpha3": "MNP",
      "code": "580",
      "name": "Northern Mariana Islands"
    },
    {
      "alpha2": "PW",
      "alpha3": "PLW",
      "code": "585",
      "name": "Palau"
    },
    {
      "alpha2": "PG",
      "alpha3": "PNG",
      "code": "598",
      "name": "Papua New Guinea"
    },
    {
      "alpha2": "PN",
      "alpha3": "PCN",
      "code": "612",
      "name": "Pitcairn"
    },
    {
      "alpha2": "WS",
      "alpha3": "WSM",
      "code": "882",
      "name": "Samoa"
    },
    {
      "alpha2": "SB",
      "alpha3": "SLB",
      "code": "090",
      "name": "Solomon Islands"
    },
    {
      "alpha2": "TL",
      "alpha3": "TLS",
      "code": "626",
      "name": "Timor-Leste"
    },
    {
      "alpha2": "TO",
      "alpha3": "TON",
      "code": "776",
      "name": "Tonga"
    },
    {
      "alpha2": "VU",
      "alpha3": "VUT",
      "code": "548",
      "name": "Vanuatu"
    },
    {
      "alpha2": "AR",
      "alpha3": "ARG",
      "code": "032",
      "name": "Argentina"
    },
    {
      "alpha2": "BO",
      "alpha3": "BOL",
      "code": "068",
      "name": "Bolivia"
    },
    {
      "alpha2": "BR",
      "alpha3": "BRA",
      "code": "076",
      "name": "Brazil"
    },
    {
      "alpha2": "CL",
      "alpha3": "CHL",
      "code": "152",
      "name": "Chile"
    },
    {
      "alpha2": "CO",
      "alpha3": "COL",
      "code": "170",
      "name": "Colombia"
    },
    {
      "alpha2": "EC",
      "alpha3": "ECU",
      "code": "218",
      "name": "Ecuador"
    },
    {
      "alpha2": "FK",
      "alpha3": "FLK",
      "code": "238",
      "name": "Falkland Islands (Malvinas)"
    },
    {
      "alpha2": "GF",
      "alpha3": "GUF",
      "code": "254",
      "name": "French Guiana"
    },
    {
      "alpha2": "GY",
      "alpha3": "GUY",
      "code": "328",
      "name": "Guyana"
    },
    {
      "alpha2": "PY",
      "alpha3": "PRY",
      "code": "600",
      "name": "Paraguay"
    },
    {
      "alpha2": "PE",
      "alpha3": "PER",
      "code": "604",
      "name": "Peru"
    },
    {
      "alpha2": "UY",
      "alpha3": "URY",
      "code": "858",
      "name": "Uruguay"
    },
    {
      "alpha2": "VE",
      "alpha3": "VEN",
      "code": "862",
      "name": "Venezuela"
    }
  ];

  useEffect(() => {
    onCountryChange(countries.find(country => country.alpha2 == 'UY'));
    setCourtPosition({ name: 'Delantero', code: 'Forward' })
  }, [])

  const onCountryChange = (e: any) => {
    setCountry(e);
  }

  const selectedCountryTemplate = (option: any) => {
    if (option) {
      return (
        <div className="flex gap-2">
          <img alt={option.name} src={`assets/flags/${option.alpha2.toLowerCase()}.svg`} className='w-6' draggable={false} />
          <div className='font-normal text-md leading-normal text-[#495057]'>{option.name}</div>
        </div>
      );
    }
  }

  const countryOptionTemplate = (option: any) => {
    return (
      <div className="flex gap-2">
        <img alt={option.name} src={`assets/flags/${option.alpha2.toLowerCase()}.svg`} className='w-6' draggable={false} />
        <div className='font-medium text-sm'>{option.name}</div>
      </div>
    );
  }

  const selectedCourtPositionTemplate = (option: any) => {
    if (option) {
      return (
        <div className="flex gap-3 items-center">
          <img alt={option.name} src={`assets/field/${option.code.toLowerCase()}.png`} className='w-5 rotate-90' draggable={false} />
          <div className='font-normal text-md leading-normal text-[#495057]'>{option.name}</div>
        </div>
      );
    }
  }

  const courtPositionOptionTemplate = (option: any) => {
    return (
      <div className="flex gap-3 items-center">
        <img alt={option.name} src={`assets/field/${option.code.toLowerCase()}.png`} className='w-5 rotate-90' draggable={false} />
        <div className='font-medium text-sm'>{option.name}</div>
      </div>
    );
  }

  const onImageSelected = (image: any) => {
    setSelectedImage(image);
    setPhotoHorizontalPosition(0);
    setPhotoVerticalPosition(0);
  }

  const courtPositions = [
    { name: 'Golero', code: 'Goalkeeper' },
    { name: 'Defensa', code: 'Defender' },
    { name: 'Mediocampista', code: 'Midfielder' },
    { name: 'Delantero', code: 'Forward' }
  ];

  const stickerVariants = [
    { name: 'orange', code: 'orange' },
    { name: 'blue', code: 'blue' },
  ];

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex rounded-lg shadow-lg border-2">
        <div className="w-96 text-center p-4 border-r-2">
          <h1 className="text-center font-semibold text-xl pb-2">Ajustes</h1>
          <hr />
          <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
            <TabPanel header="Datos">
              <div className="flex flex-col gap-2 mt-2">
                <div className="flex flex-col gap-2">
                  <label className="text-left font-semibold text-sm">Nombre</label>
                  <input value={name} onChange={(e) => setName(e.target.value.toUpperCase())} placeholder="Lionel Messi" className="bg-[#f8f9fa] p-2 rounded-lg" />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-left font-semibold text-sm">Fecha de nacimiento</label>
                  <InputMask mask="99/99/9999" placeholder="24/06/1987" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.value)} className="bg-[#f8f9fa] p-2 rounded-lg border-none"></InputMask>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-left font-semibold text-sm">País</label>
                  <Dropdown emptyFilterMessage='No se encontró un país con ese nombre' placeholder="Selecciona un país" resetFilterOnHide showFilterClear className='w-100 flex items-center rounded-lg border-none bg-[#f8f9fa] active:!shadow-none h-10' value={country} options={countries} onChange={(e: any) => onCountryChange(e.value)} optionLabel="name" filter filterBy="name"
                    valueTemplate={selectedCountryTemplate} itemTemplate={countryOptionTemplate} />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-left font-semibold text-sm">Debut en la selección</label>
                  <InputMask mask="9999" placeholder="2005" value={nationalTeamDebutDate} onChange={(e) => setNationalTeamDebutDate(e.value)} className="bg-[#f8f9fa] p-2 rounded-lg border-none"></InputMask>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-left font-semibold text-sm">Altura</label>
                  <InputMask mask="9,99" placeholder="1,70" value={height} onChange={(e) => setHeight(e.value)} className="bg-[#f8f9fa] p-2 rounded-lg border-none"></InputMask>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-left font-semibold text-sm">Peso</label>
                  <InputMask mask="99?9" placeholder="72" value={weight} onChange={(e) => setWeight(e.value)} className="bg-[#f8f9fa] p-2 rounded-lg border-none"></InputMask>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-left font-semibold text-sm">Posición en la cancha</label>
                  <Dropdown value={courtPosition} options={courtPositions} onChange={(e) => setCourtPosition(e.value)} optionLabel="name" className='w-100 flex items-center rounded-lg border-none bg-[#f8f9fa] active:!shadow-none h-10 text-left' placeholder="Selecciona una posición"
                    valueTemplate={selectedCourtPositionTemplate} itemTemplate={courtPositionOptionTemplate} />
                </div>
              </div>
            </TabPanel>
            <TabPanel header="Imagen">
              <div className="w-full flex flex-col gap-2">
                <div className="w-full flex gap-2 mt-2">
                  <div className="primary-button" style={{ 'maxWidth': '85%' }}>
                    <div className="flex items-center text-white font-semibold justify-center" style={{ 'width': 'inherit' }}>
                      <span className={selectedImage && 'selected-image-name'}>{selectedImage ? selectedImage.name : 'Subir imagen'}</span>
                    </div>
                    <input className="fileInput" type="file" onChange={(event) => {
                      event!.target!.files![0] && onImageSelected(event!.target!.files![0]);
                    }} />
                  </div>
                  <Button icon="pi pi-times" disabled={!selectedImage} className="remove-button" onClick={() => setSelectedImage(null)} />
                </div>
                {selectedImage && (
                  <>
                    <div className="mt-3">
                      <div className="flex flex-col gap-1">
                        <div className="flex justify-between">
                          <label className="text-left font-semibold text-sm">Posición horizontal</label>
                          <label className="text-left text-sm text-[#7a1d32] font-bold">{photoHorizontalPosition}px</label>
                        </div>
                        <div className='bg-[#f8f9fa] p-2 rounded-lg'>
                          <Slider value={photoHorizontalPosition} style={{ 'width': '100%', 'marginTop': '0.5rem', 'marginBottom': '0.5rem' }} onChange={(e) => setPhotoHorizontalPosition(e.value)} min={-30} max={30} />
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex flex-col gap-1">
                        <div className="flex justify-between">
                          <label className="text-left font-semibold text-sm">Posición vertical</label>
                          <label className="text-left text-sm text-[#7a1d32] font-bold">{photoVerticalPosition}px</label>
                        </div>
                        <div className='bg-[#f8f9fa] p-2 rounded-lg'>
                          <Slider value={photoVerticalPosition} style={{ 'width': '100%', 'marginTop': '0.5rem', 'marginBottom': '0.5rem' }} onChange={(e) => setPhotoVerticalPosition(e.value)} min={-30} max={30} />
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex flex-col gap-1">
                        <div className="flex justify-between">
                          <label className="text-left font-semibold text-sm">Ancho</label>
                          <label className="text-left text-sm text-[#7a1d32] font-bold">{photoWidth}px</label>
                        </div>
                        <div className='bg-[#f8f9fa] p-2 rounded-lg'>
                          <Slider value={photoWidth} style={{ 'width': '100%', 'marginTop': '0.5rem', 'marginBottom': '0.5rem' }} onChange={(e) => setPhotoWidth(e.value)} min={340} max={400} />
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex flex-col gap-1">
                        <div className="flex justify-between">
                          <label className="text-left font-semibold text-sm">Largo</label>
                          <label className="text-left text-sm text-[#7a1d32] font-bold">{photoHeight}px</label>
                        </div>
                        <div className='bg-[#f8f9fa] p-2 rounded-lg'>
                          <Slider value={photoHeight} style={{ 'width': '100%', 'marginTop': '0.5rem', 'marginBottom': '0.5rem' }} onChange={(e) => setPhotoHeight(e.value)} min={390} max={450} />
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </TabPanel>
            <TabPanel header="Figurita">
              <div className="w-full flex flex-col gap-2 mt-3">
                <div className="flex flex-col gap-1">
                  <label className="text-left font-semibold text-sm">Color de fondo</label>
                  <div className='w-100 flex items-center rounded-lg border-none bg-[#f8f9fa] active:!shadow-none h-10 px-4'>
                    <div className="flex gap-2 items-center">
                      <div className="w-6 h-6 rounded-full cursor-pointer" onClick={() => setStickerVariant('orange')} style={{ 'background': 'linear-gradient(0deg, rgba(234,134,45,1) 2%, rgba(222,80,42,1) 50%, rgba(234,134,45,1) 98%)', 'border': '1px solid #7a1d32' }}></div>
                      <div className="w-6 h-6 rounded-full cursor-pointer" onClick={() => setStickerVariant('blue')} style={{ 'background': 'linear-gradient(0deg, rgba(90,172,183,1) 2%, rgba(104,94,165,1) 50%, rgba(90,172,183,1) 98%)', 'border': '1px solid #7a1d32' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
          </TabView>
        </div>
        <div className="text-center p-4">
          <h1 className="text-center font-semibold text-xl pb-2">Previsualización</h1>
          <hr />
          <div className="flex flex-col justify-center items-center bg-red h-full -mt-7">
            <div className="shadow-lg w-full p-5 relative mt-6" id="div-to-download" style={{ 'background': stickerVariant == 'orange' ? 'linear-gradient(0deg, rgba(234,134,45,1) 2%, rgba(222,80,42,1) 50%, rgba(234,134,45,1) 98%)' : 'linear-gradient(0deg, rgba(90,172,183,1) 2%, rgba(104,94,165,1) 50%, rgba(90,172,183,1) 98%)', 'minHeight': '33rem', 'width': '26rem' }}>
              <div className="flex justify-between">
                <div>
                  <img alt="logo-qatar" src={`assets/qatar-logo.png`} style={{ 'width': '6rem' }} draggable={false} />
                  {courtPosition && (
                    <div className="h-8 flex justify-center items-center mt-[1.7rem]">
                      <img alt='height' src={`assets/field/${courtPosition.code}.png`} className='w-12' draggable={false} />
                    </div>
                  )}
                </div>
                <div>
                  {country && (
                    <div className="bg-white" style={{ 'minWidth': '4.5rem' }}>
                      <h6 className="font-extrabold text-[#7a1d32]" style={{ 'fontSize': '1.2rem', 'lineHeight': '0.9' }}>{country.alpha3}</h6>
                      <img alt={country.name} src={`assets/flags/${country.alpha2?.toLowerCase()}.svg`} className='w-100' style={{ 'padding': '0.1rem' }} draggable={false} />
                    </div>
                  )}
                  <h6 className="font-bold text-white mt-1">{nationalTeamDebutDate}</h6>
                  <div className="flex gap-2 mt-4">
                    {height && (
                      <div className="flex flex-col items-center">
                        <div className="h-8">
                          <img alt='height' src={`assets/height.png`} className='w-8' style={{ 'filter': 'invert(1)' }} draggable={false} />
                        </div>
                        <h6 className="font-bold text-white">{height}</h6>
                      </div>
                    )}
                    {weight && (
                      <div className="flex flex-col items-center">
                        <div className="h-8">
                          <img alt='height' src={`assets/weight.png`} className='w-6' style={{ 'filter': 'invert(1)', 'marginTop': '0.2rem' }} draggable={false} />
                        </div>
                        <h6 className="font-bold text-white">{weight}</h6>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {selectedImage && (
                <div style={{ 'width': '200px', 'height': '200px', 'marginBottom': '-1.5rem' }}>
                  <div className="absolute top-14 left-6">
                    <img src={selectedImage && URL.createObjectURL(selectedImage)} style={{ 'clipPath': 'polygon(8% 54%, 33% 27%, 33% 0, 68% 0, 68% 27%, 93% 54%, 93% 96%, 8% 96%)', 'width': photoWidth, 'maxWidth': photoWidth, 'height': photoHeight, 'filter': 'drop-shadow(-5px -1px 0 #e8e2d2) drop-shadow(6px -1px 0 #e8e2d2)', 'marginLeft': photoHorizontalPosition, 'marginTop': photoVerticalPosition, 'padding': '2rem' }}></img>
                  </div>
                </div>
              )}
              <div className="flex flex-col gap-2 absolute bottom-6 left-0 right-0 ml-auto mr-auto pl-12 pr-12">
                {name && (
                  <div className="bg-[#e8e2d2] relative">
                    <div className="bg-[#e8e2d2] w-2 h-5 absolute" style={{ 'top': '0.6rem', 'left': '-0.5rem' }}></div>
                    <div className="bg-[#e8e2d2] w-7 h-2 absolute" style={{ 'top': '0.95rem', 'left': '-1.5rem' }}></div>
                    <div className="bg-[#e8e2d2] w-2 absolute" style={{ 'top': '0.15rem', 'left': '-1.1rem', 'height': '0.40rem', 'width': '0.40rem' }}></div>
                    <div className="bg-[#e8e2d2] w-2 absolute" style={{ 'top': '1.9rem', 'left': '-1.1rem', 'height': '0.40rem', 'width': '0.40rem' }}></div>
                    <h6 className="text-3xl font-extrabold text-[#7a1d32]" style={{ 'boxShadow': '0px 8px 3px 0px', 'lineHeight': '1.3' }}>{name}</h6>
                    <div className="bg-[#e8e2d2] w-2 h-5 absolute" style={{ 'top': '0.6rem', 'right': '-0.5rem' }}></div>
                    <div className="bg-[#e8e2d2] w-7 h-2 absolute" style={{ 'top': '0.95rem', 'right': '-1.5rem' }}></div>
                    <div className="bg-[#e8e2d2] w-2 absolute" style={{ 'top': '0.15rem', 'right': '-1.1rem', 'height': '0.40rem', 'width': '0.40rem' }}></div>
                    <div className="bg-[#e8e2d2] w-2 absolute" style={{ 'top': '1.9rem', 'right': '-1.1rem', 'height': '0.40rem', 'width': '0.40rem' }}></div>
                  </div>
                )}
                {dateOfBirth && (
                  <div className="flex justify-center items-center -mt-2">
                    <div className="bg-[#7a1d32] w-fit px-5 relative">
                      <div className="bg-[#7a1d32] w-3 h-2 absolute" style={{ 'top': '0.6rem', 'left': '-0.7rem' }}></div>
                      <h6 className="font-bold text-sm py-1 text-[#e8e2d2]">{dateOfBirth}</h6>
                      <div className="bg-[#7a1d32] w-3 h-2 absolute" style={{ 'top': '0.6rem', 'right': '-0.7rem' }}></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="w-full">
              <Button label="Descargar figurita" icon="pi pi-download" className="primary-button" onClick={() => { saveAsPng(contentToDownload, { filename: 'Figurita', printDate: false }); }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
