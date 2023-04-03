<?php

namespace Database\Seeders;

use App\Models\Province;
use Illuminate\Database\Seeder;

class ProvinceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $provinces = [
            [
                "name" => "Chachapoyas",
                "department_id" => 1
            ],
            [
                "name" => "Bagua",
                "department_id" => 1
            ],
            [
                "name" => "Bongara",
                "department_id" => 1
            ],
            [
                "name" => "Condorcanqui",
                "department_id" => 1
            ],
            [
                "name" => "Luya",
                "department_id" => 1
            ],
            [
                "name" => "Rodr" . $this->Utf8_ansi("\u00ed") . "guez de Mendoza",
                "department_id" => 1
            ],
            [
                "name" => "Utcubamba",
                "department_id" => 1
            ],
            [
                "name" => "Huaraz",
                "department_id" => 2
            ],
            [
                "name" => "Aija",
                "department_id" => 2
            ],
            [
                "name" => "Antonio Raymondi",
                "department_id" => 2
            ],
            [
                "name" => "Asunci" . $this->Utf8_ansi("\u00f3") . "n",
                "department_id" => 2
            ],
            [
                "name" => "Bolognesi",
                "department_id" => 2
            ],
            [
                "name" => "Carhuaz",
                "department_id" => 2
            ],
            [
                "name" => "Carlos Ferm" . $this->Utf8_ansi("\u00ed") . "n Fitzcarrald",
                "department_id" => 2
            ],
            [
                "name" => "Casma",
                "department_id" => 2
            ],
            [
                "name" => "Corongo",
                "department_id" => 2
            ],
            [
                "name" => "Huari",
                "department_id" => 2
            ],
            [
                "name" => "Huarmey",
                "department_id" => 2
            ],
            [
                "name" => "Huaylas",
                "department_id" => 2
            ],
            [
                "name" => "Mariscal Luzuriaga",
                "department_id" => 2
            ],
            [
                "name" => "Ocros",
                "department_id" => 2
            ],
            [
                "name" => "Pallasca",
                "department_id" => 2
            ],
            [
        
                "name" => "Pomabamba",
                "department_id" => 2
            ],
            [
        
                "name" => "Recuay",
                "department_id" => 2
            ],
            [
                "name" => "Santa",
                "department_id" => 2
            ],
            [
                "name" => "Sihuas",
                "department_id" => 2
            ],
            [
                "name" => "Yungay",
                "department_id" => 2
            ],
            [
                "name" => "Abancay",
                "department_id" => 3
            ],
            [
                "name" => "Andahuaylas",
                "department_id" => 3
            ],
            [
                "name" => "Antabamba",
                "department_id" => 3
            ],
            [
                "name" => "Aymaraes",
                "department_id" => 3
            ],
            [
                "name" => "Cotabambas",
                "department_id" => 3
            ],
            [
                "name" => "Chincheros",
                "department_id" => 3
            ],
            [
                "name" => "Grau",
                "department_id" => 3
            ],
            [
                "name" => "Arequipa",
                "department_id" => 4
            ],
            [
                "name" => "Caman" . $this->Utf8_ansi("\u00e1") . "",
                "department_id" => 4
            ],
            [
                "name" => "Caravel" . $this->Utf8_ansi("\u00ed") . "",
                "department_id" => 4
            ],
            [
                "name" => "Castilla",
                "department_id" => 4
            ],
            [
                "name" => "Caylloma",
                "department_id" => 4
            ],
            [
                "name" => "Condesuyos",
                "department_id" => 4
            ],
            [
                "name" => "Islay",
                "department_id" => 4
            ],
            [
                "name" => "La Uni\u00f2n",
                "department_id" => 4
            ],
            [
                "name" => "Huamanga",
                "department_id" => 5
            ],
            [
                "name" => "Cangallo",
                "department_id" => 5
            ],
            [
                "name" => "Huanca Sancos",
                "department_id" => 5
            ],
            [
                "name" => "Huanta",
                "department_id" => 5
            ],
            [
                "name" => "La Mar",
                "department_id" => 5
            ],
            [
                "name" => "Lucanas",
                "department_id" => 5
            ],
            [
                "name" => "Parinacochas",
                "department_id" => 5
            ],
            [
                "name" => "P" . $this->Utf8_ansi("\u00e0") . "ucar del Sara Sara",
                "department_id" => 5
            ],
            [
                "name" => "Sucre",
                "department_id" => 5
            ],
            [
                "name" => "V" . $this->Utf8_ansi("\u00ed") . "ctor Fajardo",
                "department_id" => 5
            ],
            [
                "name" => "Vilcas Huam" . $this->Utf8_ansi("\u00e1") . "n",
                "department_id" => 5
            ],
            [
                "name" => "Cajamarca",
                "department_id" => 6
            ],
            [
                "name" => "Cajabamba",
                "department_id" => 6
            ],
            [
                "name" => "Celend" . $this->Utf8_ansi("\u00ed") . "n",
                "department_id" => 6
            ],
            [
                "name" => "Chota",
                "department_id" => 6
            ],
            [
                "name" => "Contumaz" . $this->Utf8_ansi("\u00e1") . "",
                "department_id" => 6
            ],
            [
                "name" => "Cutervo",
                "department_id" => 6
            ],
            [
                "name" => "Hualgayoc",
                "department_id" => 6
            ],
            [
                "name" => "Ja" . $this->Utf8_ansi("\u00e9") . "n",
                "department_id" => 6
            ],
            [
                "name" => "San Ignacio",
                "department_id" => 6
            ],
            [
                "name" => "San Marcos",
                "department_id" => 6
            ],
            [
                "name" => "San Miguel",
                "department_id" => 6
            ],
            [
                "name" => "San Pablo",
                "department_id" => 6
            ],
            [
                "name" => "Santa Cruz",
                "department_id" => 6
            ],
            [
                "name" => "Prov. Const. del Callao",
                "department_id" => 7
            ],
            [
                "name" => "Cusco",
                "department_id" => 8
            ],
            [
                "name" => "Acomayo",
                "department_id" => 8
            ],
            [
                "name" => "Anta",
                "department_id" => 8
            ],
            [
                "name" => "Calca",
                "department_id" => 8
            ],
            [
                "name" => "Canas",
                "department_id" => 8
            ],
            [
                "name" => "Canchis",
                "department_id" => 8
            ],
            [
                "name" => "Chumbivilcas",
                "department_id" => 8
            ],
            [
                "name" => "Espinar",
                "department_id" => 8
            ],
            [
                "name" => "La Convenci" . $this->Utf8_ansi("\u00f3") . "n",
                "department_id" => 8
            ],
            [
                "name" => "Paruro",
                "department_id" => 8
            ],
            [
                "name" => "Paucartambo",
                "department_id" => 8
            ],
            [
                "name" => "Quispicanchi",
                "department_id" => 8
            ],
            [
                "name" => "Urubamba",
                "department_id" => 8
            ],
            [
                "name" => "Huancavelica",
                "department_id" => 9
            ],
            [
                "name" => "Acobamba",
                "department_id" => 9
            ],
            [
                "name" => "Angaraes",
                "department_id" => 9
            ],
            [
                "name" => "Castrovirreyna",
                "department_id" => 9
            ],
            [
                "name" => "Churcampa",
                "department_id" => 9
            ],
            [
                "name" => "Huaytar" . $this->Utf8_ansi("\u00e1") . "",
                "department_id" => 9
            ],
            [
                "name" => "Tayacaja",
                "department_id" => 9
            ],
            [
                "name" => "Hu" . $this->Utf8_ansi("\u00e1") . "nuco",
                "department_id" => 10
            ],
            [
                "name" => "Ambo",
                "department_id" => 10
            ],
            [
                "name" => "Dos de Mayo",
                "department_id" => 10
            ],
            [
                "name" => "Huacaybamba",
                "department_id" => 10
            ],
            [
                "name" => "Huamal" . $this->Utf8_ansi("\u00ed") . "es",
                "department_id" => 10
            ],
            [
                "name" => "Leoncio Prado",
                "department_id" => 10
            ],
            [
                "name" => "Mara" . $this->Utf8_ansi("\u00f1") . "" . $this->Utf8_ansi("\u00f3") . "n",
                "department_id" => 10
            ],
            [
                "name" => "Pachitea",
                "department_id" => 10
            ],
            [
                "name" => "Puerto Inca",
                "department_id" => 10
            ],
            [
                "name" => "Lauricocha ",
                "department_id" => 10
            ],
            [
                "name" => "Yarowilca ",
                "department_id" => 10
            ],
            [
                "name" => "Ica ",
                "department_id" => 11
            ],
            [
                "name" => "Chincha ",
                "department_id" => 11
            ],
            [
                "name" => "Nasca ",
                "department_id" => 11
            ],
            [
                "name" => "Palpa ",
                "department_id" => 11
            ],
            [
                "name" => "Pisco ",
                "department_id" => 11
            ],
            [
                "name" => "Huancayo ",
                "department_id" => 12
            ],
            [
                "name" => "Concepci" . $this->Utf8_ansi("\u00f3") . "n ",
                "department_id" => 12
            ],
            [
                "name" => "Chanchamayo ",
                "department_id" => 12
            ],
            [
                "name" => "Jauja ",
                "department_id" => 12
            ],
            [
                "name" => "Jun" . $this->Utf8_ansi("\u00ed") . "n ",
                "department_id" => 12
            ],
            [
                "name" => "Satipo ",
                "department_id" => 12
            ],
            [
                "name" => "Tarma ",
                "department_id" => 12
            ],
            [
                "name" => "Yauli ",
                "department_id" => 12
            ],
            [
                "name" => "Chupaca ",
                "department_id" => 12
            ],
            [
                "name" => "Trujillo ",
                "department_id" => 13
            ],
            [
                "name" => "Ascope ",
                "department_id" => 13
            ],
            [
                "name" => "Bol" . $this->Utf8_ansi("\u00ed") . "var ",
                "department_id" => 13
            ],
            [
                "name" => "Chep" . $this->Utf8_ansi("\u00e9") . "n ",
                "department_id" => 13
            ],
            [
                "name" => "Julc" . $this->Utf8_ansi("\u00e1") . "n ",
                "department_id" => 13
            ],
            [
                "name" => "Otuzco ",
                "department_id" => 13
            ],
            [
                "name" => "Pacasmayo ",
                "department_id" => 13
            ],
            [
                "name" => "Pataz ",
                "department_id" => 13
            ],
            [
                "name" => "S" . $this->Utf8_ansi("\u00e1") . "nchez Carri" . $this->Utf8_ansi("\u00f3") . "n ",
                "department_id" => 13
            ],
            [
                "name" => "Santiago de Chuco ",
                "department_id" => 13
            ],
            [
                "name" => "Gran Chim" . $this->Utf8_ansi("\u00fa") . " ",
                "department_id" => 13
            ],
            [
                "name" => "Vir" . $this->Utf8_ansi("\u00fa") . " ",
                "department_id" => 13
            ],
            [
                "name" => "Chiclayo ",
                "department_id" => 14
            ],
            [
                "name" => "Ferre" . $this->Utf8_ansi("\u00f1") . "afe ",
                "department_id" => 14
            ],
            [
                "name" => "Lambayeque ",
                "department_id" => 14
            ],
            [
                "name" => "Lima ",
                "department_id" => 15
            ],
            [
                "name" => "Barranca ",
                "department_id" => 15
            ],
            [
                "name" => "Cajatambo ",
                "department_id" => 15
            ],
            [
                "name" => "Canta ",
                "department_id" => 15
            ],
            [
                "name" => "Ca" . $this->Utf8_ansi("\u00f1") . "ete ",
                "department_id" => 15
            ],
            [
                "name" => "Huaral ",
                "department_id" => 15
            ],
            [
                "name" => "Huarochir" . $this->Utf8_ansi("\u00ed") . " ",
                "department_id" => 15
            ],
            [
                "name" => "Huaura ",
                "department_id" => 15
            ],
            [
                "name" => "Oy" . $this->Utf8_ansi("\u00f3") . "n ",
                "department_id" => 15
            ],
            [
                "name" => "Yauyos ",
                "department_id" => 15
            ],
            [
                "name" => "Maynas ",
                "department_id" => 16
            ],
            [
                "name" => "Alto Amazonas ",
                "department_id" => 16
            ],
            [
                "name" => "Loreto ",
                "department_id" => 16
            ],
            [
                "name" => "Mariscal Ram" . $this->Utf8_ansi("\u00f3") . "n Castilla ",
                "department_id" => 16
            ],
            [
                "name" => "Requena ",
                "department_id" => 16
            ],
            [
                "name" => "Ucayali ",
                "department_id" => 16
            ],
            [
                "name" => "Datem del Mara" . $this->Utf8_ansi("\u00f1") . "" . $this->Utf8_ansi("\u00f3") . "n ",
                "department_id" => 16
            ],
            [
                "name" => "Putumayo",
                "department_id" => 16
            ],
            [
                "name" => "Tambopata ",
                "department_id" => 17
            ],
            [
                "name" => "Manu ",
                "department_id" => 17
            ],
            [
                "name" => "Tahuamanu ",
                "department_id" => 17
            ],
            [
                "name" => "Mariscal Nieto ",
                "department_id" => 18
            ],
            [
                "name" => "General S" . $this->Utf8_ansi("\u00e1") . "nchez Cerro ",
                "department_id" => 18
            ],
            [
                "name" => "Ilo ",
                "department_id" => 18
            ],
            [
                "name" => "Pasco ",
                "department_id" => 19
            ],
            [
                "name" => "Daniel Alcides Carri" . $this->Utf8_ansi("\u00f3") . "n ",
                "department_id" => 19
            ],
            [
                "name" => "Oxapampa ",
                "department_id" => 19
            ],
            [
                "name" => "Piura ",
                "department_id" => 21
            ],
            [
                "name" => "Ayabaca ",
                "department_id" => 21
            ],
            [
                "name" => "Huancabamba ",
                "department_id" => 21
            ],
            [
                "name" => "Morrop" . $this->Utf8_ansi("\u00f3") . "n ",
                "department_id" => 21
            ],
            [
                "name" => "Paita ",
                "department_id" => 21
            ],
            [
                "name" => "Sullana ",
                "department_id" => 21
            ],
            [
                "name" => "Talara ",
                "department_id" => 21
            ],
            [
                "name" => "Sechura ",
                "department_id" => 21
            ],
            [
                "name" => "Puno ",
                "department_id" => "21"
            ],
            [
                "name" => "Az" . $this->Utf8_ansi("\u00e1") . "ngaro ",
                "department_id" => "21"
            ],
            [
                "name" => "Carabaya ",
                "department_id" => "21"
            ],
            [
                "name" => "Chucuito ",
                "department_id" => "21"
            ],
            [
                "name" => "El Collao ",
                "department_id" => "21"
            ],
            [
                "name" => "Huancan" . $this->Utf8_ansi("\u00e9") . " ",
                "department_id" => "21"
            ],
            [
                "name" => "Lampa ",
                "department_id" => "21"
            ],
            [
                "name" => "Melgar ",
                "department_id" => "21"
            ],
            [
                "name" => "Moho ",
                "department_id" => "21"
            ],
            [
                "name" => "San Antonio de Putina ",
                "department_id" => "21"
            ],
            [
                "name" => "San Rom" . $this->Utf8_ansi("\u00e1") . "n ",
                "department_id" => "21"
            ],
            [
                "name" => "Sandia ",
                "department_id" => "21"
            ],
            [
                "name" => "Yunguyo ",
                "department_id" => "21"
            ],
            [
                "name" => "Moyobamba ",
                "department_id" => 22
            ],
            [
                "name" => "Bellavista ",
                "department_id" => 22
            ],
            [
                "name" => "El Dorado ",
                "department_id" => 22
            ],
            [
        
                "name" => "Huallaga ",
                "department_id" => 22
            ],
            [
                "name" => "Lamas ",
                "department_id" => 22
            ],
            [
                "name" => "Mariscal C" . $this->Utf8_ansi("\u00e1") . "ceres ",
                "department_id" => 22
            ],
            [
                "name" => "Picota ",
                "department_id" => 22
            ],
            [
                "name" => "Rioja ",
                "department_id" => 22
            ],
            [
                "name" => "San Mart" . $this->Utf8_ansi("\u00ed") . "n ",
                "department_id" => 22
            ],
            [
                "name" => "Tocache ",
                "department_id" => 22
            ],
            [
                "name" => "Tacna ",
                "department_id" => 23
            ],
            [
                "name" => "Candarave ",
                "department_id" => 23
            ],
            [
                "name" => "Jorge Basadre ",
                "department_id" => 23
            ],
            [
                "name" => "Tarata ",
                "department_id" => 23
            ],
            [
                "name" => "Tumbes ",
                "department_id" => 24
            ],
            [
                "name" => "Contralmirante Villar ",
                "department_id" => 24
            ],
            [
                "name" => "Zarumilla ",
                "department_id" => 24
            ],
            [
                "name" => "Coronel Portillo ",
                "department_id" => 25
            ],
            [
                "name" => "Atalaya ",
                "department_id" => 25
            ],
            [
                "name" => "Padre Abad ",
                "department_id" => 25
            ],
            [
                "name" => "Pur" . $this->Utf8_ansi("\u00fa") . "s",
                "department_id" => 25
            ]
        ];

        foreach ($provinces as $province) {
            $name = trim(strtoupper($province['name']));
            $name = substr($name, -1) == " " ? substr($name, 0, -1) : $name;

            Province::firstOrCreate(
                [
                    'name' => $name,
                    'department_id' => $province['department_id']
                ],
            );
        }
    }

    private function Utf8_ansi($valor='') {    $utf8_ansi2 = array(    "\u00c0" =>"À",    "\u00c1" =>"Á",    "\u00c2" =>"Â",    "\u00c3" =>"Ã",    "\u00c4" =>"Ä",    "\u00c5" =>"Å",    "\u00c6" =>"Æ",    "\u00c7" =>"Ç",    "\u00c8" =>"È",    "\u00c9" =>"É",    "\u00ca" =>"Ê",    "\u00cb" =>"Ë",    "\u00cc" =>"Ì",    "\u00cd" =>"Í",    "\u00ce" =>"Î",    "\u00cf" =>"Ï",    "\u00d1" =>"Ñ",    "\u00d2" =>"Ò",    "\u00d3" =>"Ó",    "\u00d4" =>"Ô",    "\u00d5" =>"Õ",    "\u00d6" =>"Ö",    "\u00d8" =>"Ø",    "\u00d9" =>"Ù",    "\u00da" =>"Ú",    "\u00db" =>"Û",    "\u00dc" =>"Ü",    "\u00dd" =>"Ý",    "\u00df" =>"ß",    "\u00e0" =>"à",    "\u00e1" =>"Á",    "\u00e2" =>"â",    "\u00e3" =>"ã",    "\u00e4" =>"ä",    "\u00e5" =>"å",    "\u00e6" =>"æ",    "\u00e7" =>"ç",    "\u00e8" =>"è",    "\u00e9" =>"É",    "\u00ea" =>"ê",    "\u00eb" =>"ë",    "\u00ec" =>"ì",    "\u00ed" =>"Í",    "\u00ee" =>"î",    "\u00ef" =>"ï",    "\u00f0" =>"ð",    "\u00f1" =>"Ñ",    "\u00f2" =>"ò",    "\u00f3" =>"Ó",    "\u00f4" =>"ô",    "\u00f5" =>"õ",    "\u00f6" =>"ö",    "\u00f8" =>"ø",    "\u00f9" =>"ù",    "\u00fa" =>"Ú",    "\u00fb" =>"û",    "\u00fc" =>"ü",    "\u00fd" =>"ý",    "\u00ff" =>"ÿ");    return strtr($valor, $utf8_ansi2);      }
}
