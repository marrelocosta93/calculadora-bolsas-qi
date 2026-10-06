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
    "ticket_meta": 1447.94,
    "ticket_alvo": 1592.74
  },
  {
    "filial": "Freguesia",
    "segmento": "EF1",
    "serie": "2º Ano",
    "ticket_meta": 1728.36,
    "ticket_alvo": 1901.19
  },
  {
    "filial": "Freguesia",
    "segmento": "EF1",
    "serie": "3º Ano",
    "ticket_meta": 1801.97,
    "ticket_alvo": 1982.16
  },
  {
    "filial": "Freguesia",
    "segmento": "EF1",
    "serie": "4º Ano",
    "ticket_meta": 2015.82,
    "ticket_alvo": 2217.41
  },
  {
    "filial": "Freguesia",
    "segmento": "EF1",
    "serie": "5º Ano",
    "ticket_meta": 1717.97,
    "ticket_alvo": 1889.77
  },
  {
    "filial": "Freguesia",
    "segmento": "EF2",
    "serie": "6º Ano",
    "ticket_meta": 1903.86,
    "ticket_alvo": 2094.24
  },
  {
    "filial": "Freguesia",
    "segmento": "EF2",
    "serie": "7º Ano",
    "ticket_meta": 1906.76,
    "ticket_alvo": 2097.44
  },
  {
    "filial": "Freguesia",
    "segmento": "EF2",
    "serie": "8º Ano",
    "ticket_meta": 1925.62,
    "ticket_alvo": 2118.19
  },
  {
    "filial": "Freguesia",
    "segmento": "EF2",
    "serie": "9º Ano",
    "ticket_meta": 2016.11,
    "ticket_alvo": 2217.72
  },
  {
    "filial": "Freguesia",
    "segmento": "EM",
    "serie": "1ª Série",
    "ticket_meta": 1992.55,
    "ticket_alvo": 2191.81
  },
  {
    "filial": "Freguesia",
    "segmento": "EM",
    "serie": "2ª Série",
    "ticket_meta": 2300.7,
    "ticket_alvo": 2530.77
  },
  {
    "filial": "Freguesia",
    "segmento": "EM",
    "serie": "3ª Série",
    "ticket_meta": 2103.63,
    "ticket_alvo": 2313.98
  },
  {
    "filial": "Metropolitano",
    "segmento": "EF1",
    "serie": "1º Ano",
    "ticket_meta": 1284.85,
    "ticket_alvo": 1413.34
  },
  {
    "filial": "Metropolitano",
    "segmento": "EF1",
    "serie": "2º Ano",
    "ticket_meta": 1483.42,
    "ticket_alvo": 1631.76
  },
  {
    "filial": "Metropolitano",
    "segmento": "EF1",
    "serie": "3º Ano",
    "ticket_meta": 1548.11,
    "ticket_alvo": 1702.92
  },
  {
    "filial": "Metropolitano",
    "segmento": "EF1",
    "serie": "4º Ano",
    "ticket_meta": 1558.51,
    "ticket_alvo": 1714.36
  },
  {
    "filial": "Metropolitano",
    "segmento": "EF1",
    "serie": "5º Ano",
    "ticket_meta": 1491.19,
    "ticket_alvo": 1640.31
  },
  {
    "filial": "Metropolitano",
    "segmento": "EF2",
    "serie": "6º Ano",
    "ticket_meta": 1760.95,
    "ticket_alvo": 1937.05
  },
  {
    "filial": "Metropolitano",
    "segmento": "EF2",
    "serie": "7º Ano",
    "ticket_meta": 1729.86,
    "ticket_alvo": 1902.85
  },
  {
    "filial": "Metropolitano",
    "segmento": "EF2",
    "serie": "8º Ano",
    "ticket_meta": 1855.15,
    "ticket_alvo": 2040.66
  },
  {
    "filial": "Metropolitano",
    "segmento": "EF2",
    "serie": "9º Ano",
    "ticket_meta": 1938.21,
    "ticket_alvo": 2132.03
  },
  {
    "filial": "Metropolitano",
    "segmento": "EM",
    "serie": "1ª Série",
    "ticket_meta": 1686.89,
    "ticket_alvo": 1855.58
  },
  {
    "filial": "Metropolitano",
    "segmento": "EM",
    "serie": "2ª Série",
    "ticket_meta": 1634.47,
    "ticket_alvo": 1797.92
  },
  {
    "filial": "Metropolitano",
    "segmento": "EM",
    "serie": "3ª Série",
    "ticket_meta": 1753.7,
    "ticket_alvo": 1929.08
  },
  {
    "filial": "Recreio",
    "segmento": "EF1",
    "serie": "1º Ano",
    "ticket_meta": 1615.37,
    "ticket_alvo": 1776.91
  },
  {
    "filial": "Recreio",
    "segmento": "EF1",
    "serie": "2º Ano",
    "ticket_meta": 2019.65,
    "ticket_alvo": 2221.62
  },
  {
    "filial": "Recreio",
    "segmento": "EF1",
    "serie": "3º Ano",
    "ticket_meta": 2121.76,
    "ticket_alvo": 2333.94
  },
  {
    "filial": "Recreio",
    "segmento": "EF1",
    "serie": "4º Ano",
    "ticket_meta": 2248.51,
    "ticket_alvo": 2473.36
  },
  {
    "filial": "Recreio",
    "segmento": "EF1",
    "serie": "5º Ano",
    "ticket_meta": 1964.41,
    "ticket_alvo": 2160.85
  },
  {
    "filial": "Recreio",
    "segmento": "EF2",
    "serie": "6º Ano",
    "ticket_meta": 2207.61,
    "ticket_alvo": 2428.37
  },
  {
    "filial": "Recreio",
    "segmento": "EF2",
    "serie": "7º Ano",
    "ticket_meta": 2136.72,
    "ticket_alvo": 2350.39
  },
  {
    "filial": "Recreio",
    "segmento": "EF2",
    "serie": "8º Ano",
    "ticket_meta": 2412.0,
    "ticket_alvo": 2653.2
  },
  {
    "filial": "Recreio",
    "segmento": "EF2",
    "serie": "9º Ano",
    "ticket_meta": 2098.22,
    "ticket_alvo": 2308.04
  },
  {
    "filial": "Recreio",
    "segmento": "EM",
    "serie": "1ª Série",
    "ticket_meta": 2287.84,
    "ticket_alvo": 2516.63
  },
  {
    "filial": "Recreio",
    "segmento": "EM",
    "serie": "2ª Série",
    "ticket_meta": 1918.07,
    "ticket_alvo": 2109.88
  },
  {
    "filial": "Recreio",
    "segmento": "EM",
    "serie": "3ª Série",
    "ticket_meta": 2267.06,
    "ticket_alvo": 2493.78
  },
  {
    "filial": "Rio 2",
    "segmento": "EF1",
    "serie": "1º Ano",
    "ticket_meta": 2526.57,
    "ticket_alvo": 2779.23
  },
  {
    "filial": "Rio 2",
    "segmento": "EF1",
    "serie": "2º Ano",
    "ticket_meta": 2859.81,
    "ticket_alvo": 3145.79
  },
  {
    "filial": "Rio 2",
    "segmento": "EF1",
    "serie": "3º Ano",
    "ticket_meta": 2849.59,
    "ticket_alvo": 3134.54
  },
  {
    "filial": "Rio 2",
    "segmento": "EF1",
    "serie": "4º Ano",
    "ticket_meta": 2701.7,
    "ticket_alvo": 2971.86
  },
  {
    "filial": "Rio 2",
    "segmento": "EF1",
    "serie": "5º Ano",
    "ticket_meta": 2570.23,
    "ticket_alvo": 2827.25
  },
  {
    "filial": "Rio 2",
    "segmento": "EF2",
    "serie": "6º Ano",
    "ticket_meta": 2735.94,
    "ticket_alvo": 3009.54
  },
  {
    "filial": "Rio 2",
    "segmento": "EF2",
    "serie": "7º Ano",
    "ticket_meta": 2568.0,
    "ticket_alvo": 2824.79
  },
  {
    "filial": "Rio 2",
    "segmento": "EF2",
    "serie": "8º Ano",
    "ticket_meta": 2475.54,
    "ticket_alvo": 2723.09
  },
  {
    "filial": "Rio 2",
    "segmento": "EF2",
    "serie": "9º Ano",
    "ticket_meta": 2435.04,
    "ticket_alvo": 2678.55
  },
  {
    "filial": "Rio 2",
    "segmento": "EM",
    "serie": "1ª Série",
    "ticket_meta": 2669.76,
    "ticket_alvo": 2936.73
  },
  {
    "filial": "Rio 2",
    "segmento": "EM",
    "serie": "2ª Série",
    "ticket_meta": 2261.46,
    "ticket_alvo": 2487.61
  },
  {
    "filial": "Rio 2",
    "segmento": "EM",
    "serie": "3ª Série",
    "ticket_meta": 2227.55,
    "ticket_alvo": 2450.31
  },
  {
    "filial": "Tijuca",
    "segmento": "EF1",
    "serie": "1º Ano",
    "ticket_meta": 1611.37,
    "ticket_alvo": 1772.51
  },
  {
    "filial": "Tijuca",
    "segmento": "EF1",
    "serie": "2º Ano",
    "ticket_meta": 1887.46,
    "ticket_alvo": 2076.21
  },
  {
    "filial": "Tijuca",
    "segmento": "EF1",
    "serie": "3º Ano",
    "ticket_meta": 1897.62,
    "ticket_alvo": 2087.38
  },
  {
    "filial": "Tijuca",
    "segmento": "EF1",
    "serie": "4º Ano",
    "ticket_meta": 2028.84,
    "ticket_alvo": 2231.72
  },
  {
    "filial": "Tijuca",
    "segmento": "EF1",
    "serie": "5º Ano",
    "ticket_meta": 1798.6,
    "ticket_alvo": 1978.46
  },
  {
    "filial": "Tijuca",
    "segmento": "EF2",
    "serie": "6º Ano",
    "ticket_meta": 1810.92,
    "ticket_alvo": 1992.01
  },
  {
    "filial": "Tijuca",
    "segmento": "EF2",
    "serie": "7º Ano",
    "ticket_meta": 2086.74,
    "ticket_alvo": 2295.42
  },
  {
    "filial": "Tijuca",
    "segmento": "EF2",
    "serie": "8º Ano",
    "ticket_meta": 2033.71,
    "ticket_alvo": 2237.07
  },
  {
    "filial": "Tijuca",
    "segmento": "EF2",
    "serie": "9º Ano",
    "ticket_meta": 2178.77,
    "ticket_alvo": 2396.65
  },
  {
    "filial": "Tijuca",
    "segmento": "EM",
    "serie": "1ª Série",
    "ticket_meta": 2190.35,
    "ticket_alvo": 2409.39
  },
  {
    "filial": "Tijuca",
    "segmento": "EM",
    "serie": "2ª Série",
    "ticket_meta": 1799.5,
    "ticket_alvo": 2201.09
  },
  {
    "filial": "Tijuca",
    "segmento": "EM",
    "serie": "3ª Série",
    "ticket_meta": 2073.86,
    "ticket_alvo": 2493.36
  },
  {
    "filial": "Valqueire",
    "segmento": "EF1",
    "serie": "1º Ano",
    "ticket_meta": 1331.37,
    "ticket_alvo": 1464.5
  },
  {
    "filial": "Valqueire",
    "segmento": "EF1",
    "serie": "2º Ano",
    "ticket_meta": 1656.95,
    "ticket_alvo": 1822.65
  },
  {
    "filial": "Valqueire",
    "segmento": "EF1",
    "serie": "3º Ano",
    "ticket_meta": 1831.05,
    "ticket_alvo": 2014.16
  },
  {
    "filial": "Valqueire",
    "segmento": "EF1",
    "serie": "4º Ano",
    "ticket_meta": 1892.59,
    "ticket_alvo": 2081.85
  },
  {
    "filial": "Valqueire",
    "segmento": "EF1",
    "serie": "5º Ano",
    "ticket_meta": 1835.02,
    "ticket_alvo": 2018.53
  },
  {
    "filial": "Valqueire",
    "segmento": "EF2",
    "serie": "6º Ano",
    "ticket_meta": 1904.29,
    "ticket_alvo": 2094.71
  },
  {
    "filial": "Valqueire",
    "segmento": "EF2",
    "serie": "7º Ano",
    "ticket_meta": 2171.88,
    "ticket_alvo": 2389.07
  },
  {
    "filial": "Valqueire",
    "segmento": "EF2",
    "serie": "8º Ano",
    "ticket_meta": 1906.29,
    "ticket_alvo": 2096.91
  },
  {
    "filial": "Valqueire",
    "segmento": "EF2",
    "serie": "9º Ano",
    "ticket_meta": 2051.46,
    "ticket_alvo": 2256.61
  },
  {
    "filial": "Valqueire",
    "segmento": "EM",
    "serie": "1ª Série",
    "ticket_meta": 2067.26,
    "ticket_alvo": 2273.99
  },
  {
    "filial": "Valqueire",
    "segmento": "EM",
    "serie": "2ª Série",
    "ticket_meta": 1993.81,
    "ticket_alvo": 2193.2
  },
  {
    "filial": "Valqueire",
    "segmento": "EM",
    "serie": "3ª Série",
    "ticket_meta": 2310.83,
    "ticket_alvo": 2541.91
  }
];
