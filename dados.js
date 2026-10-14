// Dados extraídos do Colégio Qi — Ciclo de Matrículas 2027
const DADOS = [
  {
    "unidade": "Freguesia",
    "segmento": "EF1",
    "serie": "1º Ano",
    "turno": "Manhã",
    "anuidade": 39787,
    "mensalidade": 3145,
    "cota": 2044,
    "material": 2753.32,
    "biling_anuidade": 10620,
    "biling_mensalidade": 885
  },
  {
    "unidade": "Freguesia",
    "segmento": "EF1",
    "serie": "2º Ano",
    "turno": "Manhã",
    "anuidade": 39787,
    "mensalidade": 3145,
    "cota": 2044,
    "material": 2753.32,
    "biling_anuidade": 10620,
    "biling_mensalidade": 885
  },
  {
    "unidade": "Freguesia",
    "segmento": "EF1",
    "serie": "3º Ano",
    "turno": "Manhã",
    "anuidade": 39787,
    "mensalidade": 3145,
    "cota": 2044,
    "material": 2753.32,
    "biling_anuidade": 10620,
    "biling_mensalidade": 885
  },
  {
    "unidade": "Freguesia",
    "segmento": "EF1",
    "serie": "4º Ano",
    "turno": "Manhã",
    "anuidade": 39787,
    "mensalidade": 3145,
    "cota": 2044,
    "material": 2753.32,
    "biling_anuidade": 10620,
    "biling_mensalidade": 885
  },
  {
    "unidade": "Freguesia",
    "segmento": "EF1",
    "serie": "5º Ano",
    "turno": "Manhã",
    "anuidade": 39787,
    "mensalidade": 3145,
    "cota": 2044,
    "material": 2753.32,
    "biling_anuidade": 10620,
    "biling_mensalidade": 885
  },
  {
    "unidade": "Freguesia",
    "segmento": "EF2",
    "serie": "6º Ano",
    "turno": "Manhã",
    "anuidade": 43798,
    "mensalidade": 3479,
    "cota": 2044,
    "material": 3522.76,
    "biling_anuidade": null,
    "biling_mensalidade": null
  },
  {
    "unidade": "Freguesia",
    "segmento": "EF2",
    "serie": "7º Ano",
    "turno": "Manhã",
    "anuidade": 43798,
    "mensalidade": 3479,
    "cota": 2044,
    "material": 3522.76,
    "biling_anuidade": null,
    "biling_mensalidade": null
  },
  {
    "unidade": "Freguesia",
    "segmento": "EF2",
    "serie": "8º Ano",
    "turno": "Manhã",
    "anuidade": 43798,
    "mensalidade": 3479,
    "cota": 2044,
    "material": 3522.76,
    "biling_anuidade": null,
    "biling_mensalidade": null
  },
  {
    "unidade": "Freguesia",
    "segmento": "EF2",
    "serie": "9º Ano",
    "turno": "Manhã",
    "anuidade": 43798,
    "mensalidade": 3479,
    "cota": 2044,
    "material": 3522.76,
    "biling_anuidade": null,
    "biling_mensalidade": null
  },
  {
    "unidade": "Freguesia",
    "segmento": "EM",
    "serie": "1ª Série",
    "turno": "Manhã",
    "anuidade": 48256,
    "mensalidade": 3851,
    "cota": 2044,
    "material": 4008.8,
    "biling_anuidade": null,
    "biling_mensalidade": null
  },
  {
    "unidade": "Freguesia",
    "segmento": "EM",
    "serie": "2ª Série",
    "turno": "Manhã",
    "anuidade": 48256,
    "mensalidade": 3851,
    "cota": 2044,
    "material": 4008.8,
    "biling_anuidade": null,
    "biling_mensalidade": null
  },
  {
    "unidade": "Freguesia",
    "segmento": "EM",
    "serie": "3ª Série",
    "turno": "Manhã",
    "anuidade": 54907,
    "mensalidade": 4405,
    "cota": 2044,
    "material": 5012.36,
    "biling_anuidade": null,
    "biling_mensalidade": null
  },
  {
    "unidade": "Metropolitano",
    "segmento": "EF1",
    "serie": "1º Ano",
    "turno": "Manhã",
    "anuidade": 30707,
    "mensalidade": 2489,
    "cota": 842,
    "material": 2753.32,
    "biling_anuidade": 10620,
    "biling_mensalidade": 885
  },
  {
    "unidade": "Metropolitano",
    "segmento": "EF1",
    "serie": "1º Ano",
    "turno": "Tarde",
    "anuidade": 30707,
    "mensalidade": 2489,
    "cota": 842,
    "material": 2753.32,
    "biling_anuidade": 10620,
    "biling_mensalidade": 885
  },
  {
    "unidade": "Metropolitano",
    "segmento": "EF1",
    "serie": "2º Ano",
    "turno": "Manhã",
    "anuidade": 30707,
    "mensalidade": 2489,
    "cota": 842,
    "material": 2753.32,
    "biling_anuidade": 10620,
    "biling_mensalidade": 885
  },
  {
    "unidade": "Metropolitano",
    "segmento": "EF1",
    "serie": "3º Ano",
    "turno": "Manhã",
    "anuidade": 30707,
    "mensalidade": 2489,
    "cota": 842,
    "material": 2753.32,
    "biling_anuidade": 10620,
    "biling_mensalidade": 885
  },
  {
    "unidade": "Metropolitano",
    "segmento": "EF1",
    "serie": "4º Ano",
    "turno": "Manhã",
    "anuidade": 30707,
    "mensalidade": 2489,
    "cota": 842,
    "material": 2753.32,
    "biling_anuidade": 10620,
    "biling_mensalidade": 885
  },
  {
    "unidade": "Metropolitano",
    "segmento": "EF1",
    "serie": "5º Ano",
    "turno": "Manhã",
    "anuidade": 30707,
    "mensalidade": 2489,
    "cota": 842,
    "material": 2753.32,
    "biling_anuidade": 10620,
    "biling_mensalidade": 885
  },
  {
    "unidade": "Metropolitano",
    "segmento": "EF2",
    "serie": "6º Ano",
    "turno": "Manhã",
    "anuidade": 36637,
    "mensalidade": 2983,
    "cota": 842,
    "material": 3522.76,
    "biling_anuidade": null,
    "biling_mensalidade": null
  },
  {
    "unidade": "Metropolitano",
    "segmento": "EF2",
    "serie": "7º Ano",
    "turno": "Manhã",
    "anuidade": 36637,
    "mensalidade": 2983,
    "cota": 842,
    "material": 3522.76,
    "biling_anuidade": null,
    "biling_mensalidade": null
  },
  {
    "unidade": "Metropolitano",
    "segmento": "EF2",
    "serie": "8º Ano",
    "turno": "Manhã",
    "anuidade": 36637,
    "mensalidade": 2983,
    "cota": 842,
    "material": 3522.76,
    "biling_anuidade": null,
    "biling_mensalidade": null
  },
  {
    "unidade": "Metropolitano",
    "segmento": "EF2",
    "serie": "9º Ano",
    "turno": "Manhã",
    "anuidade": 36637,
    "mensalidade": 2983,
    "cota": 842,
    "material": 3522.76,
    "biling_anuidade": null,
    "biling_mensalidade": null
  },
  {
    "unidade": "Metropolitano",
    "segmento": "EM",
    "serie": "1ª Série",
    "turno": "Manhã",
    "anuidade": 38571,
    "mensalidade": 3144,
    "cota": 842,
    "material": 4008.8,
    "biling_anuidade": null,
    "biling_mensalidade": null
  },
  {
    "unidade": "Metropolitano",
    "segmento": "EM",
    "serie": "2ª Série",
    "turno": "Manhã",
    "anuidade": 38571,
    "mensalidade": 3144,
    "cota": 842,
    "material": 4008.8,
    "biling_anuidade": null,
    "biling_mensalidade": null
  },
  {
    "unidade": "Metropolitano",
    "segmento": "EM",
    "serie": "3ª Série",
    "turno": "Manhã",
    "anuidade": 43202,
    "mensalidade": 3530,
    "cota": 842,
    "material": 5012.36,
    "biling_anuidade": null,
    "biling_mensalidade": null
  },
  {
    "unidade": "Recreio",
    "segmento": "EF1",
    "serie": "1º Ano",
    "turno": "Manhã",
    "anuidade": 41634,
    "mensalidade": 3299,
    "cota": 2044,
    "material": 2753.32,
    "biling_anuidade": 10620,
    "biling_mensalidade": 885
  },
  {
    "unidade": "Recreio",
    "segmento": "EF1",
    "serie": "2º Ano",
    "turno": "Manhã",
    "anuidade": 41634,
    "mensalidade": 3299,
    "cota": 2044,
    "material": 2753.32,
    "biling_anuidade": 10620,
    "biling_mensalidade": 885
  },
  {
    "unidade": "Recreio",
    "segmento": "EF1",
    "serie": "3º Ano",
    "turno": "Manhã",
    "anuidade": 41634,
    "mensalidade": 3299,
    "cota": 2044,
    "material": 2753.32,
    "biling_anuidade": 10620,
    "biling_mensalidade": 885
  },
  {
    "unidade": "Recreio",
    "segmento": "EF1",
    "serie": "4º Ano",
    "turno": "Manhã",
    "anuidade": 41634,
    "mensalidade": 3299,
    "cota": 2044,
    "material": 2753.32,
    "biling_anuidade": 10620,
    "biling_mensalidade": 885
  },
  {
    "unidade": "Recreio",
    "segmento": "EF1",
    "serie": "5º Ano",
    "turno": "Manhã",
    "anuidade": 41634,
    "mensalidade": 3299,
    "cota": 2044,
    "material": 2753.32,
    "biling_anuidade": 10620,
    "biling_mensalidade": 885
  },
  {
    "unidade": "Recreio",
    "segmento": "EF2",
    "serie": "6º Ano",
    "turno": "Manhã",
    "anuidade": 46438,
    "mensalidade": 3699,
    "cota": 2044,
    "material": 3522.76,
    "biling_anuidade": null,
    "biling_mensalidade": null
  },
  {
    "unidade": "Recreio",
    "segmento": "EF2",
    "serie": "7º Ano",
    "turno": "Manhã",
    "anuidade": 46438,
    "mensalidade": 3699,
    "cota": 2044,
    "material": 3522.76,
    "biling_anuidade": null,
    "biling_mensalidade": null
  },
  {
    "unidade": "Recreio",
    "segmento": "EF2",
    "serie": "8º Ano",
    "turno": "Manhã",
    "anuidade": 46438,
    "mensalidade": 3699,
    "cota": 2044,
    "material": 3522.76,
    "biling_anuidade": null,
    "biling_mensalidade": null
  },
  {
    "unidade": "Recreio",
    "segmento": "EF2",
    "serie": "9º Ano",
    "turno": "Manhã",
    "anuidade": 46438,
    "mensalidade": 3699,
    "cota": 2044,
    "material": 3522.76,
    "biling_anuidade": null,
    "biling_mensalidade": null
  },
  {
    "unidade": "Recreio",
    "segmento": "EM",
    "serie": "1ª Série",
    "turno": "Manhã",
    "anuidade": 51214,
    "mensalidade": 4097,
    "cota": 2044,
    "material": 4008.8,
    "biling_anuidade": null,
    "biling_mensalidade": null
  },
  {
    "unidade": "Recreio",
    "segmento": "EM",
    "serie": "2ª Série",
    "turno": "Manhã",
    "anuidade": 51214,
    "mensalidade": 4097,
    "cota": 2044,
    "material": 4008.8,
    "biling_anuidade": null,
    "biling_mensalidade": null
  },
  {
    "unidade": "Recreio",
    "segmento": "EM",
    "serie": "3ª Série",
    "turno": "Manhã",
    "anuidade": 58125,
    "mensalidade": 4673,
    "cota": 2044,
    "material": 5012.36,
    "biling_anuidade": null,
    "biling_mensalidade": null
  },
  {
    "unidade": "Rio 2",
    "segmento": "EF1",
    "serie": "1º Ano",
    "turno": "Manhã",
    "anuidade": 53061,
    "mensalidade": 4251,
    "cota": 2044,
    "material": 2753.32,
    "biling_anuidade": 10620,
    "biling_mensalidade": 885
  },
  {
    "unidade": "Rio 2",
    "segmento": "EF1",
    "serie": "1º Ano",
    "turno": "Tarde",
    "anuidade": 53061,
    "mensalidade": 4251,
    "cota": 2044,
    "material": 2753.32,
    "biling_anuidade": 10620,
    "biling_mensalidade": 885
  },
  {
    "unidade": "Rio 2",
    "segmento": "EF1",
    "serie": "2º Ano",
    "turno": "Manhã",
    "anuidade": 53061,
    "mensalidade": 4251,
    "cota": 2044,
    "material": 2753.32,
    "biling_anuidade": 10620,
    "biling_mensalidade": 885
  },
  {
    "unidade": "Rio 2",
    "segmento": "EF1",
    "serie": "2º Ano",
    "turno": "Tarde",
    "anuidade": 53061,
    "mensalidade": 4251,
    "cota": 2044,
    "material": 2753.32,
    "biling_anuidade": 10620,
    "biling_mensalidade": 885
  },
  {
    "unidade": "Rio 2",
    "segmento": "EF1",
    "serie": "3º Ano",
    "turno": "Manhã",
    "anuidade": 53061,
    "mensalidade": 4251,
    "cota": 2044,
    "material": 2753.32,
    "biling_anuidade": 10620,
    "biling_mensalidade": 885
  },
  {
    "unidade": "Rio 2",
    "segmento": "EF1",
    "serie": "3º Ano",
    "turno": "Tarde",
    "anuidade": 53061,
    "mensalidade": 4251,
    "cota": 2044,
    "material": 2753.32,
    "biling_anuidade": 10620,
    "biling_mensalidade": 885
  },
  {
    "unidade": "Rio 2",
    "segmento": "EF1",
    "serie": "4º Ano",
    "turno": "Manhã",
    "anuidade": 53061,
    "mensalidade": 4251,
    "cota": 2044,
    "material": 2753.32,
    "biling_anuidade": 10620,
    "biling_mensalidade": 885
  },
  {
    "unidade": "Rio 2",
    "segmento": "EF1",
    "serie": "4º Ano",
    "turno": "Tarde",
    "anuidade": 53061,
    "mensalidade": 4251,
    "cota": 2044,
    "material": 2753.32,
    "biling_anuidade": 10620,
    "biling_mensalidade": 885
  },
  {
    "unidade": "Rio 2",
    "segmento": "EF1",
    "serie": "5º Ano",
    "turno": "Manhã",
    "anuidade": 53061,
    "mensalidade": 4251,
    "cota": 2044,
    "material": 2753.32,
    "biling_anuidade": 10620,
    "biling_mensalidade": 885
  },
  {
    "unidade": "Rio 2",
    "segmento": "EF1",
    "serie": "5º Ano",
    "turno": "Tarde",
    "anuidade": 53061,
    "mensalidade": 4251,
    "cota": 2044,
    "material": 2753.32,
    "biling_anuidade": 10620,
    "biling_mensalidade": 885
  },
  {
    "unidade": "Rio 2",
    "segmento": "EF2",
    "serie": "6º Ano",
    "turno": "Manhã",
    "anuidade": 58038,
    "mensalidade": 4666,
    "cota": 2044,
    "material": 3522.76,
    "biling_anuidade": null,
    "biling_mensalidade": null
  },
  {
    "unidade": "Rio 2",
    "segmento": "EF2",
    "serie": "7º Ano",
    "turno": "Manhã",
    "anuidade": 58038,
    "mensalidade": 4666,
    "cota": 2044,
    "material": 3522.76,
    "biling_anuidade": null,
    "biling_mensalidade": null
  },
  {
    "unidade": "Rio 2",
    "segmento": "EF2",
    "serie": "8º Ano",
    "turno": "Manhã",
    "anuidade": 58038,
    "mensalidade": 4666,
    "cota": 2044,
    "material": 3522.76,
    "biling_anuidade": null,
    "biling_mensalidade": null
  },
  {
    "unidade": "Rio 2",
    "segmento": "EF2",
    "serie": "9º Ano",
    "turno": "Manhã",
    "anuidade": 58038,
    "mensalidade": 4666,
    "cota": 2044,
    "material": 3522.76,
    "biling_anuidade": null,
    "biling_mensalidade": null
  },
  {
    "unidade": "Rio 2",
    "segmento": "EM",
    "serie": "1ª Série",
    "turno": "Manhã",
    "anuidade": 63059,
    "mensalidade": 5085,
    "cota": 2044,
    "material": 4008.8,
    "biling_anuidade": null,
    "biling_mensalidade": null
  },
  {
    "unidade": "Rio 2",
    "segmento": "EM",
    "serie": "2ª Série",
    "turno": "Manhã",
    "anuidade": 63059,
    "mensalidade": 5085,
    "cota": 2044,
    "material": 4008.8,
    "biling_anuidade": null,
    "biling_mensalidade": null
  },
  {
    "unidade": "Rio 2",
    "segmento": "EM",
    "serie": "3ª Série",
    "turno": "Manhã",
    "anuidade": 70504,
    "mensalidade": 5705,
    "cota": 2044,
    "material": 5012.36,
    "biling_anuidade": null,
    "biling_mensalidade": null
  },
  {
    "unidade": "Tijuca",
    "segmento": "EF1",
    "serie": "1º Ano",
    "turno": "Manhã",
    "anuidade": 39787,
    "mensalidade": 3145,
    "cota": 2044,
    "material": 2753.32,
    "biling_anuidade": 10620,
    "biling_mensalidade": 885
  },
  {
    "unidade": "Tijuca",
    "segmento": "EF1",
    "serie": "1º Ano",
    "turno": "Tarde",
    "anuidade": 39787,
    "mensalidade": 3145,
    "cota": 2044,
    "material": 2753.32,
    "biling_anuidade": 10620,
    "biling_mensalidade": 885
  },
  {
    "unidade": "Tijuca",
    "segmento": "EF1",
    "serie": "2º Ano",
    "turno": "Tarde",
    "anuidade": 39787,
    "mensalidade": 3145,
    "cota": 2044,
    "material": 2753.32,
    "biling_anuidade": 10620,
    "biling_mensalidade": 885
  },
  {
    "unidade": "Tijuca",
    "segmento": "EF1",
    "serie": "3º Ano",
    "turno": "Tarde",
    "anuidade": 39787,
    "mensalidade": 3145,
    "cota": 2044,
    "material": 2753.32,
    "biling_anuidade": 10620,
    "biling_mensalidade": 885
  },
  {
    "unidade": "Tijuca",
    "segmento": "EF1",
    "serie": "4º Ano",
    "turno": "Tarde",
    "anuidade": 39787,
    "mensalidade": 3145,
    "cota": 2044,
    "material": 2753.32,
    "biling_anuidade": 10620,
    "biling_mensalidade": 885
  },
  {
    "unidade": "Tijuca",
    "segmento": "EF1",
    "serie": "5º Ano",
    "turno": "Tarde",
    "anuidade": 39787,
    "mensalidade": 3145,
    "cota": 2044,
    "material": 2753.32,
    "biling_anuidade": 10620,
    "biling_mensalidade": 885
  },
  {
    "unidade": "Tijuca",
    "segmento": "EF2",
    "serie": "6º Ano",
    "turno": "Manhã",
    "anuidade": 43798,
    "mensalidade": 3479,
    "cota": 2044,
    "material": 3522.76,
    "biling_anuidade": null,
    "biling_mensalidade": null
  },
  {
    "unidade": "Tijuca",
    "segmento": "EF2",
    "serie": "7º Ano",
    "turno": "Manhã",
    "anuidade": 43798,
    "mensalidade": 3479,
    "cota": 2044,
    "material": 3522.76,
    "biling_anuidade": null,
    "biling_mensalidade": null
  },
  {
    "unidade": "Tijuca",
    "segmento": "EF2",
    "serie": "8º Ano",
    "turno": "Manhã",
    "anuidade": 43798,
    "mensalidade": 3479,
    "cota": 2044,
    "material": 3522.76,
    "biling_anuidade": null,
    "biling_mensalidade": null
  },
  {
    "unidade": "Tijuca",
    "segmento": "EF2",
    "serie": "9º Ano",
    "turno": "Manhã",
    "anuidade": 43798,
    "mensalidade": 3479,
    "cota": 2044,
    "material": 3522.76,
    "biling_anuidade": null,
    "biling_mensalidade": null
  },
  {
    "unidade": "Tijuca",
    "segmento": "EM",
    "serie": "1ª Série",
    "turno": "Manhã",
    "anuidade": 48256,
    "mensalidade": 3851,
    "cota": 2044,
    "material": 4008.8,
    "biling_anuidade": null,
    "biling_mensalidade": null
  },
  {
    "unidade": "Tijuca",
    "segmento": "EM",
    "serie": "2ª Série",
    "turno": "Manhã",
    "anuidade": 48256,
    "mensalidade": 3851,
    "cota": 2044,
    "material": 4008.8,
    "biling_anuidade": null,
    "biling_mensalidade": null
  },
  {
    "unidade": "Tijuca",
    "segmento": "EM",
    "serie": "3ª Série",
    "turno": "Manhã",
    "anuidade": 54907,
    "mensalidade": 4405,
    "cota": 2044,
    "material": 5012.36,
    "biling_anuidade": null,
    "biling_mensalidade": null
  },
  {
    "unidade": "Valqueire",
    "segmento": "EF1",
    "serie": "1º Ano",
    "turno": "Manhã",
    "anuidade": 30707,
    "mensalidade": 2489,
    "cota": 842,
    "material": 2753.32,
    "biling_anuidade": 10620,
    "biling_mensalidade": 885
  },
  {
    "unidade": "Valqueire",
    "segmento": "EF1",
    "serie": "2º Ano",
    "turno": "Manhã",
    "anuidade": 30707,
    "mensalidade": 2489,
    "cota": 842,
    "material": 2753.32,
    "biling_anuidade": 10620,
    "biling_mensalidade": 885
  },
  {
    "unidade": "Valqueire",
    "segmento": "EF1",
    "serie": "3º Ano",
    "turno": "Manhã",
    "anuidade": 30707,
    "mensalidade": 2489,
    "cota": 842,
    "material": 2753.32,
    "biling_anuidade": 10620,
    "biling_mensalidade": 885
  },
  {
    "unidade": "Valqueire",
    "segmento": "EF1",
    "serie": "4º Ano",
    "turno": "Manhã",
    "anuidade": 30707,
    "mensalidade": 2489,
    "cota": 842,
    "material": 2753.32,
    "biling_anuidade": 10620,
    "biling_mensalidade": 885
  },
  {
    "unidade": "Valqueire",
    "segmento": "EF1",
    "serie": "5º Ano",
    "turno": "Manhã",
    "anuidade": 30707,
    "mensalidade": 2489,
    "cota": 842,
    "material": 2753.32,
    "biling_anuidade": 10620,
    "biling_mensalidade": 885
  },
  {
    "unidade": "Valqueire",
    "segmento": "EF2",
    "serie": "6º Ano",
    "turno": "Manhã",
    "anuidade": 36637,
    "mensalidade": 2983,
    "cota": 842,
    "material": 3522.76,
    "biling_anuidade": null,
    "biling_mensalidade": null
  },
  {
    "unidade": "Valqueire",
    "segmento": "EF2",
    "serie": "7º Ano",
    "turno": "Manhã",
    "anuidade": 36637,
    "mensalidade": 2983,
    "cota": 842,
    "material": 3522.76,
    "biling_anuidade": null,
    "biling_mensalidade": null
  },
  {
    "unidade": "Valqueire",
    "segmento": "EF2",
    "serie": "8º Ano",
    "turno": "Manhã",
    "anuidade": 36637,
    "mensalidade": 2983,
    "cota": 842,
    "material": 3522.76,
    "biling_anuidade": null,
    "biling_mensalidade": null
  },
  {
    "unidade": "Valqueire",
    "segmento": "EF2",
    "serie": "9º Ano",
    "turno": "Manhã",
    "anuidade": 36637,
    "mensalidade": 2983,
    "cota": 842,
    "material": 3522.76,
    "biling_anuidade": null,
    "biling_mensalidade": null
  },
  {
    "unidade": "Valqueire",
    "segmento": "EM",
    "serie": "1ª Série",
    "turno": "Manhã",
    "anuidade": 38571,
    "mensalidade": 3144,
    "cota": 842,
    "material": 4008.8,
    "biling_anuidade": null,
    "biling_mensalidade": null
  },
  {
    "unidade": "Valqueire",
    "segmento": "EM",
    "serie": "2ª Série",
    "turno": "Manhã",
    "anuidade": 38571,
    "mensalidade": 3144,
    "cota": 842,
    "material": 4008.8,
    "biling_anuidade": null,
    "biling_mensalidade": null
  },
  {
    "unidade": "Valqueire",
    "segmento": "EM",
    "serie": "3ª Série",
    "turno": "Manhã",
    "anuidade": 43202,
    "mensalidade": 3530,
    "cota": 842,
    "material": 5012.36,
    "biling_anuidade": null,
    "biling_mensalidade": null
  }
];

const REGRAS = {
  "prazos": [
    {
      "id": "p1",
      "label": "Até 30/09",
      "anuidade_desc": 0.1,
      "material_avista_desc": 0.1,
      "material_bo": 9,
      "material_cc": 12,
      "material_obs": "Último vencimento em ago/27",
      "cota_bo": 3,
      "cota_cc": 5,
      "cota_obs": null
    },
    {
      "id": "p2",
      "label": "Até 31/10",
      "anuidade_desc": 0.08,
      "material_avista_desc": 0.05,
      "material_bo": 9,
      "material_cc": 12,
      "material_obs": "Último vencimento em ago/27",
      "cota_bo": 3,
      "cota_cc": 5,
      "cota_obs": null
    },
    {
      "id": "p3",
      "label": "Até 30/11",
      "anuidade_desc": 0.07,
      "material_avista_desc": 0.05,
      "material_bo": 9,
      "material_cc": 12,
      "material_obs": "Último vencimento em ago/27",
      "cota_bo": 2,
      "cota_cc": 5,
      "cota_obs": null
    },
    {
      "id": "p4",
      "label": "A partir de 01/12",
      "anuidade_desc": 0.06,
      "material_avista_desc": 0.05,
      "material_bo": 9,
      "material_cc": 12,
      "material_obs": "Último vencimento em ago/27",
      "cota_bo": 1,
      "cota_cc": 5,
      "cota_obs": null
    }
  ]
};

const BLOCOS = [
  {
    "unidade": "Freguesia",
    "bloco": "EF1 · 1º ao 5º Ano",
    "segmento": "EF1",
    "anuidade": 39787,
    "mensalidade": 3145,
    "cota": 2044,
    "material": 2753.32,
    "biling_anuidade": 10620,
    "series": [
      "1º Ano (Manhã)",
      "2º Ano (Manhã)",
      "3º Ano (Manhã)",
      "4º Ano (Manhã)",
      "5º Ano (Manhã)"
    ]
  },
  {
    "unidade": "Freguesia",
    "bloco": "EF2 · 6º ao 9º Ano",
    "segmento": "EF2",
    "anuidade": 43798,
    "mensalidade": 3479,
    "cota": 2044,
    "material": 3522.76,
    "biling_anuidade": null,
    "series": [
      "6º Ano (Manhã)",
      "7º Ano (Manhã)",
      "8º Ano (Manhã)",
      "9º Ano (Manhã)"
    ]
  },
  {
    "unidade": "Freguesia",
    "bloco": "EM · 1ª e 2ª Séries",
    "segmento": "EM",
    "anuidade": 48256,
    "mensalidade": 3851,
    "cota": 2044,
    "material": 4008.8,
    "biling_anuidade": null,
    "series": [
      "1ª Série (Manhã)",
      "2ª Série (Manhã)"
    ]
  },
  {
    "unidade": "Freguesia",
    "bloco": "EM · 3ª Série",
    "segmento": "EM",
    "anuidade": 54907,
    "mensalidade": 4405,
    "cota": 2044,
    "material": 5012.36,
    "biling_anuidade": null,
    "series": [
      "3ª Série (Manhã)"
    ]
  },
  {
    "unidade": "Metropolitano",
    "bloco": "EF1 · 1º ao 5º Ano",
    "segmento": "EF1",
    "anuidade": 30707,
    "mensalidade": 2489,
    "cota": 842,
    "material": 2753.32,
    "biling_anuidade": 10620,
    "series": [
      "1º Ano (Manhã)",
      "1º Ano (Tarde)",
      "2º Ano (Manhã)",
      "3º Ano (Manhã)",
      "4º Ano (Manhã)",
      "5º Ano (Manhã)"
    ]
  },
  {
    "unidade": "Metropolitano",
    "bloco": "EF2 · 6º ao 9º Ano",
    "segmento": "EF2",
    "anuidade": 36637,
    "mensalidade": 2983,
    "cota": 842,
    "material": 3522.76,
    "biling_anuidade": null,
    "series": [
      "6º Ano (Manhã)",
      "7º Ano (Manhã)",
      "8º Ano (Manhã)",
      "9º Ano (Manhã)"
    ]
  },
  {
    "unidade": "Metropolitano",
    "bloco": "EM · 1ª e 2ª Séries",
    "segmento": "EM",
    "anuidade": 38571,
    "mensalidade": 3144,
    "cota": 842,
    "material": 4008.8,
    "biling_anuidade": null,
    "series": [
      "1ª Série (Manhã)",
      "2ª Série (Manhã)"
    ]
  },
  {
    "unidade": "Metropolitano",
    "bloco": "EM · 3ª Série",
    "segmento": "EM",
    "anuidade": 43202,
    "mensalidade": 3530,
    "cota": 842,
    "material": 5012.36,
    "biling_anuidade": null,
    "series": [
      "3ª Série (Manhã)"
    ]
  },
  {
    "unidade": "Recreio",
    "bloco": "EF1 · 1º ao 5º Ano",
    "segmento": "EF1",
    "anuidade": 41634,
    "mensalidade": 3299,
    "cota": 2044,
    "material": 2753.32,
    "biling_anuidade": 10620,
    "series": [
      "1º Ano (Manhã)",
      "2º Ano (Manhã)",
      "3º Ano (Manhã)",
      "4º Ano (Manhã)",
      "5º Ano (Manhã)"
    ]
  },
  {
    "unidade": "Recreio",
    "bloco": "EF2 · 6º ao 9º Ano",
    "segmento": "EF2",
    "anuidade": 46438,
    "mensalidade": 3699,
    "cota": 2044,
    "material": 3522.76,
    "biling_anuidade": null,
    "series": [
      "6º Ano (Manhã)",
      "7º Ano (Manhã)",
      "8º Ano (Manhã)",
      "9º Ano (Manhã)"
    ]
  },
  {
    "unidade": "Recreio",
    "bloco": "EM · 1ª e 2ª Séries",
    "segmento": "EM",
    "anuidade": 51214,
    "mensalidade": 4097,
    "cota": 2044,
    "material": 4008.8,
    "biling_anuidade": null,
    "series": [
      "1ª Série (Manhã)",
      "2ª Série (Manhã)"
    ]
  },
  {
    "unidade": "Recreio",
    "bloco": "EM · 3ª Série",
    "segmento": "EM",
    "anuidade": 58125,
    "mensalidade": 4673,
    "cota": 2044,
    "material": 5012.36,
    "biling_anuidade": null,
    "series": [
      "3ª Série (Manhã)"
    ]
  },
  {
    "unidade": "Rio 2",
    "bloco": "EF1 · 1º ao 5º Ano",
    "segmento": "EF1",
    "anuidade": 53061,
    "mensalidade": 4251,
    "cota": 2044,
    "material": 2753.32,
    "biling_anuidade": 10620,
    "series": [
      "1º Ano (Manhã)",
      "1º Ano (Tarde)",
      "2º Ano (Manhã)",
      "2º Ano (Tarde)",
      "3º Ano (Manhã)",
      "3º Ano (Tarde)",
      "4º Ano (Manhã)",
      "4º Ano (Tarde)",
      "5º Ano (Manhã)",
      "5º Ano (Tarde)"
    ]
  },
  {
    "unidade": "Rio 2",
    "bloco": "EF2 · 6º ao 9º Ano",
    "segmento": "EF2",
    "anuidade": 58038,
    "mensalidade": 4666,
    "cota": 2044,
    "material": 3522.76,
    "biling_anuidade": null,
    "series": [
      "6º Ano (Manhã)",
      "7º Ano (Manhã)",
      "8º Ano (Manhã)",
      "9º Ano (Manhã)"
    ]
  },
  {
    "unidade": "Rio 2",
    "bloco": "EM · 1ª e 2ª Séries",
    "segmento": "EM",
    "anuidade": 63059,
    "mensalidade": 5085,
    "cota": 2044,
    "material": 4008.8,
    "biling_anuidade": null,
    "series": [
      "1ª Série (Manhã)",
      "2ª Série (Manhã)"
    ]
  },
  {
    "unidade": "Rio 2",
    "bloco": "EM · 3ª Série",
    "segmento": "EM",
    "anuidade": 70504,
    "mensalidade": 5705,
    "cota": 2044,
    "material": 5012.36,
    "biling_anuidade": null,
    "series": [
      "3ª Série (Manhã)"
    ]
  },
  {
    "unidade": "Tijuca",
    "bloco": "EF1 · 1º ao 5º Ano",
    "segmento": "EF1",
    "anuidade": 39787,
    "mensalidade": 3145,
    "cota": 2044,
    "material": 2753.32,
    "biling_anuidade": 10620,
    "series": [
      "1º Ano (Manhã)",
      "1º Ano (Tarde)",
      "2º Ano (Tarde)",
      "3º Ano (Tarde)",
      "4º Ano (Tarde)",
      "5º Ano (Tarde)"
    ]
  },
  {
    "unidade": "Tijuca",
    "bloco": "EF2 · 6º ao 9º Ano",
    "segmento": "EF2",
    "anuidade": 43798,
    "mensalidade": 3479,
    "cota": 2044,
    "material": 3522.76,
    "biling_anuidade": null,
    "series": [
      "6º Ano (Manhã)",
      "7º Ano (Manhã)",
      "8º Ano (Manhã)",
      "9º Ano (Manhã)"
    ]
  },
  {
    "unidade": "Tijuca",
    "bloco": "EM · 1ª e 2ª Séries",
    "segmento": "EM",
    "anuidade": 48256,
    "mensalidade": 3851,
    "cota": 2044,
    "material": 4008.8,
    "biling_anuidade": null,
    "series": [
      "1ª Série (Manhã)",
      "2ª Série (Manhã)"
    ]
  },
  {
    "unidade": "Tijuca",
    "bloco": "EM · 3ª Série",
    "segmento": "EM",
    "anuidade": 54907,
    "mensalidade": 4405,
    "cota": 2044,
    "material": 5012.36,
    "biling_anuidade": null,
    "series": [
      "3ª Série (Manhã)"
    ]
  },
  {
    "unidade": "Valqueire",
    "bloco": "EF1 · 1º ao 5º Ano",
    "segmento": "EF1",
    "anuidade": 30707,
    "mensalidade": 2489,
    "cota": 842,
    "material": 2753.32,
    "biling_anuidade": 10620,
    "series": [
      "1º Ano (Manhã)",
      "2º Ano (Manhã)",
      "3º Ano (Manhã)",
      "4º Ano (Manhã)",
      "5º Ano (Manhã)"
    ]
  },
  {
    "unidade": "Valqueire",
    "bloco": "EF2 · 6º ao 9º Ano",
    "segmento": "EF2",
    "anuidade": 36637,
    "mensalidade": 2983,
    "cota": 842,
    "material": 3522.76,
    "biling_anuidade": null,
    "series": [
      "6º Ano (Manhã)",
      "7º Ano (Manhã)",
      "8º Ano (Manhã)",
      "9º Ano (Manhã)"
    ]
  },
  {
    "unidade": "Valqueire",
    "bloco": "EM · 1ª e 2ª Séries",
    "segmento": "EM",
    "anuidade": 38571,
    "mensalidade": 3144,
    "cota": 842,
    "material": 4008.8,
    "biling_anuidade": null,
    "series": [
      "1ª Série (Manhã)",
      "2ª Série (Manhã)"
    ]
  },
  {
    "unidade": "Valqueire",
    "bloco": "EM · 3ª Série",
    "segmento": "EM",
    "anuidade": 43202,
    "mensalidade": 3530,
    "cota": 842,
    "material": 5012.36,
    "biling_anuidade": null,
    "series": [
      "3ª Série (Manhã)"
    ]
  }
];

const MBLOCOS = [
  {
    "unidade": "Freguesia",
    "bloco": "EF1 · 1º ao 5º Ano",
    "segmento": "EF1",
    "material": 2753.32,
    "series": [
      "1º Ano",
      "2º Ano",
      "3º Ano",
      "4º Ano",
      "5º Ano"
    ]
  },
  {
    "unidade": "Freguesia",
    "bloco": "EF2 · 6º ao 9º Ano",
    "segmento": "EF2",
    "material": 3522.76,
    "series": [
      "6º Ano",
      "7º Ano",
      "8º Ano",
      "9º Ano"
    ]
  },
  {
    "unidade": "Freguesia",
    "bloco": "EM · 1ª e 2ª Séries",
    "segmento": "EM",
    "material": 4008.8,
    "series": [
      "1ª Série",
      "2ª Série"
    ]
  },
  {
    "unidade": "Freguesia",
    "bloco": "EM · 3ª Série",
    "segmento": "EM",
    "material": 5012.36,
    "series": [
      "3ª Série"
    ]
  },
  {
    "unidade": "Metropolitano",
    "bloco": "EF1 · 1º ao 5º Ano",
    "segmento": "EF1",
    "material": 2753.32,
    "series": [
      "1º Ano",
      "2º Ano",
      "3º Ano",
      "4º Ano",
      "5º Ano"
    ]
  },
  {
    "unidade": "Metropolitano",
    "bloco": "EF2 · 6º ao 9º Ano",
    "segmento": "EF2",
    "material": 3522.76,
    "series": [
      "6º Ano",
      "7º Ano",
      "8º Ano",
      "9º Ano"
    ]
  },
  {
    "unidade": "Metropolitano",
    "bloco": "EM · 1ª e 2ª Séries",
    "segmento": "EM",
    "material": 4008.8,
    "series": [
      "1ª Série",
      "2ª Série"
    ]
  },
  {
    "unidade": "Metropolitano",
    "bloco": "EM · 3ª Série",
    "segmento": "EM",
    "material": 5012.36,
    "series": [
      "3ª Série"
    ]
  },
  {
    "unidade": "Recreio",
    "bloco": "EF1 · 1º ao 5º Ano",
    "segmento": "EF1",
    "material": 2753.32,
    "series": [
      "1º Ano",
      "2º Ano",
      "3º Ano",
      "4º Ano",
      "5º Ano"
    ]
  },
  {
    "unidade": "Recreio",
    "bloco": "EF2 · 6º ao 9º Ano",
    "segmento": "EF2",
    "material": 3522.76,
    "series": [
      "6º Ano",
      "7º Ano",
      "8º Ano",
      "9º Ano"
    ]
  },
  {
    "unidade": "Recreio",
    "bloco": "EM · 1ª e 2ª Séries",
    "segmento": "EM",
    "material": 4008.8,
    "series": [
      "1ª Série",
      "2ª Série"
    ]
  },
  {
    "unidade": "Recreio",
    "bloco": "EM · 3ª Série",
    "segmento": "EM",
    "material": 5012.36,
    "series": [
      "3ª Série"
    ]
  },
  {
    "unidade": "Rio 2",
    "bloco": "EF1 · 1º ao 5º Ano",
    "segmento": "EF1",
    "material": 2753.32,
    "series": [
      "1º Ano",
      "2º Ano",
      "3º Ano",
      "4º Ano",
      "5º Ano"
    ]
  },
  {
    "unidade": "Rio 2",
    "bloco": "EF2 · 6º ao 9º Ano",
    "segmento": "EF2",
    "material": 3522.76,
    "series": [
      "6º Ano",
      "7º Ano",
      "8º Ano",
      "9º Ano"
    ]
  },
  {
    "unidade": "Rio 2",
    "bloco": "EM · 1ª e 2ª Séries",
    "segmento": "EM",
    "material": 4008.8,
    "series": [
      "1ª Série",
      "2ª Série"
    ]
  },
  {
    "unidade": "Rio 2",
    "bloco": "EM · 3ª Série",
    "segmento": "EM",
    "material": 5012.36,
    "series": [
      "3ª Série"
    ]
  },
  {
    "unidade": "Tijuca",
    "bloco": "EF1 · 1º ao 5º Ano",
    "segmento": "EF1",
    "material": 2753.32,
    "series": [
      "1º Ano",
      "2º Ano",
      "3º Ano",
      "4º Ano",
      "5º Ano"
    ]
  },
  {
    "unidade": "Tijuca",
    "bloco": "EF2 · 6º ao 9º Ano",
    "segmento": "EF2",
    "material": 3522.76,
    "series": [
      "6º Ano",
      "7º Ano",
      "8º Ano",
      "9º Ano"
    ]
  },
  {
    "unidade": "Tijuca",
    "bloco": "EM · 1ª e 2ª Séries",
    "segmento": "EM",
    "material": 4008.8,
    "series": [
      "1ª Série",
      "2ª Série"
    ]
  },
  {
    "unidade": "Tijuca",
    "bloco": "EM · 3ª Série",
    "segmento": "EM",
    "material": 5012.36,
    "series": [
      "3ª Série"
    ]
  },
  {
    "unidade": "Valqueire",
    "bloco": "EF1 · 1º ao 5º Ano",
    "segmento": "EF1",
    "material": 2753.32,
    "series": [
      "1º Ano",
      "2º Ano",
      "3º Ano",
      "4º Ano",
      "5º Ano"
    ]
  },
  {
    "unidade": "Valqueire",
    "bloco": "EF2 · 6º ao 9º Ano",
    "segmento": "EF2",
    "material": 3522.76,
    "series": [
      "6º Ano",
      "7º Ano",
      "8º Ano",
      "9º Ano"
    ]
  },
  {
    "unidade": "Valqueire",
    "bloco": "EM · 1ª e 2ª Séries",
    "segmento": "EM",
    "material": 4008.8,
    "series": [
      "1ª Série",
      "2ª Série"
    ]
  },
  {
    "unidade": "Valqueire",
    "bloco": "EM · 3ª Série",
    "segmento": "EM",
    "material": 5012.36,
    "series": [
      "3ª Série"
    ]
  }
];

const BILING = {
  "anuidade": 10620,
  "parcelas": [
    {
      "label": "12x — a partir de Janeiro",
      "n": 12
    },
    {
      "label": "11x — a partir de Fevereiro",
      "n": 11
    },
    {
      "label": "10x — a partir de Março",
      "n": 10
    },
    {
      "label": "9x — a partir de Abril",
      "n": 9
    }
  ]
};

const PORTAS = [
  {
    "data": "29/08/2026",
    "label": "29 de Agosto",
    "participantes": [
      "Freguesia",
      "Metropolitano",
      "Recreio",
      "Rio 2",
      "Tijuca",
      "Valqueire"
    ],
    "fora": []
  },
  {
    "data": "12/09/2026",
    "label": "12 de Setembro",
    "participantes": [
      "Freguesia",
      "Metropolitano",
      "Recreio",
      "Rio 2",
      "Tijuca",
      "Valqueire"
    ],
    "fora": []
  },
  {
    "data": "26/09/2026",
    "label": "26 de Setembro",
    "participantes": [
      "Freguesia",
      "Metropolitano",
      "Recreio",
      "Rio 2",
      "Tijuca",
      "Valqueire"
    ],
    "fora": []
  },
  {
    "data": "10/10/2026",
    "label": "10 de Outubro",
    "participantes": [
      "Freguesia",
      "Metropolitano",
      "Recreio",
      "Rio 2",
      "Tijuca",
      "Valqueire"
    ],
    "fora": []
  },
  {
    "data": "24/10/2026",
    "label": "24 de Outubro",
    "participantes": [
      "Freguesia",
      "Metropolitano",
      "Rio 2",
      "Valqueire"
    ],
    "fora": [
      "Tijuca",
      "Recreio"
    ]
  },
  {
    "data": "31/10/2026",
    "label": "31 de Outubro",
    "participantes": [
      "Freguesia",
      "Recreio",
      "Tijuca",
      "Valqueire"
    ],
    "fora": [
      "Metropolitano",
      "Rio 2"
    ]
  },
  {
    "data": "14/11/2026",
    "label": "14 de Novembro",
    "participantes": [
      "Freguesia",
      "Metropolitano",
      "Recreio",
      "Rio 2",
      "Tijuca",
      "Valqueire"
    ],
    "fora": []
  },
  {
    "data": "28/11/2026",
    "label": "28 de Novembro",
    "participantes": [
      "Freguesia",
      "Metropolitano",
      "Recreio",
      "Rio 2",
      "Tijuca",
      "Valqueire"
    ],
    "fora": []
  },
  {
    "data": "05/12/2026",
    "label": "5 de Dezembro",
    "participantes": [
      "Freguesia",
      "Metropolitano",
      "Recreio",
      "Rio 2",
      "Tijuca",
      "Valqueire"
    ],
    "fora": []
  },
  {
    "data": "12/12/2026",
    "label": "12 de Dezembro",
    "participantes": [
      "Freguesia",
      "Metropolitano",
      "Recreio",
      "Rio 2",
      "Tijuca",
      "Valqueire"
    ],
    "fora": []
  },
  {
    "data": "10/01/2027",
    "label": "10 de Janeiro de 2027",
    "participantes": [
      "Freguesia",
      "Metropolitano",
      "Recreio",
      "Rio 2",
      "Tijuca",
      "Valqueire"
    ],
    "fora": []
  }
];

const METAS = [
  {
    "filial": "Freguesia",
    "segmento": "EF1",
    "serie": "1º Ano",
    "ticket_meta": 1259.08,
    "ticket_alvo": 1545.03,
    "versao": "2026-10-14-captacao-40-v1",
    "receita_pendente": 0,
    "pagantes_adicionais": 0,
    "pagantes_restantes": 16
  },
  {
    "filial": "Freguesia",
    "segmento": "EF1",
    "serie": "2º Ano",
    "ticket_meta": 1259.08,
    "ticket_alvo": 1259.09,
    "versao": "2026-10-14-captacao-40-v1",
    "receita_pendente": 0,
    "pagantes_adicionais": 0,
    "pagantes_restantes": 0
  },
  {
    "filial": "Freguesia",
    "segmento": "EF1",
    "serie": "3º Ano",
    "ticket_meta": 1259.08,
    "ticket_alvo": 1469.12,
    "versao": "2026-10-14-captacao-40-v1",
    "receita_pendente": 0,
    "pagantes_adicionais": 0,
    "pagantes_restantes": 0
  },
  {
    "filial": "Freguesia",
    "segmento": "EF1",
    "serie": "4º Ano",
    "ticket_meta": 1259.08,
    "ticket_alvo": 1263.73,
    "versao": "2026-10-14-captacao-40-v1",
    "receita_pendente": 0,
    "pagantes_adicionais": 0,
    "pagantes_restantes": 0
  },
  {
    "filial": "Freguesia",
    "segmento": "EF1",
    "serie": "5º Ano",
    "ticket_meta": 1259.08,
    "ticket_alvo": 1938.47,
    "versao": "2026-10-14-captacao-40-v1",
    "receita_pendente": 10899.64,
    "pagantes_adicionais": 1,
    "pagantes_restantes": 2
  },
  {
    "filial": "Freguesia",
    "segmento": "EF2",
    "serie": "6º Ano",
    "ticket_meta": 1431.88,
    "ticket_alvo": 1884.43,
    "versao": "2026-10-14-captacao-40-v1",
    "receita_pendente": 4872.31,
    "pagantes_adicionais": 1,
    "pagantes_restantes": 6
  },
  {
    "filial": "Freguesia",
    "segmento": "EF2",
    "serie": "7º Ano",
    "ticket_meta": 1431.88,
    "ticket_alvo": 1594.39,
    "versao": "2026-10-14-captacao-40-v1",
    "receita_pendente": 0,
    "pagantes_adicionais": 0,
    "pagantes_restantes": 2
  },
  {
    "filial": "Freguesia",
    "segmento": "EF2",
    "serie": "8º Ano",
    "ticket_meta": 1431.88,
    "ticket_alvo": 2130.88,
    "versao": "2026-10-14-captacao-40-v1",
    "receita_pendente": 16507.02,
    "pagantes_adicionais": 1,
    "pagantes_restantes": 2
  },
  {
    "filial": "Freguesia",
    "segmento": "EF2",
    "serie": "9º Ano",
    "ticket_meta": 1431.88,
    "ticket_alvo": 2057.96,
    "versao": "2026-10-14-captacao-40-v1",
    "receita_pendente": 0,
    "pagantes_adicionais": 0,
    "pagantes_restantes": 4
  },
  {
    "filial": "Freguesia",
    "segmento": "EM",
    "serie": "1ª Série",
    "ticket_meta": 1530.4,
    "ticket_alvo": 1950.8,
    "versao": "2026-10-14-captacao-40-v1",
    "receita_pendente": 0,
    "pagantes_adicionais": 0,
    "pagantes_restantes": 8
  },
  {
    "filial": "Freguesia",
    "segmento": "EM",
    "serie": "2ª Série",
    "ticket_meta": 1530.4,
    "ticket_alvo": 2183.31,
    "versao": "2026-10-14-captacao-40-v1",
    "receita_pendente": 20361.5,
    "pagantes_adicionais": 1,
    "pagantes_restantes": 2
  },
  {
    "filial": "Freguesia",
    "segmento": "EM",
    "serie": "3ª Série",
    "ticket_meta": 1530.4,
    "ticket_alvo": 2142.56,
    "versao": "2026-10-14-captacao-40-v1",
    "receita_pendente": 7346.26,
    "pagantes_adicionais": 1,
    "pagantes_restantes": 4
  },
  {
    "filial": "Metropolitano",
    "segmento": "EF1",
    "serie": "1º Ano",
    "ticket_meta": 1117.26,
    "ticket_alvo": 1473.32,
    "versao": "2026-10-14-captacao-40-v1",
    "receita_pendente": 32493.3,
    "pagantes_adicionais": 2,
    "pagantes_restantes": 11
  },
  {
    "filial": "Metropolitano",
    "segmento": "EF1",
    "serie": "2º Ano",
    "ticket_meta": 1117.26,
    "ticket_alvo": 1554.53,
    "versao": "2026-10-14-captacao-40-v1",
    "receita_pendente": 11402.35,
    "pagantes_adicionais": 1,
    "pagantes_restantes": 3
  },
  {
    "filial": "Metropolitano",
    "segmento": "EF1",
    "serie": "3º Ano",
    "ticket_meta": 1117.26,
    "ticket_alvo": 1200.82,
    "versao": "2026-10-14-captacao-40-v1",
    "receita_pendente": 0,
    "pagantes_adicionais": 0,
    "pagantes_restantes": 2
  },
  {
    "filial": "Metropolitano",
    "segmento": "EF1",
    "serie": "4º Ano",
    "ticket_meta": 1117.26,
    "ticket_alvo": 1448.21,
    "versao": "2026-10-14-captacao-40-v1",
    "receita_pendente": 0,
    "pagantes_adicionais": 0,
    "pagantes_restantes": 7
  },
  {
    "filial": "Metropolitano",
    "segmento": "EF1",
    "serie": "5º Ano",
    "ticket_meta": 1117.26,
    "ticket_alvo": 1489.68,
    "versao": "2026-10-14-captacao-40-v1",
    "receita_pendente": 0,
    "pagantes_adicionais": 0,
    "pagantes_restantes": 6
  },
  {
    "filial": "Metropolitano",
    "segmento": "EF2",
    "serie": "6º Ano",
    "ticket_meta": 1319.87,
    "ticket_alvo": 1469.02,
    "versao": "2026-10-14-captacao-40-v1",
    "receita_pendente": 37962.88,
    "pagantes_adicionais": 3,
    "pagantes_restantes": 16
  },
  {
    "filial": "Metropolitano",
    "segmento": "EF2",
    "serie": "7º Ano",
    "ticket_meta": 1319.87,
    "ticket_alvo": 1736.5,
    "versao": "2026-10-14-captacao-40-v1",
    "receita_pendente": 7403.69,
    "pagantes_adicionais": 1,
    "pagantes_restantes": 6
  },
  {
    "filial": "Metropolitano",
    "segmento": "EF2",
    "serie": "8º Ano",
    "ticket_meta": 1319.87,
    "ticket_alvo": 1548.47,
    "versao": "2026-10-14-captacao-40-v1",
    "receita_pendente": 0,
    "pagantes_adicionais": 0,
    "pagantes_restantes": 10
  },
  {
    "filial": "Metropolitano",
    "segmento": "EF2",
    "serie": "9º Ano",
    "ticket_meta": 1319.87,
    "ticket_alvo": 1824.0,
    "versao": "2026-10-14-captacao-40-v1",
    "receita_pendente": 19985.8,
    "pagantes_adicionais": 1,
    "pagantes_restantes": 2
  },
  {
    "filial": "Metropolitano",
    "segmento": "EM",
    "serie": "1ª Série",
    "ticket_meta": 1160.44,
    "ticket_alvo": 1372.22,
    "versao": "2026-10-14-captacao-40-v1",
    "receita_pendente": 0,
    "pagantes_adicionais": 0,
    "pagantes_restantes": 27
  },
  {
    "filial": "Metropolitano",
    "segmento": "EM",
    "serie": "2ª Série",
    "ticket_meta": 1160.44,
    "ticket_alvo": 1547.25,
    "versao": "2026-10-14-captacao-40-v1",
    "receita_pendente": 0,
    "pagantes_adicionais": 0,
    "pagantes_restantes": 6
  },
  {
    "filial": "Metropolitano",
    "segmento": "EM",
    "serie": "3ª Série",
    "ticket_meta": 1160.44,
    "ticket_alvo": 1624.61,
    "versao": "2026-10-14-captacao-40-v1",
    "receita_pendente": 11140.28,
    "pagantes_adicionais": 1,
    "pagantes_restantes": 3
  },
  {
    "filial": "Recreio",
    "segmento": "EF1",
    "serie": "1º Ano",
    "ticket_meta": 1404.67,
    "ticket_alvo": 1891.16,
    "versao": "2026-10-14-captacao-40-v1",
    "receita_pendente": 0,
    "pagantes_adicionais": 0,
    "pagantes_restantes": 14
  },
  {
    "filial": "Recreio",
    "segmento": "EF1",
    "serie": "2º Ano",
    "ticket_meta": 1404.67,
    "ticket_alvo": 2199.08,
    "versao": "2026-10-14-captacao-40-v1",
    "receita_pendente": 4679.77,
    "pagantes_adicionais": 1,
    "pagantes_restantes": 2
  },
  {
    "filial": "Recreio",
    "segmento": "EF1",
    "serie": "3º Ano",
    "ticket_meta": 1404.67,
    "ticket_alvo": 1790.91,
    "versao": "2026-10-14-captacao-40-v1",
    "receita_pendente": 0,
    "pagantes_adicionais": 0,
    "pagantes_restantes": 7
  },
  {
    "filial": "Recreio",
    "segmento": "EF1",
    "serie": "4º Ano",
    "ticket_meta": 1404.67,
    "ticket_alvo": 2049.8,
    "versao": "2026-10-14-captacao-40-v1",
    "receita_pendente": 0,
    "pagantes_adicionais": 0,
    "pagantes_restantes": 4
  },
  {
    "filial": "Recreio",
    "segmento": "EF1",
    "serie": "5º Ano",
    "ticket_meta": 1404.67,
    "ticket_alvo": 1740.38,
    "versao": "2026-10-14-captacao-40-v1",
    "receita_pendente": 0,
    "pagantes_adicionais": 0,
    "pagantes_restantes": 8
  },
  {
    "filial": "Recreio",
    "segmento": "EF2",
    "serie": "6º Ano",
    "ticket_meta": 1643.09,
    "ticket_alvo": 2041.78,
    "versao": "2026-10-14-captacao-40-v1",
    "receita_pendente": 0,
    "pagantes_adicionais": 0,
    "pagantes_restantes": 12
  },
  {
    "filial": "Recreio",
    "segmento": "EF2",
    "serie": "7º Ano",
    "ticket_meta": 1643.09,
    "ticket_alvo": 2072.5,
    "versao": "2026-10-14-captacao-40-v1",
    "receita_pendente": 0,
    "pagantes_adicionais": 0,
    "pagantes_restantes": 9
  },
  {
    "filial": "Recreio",
    "segmento": "EF2",
    "serie": "8º Ano",
    "ticket_meta": 1643.09,
    "ticket_alvo": 2167.57,
    "versao": "2026-10-14-captacao-40-v1",
    "receita_pendente": 0,
    "pagantes_adicionais": 0,
    "pagantes_restantes": 6
  },
  {
    "filial": "Recreio",
    "segmento": "EF2",
    "serie": "9º Ano",
    "ticket_meta": 1643.09,
    "ticket_alvo": 1949.77,
    "versao": "2026-10-14-captacao-40-v1",
    "receita_pendente": 0,
    "pagantes_adicionais": 0,
    "pagantes_restantes": 9
  },
  {
    "filial": "Recreio",
    "segmento": "EM",
    "serie": "1ª Série",
    "ticket_meta": 1667.89,
    "ticket_alvo": 2215.41,
    "versao": "2026-10-14-captacao-40-v1",
    "receita_pendente": 0,
    "pagantes_adicionais": 0,
    "pagantes_restantes": 13
  },
  {
    "filial": "Recreio",
    "segmento": "EM",
    "serie": "2ª Série",
    "ticket_meta": 1667.89,
    "ticket_alvo": 2223.86,
    "versao": "2026-10-14-captacao-40-v1",
    "receita_pendente": 0,
    "pagantes_adicionais": 0,
    "pagantes_restantes": 6
  },
  {
    "filial": "Recreio",
    "segmento": "EM",
    "serie": "3ª Série",
    "ticket_meta": 1667.89,
    "ticket_alvo": 2272.96,
    "versao": "2026-10-14-captacao-40-v1",
    "receita_pendente": 0,
    "pagantes_adicionais": 0,
    "pagantes_restantes": 5
  },
  {
    "filial": "Rio 2",
    "segmento": "EF1",
    "serie": "1º Ano",
    "ticket_meta": 2197.02,
    "ticket_alvo": 2580.06,
    "versao": "2026-10-14-captacao-40-v1",
    "receita_pendente": 0,
    "pagantes_adicionais": 0,
    "pagantes_restantes": 33
  },
  {
    "filial": "Rio 2",
    "segmento": "EF1",
    "serie": "2º Ano",
    "ticket_meta": 2197.02,
    "ticket_alvo": 2871.11,
    "versao": "2026-10-14-captacao-40-v1",
    "receita_pendente": 0,
    "pagantes_adicionais": 0,
    "pagantes_restantes": 7
  },
  {
    "filial": "Rio 2",
    "segmento": "EF1",
    "serie": "3º Ano",
    "ticket_meta": 2197.02,
    "ticket_alvo": 2682.8,
    "versao": "2026-10-14-captacao-40-v1",
    "receita_pendente": 0,
    "pagantes_adicionais": 0,
    "pagantes_restantes": 9
  },
  {
    "filial": "Rio 2",
    "segmento": "EF1",
    "serie": "4º Ano",
    "ticket_meta": 2197.02,
    "ticket_alvo": 3324.54,
    "versao": "2026-10-14-captacao-40-v1",
    "receita_pendente": 10744.98,
    "pagantes_adicionais": 1,
    "pagantes_restantes": 2
  },
  {
    "filial": "Rio 2",
    "segmento": "EF1",
    "serie": "5º Ano",
    "ticket_meta": 2197.02,
    "ticket_alvo": 2510.88,
    "versao": "2026-10-14-captacao-40-v1",
    "receita_pendente": 0,
    "pagantes_adicionais": 0,
    "pagantes_restantes": 14
  },
  {
    "filial": "Rio 2",
    "segmento": "EF2",
    "serie": "6º Ano",
    "ticket_meta": 1850.15,
    "ticket_alvo": 2448.03,
    "versao": "2026-10-14-captacao-40-v1",
    "receita_pendente": 0,
    "pagantes_adicionais": 0,
    "pagantes_restantes": 6
  },
  {
    "filial": "Rio 2",
    "segmento": "EF2",
    "serie": "7º Ano",
    "ticket_meta": 1850.15,
    "ticket_alvo": 2114.46,
    "versao": "2026-10-14-captacao-40-v1",
    "receita_pendente": 0,
    "pagantes_adicionais": 0,
    "pagantes_restantes": 14
  },
  {
    "filial": "Rio 2",
    "segmento": "EF2",
    "serie": "8º Ano",
    "ticket_meta": 1850.15,
    "ticket_alvo": 2134.94,
    "versao": "2026-10-14-captacao-40-v1",
    "receita_pendente": 0,
    "pagantes_adicionais": 0,
    "pagantes_restantes": 14
  },
  {
    "filial": "Rio 2",
    "segmento": "EF2",
    "serie": "9º Ano",
    "ticket_meta": 1850.15,
    "ticket_alvo": 2134.8,
    "versao": "2026-10-14-captacao-40-v1",
    "receita_pendente": 0,
    "pagantes_adicionais": 0,
    "pagantes_restantes": 13
  },
  {
    "filial": "Rio 2",
    "segmento": "EM",
    "serie": "1ª Série",
    "ticket_meta": 1937.0,
    "ticket_alvo": 2337.31,
    "versao": "2026-10-14-captacao-40-v1",
    "receita_pendente": 0,
    "pagantes_adicionais": 0,
    "pagantes_restantes": 10
  },
  {
    "filial": "Rio 2",
    "segmento": "EM",
    "serie": "2ª Série",
    "ticket_meta": 1937.0,
    "ticket_alvo": 2712.84,
    "versao": "2026-10-14-captacao-40-v1",
    "receita_pendente": 0,
    "pagantes_adicionais": 0,
    "pagantes_restantes": 6
  },
  {
    "filial": "Rio 2",
    "segmento": "EM",
    "serie": "3ª Série",
    "ticket_meta": 1937.0,
    "ticket_alvo": 2711.79,
    "versao": "2026-10-14-captacao-40-v1",
    "receita_pendente": 37190.37,
    "pagantes_adicionais": 2,
    "pagantes_restantes": 1
  },
  {
    "filial": "Tijuca",
    "segmento": "EF1",
    "serie": "1º Ano",
    "ticket_meta": 1401.19,
    "ticket_alvo": 2023.9,
    "versao": "2026-10-14-captacao-40-v1",
    "receita_pendente": 10950.18,
    "pagantes_adicionais": 1,
    "pagantes_restantes": 9
  },
  {
    "filial": "Tijuca",
    "segmento": "EF1",
    "serie": "2º Ano",
    "ticket_meta": 1401.19,
    "ticket_alvo": 1727.78,
    "versao": "2026-10-14-captacao-40-v1",
    "receita_pendente": 27795.1,
    "pagantes_adicionais": 2,
    "pagantes_restantes": 2
  },
  {
    "filial": "Tijuca",
    "segmento": "EF1",
    "serie": "3º Ano",
    "ticket_meta": 1401.19,
    "ticket_alvo": 1974.42,
    "versao": "2026-10-14-captacao-40-v1",
    "receita_pendente": 0,
    "pagantes_adicionais": 0,
    "pagantes_restantes": 4
  },
  {
    "filial": "Tijuca",
    "segmento": "EF1",
    "serie": "4º Ano",
    "ticket_meta": 1401.19,
    "ticket_alvo": 1880.43,
    "versao": "2026-10-14-captacao-40-v1",
    "receita_pendente": 22823.1,
    "pagantes_adicionais": 2,
    "pagantes_restantes": 2
  },
  {
    "filial": "Tijuca",
    "segmento": "EF1",
    "serie": "5º Ano",
    "ticket_meta": 1401.19,
    "ticket_alvo": 2045.54,
    "versao": "2026-10-14-captacao-40-v1",
    "receita_pendente": 15288.33,
    "pagantes_adicionais": 1,
    "pagantes_restantes": 2
  },
  {
    "filial": "Tijuca",
    "segmento": "EF2",
    "serie": "6º Ano",
    "ticket_meta": 1482.12,
    "ticket_alvo": 2180.26,
    "versao": "2026-10-14-captacao-40-v1",
    "receita_pendente": 28732.73,
    "pagantes_adicionais": 2,
    "pagantes_restantes": 6
  },
  {
    "filial": "Tijuca",
    "segmento": "EF2",
    "serie": "7º Ano",
    "ticket_meta": 1482.12,
    "ticket_alvo": 2008.15,
    "versao": "2026-10-14-captacao-40-v1",
    "receita_pendente": 0,
    "pagantes_adicionais": 0,
    "pagantes_restantes": 8
  },
  {
    "filial": "Tijuca",
    "segmento": "EF2",
    "serie": "8º Ano",
    "ticket_meta": 1482.12,
    "ticket_alvo": 2051.81,
    "versao": "2026-10-14-captacao-40-v1",
    "receita_pendente": 0,
    "pagantes_adicionais": 0,
    "pagantes_restantes": 6
  },
  {
    "filial": "Tijuca",
    "segmento": "EF2",
    "serie": "9º Ano",
    "ticket_meta": 1482.12,
    "ticket_alvo": 2031.6,
    "versao": "2026-10-14-captacao-40-v1",
    "receita_pendente": 0,
    "pagantes_adicionais": 0,
    "pagantes_restantes": 8
  },
  {
    "filial": "Tijuca",
    "segmento": "EM",
    "serie": "1ª Série",
    "ticket_meta": 1221.67,
    "ticket_alvo": 2532.41,
    "versao": "2026-10-14-captacao-40-v1",
    "receita_pendente": 0,
    "pagantes_adicionais": 0,
    "pagantes_restantes": 14
  },
  {
    "filial": "Tijuca",
    "segmento": "EM",
    "serie": "2ª Série",
    "ticket_meta": 1221.67,
    "ticket_alvo": 1570.73,
    "versao": "2026-10-14-captacao-40-v1",
    "receita_pendente": 0,
    "pagantes_adicionais": 0,
    "pagantes_restantes": 7
  },
  {
    "filial": "Tijuca",
    "segmento": "EM",
    "serie": "3ª Série",
    "ticket_meta": 1221.67,
    "ticket_alvo": 1570.73,
    "versao": "2026-10-14-captacao-40-v1",
    "receita_pendente": 0,
    "pagantes_adicionais": 0,
    "pagantes_restantes": 7
  },
  {
    "filial": "Valqueire",
    "segmento": "EF1",
    "serie": "1º Ano",
    "ticket_meta": 1331.37,
    "ticket_alvo": 1464.5,
    "versao": "2026-10-14-captacao-40-v1"
  },
  {
    "filial": "Valqueire",
    "segmento": "EF1",
    "serie": "2º Ano",
    "ticket_meta": 1656.95,
    "ticket_alvo": 1822.65,
    "versao": "2026-10-14-captacao-40-v1"
  },
  {
    "filial": "Valqueire",
    "segmento": "EF1",
    "serie": "3º Ano",
    "ticket_meta": 1831.05,
    "ticket_alvo": 2014.16,
    "versao": "2026-10-14-captacao-40-v1"
  },
  {
    "filial": "Valqueire",
    "segmento": "EF1",
    "serie": "4º Ano",
    "ticket_meta": 1892.59,
    "ticket_alvo": 2081.85,
    "versao": "2026-10-14-captacao-40-v1"
  },
  {
    "filial": "Valqueire",
    "segmento": "EF1",
    "serie": "5º Ano",
    "ticket_meta": 1835.02,
    "ticket_alvo": 2018.53,
    "versao": "2026-10-14-captacao-40-v1"
  },
  {
    "filial": "Valqueire",
    "segmento": "EF2",
    "serie": "6º Ano",
    "ticket_meta": 1904.29,
    "ticket_alvo": 2094.71,
    "versao": "2026-10-14-captacao-40-v1"
  },
  {
    "filial": "Valqueire",
    "segmento": "EF2",
    "serie": "7º Ano",
    "ticket_meta": 2171.88,
    "ticket_alvo": 2389.07,
    "versao": "2026-10-14-captacao-40-v1"
  },
  {
    "filial": "Valqueire",
    "segmento": "EF2",
    "serie": "8º Ano",
    "ticket_meta": 1906.29,
    "ticket_alvo": 2096.91,
    "versao": "2026-10-14-captacao-40-v1"
  },
  {
    "filial": "Valqueire",
    "segmento": "EF2",
    "serie": "9º Ano",
    "ticket_meta": 2051.46,
    "ticket_alvo": 2256.61,
    "versao": "2026-10-14-captacao-40-v1"
  },
  {
    "filial": "Valqueire",
    "segmento": "EM",
    "serie": "1ª Série",
    "ticket_meta": 2067.26,
    "ticket_alvo": 2273.99,
    "versao": "2026-10-14-captacao-40-v1"
  },
  {
    "filial": "Valqueire",
    "segmento": "EM",
    "serie": "2ª Série",
    "ticket_meta": 1993.81,
    "ticket_alvo": 2193.2,
    "versao": "2026-10-14-captacao-40-v1"
  },
  {
    "filial": "Valqueire",
    "segmento": "EM",
    "serie": "3ª Série",
    "ticket_meta": 2310.83,
    "ticket_alvo": 2541.91,
    "versao": "2026-10-14-captacao-40-v1"
  }
];
