<?php

namespace Database\Seeders;

use App\Models\District;
use Illuminate\Database\Seeder;

class DistrictSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $districts = [
            [
                "name" => "Chachapoyas",
                "province_id" => 1,
            ],
            [
                "name" => "Asunci" . $this->Utf8_ansi("\u00f3") . "n",
                "province_id" => 1,
            ],
            [
                "name" => "Balsas",
                "province_id" => 1,
            ],
            [
                "name" => "Cheto",
                "province_id" => 1,
            ],
            [
                "name" => "Chiliquin",
                "province_id" => 1,
            ],
            [
                "name" => "Chuquibamba",
                "province_id" => 1,
            ],
            [
                "name" => "Granada",
                "province_id" => 1,
            ],
            [
                "name" => "Huancas",
                "province_id" => 1,
            ],
            [
                "name" => "La Jalca",
                "province_id" => 1,
            ],
            [
                "name" => "Leimebamba",
                "province_id" => 1,
            ],
            [
                "name" => "Levanto",
                "province_id" => 1,
            ],
            [
                "name" => "Magdalena",
                "province_id" => 1,
            ],
            [
                "name" => "Mariscal Castilla",
                "province_id" => 1,
            ],
            [
                "name" => "Molinopampa",
                "province_id" => 1,
            ],
            [
                "name" => "Montevideo",
                "province_id" => 1,
            ],
            [
                "name" => "Olleros",
                "province_id" => 1,
            ],
            [
                "name" => "Quinjalca",
                "province_id" => 1,
            ],
            [
                "name" => "San Francisco de Daguas",
                "province_id" => 1,
            ],
            [
                "name" => "San Isidro de Maino",
                "province_id" => 1,
            ],
            [
                "name" => "Soloco",
                "province_id" => 1,
            ],
            [
                "name" => "Sonche",
                "province_id" => 1,
            ],
            [
                "name" => "Bagua",
                "province_id" => 2,
            ],
            [
                "name" => "Aramango",
                "province_id" => 2,
            ],
            [
                "name" => "Copallin",
                "province_id" => 2,
            ],
            [
                "name" => "El Parco",
                "province_id" => 2,
            ],
            [
                "name" => "Imaza",
                "province_id" => 2,
            ],
            [
                "name" => "La Peca",
                "province_id" => 2,
            ],
            [
                "name" => "Jumbilla",
                "province_id" => 3,
            ],
            [
                "name" => "Chisquilla",
                "province_id" => 3,
            ],
            [
                "name" => "Churuja",
                "province_id" => 3,
            ],
            [
                "name" => "Corosha",
                "province_id" => 3,
            ],
            [
                "name" => "Cuispes",
                "province_id" => 3,
            ],
            [
                "name" => "Florida",
                "province_id" => 3,
            ],
            [
                "name" => "Jazan",
                "province_id" => 3,
            ],
            [
                "name" => "Recta",
                "province_id" => 3,
            ],
            [
                "name" => "San Carlos",
                "province_id" => 3,
            ],
            [
                "name" => "Shipasbamba",
                "province_id" => 3,
            ],
            [
                "name" => "Valera",
                "province_id" => 3,
            ],
            [
                "name" => "Yambrasbamba",
                "province_id" => 3,
            ],
            [
                "name" => "Nieva",
                "province_id" => 4,
            ],
            [
                "name" => "El Cenepa",
                "province_id" => 4,
            ],
            [
                "name" => "R" . $this->Utf8_ansi("\u00ed") . "o Santiago",
                "province_id" => 4,
            ],
            [
                "name" => "Lamud",
                "province_id" => 5,
            ],
            [
                "name" => "Camporredondo",
                "province_id" => 5,
            ],
            [
                "name" => "Cocabamba",
                "province_id" => 5,
            ],
            [
                "name" => "Colcamar",
                "province_id" => 5,
            ],
            [
                "name" => "Conila",
                "province_id" => 5,
            ],
            [
                "name" => "Inguilpata",
                "province_id" => 5,
            ],
            [
                "name" => "Longuita",
                "province_id" => 5,
            ],
            [
                "name" => "Lonya Chico",
                "province_id" => 5,
            ],
            [
                "name" => "Luya",
                "province_id" => 5,
            ],
            [
                "name" => "Luya Viejo",
                "province_id" => 5,
            ],
            [
                "name" => "Mar" . $this->Utf8_ansi("\u00ed") . "a",
                "province_id" => 5,
            ],
            [
                "name" => "Ocalli",
                "province_id" => 5,
            ],
            [
                "name" => "Ocumal",
                "province_id" => 5,
            ],
            [
                "name" => "Pisuquia",
                "province_id" => 5,
            ],
            [
                "name" => "Providencia",
                "province_id" => 5,
            ],
            [
                "name" => "San Crist" . $this->Utf8_ansi("\u00f3") . "bal",
                "province_id" => 5,
            ],
            [
                "name" => "San Francisco de Yeso",
                "province_id" => 5,
            ],
            [
                "name" => "San Jer" . $this->Utf8_ansi("\u00f3") . "nimo",
                "province_id" => 5,
            ],
            [
                "name" => "San Juan de Lopecancha",
                "province_id" => 5,
            ],
            [
                "name" => "Santa Catalina",
                "province_id" => 5,
            ],
            [
                "name" => "Santo Tomas",
                "province_id" => 5,
            ],
            [
                "name" => "Tingo",
                "province_id" => 5,
            ],
            [
                "name" => "Trita",
                "province_id" => 5,
            ],
            [
                "name" => "San Nicol" . $this->Utf8_ansi("\u00e1") . "s",
                "province_id" => 6,
            ],
            [
                "name" => "Chirimoto",
                "province_id" => 6,
            ],
            [
                "name" => "Cochamal",
                "province_id" => 6,
            ],
            [
                "name" => "Huambo",
                "province_id" => 6,
            ],
            [
                "name" => "Limabamba",
                "province_id" => 6,
            ],
            [
                "name" => "Longar",
                "province_id" => 6,
            ],
            [
                "name" => "Mariscal Benavides",
                "province_id" => 6,
            ],
            [
                "name" => "Milpuc",
                "province_id" => 6,
            ],
            [
                "name" => "Omia",
                "province_id" => 6,
            ],
            [
                "name" => "Santa Rosa",
                "province_id" => 6,
            ],
            [
                "name" => "Totora",
                "province_id" => 6,
            ],
            [
                "name" => "Vista Alegre",
                "province_id" => 6,
            ],
            [
                "name" => "Bagua Grande",
                "province_id" => 7,
            ],
            [
                "name" => "Cajaruro",
                "province_id" => 7,
            ],
            [
                "name" => "Cumba",
                "province_id" => 7,
            ],
            [
                "name" => "El Milagro",
                "province_id" => 7,
            ],
            [
                "name" => "Jamalca",
                "province_id" => 7,
            ],
            [
                "name" => "Lonya Grande",
                "province_id" => 7,
            ],
            [
                "name" => "Yamon",
                "province_id" => 7,
            ],
            [
                "name" => "Huaraz",
                "province_id" => 8,
            ],
            [
                "name" => "Cochabamba",
                "province_id" => 8,
            ],
            [
                "name" => "Colcabamba",
                "province_id" => 8,
            ],
            [
                "name" => "Huanchay",
                "province_id" => 8,
            ],
            [
                "name" => "Independencia",
                "province_id" => 8,
            ],
            [
                "name" => "Jangas",
                "province_id" => 8,
            ],
            [
                "name" => "La Libertad",
                "province_id" => 8,
            ],
            [
                "name" => "Olleros",
                "province_id" => 8,
            ],
            [
                "name" => "Pampas Grande",
                "province_id" => 8,
            ],
            [
                "name" => "Pariacoto",
                "province_id" => 8,
            ],
            [
                "name" => "Pira",
                "province_id" => 8,
            ],
            [
                "name" => "Tarica",
                "province_id" => 8,
            ],
            [
                "name" => "Aija",
                "province_id" => 9,
            ],
            [
                "name" => "Coris",
                "province_id" => 9,
            ],
            [
                "name" => "Huacllan",
                "province_id" => 9,
            ],
            [
                "name" => "La Merced",
                "province_id" => 9,
            ],
            [
                "name" => "Succha",
                "province_id" => 9,
            ],
            [
                "name" => "Llamellin",
                "province_id" => 10,
            ],
            [
                "name" => "Aczo",
                "province_id" => 10,
            ],
            [
                "name" => "Chaccho",
                "province_id" => 10,
            ],
            [
                "name" => "Chingas",
                "province_id" => 10,
            ],
            [
                "name" => "Mirgas",
                "province_id" => 10,
            ],
            [
                "name" => "San Juan de Rontoy",
                "province_id" => 10,
            ],
            [
                "name" => "Chacas",
                "province_id" => 11,
            ],
            [
                "name" => "Acochaca",
                "province_id" => 11,
            ],
            [
                "name" => "Chiquian",
                "province_id" => 12,
            ],
            [
                "name" => "Abelardo Pardo Lezameta",
                "province_id" => 12,
            ],
            [
                "name" => "Antonio Raymondi",
                "province_id" => 12,
            ],
            [
                "name" => "Aquia",
                "province_id" => 12,
            ],
            [
                "name" => "Cajacay",
                "province_id" => 12,
            ],
            [
                "name" => "Canis",
                "province_id" => 12,
            ],
            [
                "name" => "Colquioc",
                "province_id" => 12,
            ],
            [
                "name" => "Huallanca",
                "province_id" => 12,
            ],
            [
                "name" => "Huasta",
                "province_id" => 12,
            ],
            [
                "name" => "Huayllacayan",
                "province_id" => 12,
            ],
            [
                "name" => "La Primavera",
                "province_id" => 12,
            ],
            [
                "name" => "Mangas",
                "province_id" => 12,
            ],
            [
                "name" => "Pacllon",
                "province_id" => 12,
            ],
            [
                "name" => "San Miguel de Corpanqui",
                "province_id" => 12,
            ],
            [
                "name" => "Ticllos",
                "province_id" => 12,
            ],
            [
                "name" => "Carhuaz",
                "province_id" => 13,
            ],
            [
                "name" => "Acopampa",
                "province_id" => 13,
            ],
            [
                "name" => "Amashca",
                "province_id" => 13,
            ],
            [
                "name" => "Anta",
                "province_id" => 13,
            ],
            [
                "name" => "Ataquero",
                "province_id" => 13,
            ],
            [
                "name" => "Marcara",
                "province_id" => 13,
            ],
            [
                "name" => "Pariahuanca",
                "province_id" => 13,
            ],
            [
                "name" => "San Miguel de Aco",
                "province_id" => 13,
            ],
            [
                "name" => "Shilla",
                "province_id" => 13,
            ],
            [
                "name" => "Tinco",
                "province_id" => 13,
            ],
            [
                "name" => "Yungar",
                "province_id" => 13,
            ],
            [
                "name" => "San Luis",
                "province_id" => 14,
            ],
            [
                "name" => "San Nicol" . $this->Utf8_ansi("\u00e1") . "s",
                "province_id" => 14,
            ],
            [
                "name" => "Yauya",
                "province_id" => 14,
            ],
            [
                "name" => "Casma",
                "province_id" => 15,
            ],
            [
                "name" => "Buena Vista Alta",
                "province_id" => 15,
            ],
            [
                "name" => "Comandante Noel",
                "province_id" => 15,
            ],
            [
                "name" => "Yautan",
                "province_id" => 15,
            ],
            [
                "name" => "Corongo",
                "province_id" => 16,
            ],
            [
                "name" => "Aco",
                "province_id" => 16,
            ],
            [
                "name" => "Bambas",
                "province_id" => 16,
            ],
            [
                "name" => "Cusca",
                "province_id" => 16,
            ],
            [
                "name" => "La Pampa",
                "province_id" => 16,
            ],
            [
                "name" => "Yanac",
                "province_id" => 16,
            ],
            [
                "name" => "Yupan",
                "province_id" => 16,
            ],
            [
                "name" => "Huari",
                "province_id" => 17,
            ],
            [
                "name" => "Anra",
                "province_id" => 17,
            ],
            [
                "name" => "Cajay",
                "province_id" => 17,
            ],
            [
                "name" => "Chavin de Huantar",
                "province_id" => 17,
            ],
            [
                "name" => "Huacachi",
                "province_id" => 17,
            ],
            [
                "name" => "Huacchis",
                "province_id" => 17,
            ],
            [
                "name" => "Huachis",
                "province_id" => 17,
            ],
            [
                "name" => "Huantar",
                "province_id" => 17,
            ],
            [
                "name" => "Masin",
                "province_id" => 17,
            ],
            [
                "name" => "Paucas",
                "province_id" => 17,
            ],
            [
                "name" => "Ponto",
                "province_id" => 17,
            ],
            [
                "name" => "Rahuapampa",
                "province_id" => 17,
            ],
            [
                "name" => "Rapayan",
                "province_id" => 17,
            ],
            [
                "name" => "San Marcos",
                "province_id" => 17,
            ],
            [
                "name" => "San Pedro de Chana",
                "province_id" => 17,
            ],
            [
                "name" => "Uco",
                "province_id" => 17,
            ],
            [
                "name" => "Huarmey",
                "province_id" => 18,
            ],
            [
                "name" => "Cochapeti",
                "province_id" => 18,
            ],
            [
                "name" => "Culebras",
                "province_id" => 18,
            ],
            [
                "name" => "Huayan",
                "province_id" => 18,
            ],
            [
                "name" => "Malvas",
                "province_id" => 18,
            ],
            [
                "name" => "Caraz",
                "province_id" => 19,
            ],
            [
                "name" => "Huallanca",
                "province_id" => 19,
            ],
            [
                "name" => "Huata",
                "province_id" => 19,
            ],
            [
                "name" => "Huaylas",
                "province_id" => 19,
            ],
            [
                "name" => "Mato",
                "province_id" => 19,
            ],
            [
                "name" => "Pamparomas",
                "province_id" => 19,
            ],
            [
                "name" => "Pueblo Libre",
                "province_id" => 19,
            ],
            [
                "name" => "Santa Cruz",
                "province_id" => 19,
            ],
            [
                "name" => "Santo Toribio",
                "province_id" => 19,
            ],
            [
                "name" => "Yuracmarca",
                "province_id" => 19,
            ],
            [
                "name" => "Piscobamba",
                "province_id" => 20,
            ],
            [
                "name" => "Casca",
                "province_id" => 20,
            ],
            [
                "name" => "Eleazar Guzm" . $this->Utf8_ansi("\u00e1") . "n Barron",
                "province_id" => 20,
            ],
            [
                "name" => "Fidel Olivas Escudero",
                "province_id" => 20,
            ],
            [
                "name" => "Llama",
                "province_id" => 20,
            ],
            [
                "name" => "Llumpa",
                "province_id" => 20,
            ],
            [
                "name" => "Lucma",
                "province_id" => 20,
            ],
            [
                "name" => "Musga",
                "province_id" => 20,
            ],
            [
                "name" => "Ocros",
                "province_id" => 21,
            ],
            [
                "name" => "Acas",
                "province_id" => 21,
            ],
            [
                "name" => "Cajamarquilla",
                "province_id" => 21,
            ],
            [
                "name" => "Carhuapampa",
                "province_id" => 21,
            ],
            [
                "name" => "Cochas",
                "province_id" => 21,
            ],
            [
                "name" => "Congas",
                "province_id" => 21,
            ],
            [
                "name" => "Llipa",
                "province_id" => 21,
            ],
            [
                "name" => "San Crist" . $this->Utf8_ansi("\u00f3") . "bal de Rajan",
                "province_id" => 21,
            ],
            [
                "name" => "San Pedro",
                "province_id" => 21,
            ],
            [
                "name" => "Santiago de Chilcas",
                "province_id" => 21,
            ],
            [
                "name" => "Cabana",
                "province_id" => 22,
            ],
            [
                "name" => "Bolognesi",
                "province_id" => 22,
            ],
            [
                "name" => "Conchucos",
                "province_id" => 22,
            ],
            [
                "name" => "Huacaschuque",
                "province_id" => 22,
            ],
            [
                "name" => "Huandoval",
                "province_id" => 22,
            ],
            [
                "name" => "Lacabamba",
                "province_id" => 22,
            ],
            [
                "name" => "Llapo",
                "province_id" => 22,
            ],
            [
                "name" => "Pallasca",
                "province_id" => 22,
            ],
            [
                "name" => "Pampas",
                "province_id" => 22,
            ],
            [
                "name" => "Santa Rosa",
                "province_id" => 22,
            ],
            [
                "name" => "Tauca",
                "province_id" => 22,
            ],
            [
                "name" => "Pomabamba",
                "province_id" => 23,
            ],
            [
                "name" => "Huayllan",
                "province_id" => 23,
            ],
            [
                "name" => "Parobamba",
                "province_id" => 23,
            ],
            [
                "name" => "Quinuabamba",
                "province_id" => 23,
            ],
            [
                "name" => "Recuay",
                "province_id" => 24,
            ],
            [
                "name" => "Catac",
                "province_id" => 24,
            ],
            [
                "name" => "Cotaparaco",
                "province_id" => 24,
            ],
            [
                "name" => "Huayllapampa",
                "province_id" => 24,
            ],
            [
                "name" => "Llacllin",
                "province_id" => 24,
            ],
            [
                "name" => "Marca",
                "province_id" => 24,
            ],
            [
                "name" => "Pampas Chico",
                "province_id" => 24,
            ],
            [
                "name" => "Pararin",
                "province_id" => 24,
            ],
            [
                "name" => "Tapacocha",
                "province_id" => 24,
            ],
            [
                "name" => "Ticapampa",
                "province_id" => 24,
            ],
            [
                "name" => "Chimbote",
                "province_id" => 25,
            ],
            [
                "name" => "C" . $this->Utf8_ansi("\u00e1") . "ceres del Per" . $this->Utf8_ansi("\u00fa") . "",
                "province_id" => 25,
            ],
            [
                "name" => "Coishco",
                "province_id" => 25,
            ],
            [
                "name" => "Macate",
                "province_id" => 25,
            ],
            [
                "name" => "Moro",
                "province_id" => 25,
            ],
            [
                "name" => "Nepe" . $this->Utf8_ansi("\u00f1") . "a",
                "province_id" => 25,
            ],
            [
                "name" => "Samanco",
                "province_id" => 25,
            ],
            [
                "name" => "Santa",
                "province_id" => 25,
            ],
            [
                "name" => "Nuevo Chimbote",
                "province_id" => 25,
            ],
            [
                "name" => "Sihuas",
                "province_id" => 26,
            ],
            [
                "name" => "Acobamba",
                "province_id" => 26,
            ],
            [
                "name" => "Alfonso Ugarte",
                "province_id" => 26,
            ],
            [
                "name" => "Cashapampa",
                "province_id" => 26,
            ],
            [
                "name" => "Chingalpo",
                "province_id" => 26,
            ],
            [
                "name" => "Huayllabamba",
                "province_id" => 26,
            ],
            [
                "name" => "Quiches",
                "province_id" => 26,
            ],
            [
                "name" => "Ragash",
                "province_id" => 26,
            ],
            [
                "name" => "San Juan",
                "province_id" => 26,
            ],
            [
                "name" => "Sicsibamba",
                "province_id" => 26,
            ],
            [
                "name" => "Yungay",
                "province_id" => 27,
            ],
            [
                "name" => "Cascapara",
                "province_id" => 27,
            ],
            [
                "name" => "Mancos",
                "province_id" => 27,
            ],
            [
                "name" => "Matacoto",
                "province_id" => 27,
            ],
            [
                "name" => "Quillo",
                "province_id" => 27,
            ],
            [
                "name" => "Ranrahirca",
                "province_id" => 27,
            ],
            [
                "name" => "Shupluy",
                "province_id" => 27,
            ],
            [
                "name" => "Yanama",
                "province_id" => 27,
            ],
            [
                "name" => "Abancay",
                "province_id" => 28,
            ],
            [
                "name" => "Chacoche",
                "province_id" => 28,
            ],
            [
                "name" => "Circa",
                "province_id" => 28,
            ],
            [
                "name" => "Curahuasi",
                "province_id" => 28,
            ],
            [
                "name" => "Huanipaca",
                "province_id" => 28,
            ],
            [
                "name" => "Lambrama",
                "province_id" => 28,
            ],
            [
                "name" => "Pichirhua",
                "province_id" => 28,
            ],
            [
                "name" => "San Pedro de Cachora",
                "province_id" => 28,
            ],
            [
                "name" => "Tamburco",
                "province_id" => 28,
            ],
            [
                "name" => "Andahuaylas",
                "province_id" => 29,
            ],
            [
                "name" => "Andarapa",
                "province_id" => 29,
            ],
            [
                "name" => "Chiara",
                "province_id" => 29,
            ],
            [
                "name" => "Huancarama",
                "province_id" => 29,
            ],
            [
                "name" => "Huancaray",
                "province_id" => 29,
            ],
            [
                "name" => "Huayana",
                "province_id" => 29,
            ],
            [
                "name" => "Kishuara",
                "province_id" => 29,
            ],
            [
                "name" => "Pacobamba",
                "province_id" => 29,
            ],
            [
                "name" => "Pacucha",
                "province_id" => 29,
            ],
            [
                "name" => "Pampachiri",
                "province_id" => 29,
            ],
            [
                "name" => "Pomacocha",
                "province_id" => 29,
            ],
            [
                "name" => "San Antonio de Cachi",
                "province_id" => 29,
            ],
            [
                "name" => "San Jer" . $this->Utf8_ansi("\u00f3") . "nimo",
                "province_id" => 29,
            ],
            [
                "name" => "San Miguel de Chaccrampa",
                "province_id" => 29,
            ],
            [
                "name" => "Santa Mar" . $this->Utf8_ansi("\u00ed") . "a de Chicmo",
                "province_id" => 29,
            ],
            [
                "name" => "Talavera",
                "province_id" => 29,
            ],
            [
                "name" => "Tumay Huaraca",
                "province_id" => 29,
            ],
            [
                "name" => "Turpo",
                "province_id" => 29,
            ],
            [
                "name" => "Kaquiabamba",
                "province_id" => 29,
            ],
            [
                "name" => "Jos" . $this->Utf8_ansi("\u00e9") . " Mar" . $this->Utf8_ansi("\u00ed") . "a Arguedas",
                "province_id" => 29,
            ],
            [
                "name" => "Antabamba",
                "province_id" => 30,
            ],
            [
                "name" => "El Oro",
                "province_id" => 30,
            ],
            [
                "name" => "Huaquirca",
                "province_id" => 30,
            ],
            [
                "name" => "Juan Espinoza Medrano",
                "province_id" => 30,
            ],
            [
                "name" => "Oropesa",
                "province_id" => 30,
            ],
            [
                "name" => "Pachaconas",
                "province_id" => 30,
            ],
            [
                "name" => "Sabaino",
                "province_id" => 30,
            ],
            [
                "name" => "Chalhuanca",
                "province_id" => 31,
            ],
            [
                "name" => "Capaya",
                "province_id" => 31,
            ],
            [
                "name" => "Caraybamba",
                "province_id" => 31,
            ],
            [
                "name" => "Chapimarca",
                "province_id" => 31,
            ],
            [
                "name" => "Colcabamba",
                "province_id" => 31,
            ],
            [
                "name" => "Cotaruse",
                "province_id" => 31,
            ],
            [
                "name" => "Ihuayllo",
                "province_id" => 31,
            ],
            [
                "name" => "Justo Apu Sahuaraura",
                "province_id" => 31,
            ],
            [
                "name" => "Lucre",
                "province_id" => 31,
            ],
            [
                "name" => "Pocohuanca",
                "province_id" => 31,
            ],
            [
                "name" => "San Juan de Chac" . $this->Utf8_ansi("\u00f1") . "a",
                "province_id" => 31,
            ],
            [
                "name" => "Sa" . $this->Utf8_ansi("\u00f1") . "ayca",
                "province_id" => 31,
            ],
            [
                "name" => "Soraya",
                "province_id" => 31,
            ],
            [
                "name" => "Tapairihua",
                "province_id" => 31,
            ],
            [
                "name" => "Tintay",
                "province_id" => 31,
            ],
            [
                "name" => "Toraya",
                "province_id" => 31,
            ],
            [
                "name" => "Yanaca",
                "province_id" => 31,
            ],
            [
                "name" => "Tambobamba",
                "province_id" => 32,
            ],
            [
                "name" => "Cotabambas",
                "province_id" => 32,
            ],
            [
                "name" => "Coyllurqui",
                "province_id" => 32,
            ],
            [
                "name" => "Haquira",
                "province_id" => 32,
            ],
            [
                "name" => "Mara",
                "province_id" => 32,
            ],
            [
                "name" => "Challhuahuacho",
                "province_id" => 32,
            ],
            [
                "name" => "Chincheros",
                "province_id" => 33,
            ],
            [
                "name" => "Anco_Huallo",
                "province_id" => 33,
            ],
            [
                "name" => "Cocharcas",
                "province_id" => 33,
            ],
            [
                "name" => "Huaccana",
                "province_id" => 33,
            ],
            [
                "name" => "Ocobamba",
                "province_id" => 33,
            ],
            [
                "name" => "Ongoy",
                "province_id" => 33,
            ],
            [
                "name" => "Uranmarca",
                "province_id" => 33,
            ],
            [
                "name" => "Ranracancha",
                "province_id" => 33,
            ],
            [
                "name" => "Rocchacc",
                "province_id" => 33,
            ],
            [
                "name" => "El Porvenir",
                "province_id" => 33,
            ],
            [
                "name" => "Los Chankas",
                "province_id" => 33,
            ],
            [
                "name" => "Chuquibambilla",
                "province_id" => 34,
            ],
            [
                "name" => "Curpahuasi",
                "province_id" => 34,
            ],
            [
                "name" => "Gamarra",
                "province_id" => 34,
            ],
            [
                "name" => "Huayllati",
                "province_id" => 34,
            ],
            [
                "name" => "Mamara",
                "province_id" => 34,
            ],
            [
                "name" => "Micaela Bastidas",
                "province_id" => 34,
            ],
            [
                "name" => "Pataypampa",
                "province_id" => 34,
            ],
            [
                "name" => "Progreso",
                "province_id" => 34,
            ],
            [
                "name" => "San Antonio",
                "province_id" => 34,
            ],
            [
                "name" => "Santa Rosa",
                "province_id" => 34,
            ],
            [
                "name" => "Turpay",
                "province_id" => 34,
            ],
            [
                "name" => "Vilcabamba",
                "province_id" => 34,
            ],
            [
                "name" => "Virundo",
                "province_id" => 34,
            ],
            [
                "name" => "Curasco",
                "province_id" => 34,
            ],
            [
                "name" => "Arequipa",
                "province_id" => 35,
            ],
            [
                "name" => "Alto Selva Alegre",
                "province_id" => 35,
            ],
            [
                "name" => "Cayma",
                "province_id" => 35,
            ],
            [
                "name" => "Cerro Colorado",
                "province_id" => 35,
            ],
            [
                "name" => "Characato",
                "province_id" => 35,
            ],
            [
                "name" => "Chiguata",
                "province_id" => 35,
            ],
            [
                "name" => "Jacobo Hunter",
                "province_id" => 35,
            ],
            [
                "name" => "La Joya",
                "province_id" => 35,
            ],
            [
                "name" => "Mariano Melgar",
                "province_id" => 35,
            ],
            [
                "name" => "Miraflores",
                "province_id" => 35,
            ],
            [
                "name" => "Mollebaya",
                "province_id" => 35,
            ],
            [
                "name" => "Paucarpata",
                "province_id" => 35,
            ],
            [
                "name" => "Pocsi",
                "province_id" => 35,
            ],
            [
                "name" => "Polobaya",
                "province_id" => 35,
            ],
            [
                "name" => "Queque" . $this->Utf8_ansi("\u00f1") . "a",
                "province_id" => 35,
            ],
            [
                "name" => "Sabandia",
                "province_id" => 35,
            ],
            [
                "name" => "Sachaca",
                "province_id" => 35,
            ],
            [
                "name" => "San Juan de Siguas",
                "province_id" => 35,
            ],
            [
                "name" => "San Juan de Tarucani",
                "province_id" => 35,
            ],
            [
                "name" => "Santa Isabel de Siguas",
                "province_id" => 35,
            ],
            [
                "name" => "Santa Rita de Siguas",
                "province_id" => 35,
            ],
            [
                "name" => "Socabaya",
                "province_id" => 35,
            ],
            [
                "name" => "Tiabaya",
                "province_id" => 35,
            ],
            [
                "name" => "Uchumayo",
                "province_id" => 35,
            ],
            [
                "name" => "Vitor",
                "province_id" => 35,
            ],
            [
                "name" => "Yanahuara",
                "province_id" => 35,
            ],
            [
                "name" => "Yarabamba",
                "province_id" => 35,
            ],
            [
                "name" => "Yura",
                "province_id" => 35,
            ],
            [
                "name" => "Jos" . $this->Utf8_ansi("\u00e9") . " Luis Bustamante Y Rivero",
                "province_id" => 35,
            ],
            [
                "name" => "Caman" . $this->Utf8_ansi("\u00e1") . "",
                "province_id" => 36,
            ],
            [
                "name" => "Jos" . $this->Utf8_ansi("\u00e9") . " Mar" . $this->Utf8_ansi("\u00ed") . "a Quimper",
                "province_id" => 36,
            ],
            [
                "name" => "Mariano Nicol" . $this->Utf8_ansi("\u00e1") . "s Valc" . $this->Utf8_ansi("\u00e1") . "rcel",
                "province_id" => 36,
            ],
            [
                "name" => "Mariscal C" . $this->Utf8_ansi("\u00e1") . "ceres",
                "province_id" => 36,
            ],
            [
                "name" => "Nicol" . $this->Utf8_ansi("\u00e1") . "s de Pierola",
                "province_id" => 36,
            ],
            [
                "name" => "Oco" . $this->Utf8_ansi("\u00f1") . "a",
                "province_id" => 36,
            ],
            [
                "name" => "Quilca",
                "province_id" => 36,
            ],
            [
                "name" => "Samuel Pastor",
                "province_id" => 36,
            ],
            [
                "name" => "Caravel" . $this->Utf8_ansi("\u00ed") . "",
                "province_id" => 37,
            ],
            [
                "name" => "Acar" . $this->Utf8_ansi("\u00ed") . "",
                "province_id" => 37,
            ],
            [
                "name" => "Atico",
                "province_id" => 37,
            ],
            [
                "name" => "Atiquipa",
                "province_id" => 37,
            ],
            [
                "name" => "Bella Uni" . $this->Utf8_ansi("\u00f3") . "n",
                "province_id" => 37,
            ],
            [
                "name" => "Cahuacho",
                "province_id" => 37,
            ],
            [
                "name" => "Chala",
                "province_id" => 37,
            ],
            [
                "name" => "Chaparra",
                "province_id" => 37,
            ],
            [
                "name" => "Huanuhuanu",
                "province_id" => 37,
            ],
            [
                "name" => "Jaqui",
                "province_id" => 37,
            ],
            [
                "name" => "Lomas",
                "province_id" => 37,
            ],
            [
                "name" => "Quicacha",
                "province_id" => 37,
            ],
            [
                "name" => "Yauca",
                "province_id" => 37,
            ],
            [
                "name" => "Aplao",
                "province_id" => 38,
            ],
            [
                "name" => "Andagua",
                "province_id" => 38,
            ],
            [
                "name" => "Ayo",
                "province_id" => 38,
            ],
            [
                "name" => "Chachas",
                "province_id" => 38,
            ],
            [
                "name" => "Chilcaymarca",
                "province_id" => 38,
            ],
            [
                "name" => "Choco",
                "province_id" => 38,
            ],
            [
                "name" => "Huancarqui",
                "province_id" => 38,
            ],
            [
                "name" => "Machaguay",
                "province_id" => 38,
            ],
            [
                "name" => "Orcopampa",
                "province_id" => 38,
            ],
            [
                "name" => "Pampacolca",
                "province_id" => 38,
            ],
            [
                "name" => "Tipan",
                "province_id" => 38,
            ],
            [
                "name" => "U" . $this->Utf8_ansi("\u00f1") . "on",
                "province_id" => 38,
            ],
            [
                "name" => "Uraca",
                "province_id" => 38,
            ],
            [
                "name" => "Viraco",
                "province_id" => 38,
            ],
            [
                "name" => "Chivay",
                "province_id" => 39,
            ],
            [
                "name" => "Achoma",
                "province_id" => 39,
            ],
            [
                "name" => "Cabanaconde",
                "province_id" => 39,
            ],
            [
                "name" => "Callalli",
                "province_id" => 39,
            ],
            [
                "name" => "Caylloma",
                "province_id" => 39,
            ],
            [
                "name" => "Coporaque",
                "province_id" => 39,
            ],
            [
                "name" => "Huambo",
                "province_id" => 39,
            ],
            [
                "name" => "Huanca",
                "province_id" => 39,
            ],
            [
                "name" => "Ichupampa",
                "province_id" => 39,
            ],
            [
                "name" => "Lari",
                "province_id" => 39,
            ],
            [
                "name" => "Lluta",
                "province_id" => 39,
            ],
            [
                "name" => "Maca",
                "province_id" => 39,
            ],
            [
                "name" => "Madrigal",
                "province_id" => 39,
            ],
            [
                "name" => "San Antonio de Chuca",
                "province_id" => 39,
            ],
            [
                "name" => "Sibayo",
                "province_id" => 39,
            ],
            [
                "name" => "Tapay",
                "province_id" => 39,
            ],
            [
                "name" => "Tisco",
                "province_id" => 39,
            ],
            [
                "name" => "Tuti",
                "province_id" => 39,
            ],
            [
                "name" => "Yanque",
                "province_id" => 39,
            ],
            [
                "name" => "Majes",
                "province_id" => 39,
            ],
            [
                "name" => "Chuquibamba",
                "province_id" => 40,
            ],
            [
                "name" => "Andaray",
                "province_id" => 40,
            ],
            [
                "name" => "Cayarani",
                "province_id" => 40,
            ],
            [
                "name" => "Chichas",
                "province_id" => 40,
            ],
            [
                "name" => "Iray",
                "province_id" => 40,
            ],
            [
                "name" => "R" . $this->Utf8_ansi("\u00ed") . "o Grande",
                "province_id" => 40,
            ],
            [
                "name" => "Salamanca",
                "province_id" => 40,
            ],
            [
                "name" => "Yanaquihua",
                "province_id" => 40,
            ],
            [
                "name" => "Mollendo",
                "province_id" => 41,
            ],
            [
                "name" => "Cocachacra",
                "province_id" => 41,
            ],
            [
                "name" => "Dean Valdivia",
                "province_id" => 41,
            ],
            [
                "name" => "Islay",
                "province_id" => 41,
            ],
            [
                "name" => "Mejia",
                "province_id" => 41,
            ],
            [
                "name" => "Punta de Bomb" . $this->Utf8_ansi("\u00f3") . "n",
                "province_id" => 41,
            ],
            [
                "name" => "Cotahuasi",
                "province_id" => 42,
            ],
            [
                "name" => "Alca",
                "province_id" => 42,
            ],
            [
                "name" => "Charcana",
                "province_id" => 42,
            ],
            [
                "name" => "Huaynacotas",
                "province_id" => 42,
            ],
            [
                "name" => "Pampamarca",
                "province_id" => 42,
            ],
            [
                "name" => "Puyca",
                "province_id" => 42,
            ],
            [
                "name" => "Quechualla",
                "province_id" => 42,
            ],
            [
                "name" => "Sayla",
                "province_id" => 42,
            ],
            [
                "name" => "Tauria",
                "province_id" => 42,
            ],
            [
                "name" => "Tomepampa",
                "province_id" => 42,
            ],
            [
                "name" => "Toro",
                "province_id" => 42,
            ],
            [
                "name" => "Ayacucho",
                "province_id" => 43,
            ],
            [
                "name" => "Acocro",
                "province_id" => 43,
            ],
            [
                "name" => "Acos Vinchos",
                "province_id" => 43,
            ],
            [
                "name" => "Carmen Alto",
                "province_id" => 43,
            ],
            [
                "name" => "Chiara",
                "province_id" => 43,
            ],
            [
                "name" => "Ocros",
                "province_id" => 43,
            ],
            [
                "name" => "Pacaycasa",
                "province_id" => 43,
            ],
            [
                "name" => "Quinua",
                "province_id" => 43,
            ],
            [
                "name" => "San Jos" . $this->Utf8_ansi("\u00e9") . " de Ticllas",
                "province_id" => 43,
            ],
            [
                "name" => "San Juan Bautista",
                "province_id" => 43,
            ],
            [
                "name" => "Santiago de Pischa",
                "province_id" => 43,
            ],
            [
                "name" => "Socos",
                "province_id" => 43,
            ],
            [
                "name" => "Tambillo",
                "province_id" => 43,
            ],
            [
                "name" => "Vinchos",
                "province_id" => 43,
            ],
            [
                "name" => "Jes" . $this->Utf8_ansi("\u00fa") . "s Nazareno",
                "province_id" => 43,
            ],
            [
                "name" => "Andr" . $this->Utf8_ansi("\u00e9") . "s Avelino C" . $this->Utf8_ansi("\u00e1") . "ceres Dorregaray",
                "province_id" => 43,
            ],
            [
                "name" => "Cangallo",
                "province_id" => 44,
            ],
            [
                "name" => "Chuschi",
                "province_id" => 44,
            ],
            [
                "name" => "Los Morochucos",
                "province_id" => 44,
            ],
            [
                "name" => "Mar" . $this->Utf8_ansi("\u00ed") . "a Parado de Bellido",
                "province_id" => 44,
            ],
            [
                "name" => "Paras",
                "province_id" => 44,
            ],
            [
                "name" => "Totos",
                "province_id" => 44,
            ],
            [
                "name" => "Sancos",
                "province_id" => 45,
            ],
            [
                "name" => "Carapo",
                "province_id" => 45,
            ],
            [
                "name" => "Sacsamarca",
                "province_id" => 45,
            ],
            [
                "name" => "Santiago de Lucanamarca",
                "province_id" => 45,
            ],
            [
                "name" => "Huanta",
                "province_id" => 46,
            ],
            [
                "name" => "Ayahuanco",
                "province_id" => 46,
            ],
            [
                "name" => "Huamanguilla",
                "province_id" => 46,
            ],
            [
                "name" => "Iguain",
                "province_id" => 46,
            ],
            [
                "name" => "Luricocha",
                "province_id" => 46,
            ],
            [
                "name" => "Santillana",
                "province_id" => 46,
            ],
            [
                "name" => "Sivia",
                "province_id" => 46,
            ],
            [
                "name" => "Llochegua",
                "province_id" => 46,
            ],
            [
                "name" => "Canayre",
                "province_id" => 46,
            ],
            [
                "name" => "Uchuraccay",
                "province_id" => 46,
            ],
            [
                "name" => "Pucacolpa",
                "province_id" => 46,
            ],
            [
                "name" => "Chaca",
                "province_id" => 46,
            ],
            [
                "name" => "San Miguel",
                "province_id" => 47,
            ],
            [
                "name" => "Anco",
                "province_id" => 47,
            ],
            [
                "name" => "Ayna",
                "province_id" => 47,
            ],
            [
                "name" => "Chilcas",
                "province_id" => 47,
            ],
            [
                "name" => "Chungui",
                "province_id" => 47,
            ],
            [
                "name" => "Luis Carranza",
                "province_id" => 47,
            ],
            [
                "name" => "Santa Rosa",
                "province_id" => 47,
            ],
            [
                "name" => "Tambo",
                "province_id" => 47,
            ],
            [
                "name" => "Samugari",
                "province_id" => 47,
            ],
            [
                "name" => "Anchihuay",
                "province_id" => 47,
            ],
            [
                "name" => "Oronccoy",
                "province_id" => 47,
            ],
            [
                "name" => "Puquio",
                "province_id" => 48,
            ],
            [
                "name" => "Aucara",
                "province_id" => 48,
            ],
            [
                "name" => "Cabana",
                "province_id" => 48,
            ],
            [
                "name" => "Carmen Salcedo",
                "province_id" => 48,
            ],
            [
                "name" => "Chavi" . $this->Utf8_ansi("\u00f1") . "a",
                "province_id" => 48,
            ],
            [
                "name" => "Chipao",
                "province_id" => 48,
            ],
            [
                "name" => "Huac-Huas",
                "province_id" => 48,
            ],
            [
                "name" => "Laramate",
                "province_id" => 48,
            ],
            [
                "name" => "Leoncio Prado",
                "province_id" => 48,
            ],
            [
                "name" => "Llauta",
                "province_id" => 48,
            ],
            [
                "name" => "Lucanas",
                "province_id" => 48,
            ],
            [
                "name" => "Oca" . $this->Utf8_ansi("\u00f1") . "a",
                "province_id" => 48,
            ],
            [
                "name" => "Otoca",
                "province_id" => 48,
            ],
            [
                "name" => "Saisa",
                "province_id" => 48,
            ],
            [
                "name" => "San Crist" . $this->Utf8_ansi("\u00f3") . "bal",
                "province_id" => 48,
            ],
            [
                "name" => "San Juan",
                "province_id" => 48,
            ],
            [
                "name" => "San Pedro",
                "province_id" => 48,
            ],
            [
                "name" => "San Pedro de Palco",
                "province_id" => 48,
            ],
            [
                "name" => "Sancos",
                "province_id" => 48,
            ],
            [
                "name" => "Santa Ana de Huaycahuacho",
                "province_id" => 48,
            ],
            [
                "name" => "Santa Lucia",
                "province_id" => 48,
            ],
            [
                "name" => "Coracora",
                "province_id" => 49,
            ],
            [
                "name" => "Chumpi",
                "province_id" => 49,
            ],
            [
                "name" => "Coronel Casta" . $this->Utf8_ansi("\u00f1") . "eda",
                "province_id" => 49,
            ],
            [
                "name" => "Pacapausa",
                "province_id" => 49,
            ],
            [
                "name" => "Pullo",
                "province_id" => 49,
            ],
            [
                "name" => "Puyusca",
                "province_id" => 49,
            ],
            [
                "name" => "San Francisco de Ravacayco",
                "province_id" => 49,
            ],
            [
                "name" => "Upahuacho",
                "province_id" => 49,
            ],
            [
                "name" => "Pausa",
                "province_id" => 50,
            ],
            [
                "name" => "Colta",
                "province_id" => 50,
            ],
            [
                "name" => "Corculla",
                "province_id" => 50,
            ],
            [
                "name" => "Lampa",
                "province_id" => 50,
            ],
            [
                "name" => "Marcabamba",
                "province_id" => 50,
            ],
            [
                "name" => "Oyolo",
                "province_id" => 50,
            ],
            [
                "name" => "Pararca",
                "province_id" => 50,
            ],
            [
                "name" => "San Javier de Alpabamba",
                "province_id" => 50,
            ],
            [
                "name" => "San Jos" . $this->Utf8_ansi("\u00e9") . " de Ushua",
                "province_id" => 50,
            ],
            [
                "name" => "Sara Sara",
                "province_id" => 50,
            ],
            [
                "name" => "Querobamba",
                "province_id" => 51,
            ],
            [
                "name" => "Bel" . $this->Utf8_ansi("\u00e9") . "n",
                "province_id" => 51,
            ],
            [
                "name" => "Chalcos",
                "province_id" => 51,
            ],
            [
                "name" => "Chilcayoc",
                "province_id" => 51,
            ],
            [
                "name" => "Huaca" . $this->Utf8_ansi("\u00f1") . "a",
                "province_id" => 51,
            ],
            [
                "name" => "Morcolla",
                "province_id" => 51,
            ],
            [
                "name" => "Paico",
                "province_id" => 51,
            ],
            [
                "name" => "San Pedro de Larcay",
                "province_id" => 51,
            ],
            [
                "name" => "San Salvador de Quije",
                "province_id" => 51,
            ],
            [
                "name" => "Santiago de Paucaray",
                "province_id" => 51,
            ],
            [
                "name" => "Soras",
                "province_id" => 51,
            ],
            [
                "name" => "Huancapi",
                "province_id" => 52,
            ],
            [
                "name" => "Alcamenca",
                "province_id" => 52,
            ],
            [
                "name" => "Apongo",
                "province_id" => 52,
            ],
            [
                "name" => "Asquipata",
                "province_id" => 52,
            ],
            [
                "name" => "Canaria",
                "province_id" => 52,
            ],
            [
                "name" => "Cayara",
                "province_id" => 52,
            ],
            [
                "name" => "Colca",
                "province_id" => 52,
            ],
            [
                "name" => "Huamanquiquia",
                "province_id" => 52,
            ],
            [
                "name" => "Huancaraylla",
                "province_id" => 52,
            ],
            [
                "name" => "Hualla",
                "province_id" => 52,
            ],
            [
                "name" => "Sarhua",
                "province_id" => 52,
            ],
            [
                "name" => "Vilcanchos",
                "province_id" => 52,
            ],
            [
                "name" => "Vilcas Huaman",
                "province_id" => 53,
            ],
            [
                "name" => "Accomarca",
                "province_id" => 53,
            ],
            [
                "name" => "Carhuanca",
                "province_id" => 53,
            ],
            [
                "name" => "Concepci" . $this->Utf8_ansi("\u00f3") . "n",
                "province_id" => 53,
            ],
            [
                "name" => "Huambalpa",
                "province_id" => 53,
            ],
            [
                "name" => "Independencia",
                "province_id" => 53,
            ],
            [
                "name" => "Saurama",
                "province_id" => 53,
            ],
            [
                "name" => "Vischongo",
                "province_id" => 53,
            ],
            [
                "name" => "Cajamarca",
                "province_id" => 54,
            ],
            [
                "name" => "Asunci" . $this->Utf8_ansi("\u00f3") . "n",
                "province_id" => 54,
            ],
            [
                "name" => "Chetilla",
                "province_id" => 54,
            ],
            [
                "name" => "Cospan",
                "province_id" => 54,
            ],
            [
                "name" => "Enca" . $this->Utf8_ansi("\u00f1") . "ada",
                "province_id" => 54,
            ],
            [
                "name" => "Jes" . $this->Utf8_ansi("\u00fa") . "s",
                "province_id" => 54,
            ],
            [
                "name" => "Llacanora",
                "province_id" => 54,
            ],
            [
                "name" => "Los Ba" . $this->Utf8_ansi("\u00f1") . "os del Inca",
                "province_id" => 54,
            ],
            [
                "name" => "Magdalena",
                "province_id" => 54,
            ],
            [
                "name" => "Matara",
                "province_id" => 54,
            ],
            [
                "name" => "Namora",
                "province_id" => 54,
            ],
            [
                "name" => "San Juan",
                "province_id" => 54,
            ],
            [
                "name" => "Cajabamba",
                "province_id" => 55,
            ],
            [
                "name" => "Cachachi",
                "province_id" => 55,
            ],
            [
                "name" => "Condebamba",
                "province_id" => 55,
            ],
            [
                "name" => "Sitacocha",
                "province_id" => 55,
            ],
            [
                "name" => "Celend" . $this->Utf8_ansi("\u00ed") . "n",
                "province_id" => 56,
            ],
            [
                "name" => "Chumuch",
                "province_id" => 56,
            ],
            [
                "name" => "Cortegana",
                "province_id" => 56,
            ],
            [
                "name" => "Huasmin",
                "province_id" => 56,
            ],
            [
                "name" => "Jorge Ch" . $this->Utf8_ansi("\u00e1") . "vez",
                "province_id" => 56,
            ],
            [
                "name" => "Jos" . $this->Utf8_ansi("\u00e9") . " G" . $this->Utf8_ansi("\u00e1") . "lvez",
                "province_id" => 56,
            ],
            [
                "name" => "Miguel Iglesias",
                "province_id" => 56,
            ],
            [
                "name" => "Oxamarca",
                "province_id" => 56,
            ],
            [
                "name" => "Sorochuco",
                "province_id" => 56,
            ],
            [
                "name" => "Sucre",
                "province_id" => 56,
            ],
            [
                "name" => "Utco",
                "province_id" => 56,
            ],
            [
                "name" => "La Libertad de Pallan",
                "province_id" => 56,
            ],
            [
                "name" => "Chota",
                "province_id" => 57,
            ],
            [
                "name" => "Anguia",
                "province_id" => 57,
            ],
            [
                "name" => "Chadin",
                "province_id" => 57,
            ],
            [
                "name" => "Chiguirip",
                "province_id" => 57,
            ],
            [
                "name" => "Chimban",
                "province_id" => 57,
            ],
            [
                "name" => "Choropampa",
                "province_id" => 57,
            ],
            [
                "name" => "Cochabamba",
                "province_id" => 57,
            ],
            [
                "name" => "Conchan",
                "province_id" => 57,
            ],
            [
                "name" => "Huambos",
                "province_id" => 57,
            ],
            [
                "name" => "Lajas",
                "province_id" => 57,
            ],
            [
                "name" => "Llama",
                "province_id" => 57,
            ],
            [
                "name" => "Miracosta",
                "province_id" => 57,
            ],
            [
                "name" => "Paccha",
                "province_id" => 57,
            ],
            [
                "name" => "Pion",
                "province_id" => 57,
            ],
            [
                "name" => "Querocoto",
                "province_id" => 57,
            ],
            [
                "name" => "San Juan de Licupis",
                "province_id" => 57,
            ],
            [
                "name" => "Tacabamba",
                "province_id" => 57,
            ],
            [
                "name" => "Tocmoche",
                "province_id" => 57,
            ],
            [
                "name" => "Chalamarca",
                "province_id" => 57,
            ],
            [
                "name" => "Contumaza",
                "province_id" => 58,
            ],
            [
                "name" => "Chilete",
                "province_id" => 58,
            ],
            [
                "name" => "Cupisnique",
                "province_id" => 58,
            ],
            [
                "name" => "Guzmango",
                "province_id" => 58,
            ],
            [
                "name" => "San Benito",
                "province_id" => 58,
            ],
            [
                "name" => "Santa Cruz de Toledo",
                "province_id" => 58,
            ],
            [
                "name" => "Tantarica",
                "province_id" => 58,
            ],
            [
                "name" => "Yonan",
                "province_id" => 58,
            ],
            [
                "name" => "Cutervo",
                "province_id" => 59,
            ],
            [
                "name" => "Callayuc",
                "province_id" => 59,
            ],
            [
                "name" => "Choros",
                "province_id" => 59,
            ],
            [
                "name" => "Cujillo",
                "province_id" => 59,
            ],
            [
                "name" => "La Ramada",
                "province_id" => 59,
            ],
            [
                "name" => "Pimpingos",
                "province_id" => 59,
            ],
            [
                "name" => "Querocotillo",
                "province_id" => 59,
            ],
            [
                "name" => "San Andr" . $this->Utf8_ansi("\u00e9") . "s de Cutervo",
                "province_id" => 59,
            ],
            [
                "name" => "San Juan de Cutervo",
                "province_id" => 59,
            ],
            [
                "name" => "San Luis de Lucma",
                "province_id" => 59,
            ],
            [
                "name" => "Santa Cruz",
                "province_id" => 59,
            ],
            [
                "name" => "Santo Domingo de la Capilla",
                "province_id" => 59,
            ],
            [
                "name" => "Santo Tomas",
                "province_id" => 59,
            ],
            [
                "name" => "Socota",
                "province_id" => 59,
            ],
            [
                "name" => "Toribio Casanova",
                "province_id" => 59,
            ],
            [
                "name" => "Bambamarca",
                "province_id" => 60,
            ],
            [
                "name" => "Chugur",
                "province_id" => 60,
            ],
            [
                "name" => "Hualgayoc",
                "province_id" => 60,
            ],
            [
                "name" => "Ja" . $this->Utf8_ansi("\u00e9") . "n",
                "province_id" => 61,
            ],
            [
                "name" => "Bellavista",
                "province_id" => 61,
            ],
            [
                "name" => "Chontali",
                "province_id" => 61,
            ],
            [
                "name" => "Colasay",
                "province_id" => 61,
            ],
            [
                "name" => "Huabal",
                "province_id" => 61,
            ],
            [
                "name" => "Las Pirias",
                "province_id" => 61,
            ],
            [
                "name" => "Pomahuaca",
                "province_id" => 61,
            ],
            [
                "name" => "Pucara",
                "province_id" => 61,
            ],
            [
                "name" => "Sallique",
                "province_id" => 61,
            ],
            [
                "name" => "San Felipe",
                "province_id" => 61,
            ],
            [
                "name" => "San Jos" . $this->Utf8_ansi("\u00e9") . " del Alto",
                "province_id" => 61,
            ],
            [
                "name" => "Santa Rosa",
                "province_id" => 61,
            ],
            [
                "name" => "San Ignacio",
                "province_id" => 62,
            ],
            [
                "name" => "Chirinos",
                "province_id" => 62,
            ],
            [
                "name" => "Huarango",
                "province_id" => 62,
            ],
            [
                "name" => "La Coipa",
                "province_id" => 62,
            ],
            [
                "name" => "Namballe",
                "province_id" => 62,
            ],
            [
                "name" => "San Jos" . $this->Utf8_ansi("\u00e9") . " de Lourdes",
                "province_id" => 62,
            ],
            [
                "name" => "Tabaconas",
                "province_id" => 62,
            ],
            [
                "name" => "Pedro G" . $this->Utf8_ansi("\u00e1") . "lvez",
                "province_id" => 63,
            ],
            [
                "name" => "Chancay",
                "province_id" => 63,
            ],
            [
                "name" => "Eduardo Villanueva",
                "province_id" => 63,
            ],
            [
                "name" => "Gregorio Pita",
                "province_id" => 63,
            ],
            [
                "name" => "Ichocan",
                "province_id" => 63,
            ],
            [
                "name" => "Jos" . $this->Utf8_ansi("\u00e9") . " Manuel Quiroz",
                "province_id" => 63,
            ],
            [
                "name" => "Jos" . $this->Utf8_ansi("\u00e9") . " Sabogal",
                "province_id" => 63,
            ],
            [
                "name" => "San Miguel",
                "province_id" => 64,
            ],
            [
                "name" => "Bol" . $this->Utf8_ansi("\u00ed") . "var",
                "province_id" => 64,
            ],
            [
                "name" => "Calquis",
                "province_id" => 64,
            ],
            [
                "name" => "Catilluc",
                "province_id" => 64,
            ],
            [
                "name" => "El Prado",
                "province_id" => 64,
            ],
            [
                "name" => "La Florida",
                "province_id" => 64,
            ],
            [
                "name" => "Llapa",
                "province_id" => 64,
            ],
            [
                "name" => "Nanchoc",
                "province_id" => 64,
            ],
            [
                "name" => "Niepos",
                "province_id" => 64,
            ],
            [
                "name" => "San Gregorio",
                "province_id" => 64,
            ],
            [
                "name" => "San Silvestre de Cochan",
                "province_id" => 64,
            ],
            [
                "name" => "Tongod",
                "province_id" => 64,
            ],
            [
                "name" => "Uni" . $this->Utf8_ansi("\u00f3") . "n Agua Blanca",
                "province_id" => 64,
            ],
            [
                "name" => "San Pablo",
                "province_id" => 65,
            ],
            [
                "name" => "San Bernardino",
                "province_id" => 65,
            ],
            [
                "name" => "San Luis",
                "province_id" => 65,
            ],
            [
                "name" => "Tumbaden",
                "province_id" => 65,
            ],
            [
                "name" => "Santa Cruz",
                "province_id" => 66,
            ],
            [
                "name" => "Andabamba",
                "province_id" => 66,
            ],
            [
                "name" => "Catache",
                "province_id" => 66,
            ],
            [
                "name" => "Chancayba" . $this->Utf8_ansi("\u00f1") . "os",
                "province_id" => 66,
            ],
            [
                "name" => "La Esperanza",
                "province_id" => 66,
            ],
            [
                "name" => "Ninabamba",
                "province_id" => 66,
            ],
            [
                "name" => "Pulan",
                "province_id" => 66,
            ],
            [
                "name" => "Saucepampa",
                "province_id" => 66,
            ],
            [
                "name" => "Sexi",
                "province_id" => 66,
            ],
            [
                "name" => "Uticyacu",
                "province_id" => 66,
            ],
            [
                "name" => "Yauyucan",
                "province_id" => 66,
            ],
            [
                "name" => "Callao",
                "province_id" => 67,
            ],
            [
                "name" => "Bellavista",
                "province_id" => 67,
            ],
            [
                "name" => "Carmen de la Legua Reynoso",
                "province_id" => 67,
            ],
            [
                "name" => "La Perla",
                "province_id" => 67,
            ],
            [
                "name" => "La Punta",
                "province_id" => 67,
            ],
            [
                "name" => "Ventanilla",
                "province_id" => 67,
            ],
            [
                "name" => "Mi Per" . $this->Utf8_ansi("\u00fa") . "",
                "province_id" => 67,
            ],
            [
                "name" => "Cusco",
                "province_id" => 68,
            ],
            [
                "name" => "Ccorca",
                "province_id" => 68,
            ],
            [
                "name" => "Poroy",
                "province_id" => 68,
            ],
            [
                "name" => "San Jer" . $this->Utf8_ansi("\u00f3") . "nimo",
                "province_id" => 68,
            ],
            [
                "name" => "San Sebastian",
                "province_id" => 68,
            ],
            [
                "name" => "Santiago",
                "province_id" => 68,
            ],
            [
                "name" => "Saylla",
                "province_id" => 68,
            ],
            [
                "name" => "Wanchaq",
                "province_id" => 68,
            ],
            [
                "name" => "Acomayo",
                "province_id" => 69,
            ],
            [
                "name" => "Acopia",
                "province_id" => 69,
            ],
            [
                "name" => "Acos",
                "province_id" => 69,
            ],
            [
                "name" => "Mosoc Llacta",
                "province_id" => 69,
            ],
            [
                "name" => "Pomacanchi",
                "province_id" => 69,
            ],
            [
                "name" => "Rondocan",
                "province_id" => 69,
            ],
            [
                "name" => "Sangarara",
                "province_id" => 69,
            ],
            [
                "name" => "Anta",
                "province_id" => 70,
            ],
            [
                "name" => "Ancahuasi",
                "province_id" => 70,
            ],
            [
                "name" => "Cachimayo",
                "province_id" => 70,
            ],
            [
                "name" => "Chinchaypujio",
                "province_id" => 70,
            ],
            [
                "name" => "Huarocondo",
                "province_id" => 70,
            ],
            [
                "name" => "Limatambo",
                "province_id" => 70,
            ],
            [
                "name" => "Mollepata",
                "province_id" => 70,
            ],
            [
                "name" => "Pucyura",
                "province_id" => 70,
            ],
            [
                "name" => "Zurite",
                "province_id" => 70,
            ],
            [
                "name" => "Calca",
                "province_id" => 71,
            ],
            [
                "name" => "Coya",
                "province_id" => 71,
            ],
            [
                "name" => "Lamay",
                "province_id" => 71,
            ],
            [
                "name" => "Lares",
                "province_id" => 71,
            ],
            [
                "name" => "Pisac",
                "province_id" => 71,
            ],
            [
                "name" => "San Salvador",
                "province_id" => 71,
            ],
            [
                "name" => "Taray",
                "province_id" => 71,
            ],
            [
                "name" => "Yanatile",
                "province_id" => 71,
            ],
            [
                "name" => "Yanaoca",
                "province_id" => 72,
            ],
            [
                "name" => "Checca",
                "province_id" => 72,
            ],
            [
                "name" => "Kunturkanki",
                "province_id" => 72,
            ],
            [
                "name" => "Langui",
                "province_id" => 72,
            ],
            [
                "name" => "Layo",
                "province_id" => 72,
            ],
            [
                "name" => "Pampamarca",
                "province_id" => 72,
            ],
            [
                "name" => "Quehue",
                "province_id" => 72,
            ],
            [
                "name" => "Tupac Amaru",
                "province_id" => 72,
            ],
            [
                "name" => "Sicuani",
                "province_id" => 73,
            ],
            [
                "name" => "Checacupe",
                "province_id" => 73,
            ],
            [
                "name" => "Combapata",
                "province_id" => 73,
            ],
            [
                "name" => "Marangani",
                "province_id" => 73,
            ],
            [
                "name" => "Pitumarca",
                "province_id" => 73,
            ],
            [
                "name" => "San Pablo",
                "province_id" => 73,
            ],
            [
                "name" => "San Pedro",
                "province_id" => 73,
            ],
            [
                "name" => "Tinta",
                "province_id" => 73,
            ],
            [
                "name" => "Santo Tomas",
                "province_id" => 74,
            ],
            [
                "name" => "Capacmarca",
                "province_id" => 74,
            ],
            [
                "name" => "Chamaca",
                "province_id" => 74,
            ],
            [
                "name" => "Colquemarca",
                "province_id" => 74,
            ],
            [
                "name" => "Livitaca",
                "province_id" => 74,
            ],
            [
                "name" => "Llusco",
                "province_id" => 74,
            ],
            [
                "name" => "Qui" . $this->Utf8_ansi("\u00f1") . "ota",
                "province_id" => 74,
            ],
            [
                "name" => "Velille",
                "province_id" => 74,
            ],
            [
                "name" => "Espinar",
                "province_id" => 75,
            ],
            [
                "name" => "Condoroma",
                "province_id" => 75,
            ],
            [
                "name" => "Coporaque",
                "province_id" => 75,
            ],
            [
                "name" => "Ocoruro",
                "province_id" => 75,
            ],
            [
                "name" => "Pallpata",
                "province_id" => 75,
            ],
            [
                "name" => "Pichigua",
                "province_id" => 75,
            ],
            [
                "name" => "Suyckutambo",
                "province_id" => 75,
            ],
            [
                "name" => "Alto Pichigua",
                "province_id" => 75,
            ],
            [
                "name" => "Santa Ana",
                "province_id" => 76,
            ],
            [
                "name" => "Echarate",
                "province_id" => 76,
            ],
            [
                "name" => "Huayopata",
                "province_id" => 76,
            ],
            [
                "name" => "Maranura",
                "province_id" => 76,
            ],
            [
                "name" => "Ocobamba",
                "province_id" => 76,
            ],
            [
                "name" => "Quellouno",
                "province_id" => 76,
            ],
            [
                "name" => "Kimbiri",
                "province_id" => 76,
            ],
            [
                "name" => "Santa Teresa",
                "province_id" => 76,
            ],
            [
                "name" => "Vilcabamba",
                "province_id" => 76,
            ],
            [
                "name" => "Pichari",
                "province_id" => 76,
            ],
            [
                "name" => "Inkawasi",
                "province_id" => 76,
            ],
            [
                "name" => "Villa Virgen",
                "province_id" => 76,
            ],
            [
                "name" => "Villa Kintiarina",
                "province_id" => 76,
            ],
            [
                "name" => "Megantoni",
                "province_id" => 76,
            ],
            [
                "name" => "Paruro",
                "province_id" => 77,
            ],
            [
                "name" => "Accha",
                "province_id" => 77,
            ],
            [
                "name" => "Ccapi",
                "province_id" => 77,
            ],
            [
                "name" => "Colcha",
                "province_id" => 77,
            ],
            [
                "name" => "Huanoquite",
                "province_id" => 77,
            ],
            [
                "name" => "Omacha" . $this->Utf8_ansi("\u00e7") . "",
                "province_id" => 77,
            ],
            [
                "name" => "Paccaritambo",
                "province_id" => 77,
            ],
            [
                "name" => "Pillpinto",
                "province_id" => 77,
            ],
            [
                "name" => "Yaurisque",
                "province_id" => 77,
            ],
            [
                "name" => "Paucartambo",
                "province_id" => 78,
            ],
            [
                "name" => "Caicay",
                "province_id" => 78,
            ],
            [
                "name" => "Challabamba",
                "province_id" => 78,
            ],
            [
                "name" => "Colquepata",
                "province_id" => 78,
            ],
            [
                "name" => "Huancarani",
                "province_id" => 78,
            ],
            [
                "name" => "Kos" . $this->Utf8_ansi("\u00f1") . "ipata",
                "province_id" => 78,
            ],
            [
                "name" => "Urcos",
                "province_id" => 79,
            ],
            [
                "name" => "Andahuaylillas",
                "province_id" => 79,
            ],
            [
                "name" => "Camanti",
                "province_id" => 79,
            ],
            [
                "name" => "Ccarhuayo",
                "province_id" => 79,
            ],
            [
                "name" => "Ccatca",
                "province_id" => 79,
            ],
            [
                "name" => "Cusipata",
                "province_id" => 79,
            ],
            [
                "name" => "Huaro",
                "province_id" => 79,
            ],
            [
                "name" => "Lucre",
                "province_id" => 79,
            ],
            [
                "name" => "Marcapata",
                "province_id" => 79,
            ],
            [
                "name" => "Ocongate",
                "province_id" => 79,
            ],
            [
                "name" => "Oropesa",
                "province_id" => 79,
            ],
            [
                "name" => "Quiquijana",
                "province_id" => 79,
            ],
            [
                "name" => "Urubamba",
                "province_id" => 80,
            ],
            [
                "name" => "Chinchero",
                "province_id" => 80,
            ],
            [
                "name" => "Huayllabamba",
                "province_id" => 80,
            ],
            [
                "name" => "Machupicchu",
                "province_id" => 80,
            ],
            [
                "name" => "Maras",
                "province_id" => 80,
            ],
            [
                "name" => "Ollantaytambo",
                "province_id" => 80,
            ],
            [
                "name" => "Yucay",
                "province_id" => 80,
            ],
            [
                "name" => "Huancavelica",
                "province_id" => 81,
            ],
            [
                "name" => "Acobambilla",
                "province_id" => 81,
            ],
            [
                "name" => "Acoria",
                "province_id" => 81,
            ],
            [
                "name" => "Conayca",
                "province_id" => 81,
            ],
            [
                "name" => "Cuenca",
                "province_id" => 81,
            ],
            [
                "name" => "Huachocolpa",
                "province_id" => 81,
            ],
            [
                "name" => "Huayllahuara",
                "province_id" => 81,
            ],
            [
                "name" => "Izcuchaca",
                "province_id" => 81,
            ],
            [
                "name" => "Laria",
                "province_id" => 81,
            ],
            [
                "name" => "Manta",
                "province_id" => 81,
            ],
            [
                "name" => "Mariscal C" . $this->Utf8_ansi("\u00e1") . "ceres",
                "province_id" => 81,
            ],
            [
                "name" => "Moya",
                "province_id" => 81,
            ],
            [
                "name" => "Nuevo Occoro",
                "province_id" => 81,
            ],
            [
                "name" => "Palca",
                "province_id" => 81,
            ],
            [
                "name" => "Pilchaca",
                "province_id" => 81,
            ],
            [
                "name" => "Vilca",
                "province_id" => 81,
            ],
            [
                "name" => "Yauli",
                "province_id" => 81,
            ],
            [
                "name" => "Ascensi" . $this->Utf8_ansi("\u00f3") . "n",
                "province_id" => 81,
            ],
            [
                "name" => "Huando",
                "province_id" => 81,
            ],
            [
                "name" => "Acobamba",
                "province_id" => 82,
            ],
            [
                "name" => "Andabamba",
                "province_id" => 82,
            ],
            [
                "name" => "Anta",
                "province_id" => 82,
            ],
            [
                "name" => "Caja",
                "province_id" => 82,
            ],
            [
                "name" => "Marcas",
                "province_id" => 82,
            ],
            [
                "name" => "Paucara",
                "province_id" => 82,
            ],
            [
                "name" => "Pomacocha",
                "province_id" => 82,
            ],
            [
                "name" => "Rosario",
                "province_id" => 82,
            ],
            [
                "name" => "Lircay",
                "province_id" => 83,
            ],
            [
                "name" => "Anchonga",
                "province_id" => 83,
            ],
            [
                "name" => "Callanmarca",
                "province_id" => 83,
            ],
            [
                "name" => "Ccochaccasa",
                "province_id" => 83,
            ],
            [
                "name" => "Chincho",
                "province_id" => 83,
            ],
            [
                "name" => "Congalla",
                "province_id" => 83,
            ],
            [
                "name" => "Huanca-Huanca",
                "province_id" => 83,
            ],
            [
                "name" => "Huayllay Grande",
                "province_id" => 83,
            ],
            [
                "name" => "Julcamarca",
                "province_id" => 83,
            ],
            [
                "name" => "San Antonio de Antaparco",
                "province_id" => 83,
            ],
            [
                "name" => "Santo Tomas de Pata",
                "province_id" => 83,
            ],
            [
                "name" => "Secclla",
                "province_id" => 83,
            ],
            [
                "name" => "Castrovirreyna",
                "province_id" => 84,
            ],
            [
                "name" => "Arma",
                "province_id" => 84,
            ],
            [
                "name" => "Aurahua",
                "province_id" => 84,
            ],
            [
                "name" => "Capillas",
                "province_id" => 84,
            ],
            [
                "name" => "Chupamarca",
                "province_id" => 84,
            ],
            [
                "name" => "Cocas",
                "province_id" => 84,
            ],
            [
                "name" => "Huachos",
                "province_id" => 84,
            ],
            [
                "name" => "Huamatambo",
                "province_id" => 84,
            ],
            [
                "name" => "Mollepampa",
                "province_id" => 84,
            ],
            [
                "name" => "San Juan",
                "province_id" => 84,
            ],
            [
                "name" => "Santa Ana",
                "province_id" => 84,
            ],
            [
                "name" => "Tantara",
                "province_id" => 84,
            ],
            [
                "name" => "Ticrapo",
                "province_id" => 84,
            ],
            [
                "name" => "Churcampa",
                "province_id" => 85,
            ],
            [
                "name" => "Anco",
                "province_id" => 85,
            ],
            [
                "name" => "Chinchihuasi",
                "province_id" => 85,
            ],
            [
                "name" => "El Carmen",
                "province_id" => 85,
            ],
            [
                "name" => "La Merced",
                "province_id" => 85,
            ],
            [
                "name" => "Locroja",
                "province_id" => 85,
            ],
            [
                "name" => "Paucarbamba",
                "province_id" => 85,
            ],
            [
                "name" => "San Miguel de Mayocc",
                "province_id" => 85,
            ],
            [
                "name" => "San Pedro de Coris",
                "province_id" => 85,
            ],
            [
                "name" => "Pachamarca",
                "province_id" => 85,
            ],
            [
                "name" => "Cosme",
                "province_id" => 85,
            ],
            [
                "name" => "Huaytara",
                "province_id" => 86,
            ],
            [
                "name" => "Ayavi",
                "province_id" => 86,
            ],
            [
                "name" => "C" . $this->Utf8_ansi("\u00f3") . "rdova",
                "province_id" => 86,
            ],
            [
                "name" => "Huayacundo Arma",
                "province_id" => 86,
            ],
            [
                "name" => "Laramarca",
                "province_id" => 86,
            ],
            [
                "name" => "Ocoyo",
                "province_id" => 86,
            ],
            [
                "name" => "Pilpichaca",
                "province_id" => 86,
            ],
            [
                "name" => "Querco",
                "province_id" => 86,
            ],
            [
                "name" => "Quito-Arma",
                "province_id" => 86,
            ],
            [
                "name" => "San Antonio de Cusicancha",
                "province_id" => 86,
            ],
            [
                "name" => "San Francisco de Sangayaico",
                "province_id" => 86,
            ],
            [
                "name" => "San Isidro",
                "province_id" => 86,
            ],
            [
                "name" => "Santiago de Chocorvos",
                "province_id" => 86,
            ],
            [
                "name" => "Santiago de Quirahuara",
                "province_id" => 86,
            ],
            [
                "name" => "Santo Domingo de Capillas",
                "province_id" => 86,
            ],
            [
                "name" => "Tambo",
                "province_id" => 86,
            ],
            [
                "name" => "Pampas",
                "province_id" => 87,
            ],
            [
                "name" => "Acostambo",
                "province_id" => 87,
            ],
            [
                "name" => "Acraquia",
                "province_id" => 87,
            ],
            [
                "name" => "Ahuaycha",
                "province_id" => 87,
            ],
            [
                "name" => "Colcabamba",
                "province_id" => 87,
            ],
            [
                "name" => "Daniel Hern" . $this->Utf8_ansi("\u00e1") . "ndez",
                "province_id" => 87,
            ],
            [
                "name" => "Huachocolpa",
                "province_id" => 87,
            ],
            [
                "name" => "Huaribamba",
                "province_id" => 87,
            ],
            [
                "name" => $this->Utf8_ansi("\u00d1") . "ahuimpuquio",
                "province_id" => 87,
            ],
            [
                "name" => "Pazos",
                "province_id" => 87,
            ],
            [
                "name" => "Quishuar",
                "province_id" => 87,
            ],
            [
                "name" => "Salcabamba",
                "province_id" => 87,
            ],
            [
                "name" => "Salcahuasi",
                "province_id" => 87,
            ],
            [
                "name" => "San Marcos de Rocchac",
                "province_id" => 87,
            ],
            [
                "name" => "Surcubamba",
                "province_id" => 87,
            ],
            [
                "name" => "Tintay Puncu",
                "province_id" => 87,
            ],
            [
                "name" => "Quichuas",
                "province_id" => 87,
            ],
            [
                "name" => "Andaymarca",
                "province_id" => 87,
            ],
            [
                "name" => "Roble",
                "province_id" => 87,
            ],
            [
                "name" => "Pichos",
                "province_id" => 87,
            ],
            [
                "name" => "Santiago de Tucuma",
                "province_id" => 87,
            ],
            [
                "name" => "Huanuco",
                "province_id" => 88,
            ],
            [
                "name" => "Amarilis",
                "province_id" => 88,
            ],
            [
                "name" => "Chinchao",
                "province_id" => 88,
            ],
            [
                "name" => "Churubamba",
                "province_id" => 88,
            ],
            [
                "name" => "Margos",
                "province_id" => 88,
            ],
            [
                "name" => "Quisqui (Kichki)",
                "province_id" => 88,
            ],
            [
                "name" => "San Francisco de Cayran",
                "province_id" => 88,
            ],
            [
                "name" => "San Pedro de Chaulan",
                "province_id" => 88,
            ],
            [
                "name" => "Santa Mar" . $this->Utf8_ansi("\u00ed") . "a del Valle",
                "province_id" => 88,
            ],
            [
                "name" => "Yarumayo",
                "province_id" => 88,
            ],
            [
                "name" => "Pillco Marca",
                "province_id" => 88,
            ],
            [
                "name" => "Yacus",
                "province_id" => 88,
            ],
            [
                "name" => "San Pablo de Pillao",
                "province_id" => 88,
            ],
            [
                "name" => "Ambo",
                "province_id" => 89,
            ],
            [
                "name" => "Cayna",
                "province_id" => 89,
            ],
            [
                "name" => "Colpas",
                "province_id" => 89,
            ],
            [
                "name" => "Conchamarca",
                "province_id" => 89,
            ],
            [
                "name" => "Huacar",
                "province_id" => 89,
            ],
            [
                "name" => "San Francisco",
                "province_id" => 89,
            ],
            [
                "name" => "San Rafael",
                "province_id" => 89,
            ],
            [
                "name" => "Tomay Kichwa",
                "province_id" => 89,
            ],
            [
                "name" => "La Uni" . $this->Utf8_ansi("\u00f3") . "n",
                "province_id" => 90,
            ],
            [
                "name" => "Chuquis",
                "province_id" => 90,
            ],
            [
                "name" => "Mar" . $this->Utf8_ansi("\u00ed") . "as",
                "province_id" => 90,
            ],
            [
                "name" => "Pachas",
                "province_id" => 90,
            ],
            [
                "name" => "Quivilla",
                "province_id" => 90,
            ],
            [
                "name" => "Ripan",
                "province_id" => 90,
            ],
            [
                "name" => "Shunqui",
                "province_id" => 90,
            ],
            [
                "name" => "Sillapata",
                "province_id" => 90,
            ],
            [
                "name" => "Yanas",
                "province_id" => 90,
            ],
            [
                "name" => "Huacaybamba",
                "province_id" => 91,
            ],
            [
                "name" => "Canchabamba",
                "province_id" => 91,
            ],
            [
                "name" => "Cochabamba",
                "province_id" => 91,
            ],
            [
                "name" => "Pinra",
                "province_id" => 91,
            ],
            [
                "name" => "Llata",
                "province_id" => 92,
            ],
            [
                "name" => "Arancay",
                "province_id" => 92,
            ],
            [
                "name" => "Chav" . $this->Utf8_ansi("\u00ed") . "n de Pariarca",
                "province_id" => 92,
            ],
            [
                "name" => "Jacas Grande",
                "province_id" => 92,
            ],
            [
                "name" => "Jircan",
                "province_id" => 92,
            ],
            [
                "name" => "Miraflores",
                "province_id" => 92,
            ],
            [
                "name" => "Monz" . $this->Utf8_ansi("\u00f3") . "n",
                "province_id" => 92,
            ],
            [
                "name" => "Punchao",
                "province_id" => 92,
            ],
            [
                "name" => "Pu" . $this->Utf8_ansi("\u00f1") . "os",
                "province_id" => 92,
            ],
            [
                "name" => "Singa",
                "province_id" => 92,
            ],
            [
                "name" => "Tantamayo",
                "province_id" => 92,
            ],
            [
                "name" => "Rupa-Rupa",
                "province_id" => 93,
            ],
            [
                "name" => "Daniel Alom" . $this->Utf8_ansi("\u00ed") . "a Robles",
                "province_id" => 93,
            ],
            [
                "name" => "Herm" . $this->Utf8_ansi("\u00ed") . "lio Valdizan",
                "province_id" => 93,
            ],
            [
                "name" => "Jos" . $this->Utf8_ansi("\u00e9") . " Crespo y Castillo",
                "province_id" => 93,
            ],
            [
                "name" => "Luyando",
                "province_id" => 93,
            ],
            [
                "name" => "Mariano Damaso Beraun",
                "province_id" => 93,
            ],
            [
                "name" => "Pucayacu",
                "province_id" => 93,
            ],
            [
                "name" => "Castillo Grande",
                "province_id" => 93,
            ],
            [
                "name" => "Pueblo Nuevo",
                "province_id" => 93,
            ],
            [
                "name" => "Santo Domingo de Anda",
                "province_id" => 93,
            ],
            [
                "name" => "Huacrachuco",
                "province_id" => 94,
            ],
            [
                "name" => "Cholon",
                "province_id" => 94,
            ],
            [
                "name" => "San Buenaventura",
                "province_id" => 94,
            ],
            [
                "name" => "La Morada",
                "province_id" => 94,
            ],
            [
                "name" => "Santa Rosa de Alto Yanajanca",
                "province_id" => 94,
            ],
            [
                "name" => "Panao",
                "province_id" => 95,
            ],
            [
                "name" => "Chaglla",
                "province_id" => 95,
            ],
            [
                "name" => "Molino",
                "province_id" => 95,
            ],
            [
                "name" => "Umari",
                "province_id" => 95,
            ],
            [
                "name" => "Puerto Inca",
                "province_id" => 96,
            ],
            [
                "name" => "Codo del Pozuzo",
                "province_id" => 96,
            ],
            [
                "name" => "Honoria",
                "province_id" => 96,
            ],
            [
                "name" => "Tournavista",
                "province_id" => 96,
            ],
            [
                "name" => "Yuyapichis",
                "province_id" => 96,
            ],
            [
                "name" => "Jes" . $this->Utf8_ansi("\u00fa") . "s",
                "province_id" => 97,
            ],
            [
                "name" => "Ba" . $this->Utf8_ansi("\u00f1") . "os",
                "province_id" => 97,
            ],
            [
                "name" => "Jivia",
                "province_id" => 97,
            ],
            [
                "name" => "Queropalca",
                "province_id" => 97,
            ],
            [
                "name" => "Rondos",
                "province_id" => 97,
            ],
            [
                "name" => "San Francisco de As" . $this->Utf8_ansi("\u00ed") . "s",
                "province_id" => 97,
            ],
            [
                "name" => "San Miguel de Cauri",
                "province_id" => 97,
            ],
            [
                "name" => "Chavinillo",
                "province_id" => 98,
            ],
            [
                "name" => "Cahuac",
                "province_id" => 98,
            ],
            [
                "name" => "Chacabamba",
                "province_id" => 98,
            ],
            [
                "name" => "Aparicio Pomares",
                "province_id" => 98,
            ],
            [
                "name" => "Jacas Chico",
                "province_id" => 98,
            ],
            [
                "name" => "Obas",
                "province_id" => 98,
            ],
            [
                "name" => "Pampamarca",
                "province_id" => 98,
            ],
            [
                "name" => "Choras",
                "province_id" => 98,
            ],
            [
                "name" => "Ica",
                "province_id" => 99,
            ],
            [
                "name" => "La Tingui" . $this->Utf8_ansi("\u00f1") . "a",
                "province_id" => 99,
            ],
            [
                "name" => "Los Aquijes",
                "province_id" => 99,
            ],
            [
                "name" => "Ocucaje",
                "province_id" => 99,
            ],
            [
                "name" => "Pachacutec",
                "province_id" => 99,
            ],
            [
                "name" => "Parcona",
                "province_id" => 99,
            ],
            [
                "name" => "Pueblo Nuevo",
                "province_id" => 99,
            ],
            [
                "name" => "Salas",
                "province_id" => 99,
            ],
            [
                "name" => "San Jos" . $this->Utf8_ansi("\u00e9") . " de Los Molinos",
                "province_id" => 99,
            ],
            [
                "name" => "San Juan Bautista",
                "province_id" => 99,
            ],
            [
                "name" => "Santiago",
                "province_id" => 99,
            ],
            [
                "name" => "Subtanjalla",
                "province_id" => 99,
            ],
            [
                "name" => "Tate",
                "province_id" => 99,
            ],
            [
                "name" => "Yauca del Rosario",
                "province_id" => 99,
            ],
            [
                "name" => "Chincha Alta",
                "province_id" => 100,
            ],
            [
                "name" => "Alto Laran",
                "province_id" => 100,
            ],
            [
                "name" => "Chavin",
                "province_id" => 100,
            ],
            [
                "name" => "Chincha Baja",
                "province_id" => 100,
            ],
            [
                "name" => "El Carmen",
                "province_id" => 100,
            ],
            [
                "name" => "Grocio Prado",
                "province_id" => 100,
            ],
            [
                "name" => "Pueblo Nuevo",
                "province_id" => 100,
            ],
            [
                "name" => "San Juan de Yanac",
                "province_id" => 100,
            ],
            [
                "name" => "San Pedro de Huacarpana",
                "province_id" => 100,
            ],
            [
                "name" => "Sunampe",
                "province_id" => 100,
            ],
            [
                "name" => "Tambo de Mora",
                "province_id" => 100,
            ],
            [
                "name" => "Nasca",
                "province_id" => 101,
            ],
            [
                "name" => "Changuillo",
                "province_id" => 101,
            ],
            [
                "name" => "El Ingenio",
                "province_id" => 101,
            ],
            [
                "name" => "Marcona",
                "province_id" => 101,
            ],
            [
                "name" => "Vista Alegre",
                "province_id" => 101,
            ],
            [
                "name" => "Palpa",
                "province_id" => 102,
            ],
            [
                "name" => "Llipata",
                "province_id" => 102,
            ],
            [
                "name" => "R" . $this->Utf8_ansi("\u00ed") . "o Grande",
                "province_id" => 102,
            ],
            [
                "name" => "Santa Cruz",
                "province_id" => 102,
            ],
            [
                "name" => "Tibillo",
                "province_id" => 102,
            ],
            [
                "name" => "Pisco",
                "province_id" => 103,
            ],
            [
                "name" => "Huancano",
                "province_id" => 103,
            ],
            [
                "name" => "Humay",
                "province_id" => 103,
            ],
            [
                "name" => "Independencia",
                "province_id" => 103,
            ],
            [
                "name" => "Paracas",
                "province_id" => 103,
            ],
            [
                "name" => "San Andr" . $this->Utf8_ansi("\u00e9") . "s",
                "province_id" => 103,
            ],
            [
                "name" => "San Clemente",
                "province_id" => 103,
            ],
            [
                "name" => "Tupac Amaru Inca",
                "province_id" => 103,
            ],
            [
                "name" => "Huancayo",
                "province_id" => 104,
            ],
            [
                "name" => "Carhuacallanga",
                "province_id" => 104,
            ],
            [
                "name" => "Chacapampa",
                "province_id" => 104,
            ],
            [
                "name" => "Chicche",
                "province_id" => 104,
            ],
            [
                "name" => "Chilca",
                "province_id" => 104,
            ],
            [
                "name" => "Chongos Alto",
                "province_id" => 104,
            ],
            [
                "name" => "Chupuro",
                "province_id" => 104,
            ],
            [
                "name" => "Colca",
                "province_id" => 104,
            ],
            [
                "name" => "Cullhuas",
                "province_id" => 104,
            ],
            [
                "name" => "El Tambo",
                "province_id" => 104,
            ],
            [
                "name" => "Huacrapuquio",
                "province_id" => 104,
            ],
            [
                "name" => "Hualhuas",
                "province_id" => 104,
            ],
            [
                "name" => "Huancan",
                "province_id" => 104,
            ],
            [
                "name" => "Huasicancha",
                "province_id" => 104,
            ],
            [
                "name" => "Huayucachi",
                "province_id" => 104,
            ],
            [
                "name" => "Ingenio",
                "province_id" => 104,
            ],
            [
                "name" => "Pariahuanca",
                "province_id" => 104,
            ],
            [
                "name" => "Pilcomayo",
                "province_id" => 104,
            ],
            [
                "name" => "Pucara",
                "province_id" => 104,
            ],
            [
                "name" => "Quichuay",
                "province_id" => 104,
            ],
            [
                "name" => "Quilcas",
                "province_id" => 104,
            ],
            [
                "name" => "San Agust" . $this->Utf8_ansi("\u00ed") . "n",
                "province_id" => 104,
            ],
            [
                "name" => "San Jer" . $this->Utf8_ansi("\u00f3") . "nimo de Tunan",
                "province_id" => 104,
            ],
            [
                "name" => "Sa" . $this->Utf8_ansi("\u00f1") . "o",
                "province_id" => 104,
            ],
            [
                "name" => "Sapallanga",
                "province_id" => 104,
            ],
            [
                "name" => "Sicaya",
                "province_id" => 104,
            ],
            [
                "name" => "Santo Domingo de Acobamba",
                "province_id" => 104,
            ],
            [
                "name" => "Viques",
                "province_id" => 104,
            ],
            [
                "name" => "Concepci" . $this->Utf8_ansi("\u00f3") . "n",
                "province_id" => 104,
            ],
            [
                "name" => "Aco",
                "province_id" => 105,
            ],
            [
                "name" => "Andamarca",
                "province_id" => 105,
            ],
            [
                "name" => "Chambara",
                "province_id" => 105,
            ],
            [
                "name" => "Cochas",
                "province_id" => 105,
            ],
            [
                "name" => "Comas",
                "province_id" => 105,
            ],
            [
                "name" => "Hero" . $this->Utf8_ansi("\u00ed") . "nas Toledo",
                "province_id" => 105,
            ],
            [
                "name" => "Manzanares",
                "province_id" => 105,
            ],
            [
                "name" => "Mariscal Castilla",
                "province_id" => 105,
            ],
            [
                "name" => "Matahuasi",
                "province_id" => 105,
            ],
            [
                "name" => "Mito",
                "province_id" => 105,
            ],
            [
                "name" => "Nueve de Julio",
                "province_id" => 105,
            ],
            [
                "name" => "Orcotuna",
                "province_id" => 105,
            ],
            [
                "name" => "San Jos" . $this->Utf8_ansi("\u00e9") . " de Quero",
                "province_id" => 105,
            ],
            [
                "name" => "Santa Rosa de Ocopa",
                "province_id" => 105,
            ],
            [
                "name" => "Chanchamayo",
                "province_id" => 106,
            ],
            [
                "name" => "Perene",
                "province_id" => 106,
            ],
            [
                "name" => "Pichanaqui",
                "province_id" => 106,
            ],
            [
                "name" => "San Luis de Shuaro",
                "province_id" => 106,
            ],
            [
                "name" => "San Ram" . $this->Utf8_ansi("\u00f3") . "n",
                "province_id" => 106,
            ],
            [
                "name" => "Vitoc",
                "province_id" => 106,
            ],
            [
                "name" => "Jauja",
                "province_id" => 107,
            ],
            [
                "name" => "Acolla",
                "province_id" => 107,
            ],
            [
                "name" => "Apata",
                "province_id" => 107,
            ],
            [
                "name" => "Ataura",
                "province_id" => 107,
            ],
            [
                "name" => "Canchayllo",
                "province_id" => 107,
            ],
            [
                "name" => "Curicaca",
                "province_id" => 107,
            ],
            [
                "name" => "El Mantaro",
                "province_id" => 107,
            ],
            [
                "name" => "Huamali",
                "province_id" => 107,
            ],
            [
                "name" => "Huaripampa",
                "province_id" => 107,
            ],
            [
                "name" => "Huertas",
                "province_id" => 107,
            ],
            [
                "name" => "Janjaillo",
                "province_id" => 107,
            ],
            [
                "name" => "Julc" . $this->Utf8_ansi("\u00e1") . "n",
                "province_id" => 107,
            ],
            [
                "name" => "Leonor Ord" . $this->Utf8_ansi("\u00f3") . "" . $this->Utf8_ansi("\u00f1") . "ez",
                "province_id" => 107,
            ],
            [
                "name" => "Llocllapampa",
                "province_id" => 107,
            ],
            [
                "name" => "Marco",
                "province_id" => 107,
            ],
            [
                "name" => "Masma",
                "province_id" => 107,
            ],
            [
                "name" => "Masma Chicche",
                "province_id" => 107,
            ],
            [
                "name" => "Molinos",
                "province_id" => 107,
            ],
            [
                "name" => "Monobamba",
                "province_id" => 107,
            ],
            [
                "name" => "Muqui",
                "province_id" => 107,
            ],
            [
                "name" => "Muquiyauyo",
                "province_id" => 107,
            ],
            [
                "name" => "Paca",
                "province_id" => 107,
            ],
            [
                "name" => "Paccha",
                "province_id" => 107,
            ],
            [
                "name" => "Pancan",
                "province_id" => 107,
            ],
            [
                "name" => "Parco",
                "province_id" => 107,
            ],
            [
                "name" => "Pomacancha",
                "province_id" => 107,
            ],
            [
                "name" => "Ricran",
                "province_id" => 107,
            ],
            [
                "name" => "San Lorenzo",
                "province_id" => 107,
            ],
            [
                "name" => "San Pedro de Chunan",
                "province_id" => 107,
            ],
            [
                "name" => "Sausa",
                "province_id" => 107,
            ],
            [
                "name" => "Sincos",
                "province_id" => 107,
            ],
            [
                "name" => "Tunan Marca",
                "province_id" => 107,
            ],
            [
                "name" => "Yauli",
                "province_id" => 107,
            ],
            [
                "name" => "Yauyos",
                "province_id" => 107,
            ],
            [
                "name" => "Junin",
                "province_id" => 108,
            ],
            [
                "name" => "Carhuamayo",
                "province_id" => 108,
            ],
            [
                "name" => "Ondores",
                "province_id" => 108,
            ],
            [
                "name" => "Ulcumayo",
                "province_id" => 108,
            ],
            [
                "name" => "Satipo",
                "province_id" => 109,
            ],
            [
                "name" => "Coviriali",
                "province_id" => 109,
            ],
            [
                "name" => "Llaylla",
                "province_id" => 109,
            ],
            [
                "name" => "Mazamari",
                "province_id" => 109,
            ],
            [
                "name" => "Pampa Hermosa",
                "province_id" => 109,
            ],
            [
                "name" => "Pangoa",
                "province_id" => 109,
            ],
            [
                "name" => "R" . $this->Utf8_ansi("\u00ed") . "o Negro",
                "province_id" => 109,
            ],
            [
                "name" => "R" . $this->Utf8_ansi("\u00ed") . "o Tambo",
                "province_id" => 109,
            ],
            [
                "name" => "Vizcatan del Ene",
                "province_id" => 109,
            ],
            [
                "name" => "Tarma",
                "province_id" => 110,
            ],
            [
                "name" => "Acobamba",
                "province_id" => 110,
            ],
            [
                "name" => "Huaricolca",
                "province_id" => 110,
            ],
            [
                "name" => "Huasahuasi",
                "province_id" => 110,
            ],
            [
                "name" => "La Uni" . $this->Utf8_ansi("\u00f3") . "n",
                "province_id" => 110,
            ],
            [
                "name" => "Palca",
                "province_id" => 110,
            ],
            [
                "name" => "Palcamayo",
                "province_id" => 110,
            ],
            [
                "name" => "San Pedro de Cajas",
                "province_id" => 110,
            ],
            [
                "name" => "Tapo",
                "province_id" => 110,
            ],
            [
                "name" => "La Oroya",
                "province_id" => 111,
            ],
            [
                "name" => "Chacapalpa",
                "province_id" => 111,
            ],
            [
                "name" => "Huay-Huay",
                "province_id" => 111,
            ],
            [
                "name" => "Marcapomacocha",
                "province_id" => 111,
            ],
            [
                "name" => "Morococha",
                "province_id" => 111,
            ],
            [
                "name" => "Paccha",
                "province_id" => 111,
            ],
            [
                "name" => "Santa B" . $this->Utf8_ansi("\u00e1") . "rbara de Carhuacayan",
                "province_id" => 111,
            ],
            [
                "name" => "Santa Rosa de Sacco",
                "province_id" => 111,
            ],
            [
                "name" => "Suitucancha",
                "province_id" => 111,
            ],
            [
                "name" => "Yauli",
                "province_id" => 111,
            ],
            [
                "name" => "Chupaca",
                "province_id" => 112,
            ],
            [
                "name" => "Ahuac",
                "province_id" => 112,
            ],
            [
                "name" => "Chongos Bajo",
                "province_id" => 112,
            ],
            [
                "name" => "Huachac",
                "province_id" => 112,
            ],
            [
                "name" => "Huamancaca Chico",
                "province_id" => 112,
            ],
            [
                "name" => "San Juan de Iscos",
                "province_id" => 112,
            ],
            [
                "name" => "San Juan de Jarpa",
                "province_id" => 112,
            ],
            [
                "name" => "Tres de Diciembre",
                "province_id" => 112,
            ],
            [
                "name" => "Yanacancha",
                "province_id" => 112,
            ],
            [
                "name" => "Trujillo",
                "province_id" => 113,
            ],
            [
                "name" => "El Porvenir",
                "province_id" => 113,
            ],
            [
                "name" => "Florencia de Mora",
                "province_id" => 113,
            ],
            [
                "name" => "Huanchaco",
                "province_id" => 113,
            ],
            [
                "name" => "La Esperanza",
                "province_id" => 113,
            ],
            [
                "name" => "Laredo",
                "province_id" => 113,
            ],
            [
                "name" => "Moche",
                "province_id" => 113,
            ],
            [
                "name" => "Poroto",
                "province_id" => 113,
            ],
            [
                "name" => "Salaverry",
                "province_id" => 113,
            ],
            [
                "name" => "Simbal",
                "province_id" => 113,
            ],
            [
                "name" => "Victor Larco Herrera",
                "province_id" => 113,
            ],
            [
                "name" => "Ascope",
                "province_id" => 114,
            ],
            [
                "name" => "Chicama",
                "province_id" => 114,
            ],
            [
                "name" => "Chocope",
                "province_id" => 114,
            ],
            [
                "name" => "Magdalena de Cao",
                "province_id" => 114,
            ],
            [
                "name" => "Paijan",
                "province_id" => 114,
            ],
            [
                "name" => "R" . $this->Utf8_ansi("\u00e1") . "zuri",
                "province_id" => 114,
            ],
            [
                "name" => "Santiago de Cao",
                "province_id" => 114,
            ],
            [
                "name" => "Casa Grande",
                "province_id" => 114,
            ],
            [
                "name" => "Bol" . $this->Utf8_ansi("\u00ed") . "var",
                "province_id" => 115,
            ],
            [
                "name" => "Bambamarca",
                "province_id" => 115,
            ],
            [
                "name" => "Condormarca",
                "province_id" => 115,
            ],
            [
                "name" => "Longotea",
                "province_id" => 115,
            ],
            [
                "name" => "Uchumarca",
                "province_id" => 115,
            ],
            [
                "name" => "Ucuncha",
                "province_id" => 115,
            ],
            [
                "name" => "Chepen",
                "province_id" => 116,
            ],
            [
                "name" => "Pacanga",
                "province_id" => 116,
            ],
            [
                "name" => "Pueblo Nuevo",
                "province_id" => 116,
            ],
            [
                "name" => "Julcan",
                "province_id" => 117,
            ],
            [
                "name" => "Calamarca",
                "province_id" => 117,
            ],
            [
                "name" => "Carabamba",
                "province_id" => 117,
            ],
            [
                "name" => "Huaso",
                "province_id" => 117,
            ],
            [
                "name" => "Otuzco",
                "province_id" => 118,
            ],
            [
                "name" => "Agallpampa",
                "province_id" => 118,
            ],
            [
                "name" => "Charat",
                "province_id" => 118,
            ],
            [
                "name" => "Huaranchal",
                "province_id" => 118,
            ],
            [
                "name" => "La Cuesta",
                "province_id" => 118,
            ],
            [
                "name" => "Mache",
                "province_id" => 118,
            ],
            [
                "name" => "Paranday",
                "province_id" => 118,
            ],
            [
                "name" => "Salpo",
                "province_id" => 118,
            ],
            [
                "name" => "Sinsicap",
                "province_id" => 118,
            ],
            [
                "name" => "Usquil",
                "province_id" => 118,
            ],
            [
                "name" => "San Pedro de Lloc",
                "province_id" => 119,
            ],
            [
                "name" => "Guadalupe",
                "province_id" => 119,
            ],
            [
                "name" => "Jequetepeque",
                "province_id" => 119,
            ],
            [
                "name" => "Pacasmayo",
                "province_id" => 119,
            ],
            [
                "name" => "San Jos" . $this->Utf8_ansi("\u00e9") . "",
                "province_id" => 119,
            ],
            [
                "name" => "Tayabamba",
                "province_id" => 120,
            ],
            [
                "name" => "Buldibuyo",
                "province_id" => 120,
            ],
            [
                "name" => "Chillia",
                "province_id" => 120,
            ],
            [
                "name" => "Huancaspata",
                "province_id" => 120,
            ],
            [
                "name" => "Huaylillas",
                "province_id" => 120,
            ],
            [
                "name" => "Huayo",
                "province_id" => 120,
            ],
            [
                "name" => "Ongon",
                "province_id" => 120,
            ],
            [
                "name" => "Parcoy",
                "province_id" => 120,
            ],
            [
                "name" => "Pataz",
                "province_id" => 120,
            ],
            [
                "name" => "Pias",
                "province_id" => 120,
            ],
            [
                "name" => "Santiago de Challas",
                "province_id" => 120,
            ],
            [
                "name" => "Taurija",
                "province_id" => 120,
            ],
            [
                "name" => "Urpay",
                "province_id" => 120,
            ],
            [
                "name" => "Huamachuco",
                "province_id" => 121,
            ],
            [
                "name" => "Chugay",
                "province_id" => 121,
            ],
            [
                "name" => "Cochorco",
                "province_id" => 121,
            ],
            [
                "name" => "Curgos",
                "province_id" => 121,
            ],
            [
                "name" => "Marcabal",
                "province_id" => 121,
            ],
            [
                "name" => "Sanagoran",
                "province_id" => 121,
            ],
            [
                "name" => "Sarin",
                "province_id" => 121,
            ],
            [
                "name" => "Sartimbamba",
                "province_id" => 121,
            ],
            [
                "name" => "Santiago de Chuco",
                "province_id" => 122,
            ],
            [
                "name" => "Angasmarca",
                "province_id" => 122,
            ],
            [
                "name" => "Cachicadan",
                "province_id" => 122,
            ],
            [
                "name" => "Mollebamba",
                "province_id" => 122,
            ],
            [
                "name" => "Mollepata",
                "province_id" => 122,
            ],
            [
                "name" => "Quiruvilca",
                "province_id" => 122,
            ],
            [
                "name" => "Santa Cruz de Chuca",
                "province_id" => 122,
            ],
            [
                "name" => "Sitabamba",
                "province_id" => 122,
            ],
            [
                "name" => "Cascas",
                "province_id" => 123,
            ],
            [
                "name" => "Lucma",
                "province_id" => 123,
            ],
            [
                "name" => "Marmot",
                "province_id" => 123,
            ],
            [
                "name" => "Sayapullo",
                "province_id" => 123,
            ],
            [
                "name" => "Viru",
                "province_id" => 124,
            ],
            [
                "name" => "Chao",
                "province_id" => 124,
            ],
            [
                "name" => "Guadalupito",
                "province_id" => 124,
            ],
            [
                "name" => "Chiclayo",
                "province_id" => 125,
            ],
            [
                "name" => "Chongoyape",
                "province_id" => 125,
            ],
            [
                "name" => "Eten",
                "province_id" => 125,
            ],
            [
                "name" => "Eten Puerto",
                "province_id" => 125,
            ],
            [
                "name" => "Jos" . $this->Utf8_ansi("\u00e9") . " Leonardo Ortiz",
                "province_id" => 125,
            ],
            [
                "name" => "La Victoria",
                "province_id" => 125,
            ],
            [
                "name" => "Lagunas",
                "province_id" => 125,
            ],
            [
                "name" => "Monsefu",
                "province_id" => 125,
            ],
            [
                "name" => "Nueva Arica",
                "province_id" => 125,
            ],
            [
                "name" => "Oyotun",
                "province_id" => 125,
            ],
            [
                "name" => "Picsi",
                "province_id" => 125,
            ],
            [
                "name" => "Pimentel",
                "province_id" => 125,
            ],
            [
                "name" => "Reque",
                "province_id" => 125,
            ],
            [
                "name" => "Santa Rosa",
                "province_id" => 125,
            ],
            [
                "name" => "Sa" . $this->Utf8_ansi("\u00f1") . "a",
                "province_id" => 125,
            ],
            [
                "name" => "Cayalti",
                "province_id" => 125,
            ],
            [
                "name" => "Patapo",
                "province_id" => 125,
            ],
            [
                "name" => "Pomalca",
                "province_id" => 125,
            ],
            [
                "name" => "Pucala",
                "province_id" => 125,
            ],
            [
                "name" => "Tuman",
                "province_id" => 125,
            ],
            [
                "name" => "Ferre" . $this->Utf8_ansi("\u00f1") . "afe",
                "province_id" => 126,
            ],
            [
                "name" => "Ca" . $this->Utf8_ansi("\u00f1") . "aris",
                "province_id" => 126,
            ],
            [
                "name" => "Incahuasi",
                "province_id" => 126,
            ],
            [
                "name" => "Manuel Antonio Mesones Muro",
                "province_id" => 126,
            ],
            [
                "name" => "Pitipo",
                "province_id" => 126,
            ],
            [
                "name" => "Pueblo Nuevo",
                "province_id" => 126,
            ],
            [
                "name" => "Lambayeque",
                "province_id" => 127,
            ],
            [
                "name" => "Chochope",
                "province_id" => 127,
            ],
            [
                "name" => "Illimo",
                "province_id" => 127,
            ],
            [
                "name" => "Jayanca",
                "province_id" => 127,
            ],
            [
                "name" => "Mochumi",
                "province_id" => 127,
            ],
            [
                "name" => "Morrope",
                "province_id" => 127,
            ],
            [
                "name" => "Motupe",
                "province_id" => 127,
            ],
            [
                "name" => "Olmos",
                "province_id" => 127,
            ],
            [
                "name" => "Pacora",
                "province_id" => 127,
            ],
            [
                "name" => "Salas",
                "province_id" => 127,
            ],
            [
                "name" => "San Jos" . $this->Utf8_ansi("\u00e9") . "",
                "province_id" => 127,
            ],
            [
                "name" => "Tucume",
                "province_id" => 127,
            ],
            [
                "name" => "Lima",
                "province_id" => 128,
            ],
            [
                "name" => "Anc" . $this->Utf8_ansi("\u00f3") . "n",
                "province_id" => 128,
            ],
            [
                "name" => "Ate",
                "province_id" => 128,
            ],
            [
                "name" => "Barranco",
                "province_id" => 128,
            ],
            [
                "name" => "Bre" . $this->Utf8_ansi("\u00f1") . "a",
                "province_id" => 128,
            ],
            [
                "name" => "Carabayllo",
                "province_id" => 128,
            ],
            [
                "name" => "Chaclacayo",
                "province_id" => 128,
            ],
            [
                "name" => "Chorrillos",
                "province_id" => 128,
            ],
            [
                "name" => "Cieneguilla",
                "province_id" => 128,
            ],
            [
                "name" => "Comas",
                "province_id" => 128,
            ],
            [
                "name" => "El Agustino",
                "province_id" => 128,
            ],
            [
                "name" => "Independencia",
                "province_id" => 128,
            ],
            [
                "name" => "Jes" . $this->Utf8_ansi("\u00fa") . "s Mar" . $this->Utf8_ansi("\u00ed") . "a",
                "province_id" => 128,
            ],
            [
                "name" => "La Molina",
                "province_id" => 128,
            ],
            [
                "name" => "La Victoria",
                "province_id" => 128,
            ],
            [
                "name" => "Lince",
                "province_id" => 128,
            ],
            [
                "name" => "Los Olivos",
                "province_id" => 128,
            ],
            [
                "name" => "Lurigancho",
                "province_id" => 128,
            ],
            [
                "name" => "Lurin",
                "province_id" => 128,
            ],
            [
                "name" => "Magdalena del Mar",
                "province_id" => 128,
            ],
            [
                "name" => "Pueblo Libre",
                "province_id" => 128,
            ],
            [
                "name" => "Miraflores",
                "province_id" => 128,
            ],
            [
                "name" => "Pachacamac",
                "province_id" => 128,
            ],
            [
                "name" => "Pucusana",
                "province_id" => 128,
            ],
            [
                "name" => "Puente Piedra",
                "province_id" => 128,
            ],
            [
                "name" => "Punta Hermosa",
                "province_id" => 128,
            ],
            [
                "name" => "Punta Negra",
                "province_id" => 128,
            ],
            [
                "name" => "R" . $this->Utf8_ansi("\u00ed") . "mac",
                "province_id" => 128,
            ],
            [
                "name" => "San Bartolo",
                "province_id" => 128,
            ],
            [
                "name" => "San Borja",
                "province_id" => 128,
            ],
            [
                "name" => "San Isidro",
                "province_id" => 128,
            ],
            [
                "name" => "San Juan de Lurigancho",
                "province_id" => 128,
            ],
            [
                "name" => "San Juan de Miraflores",
                "province_id" => 128,
            ],
            [
                "name" => "San Luis",
                "province_id" => 128,
            ],
            [
                "name" => "San Mart" . $this->Utf8_ansi("\u00ed") . "n de Porres",
                "province_id" => 128,
            ],
            [
                "name" => "San Miguel",
                "province_id" => 128,
            ],
            [
                "name" => "Santa Anita",
                "province_id" => 128,
            ],
            [
                "name" => "Santa Mar" . $this->Utf8_ansi("\u00ed") . "a del Mar",
                "province_id" => 128,
            ],
            [
                "name" => "Santa Rosa",
                "province_id" => 128,
            ],
            [
                "name" => "Santiago de Surco",
                "province_id" => 128,
            ],
            [
                "name" => "Surquillo",
                "province_id" => 128,
            ],
            [
                "name" => "Villa El Salvador",
                "province_id" => 128,
            ],
            [
                "name" => "Villa Mar" . $this->Utf8_ansi("\u00ed") . "a del Triunfo",
                "province_id" => 128,
            ],
            [
                "name" => "Barranca",
                "province_id" => 129,
            ],
            [
                "name" => "Paramonga",
                "province_id" => 129,
            ],
            [
                "name" => "Pativilca",
                "province_id" => 129,
            ],
            [
                "name" => "Supe",
                "province_id" => 129,
            ],
            [
                "name" => "Supe Puerto",
                "province_id" => 129,
            ],
            [
                "name" => "Cajatambo",
                "province_id" => 130,
            ],
            [
                "name" => "Copa",
                "province_id" => 130,
            ],
            [
                "name" => "Gorgor",
                "province_id" => 130,
            ],
            [
                "name" => "Huancapon",
                "province_id" => 130,
            ],
            [
                "name" => "Manas",
                "province_id" => 130,
            ],
            [
                "name" => "Canta",
                "province_id" => 131,
            ],
            [
                "name" => "Arahuay",
                "province_id" => 131,
            ],
            [
                "name" => "Huamantanga",
                "province_id" => 131,
            ],
            [
                "name" => "Huaros",
                "province_id" => 131,
            ],
            [
                "name" => "Lachaqui",
                "province_id" => 131,
            ],
            [
                "name" => "San Buenaventura",
                "province_id" => 131,
            ],
            [
                "name" => "Santa Rosa de Quives",
                "province_id" => 131,
            ],
            [
                "name" => "San Vicente de Ca" . $this->Utf8_ansi("\u00f1") . "ete",
                "province_id" => 132,
            ],
            [
                "name" => "Asia",
                "province_id" => 132,
            ],
            [
                "name" => "Calango",
                "province_id" => 132,
            ],
            [
                "name" => "Cerro Azul",
                "province_id" => 132,
            ],
            [
                "name" => "Chilca",
                "province_id" => 132,
            ],
            [
                "name" => "Coayllo",
                "province_id" => 132,
            ],
            [
                "name" => "Imperial",
                "province_id" => 132,
            ],
            [
                "name" => "Lunahuana",
                "province_id" => 132,
            ],
            [
                "name" => "Mala",
                "province_id" => 132,
            ],
            [
                "name" => "Nuevo Imperial",
                "province_id" => 132,
            ],
            [
                "name" => "Pacaran",
                "province_id" => 132,
            ],
            [
                "name" => "Quilmana",
                "province_id" => 132,
            ],
            [
                "name" => "San Antonio",
                "province_id" => 132,
            ],
            [
                "name" => "San Luis",
                "province_id" => 132,
            ],
            [
                "name" => "Santa Cruz de Flores",
                "province_id" => 132,
            ],
            [
                "name" => "Z" . $this->Utf8_ansi("\u00fa") . "" . $this->Utf8_ansi("\u00f1") . "iga",
                "province_id" => 132,
            ],
            [
                "name" => "Huaral",
                "province_id" => 133,
            ],
            [
                "name" => "Atavillos Alto",
                "province_id" => 133,
            ],
            [
                "name" => "Atavillos Bajo",
                "province_id" => 133,
            ],
            [
                "name" => "Aucallama",
                "province_id" => 133,
            ],
            [
                "name" => "Chancay",
                "province_id" => 133,
            ],
            [
                "name" => "Ihuari",
                "province_id" => 133,
            ],
            [
                "name" => "Lampian",
                "province_id" => 133,
            ],
            [
                "name" => "Pacaraos",
                "province_id" => 133,
            ],
            [
                "name" => "San Miguel de Acos",
                "province_id" => 133,
            ],
            [
                "name" => "Santa Cruz de Andamarca",
                "province_id" => 133,
            ],
            [
                "name" => "Sumbilca",
                "province_id" => 133,
            ],
            [
                "name" => "Veintisiete de Noviembre",
                "province_id" => 133,
            ],
            [
                "name" => "Matucana",
                "province_id" => 134,
            ],
            [
                "name" => "Antioquia",
                "province_id" => 134,
            ],
            [
                "name" => "Callahuanca",
                "province_id" => 134,
            ],
            [
                "name" => "Carampoma",
                "province_id" => 134,
            ],
            [
                "name" => "Chicla",
                "province_id" => 134,
            ],
            [
                "name" => "Cuenca",
                "province_id" => 134,
            ],
            [
                "name" => "Huachupampa",
                "province_id" => 134,
            ],
            [
                "name" => "Huanza",
                "province_id" => 134,
            ],
            [
                "name" => "Huarochiri",
                "province_id" => 134,
            ],
            [
                "name" => "Lahuaytambo",
                "province_id" => 134,
            ],
            [
                "name" => "Langa",
                "province_id" => 134,
            ],
            [
                "name" => "Laraos",
                "province_id" => 134,
            ],
            [
                "name" => "Mariatana",
                "province_id" => 134,
            ],
            [
                "name" => "Ricardo Palma",
                "province_id" => 134,
            ],
            [
                "name" => "San Andr" . $this->Utf8_ansi("\u00e9") . "s de Tupicocha",
                "province_id" => 134,
            ],
            [
                "name" => "San Antonio",
                "province_id" => 134,
            ],
            [
                "name" => "San Bartolom" . $this->Utf8_ansi("\u00e9") . "",
                "province_id" => 134,
            ],
            [
                "name" => "San Damian",
                "province_id" => 134,
            ],
            [
                "name" => "San Juan de Iris",
                "province_id" => 134,
            ],
            [
                "name" => "San Juan de Tantaranche",
                "province_id" => 134,
            ],
            [
                "name" => "San Lorenzo de Quinti",
                "province_id" => 134,
            ],
            [
                "name" => "San Mateo",
                "province_id" => 134,
            ],
            [
                "name" => "San Mateo de Otao",
                "province_id" => 134,
            ],
            [
                "name" => "San Pedro de Casta",
                "province_id" => 134,
            ],
            [
                "name" => "San Pedro de Huancayre",
                "province_id" => 134,
            ],
            [
                "name" => "Sangallaya",
                "province_id" => 134,
            ],
            [
                "name" => "Santa Cruz de Cocachacra",
                "province_id" => 134,
            ],
            [
                "name" => "Santa Eulalia",
                "province_id" => 134,
            ],
            [
                "name" => "Santiago de Anchucaya",
                "province_id" => 134,
            ],
            [
                "name" => "Santiago de Tuna",
                "province_id" => 134,
            ],
            [
                "name" => "Santo Domingo de Los Olleros",
                "province_id" => 134,
            ],
            [
                "name" => "Surco",
                "province_id" => 134,
            ],
            [
                "name" => "Huacho",
                "province_id" => 135,
            ],
            [
                "name" => "Ambar",
                "province_id" => 135,
            ],
            [
                "name" => "Caleta de Carquin",
                "province_id" => 135,
            ],
            [
                "name" => "Checras",
                "province_id" => 135,
            ],
            [
                "name" => "Hualmay",
                "province_id" => 135,
            ],
            [
                "name" => "Huaura",
                "province_id" => 135,
            ],
            [
                "name" => "Leoncio Prado",
                "province_id" => 135,
            ],
            [
                "name" => "Paccho",
                "province_id" => 135,
            ],
            [
                "name" => "Santa Leonor",
                "province_id" => 135,
            ],
            [
                "name" => "Santa Mar" . $this->Utf8_ansi("\u00ed") . "a",
                "province_id" => 135,
            ],
            [
                "name" => "Sayan",
                "province_id" => 135,
            ],
            [
                "name" => "Vegueta",
                "province_id" => 135,
            ],
            [
                "name" => "Oyon",
                "province_id" => 136,
            ],
            [
                "name" => "Andajes",
                "province_id" => 136,
            ],
            [
                "name" => "Caujul",
                "province_id" => 136,
            ],
            [
                "name" => "Cochamarca",
                "province_id" => 136,
            ],
            [
                "name" => "Navan",
                "province_id" => 136,
            ],
            [
                "name" => "Pachangara",
                "province_id" => 136,
            ],
            [
                "name" => "Yauyos",
                "province_id" => 137,
            ],
            [
                "name" => "Alis",
                "province_id" => 137,
            ],
            [
                "name" => "Allauca",
                "province_id" => 137,
            ],
            [
                "name" => "Ayaviri",
                "province_id" => 137,
            ],
            [
                "name" => "Az" . $this->Utf8_ansi("\u00e1") . "ngaro",
                "province_id" => 137,
            ],
            [
                "name" => "Cacra",
                "province_id" => 137,
            ],
            [
                "name" => "Carania",
                "province_id" => 137,
            ],
            [
                "name" => "Catahuasi",
                "province_id" => 137,
            ],
            [
                "name" => "Chocos",
                "province_id" => 137,
            ],
            [
                "name" => "Cochas",
                "province_id" => 137,
            ],
            [
                "name" => "Colonia",
                "province_id" => 137,
            ],
            [
                "name" => "Hongos",
                "province_id" => 137,
            ],
            [
                "name" => "Huampara",
                "province_id" => 137,
            ],
            [
                "name" => "Huancaya",
                "province_id" => 137,
            ],
            [
                "name" => "Huangascar",
                "province_id" => 137,
            ],
            [
                "name" => "Huantan",
                "province_id" => 137,
            ],
            [
                "name" => "Hua" . $this->Utf8_ansi("\u00f1") . "ec",
                "province_id" => 137,
            ],
            [
                "name" => "Laraos",
                "province_id" => 137,
            ],
            [
                "name" => "Lincha",
                "province_id" => 137,
            ],
            [
                "name" => "Madean",
                "province_id" => 137,
            ],
            [
                "name" => "Miraflores",
                "province_id" => 137,
            ],
            [
                "name" => "Omas",
                "province_id" => 137,
            ],
            [
                "name" => "Putinza",
                "province_id" => 137,
            ],
            [
                "name" => "Quinches",
                "province_id" => 137,
            ],
            [
                "name" => "Quinocay",
                "province_id" => 137,
            ],
            [
                "name" => "San Joaqu" . $this->Utf8_ansi("\u00ed") . "n",
                "province_id" => 137,
            ],
            [
                "name" => "San Pedro de Pilas",
                "province_id" => 137,
            ],
            [
                "name" => "Tanta",
                "province_id" => 137,
            ],
            [
                "name" => "Tauripampa",
                "province_id" => 137,
            ],
            [
                "name" => "Tomas",
                "province_id" => 137,
            ],
            [
                "name" => "Tupe",
                "province_id" => 137,
            ],
            [
                "name" => "Vi" . $this->Utf8_ansi("\u00f1") . "ac",
                "province_id" => 137,
            ],
            [
                "name" => "Vitis",
                "province_id" => 137,
            ],
            [
                "name" => "Iquitos",
                "province_id" => 138,
            ],
            [
                "name" => "Alto Nanay",
                "province_id" => 138,
            ],
            [
                "name" => "Fernando Lores",
                "province_id" => 138,
            ],
            [
                "name" => "Indiana",
                "province_id" => 138,
            ],
            [
                "name" => "Las Amazonas",
                "province_id" => 138,
            ],
            [
                "name" => "Mazan",
                "province_id" => 138,
            ],
            [
                "name" => "Napo",
                "province_id" => 138,
            ],
            [
                "name" => "Punchana",
                "province_id" => 138,
            ],
            [
                "name" => "Torres Causana",
                "province_id" => 138,
            ],
            [
                "name" => "Bel" . $this->Utf8_ansi("\u00e9") . "n",
                "province_id" => 138,
            ],
            [
                "name" => "San Juan Bautista",
                "province_id" => 138,
            ],
            [
                "name" => "Yurimaguas",
                "province_id" => 139,
            ],
            [
                "name" => "Balsapuerto",
                "province_id" => 139,
            ],
            [
                "name" => "Jeberos",
                "province_id" => 139,
            ],
            [
                "name" => "Lagunas",
                "province_id" => 139,
            ],
            [
                "name" => "Santa Cruz",
                "province_id" => 139,
            ],
            [
                "name" => "Teniente Cesar L" . $this->Utf8_ansi("\u00f3") . "pez Rojas",
                "province_id" => 139,
            ],
            [
                "name" => "Nauta",
                "province_id" => 140,
            ],
            [
                "name" => "Parinari",
                "province_id" => 140,
            ],
            [
                "name" => "Tigre",
                "province_id" => 140,
            ],
            [
                "name" => "Trompeteros",
                "province_id" => 140,
            ],
            [
                "name" => "Urarinas",
                "province_id" => 140,
            ],
            [
                "name" => "Ram" . $this->Utf8_ansi("\u00f3") . "n Castilla",
                "province_id" => 141,
            ],
            [
                "name" => "Pebas",
                "province_id" => 141,
            ],
            [
                "name" => "Yavari",
                "province_id" => 141,
            ],
            [
                "name" => "San Pablo",
                "province_id" => 141,
            ],
            [
                "name" => "Requena",
                "province_id" => 142,
            ],
            [
                "name" => "Alto Tapiche",
                "province_id" => 142,
            ],
            [
                "name" => "Capelo",
                "province_id" => 142,
            ],
            [
                "name" => "Emilio San Mart" . $this->Utf8_ansi("\u00ed") . "n",
                "province_id" => 142,
            ],
            [
                "name" => "Maquia",
                "province_id" => 142,
            ],
            [
                "name" => "Puinahua",
                "province_id" => 142,
            ],
            [
                "name" => "Saquena",
                "province_id" => 142,
            ],
            [
                "name" => "Soplin",
                "province_id" => 142,
            ],
            [
                "name" => "Tapiche",
                "province_id" => 142,
            ],
            [
                "name" => "Jenaro Herrera",
                "province_id" => 142,
            ],
            [
                "name" => "Yaquerana",
                "province_id" => 142,
            ],
            [
                "name" => "Contamana",
                "province_id" => 143,
            ],
            [
                "name" => "Inahuaya",
                "province_id" => 143,
            ],
            [
                "name" => "Padre M" . $this->Utf8_ansi("\u00e1") . "rquez",
                "province_id" => 143,
            ],
            [
                "name" => "Pampa Hermosa",
                "province_id" => 143,
            ],
            [
                "name" => "Sarayacu",
                "province_id" => 143,
            ],
            [
                "name" => "Vargas Guerra",
                "province_id" => 143,
            ],
            [
                "name" => "Barranca",
                "province_id" => 144,
            ],
            [
                "name" => "Cahuapanas",
                "province_id" => 144,
            ],
            [
                "name" => "Manseriche",
                "province_id" => 144,
            ],
            [
                "name" => "Morona",
                "province_id" => 144,
            ],
            [
                "name" => "Pastaza",
                "province_id" => 144,
            ],
            [
                "name" => "Andoas",
                "province_id" => 144,
            ],
            [
                "name" => "Putumayo",
                "province_id" => 145,
            ],
            [
                "name" => "Rosa Panduro",
                "province_id" => 145,
            ],
            [
                "name" => "Teniente Manuel Clavero",
                "province_id" => 145,
            ],
            [
                "name" => "Yaguas",
                "province_id" => 145,
            ],
            [
                "name" => "Tambopata",
                "province_id" => 146,
            ],
            [
                "name" => "Inambari",
                "province_id" => 146,
            ],
            [
                "name" => "Las Piedras",
                "province_id" => 146,
            ],
            [
                "name" => "Laberinto",
                "province_id" => 146,
            ],
            [
                "name" => "Manu",
                "province_id" => 147,
            ],
            [
                "name" => "Fitzcarrald",
                "province_id" => 147,
            ],
            [
                "name" => "Madre de Dios",
                "province_id" => 147,
            ],
            [
                "name" => "Huepetuhe",
                "province_id" => 147,
            ],
            [
                "name" => "I" . $this->Utf8_ansi("\u00f1") . "apari",
                "province_id" => 148,
            ],
            [
                "name" => "Iberia",
                "province_id" => 148,
            ],
            [
                "name" => "Tahuamanu",
                "province_id" => 148,
            ],
            [
                "name" => "Moquegua",
                "province_id" => 149,
            ],
            [
                "name" => "Carumas",
                "province_id" => 149,
            ],
            [
                "name" => "Cuchumbaya",
                "province_id" => 149,
            ],
            [
                "name" => "Samegua",
                "province_id" => 149,
            ],
            [
                "name" => "San Crist" . $this->Utf8_ansi("\u00f3") . "bal",
                "province_id" => 149,
            ],
            [
                "name" => "Torata",
                "province_id" => 149,
            ],
            [
                "name" => "Omate",
                "province_id" => 150,
            ],
            [
                "name" => "Chojata",
                "province_id" => 150,
            ],
            [
                "name" => "Coalaque",
                "province_id" => 150,
            ],
            [
                "name" => "Ichu" . $this->Utf8_ansi("\u00f1") . "a",
                "province_id" => 150,
            ],
            [
                "name" => "La Capilla",
                "province_id" => 150,
            ],
            [
                "name" => "Lloque",
                "province_id" => 150,
            ],
            [
                "name" => "Matalaque",
                "province_id" => 150,
            ],
            [
                "name" => "Puquina",
                "province_id" => 150,
            ],
            [
                "name" => "Quinistaquillas",
                "province_id" => 150,
            ],
            [
                "name" => "Ubinas",
                "province_id" => 150,
            ],
            [
                "name" => "Yunga",
                "province_id" => 150,
            ],
            [
                "name" => "Ilo",
                "province_id" => 151,
            ],
            [
                "name" => "El Algarrobal",
                "province_id" => 151,
            ],
            [
                "name" => "Pacocha",
                "province_id" => 151,
            ],
            [
                "name" => "Chaupimarca",
                "province_id" => 152,
            ],
            [
                "name" => "Huachon",
                "province_id" => 152,
            ],
            [
                "name" => "Huariaca",
                "province_id" => 152,
            ],
            [
                "name" => "Huayllay",
                "province_id" => 152,
            ],
            [
                "name" => "Ninacaca",
                "province_id" => 152,
            ],
            [
                "name" => "Pallanchacra",
                "province_id" => 152,
            ],
            [
                "name" => "Paucartambo",
                "province_id" => 152,
            ],
            [
                "name" => "San Francisco de As" . $this->Utf8_ansi("\u00ed") . "s de Yarusyacan",
                "province_id" => 152,
            ],
            [
                "name" => "Simon Bol" . $this->Utf8_ansi("\u00ed") . "var",
                "province_id" => 152,
            ],
            [
                "name" => "Ticlacayan",
                "province_id" => 152,
            ],
            [
                "name" => "Tinyahuarco",
                "province_id" => 152,
            ],
            [
                "name" => "Vicco",
                "province_id" => 152,
            ],
            [
                "name" => "Yanacancha",
                "province_id" => 152,
            ],
            [
                "name" => "Yanahuanca",
                "province_id" => 153,
            ],
            [
                "name" => "Chacayan",
                "province_id" => 153,
            ],
            [
                "name" => "Goyllarisquizga",
                "province_id" => 153,
            ],
            [
                "name" => "Paucar",
                "province_id" => 153,
            ],
            [
                "name" => "San Pedro de Pillao",
                "province_id" => 153,
            ],
            [
                "name" => "Santa Ana de Tusi",
                "province_id" => 153,
            ],
            [
                "name" => "Tapuc",
                "province_id" => 153,
            ],
            [
                "name" => "Vilcabamba",
                "province_id" => 153,
            ],
            [
                "name" => "Oxapampa",
                "province_id" => 154,
            ],
            [
                "name" => "Chontabamba",
                "province_id" => 154,
            ],
            [
                "name" => "Huancabamba",
                "province_id" => 154,
            ],
            [
                "name" => "Palcazu",
                "province_id" => 154,
            ],
            [
                "name" => "Pozuzo",
                "province_id" => 154,
            ],
            [
                "name" => "Puerto Berm" . $this->Utf8_ansi("\u00fa") . "dez",
                "province_id" => 154,
            ],
            [
                "name" => "Villa Rica",
                "province_id" => 154,
            ],
            [
                "name" => "Constituci" . $this->Utf8_ansi("\u00f3") . "n",
                "province_id" => 154,
            ],
            [
                "name" => "Piura",
                "province_id" => 155,
            ],
            [
                "name" => "Castilla",
                "province_id" => 155,
            ],
            [
                "name" => "Catacaos",
                "province_id" => 155,
            ],
            [
                "name" => "Cura Mori",
                "province_id" => 155,
            ],
            [
                "name" => "El Tallan",
                "province_id" => 155,
            ],
            [
                "name" => "La Arena",
                "province_id" => 155,
            ],
            [
                "name" => "La Uni" . $this->Utf8_ansi("\u00f3") . "n",
                "province_id" => 155,
            ],
            [
                "name" => "Las Lomas",
                "province_id" => 155,
            ],
            [
                "name" => "Tambo Grande",
                "province_id" => 155,
            ],
            [
                "name" => "Veintiseis de Octubre",
                "province_id" => 155,
            ],
            [
                "name" => "Ayabaca",
                "province_id" => 156,
            ],
            [
                "name" => "Frias",
                "province_id" => 156,
            ],
            [
                "name" => "Jilili",
                "province_id" => 156,
            ],
            [
                "name" => "Lagunas",
                "province_id" => 156,
            ],
            [
                "name" => "Montero",
                "province_id" => 156,
            ],
            [
                "name" => "Pacaipampa",
                "province_id" => 156,
            ],
            [
                "name" => "Paimas",
                "province_id" => 156,
            ],
            [
                "name" => "Sapillica",
                "province_id" => 156,
            ],
            [
                "name" => "Sicchez",
                "province_id" => 156,
            ],
            [
                "name" => "Suyo",
                "province_id" => 156,
            ],
            [
                "name" => "Huancabamba",
                "province_id" => 157,
            ],
            [
                "name" => "Canchaque",
                "province_id" => 157,
            ],
            [
                "name" => "El Carmen de la Frontera",
                "province_id" => 157,
            ],
            [
                "name" => "Huarmaca",
                "province_id" => 157,
            ],
            [
                "name" => "Lalaquiz",
                "province_id" => 157,
            ],
            [
                "name" => "San Miguel de El Faique",
                "province_id" => 157,
            ],
            [
                "name" => "Sondor",
                "province_id" => 157,
            ],
            [
                "name" => "Sondorillo",
                "province_id" => 157,
            ],
            [
                "name" => "Chulucanas",
                "province_id" => 158,
            ],
            [
                "name" => "Buenos Aires",
                "province_id" => 158,
            ],
            [
                "name" => "Chalaco",
                "province_id" => 158,
            ],
            [
                "name" => "La Matanza",
                "province_id" => 158,
            ],
            [
                "name" => "Morropon",
                "province_id" => 158,
            ],
            [
                "name" => "Salitral",
                "province_id" => 158,
            ],
            [
                "name" => "San Juan de Bigote",
                "province_id" => 158,
            ],
            [
                "name" => "Santa Catalina de Mossa",
                "province_id" => 158,
            ],
            [
                "name" => "Santo Domingo",
                "province_id" => 158,
            ],
            [
                "name" => "Yamango",
                "province_id" => 158,
            ],
            [
                "name" => "Paita",
                "province_id" => 159,
            ],
            [
                "name" => "Amotape",
                "province_id" => 159,
            ],
            [
                "name" => "Arenal",
                "province_id" => 159,
            ],
            [
                "name" => "Colan",
                "province_id" => 159,
            ],
            [
                "name" => "La Huaca",
                "province_id" => 159,
            ],
            [
                "name" => "Tamarindo",
                "province_id" => 159,
            ],
            [
                "name" => "Vichayal",
                "province_id" => 159,
            ],
            [
                "name" => "Sullana",
                "province_id" => 160,
            ],
            [
                "name" => "Bellavista",
                "province_id" => 160,
            ],
            [
                "name" => "Ignacio Escudero",
                "province_id" => 160,
            ],
            [
                "name" => "Lancones",
                "province_id" => 160,
            ],
            [
                "name" => "Marcavelica",
                "province_id" => 160,
            ],
            [
                "name" => "Miguel Checa",
                "province_id" => 160,
            ],
            [
                "name" => "Querecotillo",
                "province_id" => 160,
            ],
            [
                "name" => "Salitral",
                "province_id" => 160,
            ],
            [
                "name" => "Pari" . $this->Utf8_ansi("\u00f1") . "as",
                "province_id" => 161,
            ],
            [
                "name" => "El Alto",
                "province_id" => 161,
            ],
            [
                "name" => "La Brea",
                "province_id" => 161,
            ],
            [
                "name" => "Lobitos",
                "province_id" => 161,
            ],
            [
                "name" => "Los Organos",
                "province_id" => 161,
            ],
            [
                "name" => "Mancora",
                "province_id" => 161,
            ],
            [
                "name" => "Sechura",
                "province_id" => 162,
            ],
            [
                "name" => "Bellavista de la Uni" . $this->Utf8_ansi("\u00f3") . "n",
                "province_id" => 162,
            ],
            [
                "name" => "Bernal",
                "province_id" => 162,
            ],
            [
                "name" => "Cristo Nos Valga",
                "province_id" => 162,
            ],
            [
                "name" => "Vice",
                "province_id" => 162,
            ],
            [
                "name" => "Rinconada Llicuar",
                "province_id" => 162,
            ],
            [
                "name" => "Puno",
                "province_id" => 163,
            ],
            [
                "name" => "Acora",
                "province_id" => 163,
            ],
            [
                "name" => "Amantani",
                "province_id" => 163,
            ],
            [
                "name" => "Atuncolla",
                "province_id" => 163,
            ],
            [
                "name" => "Capachica",
                "province_id" => 163,
            ],
            [
                "name" => "Chucuito",
                "province_id" => 163,
            ],
            [
                "name" => "Coata",
                "province_id" => 163,
            ],
            [
                "name" => "Huata",
                "province_id" => 163,
            ],
            [
                "name" => "Ma" . $this->Utf8_ansi("\u00f1") . "azo",
                "province_id" => 163,
            ],
            [
                "name" => "Paucarcolla",
                "province_id" => 163,
            ],
            [
                "name" => "Pichacani",
                "province_id" => 163,
            ],
            [
                "name" => "Plateria",
                "province_id" => 163,
            ],
            [
                "name" => "San Antonio",
                "province_id" => 163,
            ],
            [
                "name" => "Tiquillaca",
                "province_id" => 163,
            ],
            [
                "name" => "Vilque",
                "province_id" => 163,
            ],
            [
                "name" => "Az" . $this->Utf8_ansi("\u00e1") . "ngaro",
                "province_id" => 164,
            ],
            [
                "name" => "Achaya",
                "province_id" => 164,
            ],
            [
                "name" => "Arapa",
                "province_id" => 164,
            ],
            [
                "name" => "Asillo",
                "province_id" => 164,
            ],
            [
                "name" => "Caminaca",
                "province_id" => 164,
            ],
            [
                "name" => "Chupa",
                "province_id" => 164,
            ],
            [
                "name" => "Jos" . $this->Utf8_ansi("\u00e9") . " Domingo Choquehuanca",
                "province_id" => 164,
            ],
            [
                "name" => "Mu" . $this->Utf8_ansi("\u00f1") . "ani",
                "province_id" => 164,
            ],
            [
                "name" => "Potoni",
                "province_id" => 164,
            ],
            [
                "name" => "Saman",
                "province_id" => 164,
            ],
            [
                "name" => "San Anton",
                "province_id" => 164,
            ],
            [
                "name" => "San Jos" . $this->Utf8_ansi("\u00e9") . "",
                "province_id" => 164,
            ],
            [
                "name" => "San Juan de Salinas",
                "province_id" => 164,
            ],
            [
                "name" => "Santiago de Pupuja",
                "province_id" => 164,
            ],
            [
                "name" => "Tirapata",
                "province_id" => 164,
            ],
            [
                "name" => "Macusani",
                "province_id" => 165,
            ],
            [
                "name" => "Ajoyani",
                "province_id" => 165,
            ],
            [
                "name" => "Ayapata",
                "province_id" => 165,
            ],
            [
                "name" => "Coasa",
                "province_id" => 165,
            ],
            [
                "name" => "Corani",
                "province_id" => 165,
            ],
            [
                "name" => "Crucero",
                "province_id" => 165,
            ],
            [
                "name" => "Ituata",
                "province_id" => 165,
            ],
            [
                "name" => "Ollachea",
                "province_id" => 165,
            ],
            [
                "name" => "San Gaban",
                "province_id" => 165,
            ],
            [
                "name" => "Usicayos",
                "province_id" => 165,
            ],
            [
                "name" => "Juli",
                "province_id" => 166,
            ],
            [
                "name" => "Desaguadero",
                "province_id" => 166,
            ],
            [
                "name" => "Huacullani",
                "province_id" => 166,
            ],
            [
                "name" => "Kelluyo",
                "province_id" => 166,
            ],
            [
                "name" => "Pisacoma",
                "province_id" => 166,
            ],
            [
                "name" => "Pomata",
                "province_id" => 166,
            ],
            [
                "name" => "Zepita",
                "province_id" => 166,
            ],
            [
                "name" => "Ilave",
                "province_id" => 167,
            ],
            [
                "name" => "Capazo",
                "province_id" => 167,
            ],
            [
                "name" => "Pilcuyo",
                "province_id" => 167,
            ],
            [
                "name" => "Santa Rosa",
                "province_id" => 167,
            ],
            [
                "name" => "Conduriri",
                "province_id" => 167,
            ],
            [
                "name" => "Huancane",
                "province_id" => 168,
            ],
            [
                "name" => "Cojata",
                "province_id" => 168,
            ],
            [
                "name" => "Huatasani",
                "province_id" => 168,
            ],
            [
                "name" => "Inchupalla",
                "province_id" => 168,
            ],
            [
                "name" => "Pusi",
                "province_id" => 168,
            ],
            [
                "name" => "Rosaspata",
                "province_id" => 168,
            ],
            [
                "name" => "Taraco",
                "province_id" => 168,
            ],
            [
                "name" => "Vilque Chico",
                "province_id" => 168,
            ],
            [
                "name" => "Lampa",
                "province_id" => 169,
            ],
            [
                "name" => "Cabanilla",
                "province_id" => 169,
            ],
            [
                "name" => "Calapuja",
                "province_id" => 169,
            ],
            [
                "name" => "Nicasio",
                "province_id" => 169,
            ],
            [
                "name" => "Ocuviri",
                "province_id" => 169,
            ],
            [
                "name" => "Palca",
                "province_id" => 169,
            ],
            [
                "name" => "Paratia",
                "province_id" => 169,
            ],
            [
                "name" => "Pucara",
                "province_id" => 169,
            ],
            [
                "name" => "Santa Lucia",
                "province_id" => 169,
            ],
            [
                "name" => "Vilavila",
                "province_id" => 169,
            ],
            [
                "name" => "Ayaviri",
                "province_id" => 170,
            ],
            [
                "name" => "Antauta",
                "province_id" => 170,
            ],
            [
                "name" => "Cupi",
                "province_id" => 170,
            ],
            [
                "name" => "Llalli",
                "province_id" => 170,
            ],
            [
                "name" => "Macari",
                "province_id" => 170,
            ],
            [
                "name" => "Nu" . $this->Utf8_ansi("\u00f1") . "oa",
                "province_id" => 170,
            ],
            [
                "name" => "Orurillo",
                "province_id" => 170,
            ],
            [
                "name" => "Santa Rosa",
                "province_id" => 170,
            ],
            [
                "name" => "Umachiri",
                "province_id" => 170,
            ],
            [
                "name" => "Moho",
                "province_id" => 171,
            ],
            [
                "name" => "Conima",
                "province_id" => 171,
            ],
            [
                "name" => "Huayrapata",
                "province_id" => 171,
            ],
            [
                "name" => "Tilali",
                "province_id" => 171,
            ],
            [
                "name" => "Putina",
                "province_id" => 172,
            ],
            [
                "name" => "Ananea",
                "province_id" => 172,
            ],
            [
                "name" => "Pedro Vilca Apaza",
                "province_id" => 172,
            ],
            [
                "name" => "Quilcapuncu",
                "province_id" => 172,
            ],
            [
                "name" => "Sina",
                "province_id" => 172,
            ],
            [
                "name" => "Juliaca",
                "province_id" => 173,
            ],
            [
                "name" => "Cabana",
                "province_id" => 173,
            ],
            [
                "name" => "Cabanillas",
                "province_id" => 173,
            ],
            [
                "name" => "Caracoto",
                "province_id" => 173,
            ],
            [
                "name" => "San Miguel",
                "province_id" => 173,
            ],
            [
                "name" => "Sandia",
                "province_id" => 174,
            ],
            [
                "name" => "Cuyocuyo",
                "province_id" => 174,
            ],
            [
                "name" => "Limbani",
                "province_id" => 174,
            ],
            [
                "name" => "Patambuco",
                "province_id" => 174,
            ],
            [
                "name" => "Phara",
                "province_id" => 174,
            ],
            [
                "name" => "Quiaca",
                "province_id" => 174,
            ],
            [
                "name" => "San Juan del Oro",
                "province_id" => 174,
            ],
            [
                "name" => "Yanahuaya",
                "province_id" => 174,
            ],
            [
                "name" => "Alto Inambari",
                "province_id" => 174,
            ],
            [
                "name" => "San Pedro de Putina Punco",
                "province_id" => 174,
            ],
            [
                "name" => "Yunguyo",
                "province_id" => 175,
            ],
            [
                "name" => "Anapia",
                "province_id" => 175,
            ],
            [
                "name" => "Copani",
                "province_id" => 175,
            ],
            [
                "name" => "Cuturapi",
                "province_id" => 175,
            ],
            [
                "name" => "Ollaraya",
                "province_id" => 175,
            ],
            [
                "name" => "Tinicachi",
                "province_id" => 175,
            ],
            [
                "name" => "Unicachi",
                "province_id" => 175,
            ],
            [
                "name" => "Moyobamba",
                "province_id" => 176,
            ],
            [
                "name" => "Calzada",
                "province_id" => 176,
            ],
            [
                "name" => "Habana",
                "province_id" => 176,
            ],
            [
                "name" => "Jepelacio",
                "province_id" => 176,
            ],
            [
                "name" => "Soritor",
                "province_id" => 176,
            ],
            [
                "name" => "Yantalo",
                "province_id" => 176,
            ],
            [
                "name" => "Bellavista",
                "province_id" => 177,
            ],
            [
                "name" => "Alto Biavo",
                "province_id" => 177,
            ],
            [
                "name" => "Bajo Biavo",
                "province_id" => 177,
            ],
            [
                "name" => "Huallaga",
                "province_id" => 177,
            ],
            [
                "name" => "San Pablo",
                "province_id" => 177,
            ],
            [
                "name" => "San Rafael",
                "province_id" => 177,
            ],
            [
                "name" => "San Jos" . $this->Utf8_ansi("\u00e9") . " de Sisa",
                "province_id" => 178,
            ],
            [
                "name" => "Agua Blanca",
                "province_id" => 178,
            ],
            [
                "name" => "San Mart" . $this->Utf8_ansi("\u00ed") . "n",
                "province_id" => 178,
            ],
            [
                "name" => "Santa Rosa",
                "province_id" => 178,
            ],
            [
                "name" => "Shatoja",
                "province_id" => 178,
            ],
            [
                "name" => "Saposoa",
                "province_id" => 179,
            ],
            [
                "name" => "Alto Saposoa",
                "province_id" => 179,
            ],
            [
                "name" => "El Eslab" . $this->Utf8_ansi("\u00f3") . "n",
                "province_id" => 179,
            ],
            [
                "name" => "Piscoyacu",
                "province_id" => 179,
            ],
            [
                "name" => "Sacanche",
                "province_id" => 179,
            ],
            [
                "name" => "Tingo de Saposoa",
                "province_id" => 179,
            ],
            [
                "name" => "Lamas",
                "province_id" => 180,
            ],
            [
                "name" => "Alonso de Alvarado",
                "province_id" => 180,
            ],
            [
                "name" => "Barranquita",
                "province_id" => 180,
            ],
            [
                "name" => "Caynarachi",
                "province_id" => 180,
            ],
            [
                "name" => "Cu" . $this->Utf8_ansi("\u00f1") . "umbuqui",
                "province_id" => 180,
            ],
            [
                "name" => "Pinto Recodo",
                "province_id" => 180,
            ],
            [
                "name" => "Rumisapa",
                "province_id" => 180,
            ],
            [
                "name" => "San Roque de Cumbaza",
                "province_id" => 180,
            ],
            [
                "name" => "Shanao",
                "province_id" => 180,
            ],
            [
                "name" => "Tabalosos",
                "province_id" => 180,
            ],
            [
                "name" => "Zapatero",
                "province_id" => 180,
            ],
            [
                "name" => "Juanju" . $this->Utf8_ansi("\u00ed") . "",
                "province_id" => 181,
            ],
            [
                "name" => "Campanilla",
                "province_id" => 181,
            ],
            [
                "name" => "Huicungo",
                "province_id" => 181,
            ],
            [
                "name" => "Pachiza",
                "province_id" => 181,
            ],
            [
                "name" => "Pajarillo",
                "province_id" => 181,
            ],
            [
                "name" => "Picota",
                "province_id" => 182,
            ],
            [
                "name" => "Buenos Aires",
                "province_id" => 182,
            ],
            [
                "name" => "Caspisapa",
                "province_id" => 182,
            ],
            [
                "name" => "Pilluana",
                "province_id" => 182,
            ],
            [
                "name" => "Pucacaca",
                "province_id" => 182,
            ],
            [
                "name" => "San Crist" . $this->Utf8_ansi("\u00f3") . "bal",
                "province_id" => 182,
            ],
            [
                "name" => "San Hilari" . $this->Utf8_ansi("\u00f3") . "n",
                "province_id" => 182,
            ],
            [
                "name" => "Shamboyacu",
                "province_id" => 182,
            ],
            [
                "name" => "Tingo de Ponasa",
                "province_id" => 182,
            ],
            [
                "name" => "Tres Unidos",
                "province_id" => 182,
            ],
            [
                "name" => "Rioja",
                "province_id" => 183,
            ],
            [
                "name" => "Awajun",
                "province_id" => 183,
            ],
            [
                "name" => "El" . $this->Utf8_ansi("\u00ed") . "as Soplin Vargas",
                "province_id" => 183,
            ],
            [
                "name" => "Nueva Cajamarca",
                "province_id" => 183,
            ],
            [
                "name" => "Pardo Miguel",
                "province_id" => 183,
            ],
            [
                "name" => "Posic",
                "province_id" => 183,
            ],
            [
                "name" => "San Fernando",
                "province_id" => 183,
            ],
            [
                "name" => "Yorongos",
                "province_id" => 183,
            ],
            [
                "name" => "Yuracyacu",
                "province_id" => 183,
            ],
            [
                "name" => "Tarapoto",
                "province_id" => 184,
            ],
            [
                "name" => "Alberto Leveau",
                "province_id" => 184,
            ],
            [
                "name" => "Cacatachi",
                "province_id" => 184,
            ],
            [
                "name" => "Chazuta",
                "province_id" => 184,
            ],
            [
                "name" => "Chipurana",
                "province_id" => 184,
            ],
            [
                "name" => "El Porvenir",
                "province_id" => 184,
            ],
            [
                "name" => "Huimbayoc",
                "province_id" => 184,
            ],
            [
                "name" => "Juan Guerra",
                "province_id" => 184,
            ],
            [
                "name" => "La Banda de Shilcayo",
                "province_id" => 184,
            ],
            [
                "name" => "Morales",
                "province_id" => 184,
            ],
            [
                "name" => "Papaplaya",
                "province_id" => 184,
            ],
            [
                "name" => "San Antonio",
                "province_id" => 184,
            ],
            [
                "name" => "Sauce",
                "province_id" => 184,
            ],
            [
                "name" => "Shapaja",
                "province_id" => 184,
            ],
            [
                "name" => "Tocache",
                "province_id" => 185,
            ],
            [
                "name" => "Nuevo Progreso",
                "province_id" => 185,
            ],
            [
                "name" => "Polvora",
                "province_id" => 185,
            ],
            [
                "name" => "Shunte",
                "province_id" => 185,
            ],
            [
                "name" => "Uchiza",
                "province_id" => 185,
            ],
            [
                "name" => "Tacna",
                "province_id" => 186,
            ],
            [
                "name" => "Alto de la Alianza",
                "province_id" => 186,
            ],
            [
                "name" => "Calana",
                "province_id" => 186,
            ],
            [
                "name" => "Ciudad Nueva",
                "province_id" => 186,
            ],
            [
                "name" => "Inclan",
                "province_id" => 186,
            ],
            [
                "name" => "Pachia",
                "province_id" => 186,
            ],
            [
                "name" => "Palca",
                "province_id" => 186,
            ],
            [
                "name" => "Pocollay",
                "province_id" => 186,
            ],
            [
                "name" => "Sama",
                "province_id" => 186,
            ],
            [
                "name" => "Coronel Gregorio Albarrac" . $this->Utf8_ansi("\u00ed") . "n Lanchipa",
                "province_id" => 186,
            ],
            [
                "name" => "La Yarada los Palos",
                "province_id" => 186,
            ],
            [
                "name" => "Candarave",
                "province_id" => 187,
            ],
            [
                "name" => "Cairani",
                "province_id" => 187,
            ],
            [
                "name" => "Camilaca",
                "province_id" => 187,
            ],
            [
                "name" => "Curibaya",
                "province_id" => 187,
            ],
            [
                "name" => "Huanuara",
                "province_id" => 187,
            ],
            [
                "name" => "Quilahuani",
                "province_id" => 187,
            ],
            [
                "name" => "Locumba",
                "province_id" => 188,
            ],
            [
                "name" => "Ilabaya",
                "province_id" => 188,
            ],
            [
                "name" => "Ite",
                "province_id" => 188,
            ],
            [
                "name" => "Tarata",
                "province_id" => 189,
            ],
            [
                "name" => "H" . $this->Utf8_ansi("\u00e9") . "roes Albarrac" . $this->Utf8_ansi("\u00ed") . "n",
                "province_id" => 189,
            ],
            [
                "name" => "Estique",
                "province_id" => 189,
            ],
            [
                "name" => "Estique-Pampa",
                "province_id" => 189,
            ],
            [
                "name" => "Sitajara",
                "province_id" => 189,
            ],
            [
                "name" => "Susapaya",
                "province_id" => 189,
            ],
            [
                "name" => "Tarucachi",
                "province_id" => 189,
            ],
            [
                "name" => "Ticaco",
                "province_id" => 189,
            ],
            [
                "name" => "Tumbes",
                "province_id" => 190,
            ],
            [
                "name" => "Corrales",
                "province_id" => 190,
            ],
            [
                "name" => "La Cruz",
                "province_id" => 190,
            ],
            [
                "name" => "Pampas de Hospital",
                "province_id" => 190,
            ],
            [
                "name" => "San Jacinto",
                "province_id" => 190,
            ],
            [
                "name" => "San Juan de la Virgen",
                "province_id" => 190,
            ],
            [
                "name" => "Zorritos",
                "province_id" => 191,
            ],
            [
                "name" => "Casitas",
                "province_id" => 191,
            ],
            [
                "name" => "Canoas de Punta Sal",
                "province_id" => 191,
            ],
            [
                "name" => "Zarumilla",
                "province_id" => 192,
            ],
            [
                "name" => "Aguas Verdes",
                "province_id" => 192,
            ],
            [
                "name" => "Matapalo",
                "province_id" => 192,
            ],
            [
                "name" => "Papayal",
                "province_id" => 192,
            ],
            [
                "name" => "Calleria",
                "province_id" => 193,
            ],
            [
                "name" => "Campoverde",
                "province_id" => 193,
            ],
            [
                "name" => "Iparia",
                "province_id" => 193,
            ],
            [
                "name" => "Masisea",
                "province_id" => 193,
            ],
            [
                "name" => "Yarinacocha",
                "province_id" => 193,
            ],
            [
                "name" => "Nueva Requena",
                "province_id" => 193,
            ],
            [
                "name" => "Manantay",
                "province_id" => 193,
            ],
            [
                "name" => "Raymondi",
                "province_id" => 194,
            ],
            [
                "name" => "Sepahua",
                "province_id" => 194,
            ],
            [
                "name" => "Tahuania",
                "province_id" => 194,
            ],
            [
                "name" => "Yurua",
                "province_id" => 194,
            ],
            [
                "name" => "Padre Abad",
                "province_id" => 195,
            ],
            [
                "name" => "Irazola",
                "province_id" => 195,
            ],
            [
                "name" => "Curimana",
                "province_id" => 195,
            ],
            [
                "name" => "Neshuya",
                "province_id" => 195,
            ],
            [
                "name" => "Alexander Von Humboldt",
                "province_id" => 195,
            ],
            [
                "name" => "Purus",
                "province_id" => 196,
            ]
        ];

        foreach ($districts as $district) {
            $name = trim(strtoupper($district['name']));
            $name = substr($name, -1) == " " ? substr($name, 0, -1) : $name;

            District::firstOrCreate(
                [
                    'name' => $name,
                    'province_id' => $district['province_id']
                ],
            );
        }
    }

    private function Utf8_ansi($valor='') {    $utf8_ansi2 = array(    "\u00c0" =>"À",    "\u00c1" =>"Á",    "\u00c2" =>"Â",    "\u00c3" =>"Ã",    "\u00c4" =>"Ä",    "\u00c5" =>"Å",    "\u00c6" =>"Æ",    "\u00c7" =>"Ç",    "\u00c8" =>"È",    "\u00c9" =>"É",    "\u00ca" =>"Ê",    "\u00cb" =>"Ë",    "\u00cc" =>"Ì",    "\u00cd" =>"Í",    "\u00ce" =>"Î",    "\u00cf" =>"Ï",    "\u00d1" =>"Ñ",    "\u00d2" =>"Ò",    "\u00d3" =>"Ó",    "\u00d4" =>"Ô",    "\u00d5" =>"Õ",    "\u00d6" =>"Ö",    "\u00d8" =>"Ø",    "\u00d9" =>"Ù",    "\u00da" =>"Ú",    "\u00db" =>"Û",    "\u00dc" =>"Ü",    "\u00dd" =>"Ý",    "\u00df" =>"ß",    "\u00e0" =>"à",    "\u00e1" =>"Á",    "\u00e2" =>"â",    "\u00e3" =>"ã",    "\u00e4" =>"ä",    "\u00e5" =>"å",    "\u00e6" =>"æ",    "\u00e7" =>"ç",    "\u00e8" =>"è",    "\u00e9" =>"É",    "\u00ea" =>"ê",    "\u00eb" =>"ë",    "\u00ec" =>"ì",    "\u00ed" =>"Í",    "\u00ee" =>"î",    "\u00ef" =>"ï",    "\u00f0" =>"ð",    "\u00f1" =>"Ñ",    "\u00f2" =>"ò",    "\u00f3" =>"Ó",    "\u00f4" =>"ô",    "\u00f5" =>"õ",    "\u00f6" =>"ö",    "\u00f8" =>"ø",    "\u00f9" =>"ù",    "\u00fa" =>"Ú",    "\u00fb" =>"û",    "\u00fc" =>"ü",    "\u00fd" =>"ý",    "\u00ff" =>"ÿ");    return strtr($valor, $utf8_ansi2);      }
}
